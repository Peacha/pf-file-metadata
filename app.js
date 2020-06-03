const express = require('express');
const app = express();
app.use(express.static(__dirname+"/public"));
const multer = require('multer');
const upload = multer();

app.route("/").get((req,res,next)=>{
	res.sendFile(__dirname+"/views/index.html")
})

app.route("/api/fileanalyse").post(upload.single('upfile'),(req,res,next)=>{
	req.file ? res.json({name:req.file.originalname,size:req.file.size}) : res.send('400')
})

app.listen(process.env.PORT,()=>console.log("File metadata service is listening......"))
