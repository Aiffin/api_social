const route=require('express').Router()
const userController=require('../controller/userController')
const commentController=require('../controller/commentController')

route.post('/users/create',userController.create)
route.post('/comment/create',commentController.create)
route.post('/comment/populate',commentController.getUserComment)


module.exports=route