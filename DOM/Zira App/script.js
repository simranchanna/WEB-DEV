let tc = document.querySelector(".ticket-container");
let modalVisible = false;
// let filters = document.querySelectorAll(".filter");

// function filterHandler(e){
//     let span = e.currentTarget.children[0];
//     let color = getComputedStyle(span).backgroundColor;
//     // console.log(color);
//     tc.style.backgroundColor = color;
// }

// for(let filter of filters){
//     // console.log(filter);
//     filter.addEventListener("click", filterHandler);
// }

let addbtn = document.querySelector(".add");

addbtn.addEventListener("click", showModal);

function showModal(e) {
    if(!modalVisible){
        let modal = `<div class="modal">
        <div class="task-to-be-added" data-typed="false" contenteditable>Enter your task here</div>
        <div class="priority-list">
            <div class="modal-pink-filter modal-filter"></div>
            <div class="modal-red-filter modal-filter"></div>
            <div class="modal-yellow-filter modal-filter"></div>
            <div class="modal-green-filter modal-filter"></div>
        </div>
        </div>`;
        tc.innerHTML = tc.innerHTML + modal;
        let taskInput = document.querySelector(".task-to-be-added");
        taskInput.addEventListener("click", (e) => {
            //console.log(e.currentTarget.getAttribute("data-typed"));
            if(e.currentTarget.getAttribute("data-typed") == "false"){
                e.currentTarget.innerText = "";
                e.currentTarget.setAttribute("data-typed", "true");
            }
        });
        modalVisible = true;
    }
    
}