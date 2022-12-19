const express_pack=require("express");
const express=express_pack();
var http = require('https');
var fs = require("fs");


express.get("/",(rq,rs)=>{rs.sendFile(__dirname +'/index.html');  });
express.get("/api/task/deepthought",(rq,rs)=>{rs.sendFile(__dirname+"//Tasks/DTfrontend_task1/DTfrontend_task1/deepthought.json"); });

express.listen("3000","localhost");
console.log("3000");