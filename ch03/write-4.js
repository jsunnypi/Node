// flag 옴션

const fs = require("fs")

let content = `
가나다라마바사
`

fs.writeFileSync("text-1.txt", content, {flag: "a"})