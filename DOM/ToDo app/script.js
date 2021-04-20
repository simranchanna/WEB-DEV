let input = document.querySelector(".task-input");
let ul = document.querySelector(".list");

function deleteTask(e){
    e.currentTarget.remove();
}
input.addEventListener("keypress", (e) => {
    //console.log(e);
    let text = input.value;
    if(e.key == "Enter"){
        // console.log(text);
        if(!text){
            alert("Please enter a task !!");
            return;
        }
        input.value = "";
        let li = document.createElement("li");
        li.innerText = text;
        li.addEventListener("dblclick", deleteTask);
        ul.appendChild(li);
    }
});