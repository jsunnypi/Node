const fs = require("fs")
const http = require("http")
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")

    const readStream = fs.createReadStream(__dirname + "/pf.html", "utf-8")
    readStream.pipe(res);
});
server.listen(3000, () =>{
    console.log("3000번 포트에서 서버 실행 중")
})