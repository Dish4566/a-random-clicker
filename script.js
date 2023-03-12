const c = document.getElementById("can").getContext("2d");
const add = Object.getPrototypeOf(c);

// Shorthands & Edits
add.draw = (poly = new Path2D) => {
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

// Checking type funct
function checkType(inp, checking = Object) {
    return typeof inp == checking;
}

// Pre-made shapes
add.shapes = class { 
    // Read the titles, not the code
    circle = (pos, radius) => {
        if (checkType(pos)) 
        {c.arc(pos[0], pos[1], radius, 0, 2 * Math.PI); }
        else { c.arc(pos, pos, radius, 0, 2 * Math.PI); }
    }
    square = (pos, size) => {
        if (checkType(pos)) 
        {c.rect(pos[0], pos[1], size, size); }
        else { c.rect(pos, pos, size, size); }
    }
}

// Patterns
add.patterns = class {
    preSh = new c.shapes;

    pattern = (shapes, cen, dist = 50) => {
        // idk how to make this cleaner
        if (checkType(shapes)) {
            shapes.forEach(element => {

                if (element == "s") {
                    c.moveTo();
                    preSh.square();
                } else if (element == "c"){
                    preSh.circle();
                }
            });
        } else {

        }
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
    
    console.log(c);
    c.draw();

}


document.getElementById("form").addEventListener("submit", create);