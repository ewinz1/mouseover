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
}

let circ1 = {
    x: 500,
    y: 400,
    r: 70,
    color: "orange",
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

    // mouse detection 

    // rectangle
    if (rect1.x <= mouseX && mouseX <= rect1.x + rect1.w &&
        rect1.y <= mouseY && mouseY <= rect1.y + rect1.h) {

        // collision detected!
        ctx.fillStyle = "red";
        ctx.fillRect(rect1.x, rect1.y, rect1.w, rect1.h);
    } else {
        ctx.fillstyle = rect1.color;
        ctx.fillRect(rect1.x, rect1.y, rect1.w, rect1.h);
        }

    // circle
    var x1 = circ1.x;
    var y1 = circ1.y;
    let d = Math.sqrt((mouseX - x1)**2 + (mouseY - y1)**2)

    if (d < circ1.r) {
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(circ1.x, circ1.y, circ1.r, 0, 2*Math.PI);
        ctx.fill();
    } else {
        ctx.fillStyle = circ1.color;
        ctx.beginPath();
        ctx.arc(circ1.x, circ1.y, circ1.r, 0, 2*Math.PI);
        ctx.fill();
    }

    requestAnimationFrame(drawprogram);
}