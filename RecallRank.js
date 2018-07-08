

//From HTML screen.
let timer = document.querySelector(".timer"); //timer element.
let viewscreen = document.querySelector(".viewscreen"); //viewscreen element;

let RandInteger = Math.floor(Math.random()*10)+1; //Generate Random Integer.
let Stringnum = ""; //This is where we add the number to grow our string.
let count = 1; //This will go inside the set interval and stop at a pre-defined number.

viewscreen.textContent = RandInteger;

let clock = setInterval(function() {
    count +=1;
    if(count == 10) {
        clearInterval(1);
        viewscreen.classList.add("HideElements");
        viewscreen.classList.remove("HideElements");
    } else {
        count;
        button.classList.add("HideElements");
    }
    timer.textContent = count;
},1000)

