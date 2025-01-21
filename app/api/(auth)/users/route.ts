import connect from "@/lib/db"
import User from "@/lib/modals/user";
import { Types } from "mongoose";
import { NextResponse } from "next/server"

const ObjectId = require('mongoose').Types.ObjectId;

export const GET = async () => {
    try{
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users),{status:200});
    }catch(error:any){
        return new NextResponse("Error in fetching users " + error.message, {status:500})
    }
}

export const POST = async (request:Request) => {
    try{
        const body = await request.json();
        await connect();
        const newUser = new User(body);
        await newUser.save();

        return new NextResponse(JSON.stringify({message: "User is created!", user:newUser}),{status:200})
    }catch(error:any){
        return new NextResponse("Error in creating users" + error.message, {status:500})
    }
}

export const PATCH = async (request:Request) => {
    try{
        const body = await request.json();
        const {userId,newUsername} = body;
        await connect();

        if(!userId || !newUsername){
            return new NextResponse(JSON.stringify({message:"userId or userName not found."}),{status:400})
        }

        if(!Types.ObjectId.isValid(userId)){
            return new NextResponse(JSON.stringify({message:"Invalid userId."}),{status:400})
        }

        const updateUser = User.findOneAndUpdate(
            {_id: new ObjectId(userId)},
            {username:newUsername},
            {new:true}
        )

        if(!updateUser){
            return new NextResponse(JSON.stringify({message:"User not found in database."}),{status:400})
        }

        return new NextResponse(JSON.stringify({message:"User updated!",user:updateUser}),{status:200})
    }catch(error:any){
        return new NextResponse(JSON.stringify("Error in update user Uwaaaaaaah!!" + error.message),{status:500})
    }
}

export const PUT = async (request:Request) => {
    try{

    }catch(error:any){

    }
}

export const DELETE = async (request:Request) => {
    try{
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId");

        if(!userId){
            return new NextResponse(JSON.stringify({message:"userId not found."}),{status:400})
        }
        if(!Types.ObjectId.isValid(userId)){
            return new NextResponse(JSON.stringify({message:"Invalid userId."}),{status:400})
        }

        await connect();

        const deleteUser = await User.findByIdAndDelete(new Types.ObjectId(userId))
        if(!deleteUser){
            return new NextResponse(JSON.stringify({message:"UserID not fount."}),{status:400})
        }

        return new NextResponse(JSON.stringify({message:"User deleted!",user:deleteUser}),{status:200})
    }catch(error:any){
        return new NextResponse(JSON.stringify({message:"Error deleting user " + error.message}),{status:500})
    }
}