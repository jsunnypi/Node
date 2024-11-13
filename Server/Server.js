const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://admin:1234@cluster0.8tsfq.mongodb.net/';
const ObjId = require('mongodb').ObjectId;


let mydb;
mongoclient.connect(url)
    .then(client =>{
        mydb = client.db('myboard');
        // mydb.collection('post').find().toArray().then(result=>{
        //     console.log(result);
        // })

        app.listen(3000, function(){
            console.log("포트 3000으로 서버 대기중 ... ");
        });
    }).catch(err=>{
        console.log(err);
    });




var mysql = require("mysql");
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "myboard"
});

conn.connect();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
//const db = require('node-mysql/lib/db');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use(express.static("public"));


app.get('/book', function(){
    console.log("도서 목록 관련 페이지입니다.");
});

app.get("/", function(req,res){
    res.render("index.ejs");
});

app.get("/list", function(req, res){
    
    mydb.collection('post').find().toArray().then(result =>{
        console.log(result);
        res.render('list.ejs', {data : result});
    })
});


app.get('/enter', function(req, res){
    res.render('enter.ejs');
});

app.post('/save', function(req,res){
    mydb
        .collection("post")
        .insertOne({
            title: req.body.title,
            content: req.body.content,
            date: req.body.someDate,
        })
        .then((result)=>{
            console.log(result);
            console.log("데이터 추가 성공");
        });
        res.redirect("/list");
    });

app.post("/delete", function(req, res){
    console.log(req.body._id);
    req.body._id = new ObjId(req.body._id);
    mydb.collection('post').deleteOne(req.body)
    .then(result=>{
        console.log('삭제완료');
        res.status(200).send();
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send();
    });
});

app.get('/content/:id', function(req, res){
    console.log(req.params.id);
    req.params.id = new ObjId(req.params.id);
    mydb
        .collection("post")
        .findOne({ _id: req.params.id})
        .then((result)=>{
            console.log(result);
            res.render('content.ejs', { data : result });
        });    
});

app.get("/edit/:id", function(req, res){
    req.params.id = new ObjId(req.params.id);
    mydb
        .collection("post")
        .findOne({_id: req.params.id})
        .then((result)=>{
            console.log(result);
            res.render("edit.ejs", {data: result});
        });
});

app.post("/edit", function(req, res){
    console.log(req.body);
    req.body.id = new ObjId(req.body.id);
    mydb
        .collection("post")
        .updateOne({_id : req.body.id}, {$set : {title : req.body.title, content : req.body.content, date : req.body.someDate}})
        .then((result)=>{
            console.log("수정완료");
            res.redirect('/list');
        })
        .catch((err)=>{
            console.log(err);
        });
    });