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
    const query = {
        $or: [
          { "gmail": { $regex: new RegExp("^" + email, "i") } },
          { "phone_number": { $regex: new RegExp("^" + phone_no, "i") } }
        ]
      };
  
    let check=await usermod.find(query).toArray();
    console.log(check)
    // let nn=new usermod(val)
    // await nn.save()
    res.send(check)
})


userroute.delete("/users/:userid",(req,res)=>{
  
})
module.exports={
    userroute
}