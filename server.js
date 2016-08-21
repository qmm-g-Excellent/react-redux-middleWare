const express = require("express");
const app = new express();

app.use(express.static("./public"));

app.get("/item",(req,res)=>{
    res.json("nihao");
});

app.listen(3000,()=>{
    console.log("server start sucess!");
});
