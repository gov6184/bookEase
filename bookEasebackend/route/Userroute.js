let express=require("express")
let userroute=express.Router()
let {usermod}=require("../modal/Usermodal")
userroute.get("/users",async(req,res)=>{
    let val=await usermod.find()
    console.log(val)
    res.send(val)
})
userroute.post("/users/create",async(req,res)=>{
    
    let val=req.body
    let nn=new usermod(val)
    await nn.save()
    res.send("done")
})


userroute.delete("/users/:userid",(req,res)=>{
  
})
module.exports={
    userroute
}