const express = require("express")

const router = express.Router()

const allPost = [
    {
        id:2,title:"น่ารัก555+",from:"Dherachai",created:"6/7/2024",commentsCount:18
    },
    {
        id:1,title:"Sayonara",from:"Jasd",created:"7/7/2024",commentsCount:0
    },
]
router.get("/new",(req,res)=>{
    res.render("postnew")
    
     
 })
 
 router.post("/new",(req,res)=>{
     console.log(req.body);   
     const { title } = req.body ??{};
     res.send(`Form submit ${title}`)
 });
 
 
 
 router.get(`/:postId`,(req,res)=>{
 console.log(req.params);
 const {postId} = req.params;
 const onePost = allPost.find(post => post.id == +postId)//+ = change str to num
 const customTitle = !!onePost ? `${onePost.title} `: "Cant find the data |";
  res.render('postId',{onePost,customTitle})
 })
 
module.exports = router;