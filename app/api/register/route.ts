import User from "@/app/models/user";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req:Request) {
  try{
    const {name,email,password} = await req.json();
    const hashedPassword = await bcrypt.hash(password,10);
    await connectDB();
    await User.create({name,email,password:hashedPassword})

    return NextResponse.json({message:"Registered succesful."},{status:201})
  }catch(error:any){
    return NextResponse.json({ message: "Your message here" }, { status: 500 });

  }
}
