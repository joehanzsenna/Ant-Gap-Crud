import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title : {
        type : String, 
        required : true,
    }, author : { 
        type : String, 
        required : true,
    },
    year : { 
        type : String ,
        required  :true
    }
})

export default mongoose.model("users",userSchema)


// {
//     "name": "james",
//     "email": "jane@mail.com",
//     "address": "home address",
// }