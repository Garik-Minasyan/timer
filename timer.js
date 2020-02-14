let second1 = document.getElementById('second1');
let second2 = document.getElementById('second2');
let minutes1 = document.getElementById('minutes1');
let minutes2 = document.getElementById('minutes2');
let hours1 = document.getElementById('hours1');
let hours2 = document.getElementById('hours2');
let divdate1 = document.getElementById('divdate1');
let divdate2 = document.getElementById('divdate2');
let divdate3 = document.getElementById('divdate3');
let startdiv= document.getElementById('startdiv');
let stopdiv = document.getElementById('stopdiv');
let infodiv = document.getElementById('infodiv');
let timer


startdiv.addEventListener('click',() => {
    timer =  setInterval( function myfunc() {
    second1.innerText ++ 
    if(second1.innerText === '10') {
    second1.innerText = 0;
    second1.style.backgroundColor = 'black';
    second2.innerText ++;
    
    if(second2.innerText === '6') {
    second2.innerText = 0;
    second2.style.backgroundColor = 'black';
    minutes1.innerText++; 
    } 
    if (minutes1.innerText === '10'){
    minutes1.innerText = 0;
    minutes1.style.backgroundColor = 'black';
    minutes2.innerText ++;
    } 
    }

    if(minutes2.innerText === '6') {
    minutes2.innerText = 0;
    minutes2.style.backgroundColor = 'black';
    hours1.innerText ++;
    
    }
    if(hours1.innerText === '10') {
    hours1.innerText = 0;
    hours1.style.backgroundColor = 'black';
    hours2.innerText ++;
    }
    if(hours1 === '4' && hours2 === '2') {
    hours1.innerText = 0;
    hours2.style.backgroundColor = 'black';
    hours2.innerText = 0;
    }
  },1000)
}) 


    stopdiv.addEventListener('click' ,() => {
    timer && clearInterval(timer);
    })

    setInterval (function (){
    let date = new Date();
    divdate1.innerText = date.getHours();
    divdate2.innerText = date.getMinutes();
    divdate3.innerText = date.getSeconds();
    },1000);
