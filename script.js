const can = document.getElementById('can');
const ctx = can.getContext('2d');

const form = document.getElementById('form');

function draw(event) {
    event.preventDefault();

    var fill = document.getElementsByClassName("input")[0];
    var stroke = document.getElementsByClassName("input")[1];

    ctx.fillStyle = fill.value.toLowerCase();
    ctx.strokeStyle = stroke.value.toLowerCase();

    ctx.beginPath();
    ctx.arc(100, 100, 25, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}

form.addEventListener('submit', draw);