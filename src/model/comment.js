const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comments:{
        type:String,
        required:true
    }
 
})

module.exports=mongoose.model("Comment",commentSchema)