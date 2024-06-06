const express = require("express");
const { request } = require("http");
const app = express();
const port = 9753

app.use(express.urlencoded({ extended: true }));//ใช้กับฟอร์มได้ เหมือนfeel pluginอ่ะ

app.get("/",(req,res)=>{
    console.log(req.query);
    const {q , sortBy} = req.query;
    res.send(`query = ${q} sortBy = ${sortBy}`);
});

app.get("/p/new",(req,res)=>{
   res.send("this is NewPost Page")
   
    
})

app.post("/p/new",(req,res)=>{
    console.log(req.body);   
    const { title } = req.body;
    res.send(`Form submit ${title}`)
});



app.get(`/p/:postId`,(req,res)=>{
console.log(req.params);
const {postId} = req.params;
 res.send(`This is single post ผมเดาว่าpathคุณคือ${postId}`)
})


app.listen(port,function(){
    console.log(`web run already at http://localhost:${port}`)
})