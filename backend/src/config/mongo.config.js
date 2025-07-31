import mongoose from "mongoose"

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,);
        console.log("mongo connected");
    }catch(err){
        console.log("connection to mongodb failed miserably",err.message);
        process.exit(1);
    }
}
export default connectDb