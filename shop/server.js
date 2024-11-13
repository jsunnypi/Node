const express = require("express");
const app = express();
const path = require("path");

app.listen(8888, function (){
    console.log("Server running at http://localhost:8888");
});

app.use(express.static(path.join(__dirname,"build")));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "build/index.html"));
});

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "build/index.html"));
});