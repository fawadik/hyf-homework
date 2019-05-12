/*var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = "green";
context.fill();
context.lineWidth = 5;
context.strokeStyle = "#003300";
context.stroke();*/

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;        
    }
    draw() {
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");        
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI, this.fillColor);        
        context.fillStyle = this.fillColor;
        context.fill(); 
        console.log(this.fillColor);      
    }
}
setInterval(() => {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log(color);
    let randX = Math.floor((Math.random() * 600) + 10);
    let randY = Math.floor((Math.random() * 500) + 10);
    let randR = Math.floor((Math.random() * 50) + 2);
    console.log(color);
    console.log(randX);
    console.log(randY);
    console.log(randR);
    const c1 = new Circle(randX, randY, randR, 0, 2 * Math.PI, color);
    c1.draw();
}, 500);