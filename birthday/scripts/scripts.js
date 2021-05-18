// Contfetti Background
var confettiSettings = { "target": "confetti-holder", 
"size": "1", 
"props": ["circle", "square", "triangle", "line", 
// { "type": "svg", "src": "images/sarmie.png", "size": 40, "weight": 1, }
],};

var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

const greetings='Happy Birthday ';
const name ='Ruel ';
const bDate='05/16/2022 00:00:00';


//CountDown Timer
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

//Click Gift to Open Msg
function openGift(){
    document.getElementsByClassName("gift-box")[0].classList.add("hide");
    var canvasC= document.getElementById("fireworks");
    var bdayMsg=document.getElementsByClassName("bdayMsg")[0];
    bdayMsg.classList.remove("hide");
    document.getElementsByClassName("bdName")[0].innerHTML=name; 
    document.getElementsByClassName("sendSms")[0].classList.remove("hide");
    document.getElementById("playMusic").play();
    document.getElementById("playMusic").loop = true;
}
 
//Animated Pic
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

//Send Sms
function sendSms(){
    var senderName=document.getElementById("senderName").value; 

    if(senderName != ""){
        var kcMsg= greetings+name+"!! Tumanda ka na naman (evil laugh :D). Wishing you good health, happiness and more success in life. I ❤ you. \n\nLove "+senderName;
        var senderMsg=greetings+name+"!!\n\nFrom: " + senderName;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic QUMwZDIyOWVmNGQ4N2JhMzhhZTMzMTk4ZjlmNTE5ZDM4OTpmNjYwYzIxN2NlODI1ODIyNjIyMWU1YzJjOTgxYzk1ZA==");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("From", "+14783087208");
        urlencoded.append("To", "+639"); 

        (senderName.toUpperCase() === "KC") ? urlencoded.append("Body", kcMsg ) : urlencoded.append("Body", senderMsg );
        
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };
        
        fetch("https://api.twilio.com/2010-04-01/Accounts/AC0d229ef4d87ba38ae33198f9f519d389/Messages.json", requestOptions)
        .then(function(response){ 
            document.getElementsByClassName("sendSms")[0].classList.add("hide");
            document.getElementsByClassName("confirmationText")[0].classList.remove("hide");
            document.getElementsByClassName("notifMsg")[0].innerHTML ="Thank you so much for sending Birthday Greeting to "+name+"<br>Your Message:"+"<br>"+senderMsg;          
            
            $(".confirmationText").fadeTo(10000, 8000).slideUp(500, function() {
                $(".confirmationText").slideUp(500);
              });
        })
        .catch(error => console.log('error', error));
    }
     
}; 
