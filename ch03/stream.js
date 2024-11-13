const fs = require("fs")

const readStream = fs.createReadStream("./readMe.txt")

readStream.on("data", (chunk)=>{
    console.log("new chunk received:")
    console.log(chunk)
})//chunk: 한번에 들어오는 데이터의 양

readStream.on("end",()=>{
    console.log("finished reading data")
})

readStream.on("error", (err)=>{
    console.log(`Error reading the file: ${err}`)
})