let tc = document.querySelector(".ticket-container");
let filters = document.querySelectorAll(".filter");

function filterHandler(e){
    let span = e.currentTarget.children[0];
    let color = getComputedStyle(span).backgroundColor;
    // console.log(color);
    tc.style.backgroundColor = color;
}

for(let filter of filters){
    // console.log(filter);
    filter.addEventListener("click", filterHandler);
}