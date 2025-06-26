const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db_config");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();

// DB CONNECTION
connectDB()

// Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

//DEFAULT ROUTE
app.get("/", (req, res) => {
  res.json({
    msg: "LAPCARE API RUNNING...",
  });
});


// User Route
app.use("/api/user", require("./routes/authRoutes"));

//COMPLAINT ROUTE
app.use("/api/complaint" , require("./routes/complaintRoutes"))


  //ADMIN ROUTE
  app.use("/api/admin" , require("./routes/adminRoutes"))

//ERROR HANDLER
app.use(errorHandler)



app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT : ${PORT}`.bgBlue.black);
});



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzliNDJiZGFjMWZlOTczOWMyOTdlZiIsImlhdCI6MTc0MTI3MjIyMSwiZXhwIjoxNzQzODY0MjIxfQ.y2t5pRAqLRZ2sHL174cvE1ZA7rv-mN4xiD2VW7WR0

