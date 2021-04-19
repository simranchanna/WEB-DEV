const fs = require('fs');

let n = process.argv[2];
let fileNo = 1;

function createFile(){
    if(fileNo <= n){
        let lines = Math.floor(Math.random() * 101);
        let arr = [];
        for(let i=0; i< lines; i++){
            arr.push(Math.floor(Math.random() * 101));
        }
        let data = arr.join('\r\n');
        fs.writeFile(fileNo + ".txt", data, createFile);
        fileNo++;
    }
}
createFile();