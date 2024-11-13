const fs = require("fs");

// 동기식

let files = fs.readdirSync("./");
console.log(files);

// 비동기식
fs.readdir("./", (err, files)=>{// callback 함수
    if(err){
        console.error(err);
        return; // 오류 발생 시 즉시 반환
    }

        console.log(files);
});

