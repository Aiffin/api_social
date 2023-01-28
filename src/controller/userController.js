const User = require('../model/user')

const userController={
    create:async(req,res)=>{
        try {
            const userdata=new User(req.body)
            const datas=await userdata.save()
            res.send(datas) 
        } catch (error) {
            res.send(error)
        }
       
    }
}

module.exports=userController