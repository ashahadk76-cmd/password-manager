import { NextResponse } from "next/server";
import securepass from "@/model/securepass";
import CryptoJS from "crypto-js";
import connectDB from "@/db/connectDB";


function getidfromreq(req, params) {
    if (params && params.id) {
        return   params.id;
    }

    try {
        const url = new URL(req.url);
        const parts = url.pathname.split('/').filter(Boolean);
        return parts[parts.length - 1];

    } catch (error) {
        return undefined;
    }
}


export async function GET(req, { params }) {
    try {
        await connectDB()
        const id = getidfromreq(req, params)

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "PASSWORD ID ID REQUIRED",
            }, { status: 400 })
        }

        const password = await securepass.findById(id);

        if (!password) {
            return NextResponse.json({
                success: false,
                message: "PASSWORD NOT FOUND",
            }, { status: 404 })
        }


        const secretkey = process.env.NEXT_SECRET_KEY;
        const bytes = CryptoJS.AES.decrypt(password.password, secretkey);
        const decryptedpassword = bytes.toString(CryptoJS.enc.Utf8);

        const passwordData = {
            ...password.toObject(),
            password: decryptedpassword,
        };

        return NextResponse.json({
            success: true,
            passwords: passwordData
        })



    } catch (error) {
        console.error("GET /passwords/[id] error:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}




export async function DELETE(req, { params }) {
    try {
        await connectDB();
        const id = getidfromreq(req, params)

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "PASSWORD ID IS REQUIRED",
            }, { status: 400 })
        }
        const existinguser = await securepass.findById(id);
        if (!existinguser) {
            return NextResponse.json({
                success: false,
                message: "PASSWORD NOT FOUND",
            }, { status: 404 })
        }

        await securepass.findByIdAndDelete(id);

        return NextResponse.json({
            success: true,
            // message: "Password deleted successfully"
        });

    } catch (error) {
        console.error("DELETE/Password/[ID] ERROR", error)
        return NextResponse.json({
            success: false, message: error.message || "internal error server"
        }), { status: 404 }
    }

}






export async function PATCH(req,{params}) {
    try {
        await connectDB();
    const id = getidfromreq(req,params);

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "PASSWORD ID IS REQUIRED",
            }, { status: 400 })
        }

        const { title, username, email, password } = await req.json();

        const existingPassword = await securepass.findById(id);

        if (!existingPassword) {
            return NextResponse.json({
                success: false,
                message: "PASSWORD NOT FOUND",
            }, { status: 404 })
        }


        const secretKey = process.env.NEXT_SECRET_KEY;
        const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();

        const updatePassword = await securepass.findByIdAndUpdate(id,
            { title, username, email, password: encryptedPassword },
            { new: true }
        );

        return NextResponse.json({
            success: true,
            message: "PASSWORD UPDATED SUCCESSFULLY",

        }, { status: 200 })


    } catch (error) {
        console.error("PATCH /passwords/[id] error:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}