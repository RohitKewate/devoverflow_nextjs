import { Schema,model,models, Document } from "mongoose";

export interface IUser extends Document {
    clerkid:string;
    name:string;
    username:string;
    email:string;
    password?:string;
    bio?:string;
    picture:string;
    location?:string;
    portfoliowebsite?:string;
    reputation?:number;
    joinAt:Date;
    saved:Schema.Types.ObjectId[];
}


const UserSchema = new Schema({
    clerkid:{type:String, required:true},
    name:{type:String, required:true},
    username:{
        type: String,
        required: [true, "Username is required!"],
        unique:true,
        match: [
          /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
          "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
        ],
    },
    email:{type:String, required:true, unique:true},
    password:{type:String},
    bio:{type:String},
    picture:{type:String},
    location:{type:String},
    portfoliowebsite:{type:String},
    Reputation:[{type: Number, default:0}],
    joinAt: {type:Date, default:Date.now},
    saved:[{type:Schema.Types.ObjectId, ref:'Question'}]
})


const User = models.User || model('User',UserSchema)

export default User