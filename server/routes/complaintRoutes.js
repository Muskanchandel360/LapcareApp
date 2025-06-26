const express = require("express")
const { getComplaints, raiseComplaint, updateComplaint } = require("../controllers/complaintController")
const protect = require("../middlewares/authMiddleware")

const router = express.Router()




//GET COMPLAINTS
router.get("/" , protect , getComplaints)

//GET COMPLAINT
router.get("/:id" , protect, getComplaints)

//RAISE COMPLAINTS
router.post("/" , protect , raiseComplaint)

//UPDATECOMPLAINTS
router.put("/:id" , protect ,updateComplaint)

//COMMENT ROUTE
router.use("/:id/comment", require("./commentRoutes"));


module.exports= router
