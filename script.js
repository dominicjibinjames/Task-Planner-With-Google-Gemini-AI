let input = document.querySelector(".input input");
let deleteTask = document.querySelector(".fa-trash-can");
let count = 0; //to track the ID's

//to add and delete items in the list
function addTask(count) {
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
        lists.prepend(list);
        clearTextValue();
        

    //to Delete items in the List
    let deleteItem = document.getElementById(`${count}`).childNodes[1];

    deleteItem.addEventListener("click", function(e){
        let target = e.target.id;
        let deleteList = document.getElementById(target);
        deleteList.remove();
    })
    }
}

function clearTextValue(){
    let clearTextValue = input;
    clearTextValue.value = "";
    count++;
}

input.addEventListener("keypress", function(e) {
    if(e.key==="Enter")
    {
        e.preventDefault();
        addTask(count);
    }
})
