const express = require("express");
const hbs = require("hbs");
const { req } = require("http");
const app = express();
const port = 9753

app.use(express.urlencoded({ extended: true }));//ใช้กับฟอร์มได้ เหมือนfeel pluginอ่ะ
app.set('view engine', 'hbs');
hbs.registerPartials("views/partials")


const allPost = [
    {
        id:2,title:"น่ารัก555+",from:"Dherachai",created:"6/7/2024",commentsCount:18
    },
    {
        id:1,title:"Sayonara",from:"Jasd",created:"7/7/2024",commentsCount:0
    },
]
app.get("/",(req,res)=>{
    res.render('home',{ allPost });
});

app.get("/p/new",(req,res)=>{
   res.render("postnew")
   
    
})

app.post("/p/new",(req,res)=>{
    console.log(req.body);   
    const { title } = req.body ??{};
    res.send(`Form submit ${title}`)
});



app.get(`/p/:postId`,(req,res)=>{
console.log(req.params);
const {postId} = req.params;
const onePost = allPost.find(post => post.id == +postId)//+ = change str to num
const customTitle = !!onePost ? `${onePost.title} `: "Cant find the data |";
 res.render('postId',{onePost,customTitle})
})


app.listen(port,function(){
    console.log(`web run already at http://localhost:${port}`)
})