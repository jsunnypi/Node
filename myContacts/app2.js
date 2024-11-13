const express = require("express");

const errorhandler = require("./middlewares/errorhandler");

const app = express();

const port = 3000;


const logger = (req, res, next) => {
  console.log("User Logged");
  next();
};

app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.route("/").get((req, res) => {
  res.status(200).send("Hello Node!!");
});

app.use(logger);

// app.use("/", require("./routes/contactRoutes"));


app.get("/test", (req, res, next) => {
  const error = new Error("테스트용 에러");
  error.status =401;
  next(error);
});

app.use(errorhandler);

app.listen(port, ()=>{
  console.log(`${port}번 포트에서 서버 실행중`);
})


