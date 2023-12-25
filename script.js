
let input = document.querySelector(".input input");

function addTask(task) {
    let lists = document.querySelector(".lists");
    let text = document.querySelector(".input input").value;
    let list = document.createElement("li");

    if(text.length<=0)
    {
        return input.style.borderBlockColor = "red";
    }
    else{
    input.style.borderBlockColor = "lightgray";
    list.innerText = text;
    console.log(list);
    lists.prepend(list);
    clearTextValue();
    }
}

function clearTextValue(){
    let clearTextValue = input;
    clearTextValue.value = "";
}

input.addEventListener("keypress", function(e) {
    if(e.key==="Enter")
    {
        e.preventDefault();
        addTask();
    }
})