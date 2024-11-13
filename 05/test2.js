const readline = require("readline");
let cnt = 1;
function checkAge(age) {
  cnt++;
  if (cnt === 3) r1.close();
  if (age > 19) return true;
  else return false;
}
const  r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
for (let i = 1; i <= 3; i++) {
  ;

  r1.question("Input age : ", (data) => {
    if (checkAge(data)) console.log("pass");
    else console.log("not pass");
  });
}
/*
var readlineSync = require('readline-sync');
for(let i=1;i<=3;i++){
var input = readlineSync.question('Read from console: ');
console.log('Yes, 맞다' + input);
}*/
