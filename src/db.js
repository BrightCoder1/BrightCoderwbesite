const mongoose=require("mongoose");
const env= require("dotenv").config();
const URL=process.env.URL;
// const URL ="mongodb+srv://brightcoder:vishal0404@brightcoder.qo3ouhf.mongodb.net/";

const connectdb = async ()=> {
    try {
        await mongoose.connect(URL);
        console.log("Connection successfull");        
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectdb;