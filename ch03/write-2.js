// 동기로 파일 기록하기 - existsSync함수, writeFileSync 함수

const fs = require('fs')

const data = fs.readFileSync("example.txt", "utf8")
if(fs.existsSync("text-1.txt")){
    console.log("file already exist")
   // fs.writeFileSync("text-2.txt", data) 다른 이름으로 파일 생성
}
else{
    fs.writeFileSync("text-1.txt", data)
}