//backend
import mongoose from "mongoose";

const connectMongoDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to db")
    }
    catch(error){
        console.log("Did not connect")
    }
}
export default connectMongoDB;