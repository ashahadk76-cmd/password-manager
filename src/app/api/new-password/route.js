import securepass from "@/model/securepass";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import CryptoJS from "crypto-js";
import connectDB from "@/db/connectDB";

export async function POST(req) {
    try {
        await connectDB();
        const session = await getServerSession();
        const body = await req.json();
        if (!session) {
            return NextResponse.json({
                success: false,
                error: true,
                message: "PLEASE LOGIN TO CONTINUE"
            })
        }

        const { title, username, email, password } = body;

        if (!email || !password) {
            return NextResponse.json({
                success: false,
                error: true,
                message: "EMAIL AND PASSWORD ARE REQUIRED"
            })
        }

        const secretkey = process.env.NEXT_SECRET_KEY;
        const encryptedpassword = CryptoJS.AES.encrypt(password, secretkey).toString();


        const newPass = await securepass.create({
            userID: session.user.email,
            title,
            username,
            email,
            password: encryptedpassword,
        })

        return NextResponse.json({
            success: true,
            error: false,
            message: "PASSWORD SUCCESSFULLY ADDED AND YOU CAN SEE ON THE PASSWORD PAGE",
            newPass
        })

    } catch (error) {
        console.log("ERROR IN ADDING NEW PASSWORD", error);
        // console.error(error)
        return NextResponse.json({
            success: false,
            error: true,
            message: "SOME ERROR OCCURED WHILE ADDING NEW PASSWORD"
        })
    }
}



//  GET REQUEST


export async function GET(req) {
    try {
        await connectDB();
        const session = await getServerSession();
        if (!session || !session.user?.email) {
            return NextResponse.json({
                success: false,
                error: "unauthorized",
            }, { status: 401 })
        }

        const secretkey = process.env.NEXT_SECRET_KEY;
        const passwords = await securepass.find({ userID: session.user.email }).sort({ createdAt: -1 }).lean();

        const decryptedpasswords = passwords.map((item) => {
            const bytes = CryptoJS.AES.decrypt(item.password, secretkey);
            const decryptedpassword = bytes.toString(CryptoJS.enc.Utf8);
            return {
                ...item,
                password: decryptedpassword
            }
        });
        return NextResponse.json({
            success: true,
            passwords: decryptedpasswords,
        })

    } catch (error) {
        console.log("ERROR IN GETTING PASSWORDS", error);
        return NextResponse.json({
            success: false,
            error: true,
        }, { status: 500 })
    }
}