const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stddout,
});

function checkAge(age){
    if(age > 19){
        return true;
    }
    else
    {
        return false;
    }
}

rl.question("나이를 입력하세요 : ", function(nai){
    if(checkAge(nai)){
        console.log("입장 가능");
    }
    else{
        console.log("입장 불가");
    }
    rl.close();
})