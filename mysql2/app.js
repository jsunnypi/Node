const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();  // 기본적으로 express를 사용할 수 있는 변수를 생성합니다
const port = 3001;  // 사용할 포트번호를 지정해줍니다. 
const dbconfig   = require('./config/database.js');  // DB사용을 위한 정보 보안을 위해 따로 나눠 둔 것입니다. 파일 내부 내용은 아래와 같습니다.
/*
module.exports = {
  host: '127.0.0.1',
  user: 'root',
  password: '비밀번호',
  database: 'board'  // DB이름
};
*/
const connection = mysql.createPool(dbconfig);  // mysql과 express를 연결해줍니다. 이 변수를 통해 DB에 접근할 수 있습니다.
const jsonParser = bodyParser.json();  // body-parser를 사용하기 위한 변수를 할당합니다.

app.use(cors());  // CORS를 피하기 위해 우선 모든 주소를 열어줍니다.

app.listen(port, () => {
  console.log(`Board app listening on port ${port}`);
})

app.get('/', (req, res) => {
  res.send('Hello Wod!')
 });

app.get('/articles', (req, res)=>{
  connection.query('SELECT * from board', (err, rows)=>{
    if(err) throw err;
    console.log(rows)
    res.send(rows);
  });
})

app.get('/article/:id', (req, res, next)=>{
  connection.query('SELECT * from board', (err, rows)=>{
    if(err) throw err;
    const article = rows.find(art=> art.idx === parseInt(req.params.id));
    if(!article){
      return res.status(404).send('ID was not found.');
    }
    res.send(article);
  })
})

app.post('/article', jsonParser, (req, res)=>{
  const sql = 'INSERT INTO board (title, writer, content) VALUES (?, ?, ?)';
  const title = req.body.title;
  const writer = req.body.writer;
  const content = req.body.content;
  const params = [title, writer, content];
  connection.query(sql, params, (err, rows, fields)=>{
    if(err) throw err;
    console.log(rows);
  })
})

app.put('/article/:id', jsonParser, (req, res, next)=>{
  connection.query('SELECT * from board', (err, rows, fields)=>{
    if(err) throw err;
    const article = rows.find(art=> art.idx === parseInt(req.params.id));
    if(!article){
      return res.status(484).send('ID was not found.');
    }
    console.log(req.body)
    const sql = 'UPDATE board SET title = ?, writer = ?, content = ? WHERE idx = ?';
    const title = req.body.title;
    const writer = req.body.writer;
    const content = req.body.content;
    const index = rows.indexOf(article);
    const params = [title, writer, content, req.params.id];
    console.log(params)
    connection.query(sql, params, (err, rows, fields)=>{
      if(err) throw err;
      console.log(rows);
    })
    res.send(article)
  })
})

app.delete('/article/:id', (req, res, next) => {
  connection.query('SELECT * from board', (err, rows, fildes) => {
    if (err) throw err;
    const article = rows.find(art => art.idx === parseInt(req.params.id));
    if(!article) {
      return res.status(404).send('ID was not found.');
    }
    connection.query('DELETE FROM board WHERE idx = ?', [req.params.id], (err, rows, fileds) => {
      if (err) throw err;
    })
    res.json('deleted: ' + req.params.id);
  })
})