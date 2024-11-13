const realine = require('readline');

const rl = realine.createInterface({
    input:process.stdin,
    output: process.stdout,
})

rl.question('점수 입력: ', function(score){
    switch(Math.round(score / 10 -1)){
        case 10:
        case 9:
            console.log("A학점")
            break;
        case 8:
            console.log("B학점")
        case 7:
            console.log("C학점")
        case 6:
            console.log("D학점")
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("F학점")
            break;
        default:
            console.log("범위를 벗어남")
            break
    }
    rl.close()
} )