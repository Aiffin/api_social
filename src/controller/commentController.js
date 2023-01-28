const Comment = require('../model/comment')

const commentController={
    create:async(req,res)=>{
        try {
            const commentdata=new Comment(req.body)
            const insertcomment= await commentdata.save()
            res.send(insertcomment) 
        } catch (error) {
            res.send(error)
        }
    },
    getUserComment:async(req,res)=>{
        try {
            const getall=await Comment.find({_id:req.body.comment_id}).populate('user_id')
            res.send(getall)
        } catch (error) {
            res.send(error)
        }
    }
        
    
}

module.exports=commentController