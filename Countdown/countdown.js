const time = document.querySelector('h1');

const hrs = prompt("Enter hours: ");
const min = prompt("Enter minutes: ");
const sec = prompt("Enter seconds: ");


let timeSecond = parseInt(hrs * 3600) + parseInt(min * 60) + parseInt(sec);

console.log(timeSecond);


function timer(){

    let hours = Math.floor(timeSecond / 3600);
    let mins = Math.floor((timeSecond - (hours * 3600))/ 60);
    let secs = timeSecond % 60;

    if (secs < 10){
        secs = '0' + secs
    }
    if (mins < 10){
        mins = '0' + mins;
    }
    if (hours < 10){
        hours = '0' + hours;
    }


    time.innerText = `${hours}:${mins}:${secs}`;
    if (timeSecond < 0){
        time.innerText = `00:00:00`;
    }

    timeSecond--;    

}

setInterval(timer, 1000)
