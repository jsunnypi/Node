let remainingTime = 3000;

const waitingInterval = 500;

const timer = setInterval(()=>{
    console.log(`${remainingTime/1000}초 남음`)
    remainingTime -= waitingInterval;
    
    if(remainingTime <= 0){
        console.log('H1')
        clearTimeout(timer)
    }
}, waitingInterval)