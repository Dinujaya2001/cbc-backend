import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isBlocked:{
        type:Boolean,
        default:false,
    },
    type:{
        type:String,
        default:"customer"
    },
    profilePicture:{
        type:String,
        default:"https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1732001928~exp=1732005528~hmac=fb4ba4db187896da03befa07b620256aeaebb6cb8d6f7329b1819d2160100633&w=1060"
    }
})

const User = mongoose.model("user",userSchema)

export default User;