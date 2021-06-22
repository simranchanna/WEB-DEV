let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let ctx = canvas.getContext("2d");

let img = document.createElement("img");
img.src = "my-photo.jpg";;
img.addEventListener("load", function(){
    ctx.drawImage(img, 0, 0);
});