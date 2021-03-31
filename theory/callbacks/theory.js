//const fs = require("fs");

// function callback(err, data){
//     if(err) {
//         console.log("Unable to read file");
//     }
//     else{
//         let lines = data.split("\r\n"); 
//         let i=1;
//         for(let n = lines.length; n>0; n--){

//         }
//     }
// }

// let count = 1;
// function readfile(filename){
//     if(filename == undefined)
//         filename = (count-1) + ".txt";
//     fs.readFile(filename, "utf-8", writefile);    
// }

// function writefile(err, data){
//     let lines = data.split("\r\n");
//     if(lines.length > 1){
//         lines = lines.splice(1);
//         let writedata = lines.join("\r\n");
//         fs.writeFile(count + ".txt", writedata, readfile);
//         count++;
//     }
// }

// readfile("abc.txt");

let a = true;
setInterval(function(){
    if(a) console.log("hello");
}, 2000);
setTimeout(function(){
    a = false;
}, 10500);
