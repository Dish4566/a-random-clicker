const count = document.querySelector("#score");
var score = 0;

function clicked() {
    score++;
    count.innerHTML = score;
}