import {models,model, Schema} from 'mongoose';
import { unique } from 'next/dist/build/utils';

const UserSchema = new Schema(
    {
        name:{type:"string",required:true},
        email:{type:"string",required:true},
        password:{type:"string",required:true}
    },{
        timestamps:true,
    }
)

const User = models.User || model('User',UserSchema);

export default User;