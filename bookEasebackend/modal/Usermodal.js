let mong=require("mongoose")
let usermod=new mong.model("Users",mong.Schema({
    userid:String,
    email:String,
    phone_no:Number,
    password:String
}))
module.exports={
    usermod
}