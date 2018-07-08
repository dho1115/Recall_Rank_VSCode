

//From HTML screen.
let timer = document.querySelector(".timer"); //timer element.
let viewscreen = document.querySelector(".viewsreen"); //viewscreen element;

let RandInteger = Math.floor(Math.random()*10)+1; //Generate Random Integer.
let Stringnum = ""; //This is where we add the number to grow our string.

viewscreen.textContent = RandInteger;

