// canvas details + 2d context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// global variables
let mouseX, mouseY;

let rect1 = {
    x: 200,
    y: 300,
    w: 100,
    h: 200,
    color: "green",
    xSpeed: 0,
    ySpeed: 0,
}

let circ1 = {
    x: 500,
    y: 400,
    r: 70,
    color: "orange",
    xSpeed: 0,
    ySpeed: 0,
}

// event listener
document.addEventListener("mousemove", mousemovehandler);

function mousemovehandler(event) {
    // get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect();

    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = event.clientX - cnvRect.left;
    mouseY = event.clientY - cnvRect.top;
}

// draw function
requestAnimationFrame(drawprogram);

function drawprogram() {

    // xSpeed and ySpeed
    rect1.x += rect1.xSpeed;
    rect1.y += rect1.ySpeed;
    circ1.x += circ1.xSpeed;
    circ1.y += circ1.ySpeed;

    let n = Math.random();
   
    // mouse detection 

    // rectangle
    if (rect1.x <= mouseX && mouseX <= rect1.x + rect1.w &&
        rect1.y <= mouseY && mouseY <= rect1.y + rect1.h) {

        // collision detected!
        rect1.color = "red";

        // random movement
        if (n < 0.25) {
            rect1.xSpeed = 2;
            rect1.ySpeed = 0;

        } else if (n < 0.5) {
            rect1.xSpeed = 0;
            rect1.ySpeed = 2;

        } else if (n < 0.75) {
            rect1.xSpeed = -2;
            rect1.ySpeed = 0;

        } else {
            rect1.xSpeed = 0;
            rect1.ySpeed = -2;
        }

    } else {
        rect1.color = "green";
        rect1.xSpeed = 0;
        rect1.ySpeed = 0;
    }

    // circle
 
    let d = Math.sqrt((mouseX - circ1.x)**2 + (mouseY - circ1.y)**2);

    if (d < circ1.r) {
        circ1.color = "purple";

        // random movement
        if (n < 0.25) {
            circ1.xSpeed = 2;
            circ1.ySpeed = 0;

        } else if (n < 0.5) {
            circ1.xSpeed = 0;
            circ1.ySpeed = 2;

        } else if (n < 0.75) {
            circ1.xSpeed = -2;
            circ1.ySpeed = 0;

        } else {
            circ1.xSpeed = 0;
            circ1.ySpeed = -2;
        }

    } else {
        circ1.color = "orange";
        circ1.xSpeed = 0;
        circ1.ySpeed = 0;
    }

    // background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Rectangle 
    ctx.fillStyle = rect1.color;
    ctx.fillRect(rect1.x, rect1.y, rect1.w, rect1.h);

    // Circle
    ctx.fillStyle = circ1.color;
    ctx.beginPath();
    ctx.arc(circ1.x, circ1.y, circ1.r, 0, 2*Math.PI);
    ctx.fill();

    requestAnimationFrame(drawprogram);
}