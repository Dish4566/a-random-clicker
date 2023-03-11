const c = document.getElementById("can").getContext("2d");
const add = Object.getPrototypeOf(c);

// Shorthands & Edits
add.draw = (poly = None) => {
    c.fill(poly);
    c.stroke(poly);
}

add.rotateD = (angle) => {
    c.rotate((angle * Math.PI)/180);
}

add.rotateCPoint = (angle, pos, size) => {
    // Horizontal and Vertical center
    var hc = pos[0] + size[0] / 2;
    var vc = pos[1] + size[1] / 2;

    c.translate(hc, vc);
    c.rotateD(angle);
    c.translate(hc * -1, vc * -1);
}

// Pre-made shapes
add.shapes = class { 
    circle = (pos, radius) => {
        c.arc(pos[0], pos[1], radius, 0, 2 * Math.PI);
        c.arc(pos, pos, radius, 0, 2 * Math.PI)
    }
    
}

// Patterns
add.patterns = class {
    pattern = (shapes, dist) => {

    }
}

// Main
function create(ev) {
    // Prevents refresh so the canvas can load
    ev.preventDefault();

    // Getting inputs
    var fill = document.getElementsByClassName("input")[0];
    var stroke = document.getElementsByClassName("input")[1];

    // Formatting them
    c.fillStyle = fill.value.toLowerCase();
    c.strokeStyle = stroke.value.toLowerCase();
    
    const shapes = new c.shapes;

    console.log(shapes);
    
    c.draw();
}


document.getElementById("form").addEventListener("submit", create);