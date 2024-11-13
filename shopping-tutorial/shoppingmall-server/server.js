const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./db');
const loginRoute = require("./routes/loginRoutes");
// db.authenticate()
//     .then(()=>{
//         console.log("데이터베이스 연결 성공");
//     })
//     .catch((err)=>{
//         console.error("데이터베이스 연결 실패: ", err);
//     });

const cors = require('cors');
app.use(cors());

app.use("/login", loginRoute);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});