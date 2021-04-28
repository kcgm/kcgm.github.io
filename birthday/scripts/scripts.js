var confettiSettings = { "target": "confetti-holder", 
"max": "40", 
"size": "1", 
"props": ["circle", "square", "triangle", "line", 
{ "type": "svg", "src": "images/sarmie.png", "size": 40, "weight": 1 }
],
 "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], 
 "clock": "20", 
 "respawn": true };

var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

const greetings='Happy Birthday ';
const name ='Ruel';
const bDate='05/16/2021 00:00:00';

var sec = 1000,
    min = sec * 60,
    hr = min * 60,
    day = hr * 24;

setInterval(function getCountDown(){ 
    var dateNow = new Date().getTime();
    var diff = new Date(bDate).getTime()-dateNow;
    var getDays= Math.floor(diff /day);
    var getHrs = Math.floor((diff % day) / hr);
    var getMins = Math.floor((diff % hr) / min);
    var getSec = Math.floor((diff % min) / sec);

    var countCont= document.getElementsByClassName("countCont")[0];
    var giftCont = document.getElementsByClassName("gift")[0];
    var meCont=document.getElementsByClassName("me")[0];
    
    
    if(getDays < 0){
        giftCont.classList.remove("hide"); 
    }else{
        countCont.classList.remove("hide");
        meCont.classList.remove("hide");
        document.getElementsByClassName("days")[0].innerHTML= getDays ;
        document.getElementsByClassName("hrs")[0].innerHTML= getHrs;
        document.getElementsByClassName("mins")[0].innerHTML= getMins;
        document.getElementsByClassName("sec")[0].innerHTML= getSec;

    }
    
},sec);

function openGift(){
    document.getElementsByClassName("gift-box")[0].classList.add("hide");
    var bdayMsg=document.getElementsByClassName("bdayMsg")[0];
    bdayMsg.classList.remove("hide");
    document.getElementsByClassName("bdName")[0].innerHTML=name;
}
 
 
var imageList=['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png'];
var i = 0;
var renew = setInterval(function(){
    if(imageList.length == i){
        i = 0;
    }
    else {
    document.getElementById("imageMe").src = imageList[i]; 
    i++;
    }
},150);