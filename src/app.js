const { static } = require("express");
const path = require("path");
const express = require("express");
const hbs =require("hbs");
const app =express();
const port =process.env.PORT || 3000;


const staticPath= path.join(__dirname,"../public");
const template_Path= path.join(__dirname,"../template/views");
console.log(template_Path);
const partials_Path= path.join(__dirname,"../template/partials");
console.log(staticPath);
console.log(partials_Path);

app.set('view engine', 'hbs');
app.set('views', template_Path);
hbs.registerPartials(partials_Path);

app.use(express.static(staticPath));

//routing
app.get("",(req,res)=>{
   res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
 })

 app.get("/weather",(req,res)=>{
    res.render("weather");
 })

 app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"sorry page not found"
    });
 })
app.listen(port,()=>{
    console.log(`listening at the port no ${port}`);
})