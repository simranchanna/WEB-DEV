let tc = $(".ticket-container");
let allTasks = localStorage.getItem("allTasks");
let modalVisible = false;
let selectedPriority;

if(allTasks != null)
    allTasks = JSON.parse(allTasks);  

$(".add").click(showModal);    

function display(allTasks){
    tc.empty();
    if(allTasks != null){
        for(let Task of allTasks){
            let ticket = $("<div></div>").addClass("ticket");
            ticket.html(`<div class="ticket-color ${Task.priority}"></div>
                         <div class="ticket-id">#${Task.id}</div>
                         <div class="task">${Task.task}</div>`);
            tc.append(ticket);   
            ticket.click(function() {
                $(this).toggleClass("active");
            });          
        }
    }
}

function showModal(){
    if(!modalVisible){
        let modal = $("<div></div>").addClass("modal");
        modal.css("display", "none");
        modal.html(`<div class="task-to-be-added" data-typed="false" contenteditable>Enter your task here</div>
                    <div class="priority-list">
                        <div class="pink modal-filter active"></div>
                        <div class="red modal-filter"></div>
                        <div class="yellow modal-filter"></div>
                        <div class="green modal-filter"></div>
                    </div>`);
        tc.append(modal);
        modal.slideDown("slow");       
        modalVisible = true;     
        $(".task-to-be-added").click(function(){
            if($(this).attr("data-typed") == "false"){
                $(this).empty();
                $(this).attr("data-typed", "true");
            }
        });
        $(".task-to-be-added").keypress(addTicket);
        selectedPriority = "pink";
        //         let modalFilters = document.querySelectorAll(".modal-filter");
        //         for(let i=0; i<modalFilters.length; i++){
        //             modalFilters[i].addEventListener("click", selectPriority.bind(this, taskInput));
        //         }
    }
}

function addTicket(e){
    if(e.key == "Enter" && e.shiftKey == false){
        if($(this).text().trim() != ""){
            let task = $(this).text();
            let uid = new ShortUniqueId();
            let id = uid();
            let ticket = $("<div></div>").addClass("ticket");
            ticket.html(`<div class="ticket-color ${selectedPriority}"></div>
                         <div class="ticket-id">#${id}</div>
                         <div class="task">${task}</div>`);               
            $(".modal").remove();
            modalVisible = false; 
            tc.append(ticket);
            ticket.click(function() {
                $(this).toggleClass("active");
            });    
        //             //adding in local storage
        //             if(allTasks == null){  //if there is no ticket in storage
        //                 let data = [{"id":id, "task": task, "priority": selectedPriority}];
        //                 localStorage.setItem("allTasks", JSON.stringify(data));
        //             }     
        //             else{
        //                 let data = allTasks;
        //                 data.push({"id":id, "task": task, "priority": selectedPriority});
        //                 localStorage.setItem("allTasks", JSON.stringify(data));
        //             }  
        } else{
            e.preventDefault();
            alert("Error! Please enter your task");
        }
    }

}

function selectPriority(){
    console.log("hii");
}

display(allTasks);


// let tc = document.querySelector(".ticket-container");
// let allTasks = localStorage.getItem("allTasks");
// let modalVisible = false;

// let addbtn = document.querySelector(".add");
// addbtn.addEventListener("click", showModal);

// let deletebtn = document.querySelector(".delete");
// deletebtn.addEventListener("click", deleteTickets);

// let filters = document.querySelectorAll(".filter");
// for(let i=0; i<filters.length; i++){
//     filters[i].addEventListener("click", filterHandler);
// }

// if(allTasks != null) {
//     allTasks = JSON.parse(allTasks);
//     for(let i = 0; i < allTasks.length; i++) {
//         let ticket = document.createElement("div");
//         ticket.classList.add("ticket");
//         ticket.innerHTML = `<div class="ticket-color ${allTasks[i].priority}"></div>
//                             <div class="ticket-id">#${allTasks[i].id}</div>
//                             <div class="task">${allTasks[i].task}</div>`;    
//         tc.appendChild(ticket);
//         ticket.addEventListener("click", function(e) {
//             if(e.currentTarget.classList.contains("active")) {
//                 e.currentTarget.classList.remove("active")
//             } else {
//                 e.currentTarget.classList.add("active");
//             }
//         }); 
//     }
// }

// let selectedPriority;

// function showModal(e) {
//     if(!modalVisible){
//         let modal = document.createElement("div");
//         modal.classList.add("modal");
//         modal.innerHTML = `<div class="task-to-be-added" data-typed="false" contenteditable>Enter your task here</div>
//                             <div class="priority-list">
//                                 <div class="pink modal-filter active"></div>
//                                 <div class="red modal-filter"></div>
//                                 <div class="yellow modal-filter"></div>
//                                 <div class="green modal-filter"></div>
//                             </div>`;
//         tc.appendChild(modal);
//         let taskInput = document.querySelector(".task-to-be-added");
//         taskInput.addEventListener("click", (e) => {
//             if(e.currentTarget.getAttribute("data-typed") == "false"){
//                 e.currentTarget.innerText = "";
//                 e.currentTarget.setAttribute("data-typed", "true");
//             }
//         });
//         modalVisible = true;
//         selectedPriority = "pink";
//         taskInput.addEventListener("keypress", addTicket.bind(this, taskInput));
//         let modalFilters = document.querySelectorAll(".modal-filter");
//         for(let i=0; i<modalFilters.length; i++){
//             modalFilters[i].addEventListener("click", selectPriority.bind(this, taskInput));
//         }
//     }
// }

// function selectPriority(taskInput, e) {
//     let activeFilter = document.querySelector(".modal-filter.active");
//     activeFilter.classList.remove("active");
//     selectedPriority = e.currentTarget.classList[0];
//     e.currentTarget.classList.add("active");
//     taskInput.click();
//     taskInput.focus();
// }

// function addTicket(taskInput, e) {
//     if(e.key == "Enter" && e.shiftKey == false){
//         if(taskInput.innerText.trim() != ""){
//             let task = taskInput.innerText;
//             let uid = new ShortUniqueId();
//             let id = uid();
//             let ticket = document.createElement("div");
//             ticket.classList.add("ticket");
//             ticket.innerHTML = `<div class="ticket-color ${selectedPriority}"></div>
//                                 <div class="ticket-id">#${id}</div>
//                                 <div class="task">${task}</div>`;               
//             document.querySelector(".modal").remove();
//             modalVisible = false; 
//             tc.appendChild(ticket);
//             ticket.addEventListener("click", function(e) {
//                 if(e.currentTarget.classList.contains("active")) {
//                     e.currentTarget.classList.remove("active")
//                 } else {
//                     e.currentTarget.classList.add("active");
//                 }
//             });  
//             //adding in local storage
//             if(allTasks == null){  //if there is no ticket in storage
//                 let data = [{"id":id, "task": task, "priority": selectedPriority}];
//                 localStorage.setItem("allTasks", JSON.stringify(data));
//             }     
//             else{
//                 let data = allTasks;
//                 data.push({"id":id, "task": task, "priority": selectedPriority});
//                 localStorage.setItem("allTasks", JSON.stringify(data));
//             }  
//         }    
//         else{
//             e.preventDefault();
//             alert("Error! Please enter your task");
//         }
//     }
// }

// function deleteTickets(e) {
//     let ticketsSelected = document.querySelectorAll(".active");
//     for(let i=0; i<ticketsSelected.length; i++){
//         ticketsSelected[i].remove();
//         let id = ticketsSelected[i].querySelector(".ticket-id").innerText;
//         console.log(id);
//         allTasks = allTasks.filter((data) => {
//             return id != "#" + data.id;
//         });
//         localStorage.setItem("allTasks", JSON.stringify(allTasks));
//     }
// }

// function filterHandler(e) {
//     let other = document.querySelector(".selected-color");
//     if(other != null)
//         other.classList.remove("selected-color");
//     e.currentTarget.classList.add("selected-color");
//     let color = e.currentTarget.classList[1].split("-")[0];
//     let selectedTasks = allTasks.filter((data) => {
//         return data.priority == color;
//     });
//     showSelectedTickets(selectedTasks);
// }

// function showSelectedTickets(selectedTasks) {
//     tc.innerHTML = "";
//     for(let i=0; i<selectedTasks.length; i++){
//         let ticket = document.createElement("div");
//         ticket.classList.add("ticket");
//         ticket.innerHTML = `<div class="ticket-color ${selectedTasks[i].priority}"></div>
//                             <div class="ticket-id">#${selectedTasks[i].id}</div>
//                             <div class="task">${selectedTasks[i].task}</div>`;    
//         tc.appendChild(ticket);
//         ticket.addEventListener("click", function(e) {
//             if(e.currentTarget.classList.contains("active")) {
//                 e.currentTarget.classList.remove("active")
//             } else {
//                 e.currentTarget.classList.add("active");
//             }
//         }); 
//     }
