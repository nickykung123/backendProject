import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("connect sucess!");
        return;
    }

    if (connectionState === 2) {
        console.log("connecting...")
    }

    try {
        mongoose.connect(MONGODB_URI!,{
            dbName:'backendbmi',
            bufferCommands:true
        });
        console.log("connected!")
    }catch(err:any){
        console.log("Error: ",err);
        throw new Error("Error: ",err)
    }
    
}

export default connect;