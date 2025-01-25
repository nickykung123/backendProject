import User from "@/app/models/user";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const { email } = await req.json();
        await connectDB();
        const user = await User.findOne({email}).select("_id")
        console.log("user",user)
        return NextResponse.json({user})
    }catch(error:any){
        return NextResponse.json({message:"Error " + error.message},{status:500})
    }
}