var can = document.getElementsByClass("can")[1];
var ctx = can.getContext("2d");

var st = document.getElementById("start");
var c = document.getElementById("color");

function draw() {
    ctx.fillStyle = "red";

    ctx.moveTo(0, 0);
    ctx.beginPath();
    ctx.arc(100, 300, 50, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
draw();