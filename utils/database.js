import mongoose from "mongoose"
let isConnected=false;

export const connectToDb=async()=>{
     mongoose.set('strictQuery',true);
     if(isConnected){
        console.log("connected already to db");
        return;
     }
     try {
         await mongoose.connect(process.env.MONGO_DB_URI,{
            dbName:"detmoji",
            useNewUrlParser: true ,
            useUnifiedTopology : true,     
        })
        isConnected=true;
     } catch (error) {
        console.log("error")
     }
}