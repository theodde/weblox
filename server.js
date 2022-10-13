//call dependencies
 const express = require("express");
 const server  = express();  
 const session = require('express-session'); 
 const cookie = require("cookie-parser");
  
  server.set("view engine", "ejs")
  .use("/assets", express.static("./public")) 
  .use(session({secret: 'todotopsecret', resave: false, saveUninitialized: false, cookie: {secure: false}}))
  .use(express.urlencoded({extended:false})) 
  .use(express.json());
  
 
 
  server.use("/", require("./routes/pages"));

  server.use((req, res)=>{
   res.send("Error: Page not found");
  });
  server.listen(process.env.PORT ||5000);