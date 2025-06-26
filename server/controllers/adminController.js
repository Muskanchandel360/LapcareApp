const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const Comlaint = require("../models/complaintModel")
const Comment = require("../models/commentModel")



//GET ALL USERS
const getUsers = asyncHandler(async(req , res) => {

    const users =  await User.find().select("-password")

    if(!users){
        res.status(404)
        throw new Error("No Users Found")
    }
    res.status(200).json(users)
})


//GET ALL COMPLAINTS
  const getComplaints = asyncHandler(async(req , res) => {
    const  complaints =  await Comlaint.find()

    if(!complaints){
        res.status(404)
        throw new Error("No Complaints Found")
    }
    res.status(200).json(complaints)
})


//UPDATE COMPLAINT
const updateComplaint = asyncHandler(async(req , res) => {

    const updatedComplaint = await Comlaint.findByIdAndUpdate(req.params.cid , req.body ,{new :true})

    if(!updatedComplaint){
        res.status(400)
        throw new Error(" Complaint Not Updated")

    }
    res.status(200).json(updatedComplaint)
})





//GET ALL COMMENTS
const getComments = asyncHandler(async(req , res) => {

    const  comments =  await Comment.find()

    if(!comments){
        res.status(404)
        throw new Error("No Comments Found")
    }
    res.status(200).json(comments)
})


//ADD COMMENT
const addComment = asyncHandler(async(req , res) => {

    const{message} = req.body
    if(!message){
        res.status(400)
        throw new Error("Please Fill All Details")
    }

    const comment = Comment.create({user : req.user._id , complaint : req.params.cid , message : message , isAdmin: true})

    if(!comment){
        res.status(400)
        throw new Error("Comment Not Created")

    }
    res.status(201).json(comment)


})

module.exports = {getUsers , getComplaints , updateComplaint , getComments , addComment}






