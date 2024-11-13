//fs 모듈의 appendFile 함수 

const fs = require("fs");

fs.appendFile("./text-2.txt", "\n\n 새로운 내용추가", (err)=>{
    if(err){
        console.log(err);
    }
    console.log("appending to file")
})