import mongoose from "mongoose";


const yourlSchema = new mongoose.Schema({
    full_url:{
        type:String,
        required:true,
    },
    short:{
        type:String,
        required:true,
        index:true,
        unique:true,
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"user",
    //     default:null,
    //     required:true
    // }
});

const shortUrl = mongoose.model("shortUrl",yourlSchema);
export default shortUrl;