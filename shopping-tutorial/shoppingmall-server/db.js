const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('데이터베이스_이름', '사용자_이름', '비밀번호', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(()=>{
        console.log('데이터베이스 연결 성공');
    })
    .catch(err => {
        console.error('데이터베이스 연결 실패:', err);
    });