const express = require("express");
const hbs = require("hbs");
const { req } = require("http");
const app = express();
const port = 9753
const generalrouter = require("./routers/general");
const postsrouter = require("./routers/posts")

app.use("/", generalrouter);
app.use("/p", postsrouter)
app.use(express.urlencoded({ extended: true }));//ใช้กับฟอร์มได้ เหมือนfeel pluginอ่ะ
app.set('view engine', 'hbs');
hbs.registerPartials("views/partials")





app.listen(port,function(){
    console.log(`web run already at http://localhost:${port}`)
})