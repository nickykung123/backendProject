import User from "@/app/models/user";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req:Request) {
  try{
    await connectDB();
    const {name,email,password} = await req.json();
    const hashPass = await bcrypt.hash(password,10)
    await User.create({name,email,password:hashPass})
    return NextResponse.json({message:"user created"},{status:201})
  }catch(error:any){
    return NextResponse.json({ message: "Error couldn't creat user " + error.message }, { status: 500 });

  }
}

export async function GET(req:Request){
    try{
      await connectDB();
      const users =  await User.find();
      return NextResponse.json(users,{status:200});
    }catch(error:any){
      return NextResponse.json({message:"error in get user" + error.message},{status:500})
    }
}