/*for(var i =1; i<10; i++){
    for(var j =1; j<10; j++)
    console.log(i+"*"+j +"="+ j*i) 
}*/

var dan = 2;

while(dan < 10){
    var num = 1;
    while(num < 10){
        console.log(dan + "*" + num + "=" + dan*num);
        num++;
    }
    dan++;
}