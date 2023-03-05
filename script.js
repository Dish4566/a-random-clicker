let counter = 0;
const button = document.getElementsByClassName('block')[0];


/* Main funct */
function clicked() {
  counter += 1;
  document.getElementById('score').innerText = counter;
}