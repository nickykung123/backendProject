import connectDB from "@/lib/db";
import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name:"credentials",
            credentials:{},
            async authorize(credentials){
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                try{
                    await connectDB()
                    const user  = await User.findOne({email})

                    if(!user){
                        return null;
                    }

                    const passwordCorrect = await bcrypt.compare(password, user.password)

                    if(!passwordCorrect){
                        return null;
                    }

                    return user
                }catch(error:any){
                    console.log("Error " + error.message)
                }
            }
        })
    ],
    session:{
        strategy:"jwt" as SessionStrategy
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/login"
    }
}

const handler =  NextAuth(authOptions);

export { handler as GET, handler as POST}