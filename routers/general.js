const express = require("express");

const router = express.Router();

const allPost = [
    {
        id:2,title:"น่ารัก555+",from:"Dherachai",created:"6/7/2024",commentsCount:18
    },
    {
        id:1,title:"Sayonara",from:"Jasd",created:"7/7/2024",commentsCount:0
    },
]
router.get("/",(req,res)=>{
    res.render('home',{ allPost });
});

module.exports = router;