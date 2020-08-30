let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// let position = 0;

// setInterval(() => {
//     ctx.clearRect(0, 0, 200, 200);
//     ctx.fillRect(position, 0, 20, 20);

//     position++;
//     if(position > 200) {
//         position = 0;
//     }
// }, 30);

// let size = 0;

// setInterval(() => {
//     ctx.clearRect(0, 0, 200, 200);
//     ctx.fillRect(0, 0, size, size);

//     size++;
//     if (size > 200) {
//         size = 0;
//     }
// }, 30)



//Draw flying bee

// let x = 100;
// let y = 100;

// function circle(x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     if(fillCircle) {
//         ctx.fill();
//     } ctx.stroke();
// };

// function drawBee(x, y) {
//     ctx.lineWidth = 2; 
//     ctx.strokeStyle = "Black";
//     ctx.fillStyle = "Gold";

//     circle(x, y, 8, true);
//     circle(x, y, 8, false);
//     circle(x - 5, y - 11, 5, false);
//     circle(x + 5, y - 11, 5, false);
//     circle(x - 2, y - 1, 2, false);
//     circle(x + 2, y - 1, 2, false);
// }

// function update(coordinate) {
//     let offset = Math.random() * 4 - 2;
//     coordinate += offset; 

//     if(coordinate > 200) {
//         coordinate = 200;
//     }

//     if(coordinate < 0) {
//         coordinate = 0; 
//     }

//     return coordinate;
// }

// setInterval(() => {
//     ctx.clearRect(0, 0, 200, 200);

//     drawBee(x, y,);
//     x = update(x);
//     y = update(y);
    
//     ctx.strokeRect(0, 0, 200, 200);
// }, 30);




function circle(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(fillCircle) {
        ctx.fill();
    } ctx.stroke();
};

class Ball {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.xSpeed = (Math.random() * 10) - 5;
        this.ySpeed = (Math.random() * 10) - 5;
        let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    draw() {
        ctx.fillStyle = this.color;
        circle(this.x, this.y, 3, true);
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    checkColission() {
        if(this.x < 0 || this.x > width) {
            this.xSpeed = -this.xSpeed;
        }

        if(this.y < 0 || this.y > height) {
            this.ySpeed = -this.ySpeed;
        }
    };
}

let ball = new Ball();
let balls = [];

for(let i = 0; i < 10; i++) {
    balls.push(new Ball());
}

let width = canvas.width;
let height = canvas.height;

setInterval(() => {
    ctx.clearRect(0, 0, width, height);

    balls.map(item => item.draw());
    balls.map(item => item.move());
    balls.map(item => item.checkColission());

    ctx.strokeRect(0, 0, width, height);
}, 30);