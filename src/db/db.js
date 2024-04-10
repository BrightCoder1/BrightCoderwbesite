const mongoose=require("mongoose");
const URL="mongodb://127.0.0.1:27017/BrightCoder_Data";
const connectdb= async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("Done DB Connection");
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectdb;