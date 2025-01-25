import {models,model, Schema} from 'mongoose';


const UserSchema = new Schema(
    {
        name:{
            type:"string",
            require:true
        },
        email:{
            type:"string",
            require:true,
        },
        password:{
            type:"string",
            require:true
        }
    },{
        timestamps:true,
    }
)

const User = models.User || model('User',UserSchema);

export default User;