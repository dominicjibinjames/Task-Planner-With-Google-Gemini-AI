let input = document.querySelector(".input input");
let deleteTask = document.querySelector(".fa-trash-can");
let addBtn = document.querySelector("#addBtn");
let count = 0; //to track the ID's

//to add and delete items in the list
function addTask() {
    let lists = document.querySelector(".lists");
    let text = document.querySelector(".input input").value;
    let list = document.createElement("li");
    list.setAttribute("id", `${count}`)
    
    if(text.length<=0)
    {
        return input.style.borderBlockColor = "red";
    }
    else{
        input.style.borderBlockColor = "lightgray";
        list.innerHTML = `${text} <i id="${count}" class="fa-regular fa-trash-can"></i>`;

        let deleteItem = list.querySelector('i');
        deleteItem.addEventListener("click", function(e) {
            let target = e.target.id;
            let deleteList = document.getElementById(target);
            deleteList.remove();
        });

        lists.prepend(list);
        clearTextValue();
    }
}

function clearTextValue(){
    let clearTextValue = input;
    clearTextValue.value = "";
    count++;
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
})

input.addEventListener("keypress", function(e) {
    if(e.key==="Enter")
    {
        e.preventDefault();
        addTask();
    }
})






