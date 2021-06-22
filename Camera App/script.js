let audioPlayer = document.querySelector("audio");
let videoPlayer = document.querySelector("video");
let recordBtn = document.querySelector("#record-btn");
let captureBtn = document.querySelector("#capture-btn");

let recordState = false;
let mediaRecord;
let chunks = [];

captureBtn.addEventListener("click", capture);

function capture(){
    let canvas = document.createElement("canvas");
    canvas.height = videoPlayer.videoHeight;
    canvas.width = videoPlayer.videoWidth;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(videoPlayer, 0, 0);
    let link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "image.png";
    link.click();
}

recordBtn.addEventListener("click", function(){
    if(!recordState){
        mediaRecord.start();
        recordState = true;
        // recordBtn.innerText = "Recording...";
    }
    else{
        mediaRecord.stop();
        recordState = false;
        //recordBtn.innerText = "Record";
    }
})
navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(function(mediaStream){
    videoPlayer.srcObject = mediaStream;
    audioPlayer.srcObject = mediaStream;
    mediaRecord = new MediaRecorder(mediaStream);
    mediaRecord.ondataavailable = function(e){
        chunks.push(e.data);
    }
    mediaRecord.onstop = function(){
        let blob = new Blob(chunks, {type: "video/mp4"});
        let blobUrl = URL.createObjectURL(blob);
        chunks = [];
        console.log(blobUrl);
        let a = document.createElement("a");
        a.href = blobUrl;
        a.download = "temp.mp4";
        a.click();
    }
});

let filter;
let allFilters = document.querySelectorAll(".filter");

for(let i of allFilters){
    i.addEventListener("click", function(e){
        filter = e.currentTarget.style.backgroundColor;
        addFilterToScreen(filter);
    })
}

function addFilterToScreen(filter){
    let filterScreen = document.createElement("div");
    filterScreen.classList.add("filter-screen");
    filterScreen.style.backgroundColor = filter;
    filterScreen.style.height = videoPlayer.offsetHeight + "px";
    filterScreen.style.width = videoPlayer.offsetWidth + "px";
    document.querySelector(".filter-screen-parent").innerHTML = "";
    document.querySelector(".filter-screen-parent").append(filterScreen);
}