import {Schema,model,models} from 'mongoose';
import { unique } from 'next/dist/build/utils';

const UserSchema = new Schema(
    {
        email:{type:"string",require:true,unique:true},
        username:{type:"string",require:true,unique:true},
        password:{type:"string",require:true}
    },{
        timestamps:true,
    }
)

const User = models.User || model('user',UserSchema);

export default User;