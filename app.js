var dicee = Math.floor(Math.random()*6)+1;
var dicee1 = Math.floor(Math.random()*6)+1;
function whowin(){if(dicee===dicee1){
        document.querySelector(".container h1").textContent="Draw"
    }
    else if(dicee>dicee1){
        document.querySelector(".container h1").textContent="Player 2 Win"
    }
    else{
        document.querySelector(".container h1").textContent="Player 1 Win"
    }
}
function duceerarndom(){
    if(dicee===1){
        document.querySelector(".img2").src = "images/dice1.png";
    }
    else if(dicee===2){
        document.querySelector(".img2").src = "images/dice2.png";
    }
    else if(dicee===3){
        document.querySelector(".img2").src = "images/dice3.png";
    }
    else if(dicee===4){
        document.querySelector(".img2").src = "images/dice4.png";
    }
    else if(dicee===5){
        document.querySelector(".img2").src = "images/dice5.png";
    }
    else{
        document.querySelector(".img2").src = "images/dice6.png";
    }
}
function duceerarndom1(){
    if(dicee1===1){
        document.querySelector(".img1").src = "images/dice1.png";
    }
    else if(dicee1===2){
        document.querySelector(".img1").src = "images/dice2.png";
    }
    else if(dicee1===3){
        document.querySelector(".img1").src = "images/dice3.png";
    }
    else if(dicee1===4){
        document.querySelector(".img1").src = "images/dice4.png";
    }
    else if(dicee1===5){
        document.querySelector(".img1").src = "images/dice5.png";
    }
    else{
        document.querySelector(".img1").src = "images/dice6.png";
    }
}
whowin();
duceerarndom();
duceerarndom1();