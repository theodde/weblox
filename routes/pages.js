const express = require("express"); 
const router = express.Router();

router.get("/login", (req, res)=>{
    res.render("login");
  })
.get("/home", (req, res)=>{
    res.render("home");
  })
.get("/", (req, res)=>{
  res.render("home");
});



module.exports = router;



