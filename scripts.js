let date = new Date();
let day = date.getDay();

let quote = document.querySelector("#quote");

if(day==1){
    quote.textContent = "There is always something to improve on.";
}
if(day==2){
    quote.textContent = "Every day is a blessing";
}
if(day == 3){
    quote.textContent = "Nobody's perfect, and that's perfect";

}
if(day == 4){
    quote.textContent = "\"Practice only as many times as you have breakfast\"\n ~Shinichi Suzuki";
}

if(day == 5){
    quote.textContent = "You can't if you say you can't";
}

if(day==6){
    quote.textContent = "I love my cats";
}

let ferbie = document.getElementById("Ferbie");
let gigi = document.getElementById("Gigi");

let fpurr = new Audio("audio/ferbiePurr.m4a");
let gpurr = new Audio("audio/gigiPurr.m4a");

function ferbPurr(){
    fpurr.play();
    ferbie.style.opacity = "1.0";
}

function gigiPurr(){
    gpurr.play();
    gigi.style.opacity = "1.0";
}

function returnFerbOpacity(){
    ferbie.style.opacity = "0.7";
    ferbie.hover.style.opacity = "1.0";
}

function returnGigiOpacity(){
    gigi.style.opacity = "0.7";

}

ferbie.onclick = ferbPurr;
gigi.onclick = gigiPurr;

fpurr.onended = returnFerbOpacity;
gpurr.onended = returnGigiOpacity;


