const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    class:{
        type:String,
    },
    address:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

const data=new mongoose.model("BrightCoder_register",UserSchema);

module.exports=data;