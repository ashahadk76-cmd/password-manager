import mongoose from "mongoose";

const securepassSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true,
    },
    title:{
        type:String,
    },
    username:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});

export default mongoose.models.securepass || mongoose.model("securepass",securepassSchema);