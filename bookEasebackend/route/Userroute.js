let express=require("express")
let userroute=express.Router()
let {usermod}=require("../modal/Usermodal")
userroute.get("/users",async(req,res)=>{

    let val=await usermod.find()
    console.log(val)
    res.send(val)
})
userroute.post("/users/create",async(req,res)=>{
    
    let {email,phone_no}=req.body
    
  

    let check=await usermod.find({email: email})
    let phonenocheck=await usermod.find({phone_no: phone_no})
    console.log(check,phonenocheck)
    if(check.length>0 || phonenocheck.length>0){
        res.send("user already exists")
    }else{
        let nn=new usermod(req.body)
    await nn.save()
    res.send("success")
    }
    
})
userroute.post("/users/login",async(req,res)=>{
    let {email,phone_no}=req.body
    
  

    let check=await usermod.find({email: email})
    
    console.log(check)
    if(check.length>0 ){
        res.send(check)
    }else{
        res.send("user not found")
    }
})

userroute.delete("/users/:userid",(req,res)=>{
  
})
module.exports={
    userroute
}
