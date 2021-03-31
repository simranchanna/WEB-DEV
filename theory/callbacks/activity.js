const fs = require('fs');

// let input = process.argv[2];

let n = Math.floor(Math.random() * 11);

let count = 0;

function callback(data){
    fs.writeFile(count + ".txt", data, fun);
}

function fun(){
    if(count < n){
        let lines = [];
        let nofLines = Math.floor(Math.random() * 101);
        for(let i=0; i< nofLines; i++){
            lines.push(Math.floor(Math.random() * 101));
        }
        let data = lines.join('\r\n');
        count++;
        callback(data);
    }
}
fun();
console.log(n);