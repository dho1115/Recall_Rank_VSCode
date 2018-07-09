

//From HTML screen.
let timer = document.querySelector(".timer"); //timer element.
let viewscreen = document.querySelector(".viewscreen"); //viewscreen element;
let button = document.querySelector("button"); //button.
let guessBox = document.querySelector(".guessBox");
let recallrank = document.querySelector("recallrank");
let recallscore = 0; //This is your recall score.
let response = document.querySelector("response"); //reveals whether you are right or wrong.
let RandInteger = Math.floor(Math.random()*10)+1; //Generate Random Integer.
let Stringnum = ""; //This is where we add the number to grow our string.
let count = 0; //This will go inside the set interval and act as TIMER.

///////////////Functions Needed For The Program///////////////
function HideButtonAndInputAtStart() {  //Hides Button and Input box.
    button.classList.add("HideElements");
    guessBox.classList.add("HideElements");
} 
function ShowButtonInputAndTextChange() {  //Reveals Button and Input box.
    button.classList.remove("HideElements");
    guessBox.classList.remove("HideElements");
    viewscreen.textContent = "What was the number you just saw?"
} 
function CorrectGuess() {  //If the guess is right.
    recallscore +=5;
    recallrank.textContent = recallscore;
    response.textContent = "CORRECT!!!"
    return response.textContent;
} 
function WrongGuess() {  //If the guess is wrong.
    response.textContent = "Sorry. That's wrong."
    return response.textContent;
}
function RevealNumber() {  //Reveals the number on the viewscreen.
    RandInteger = Math.floor(Math.random()*10)+1;
    RandInteger > 9 ? RandInteger -=2 : RandInteger;    
    Stringnum += RandInteger;
    viewscreen.textContent = Number(Stringnum);    
    return viewscreen.textContent;
}
/////////////////////////////////////////////////////////////

RevealNumber();

let clock = setInterval(function() {
    count +=1;
    if(count == 9) {
        clearInterval(1);
        ShowButtonInputAndTextChange();        
    } else {
        HideButtonAndInputAtStart();
        timer.textContent = 8-count;
    }
},1000)

