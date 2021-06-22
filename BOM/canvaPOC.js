let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let ctx = canvas.getContext("2d");

let startPoint = undefined;
canvas.addEventListener("mousemove", function(e) {
    if(e.buttons == 1){
        if(startPoint){
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 2;
            let width = e.pageX - startPoint[0];
            let height = e.pageY - startPoint[1];
            ctx.clearRect(startPoint[0]-1, startPoint[1]-1, width, height);
            ctx.strokeRect(startPoint[0], startPoint[1], width, height);
        }
        else{
            startPoint = [e.pageX, e.pageY];
        }
    }
    else{
        startPoint = undefined;
    }
})

// let moveToNoted = false;
// canvas.addEventListener("mousemove", function(e) {
//     if(e.buttons == 1){
//         if(!moveToNoted){
//             ctx.beginPath();
//             ctx.moveTo(e.pageX, e.pageY);
//             ctx.strokeStyle = "blue";
//             ctx.lineWidth = 2;
//             moveToNoted = true;
//         }
//         else{
//             ctx.lineTo(e.pageX, e.pageY);
//             ctx.stroke();
//         }
//     }
//     else{
//         moveToNoted = false;
//     }
// })


// ctx.strokeRect(100,100,20,20);
// ctx.beginPath();
// ctx.moveTo(105,110);
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 1;
// ctx.lineTo(110,115);
// ctx.stroke();
// ctx.moveTo(110,115);
// ctx.lineWidth = 1;
// ctx.lineTo(130,100);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "black";
// ctx.strokeRect(100,150,20,20); 
// ctx.moveTo(100,150);
// ctx.strokeStyle = "red";
// ctx.lineWidth = 1;
// ctx.lineTo(120,170);
// ctx.stroke();
// ctx.moveTo(100,170);
// ctx.lineWidth = 1;
// ctx.lineTo(120,150);
// ctx.stroke();