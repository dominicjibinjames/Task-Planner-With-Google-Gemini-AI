import { GoogleGenerativeAI } from "@google/generative-ai";

let aiBtn = document.querySelector("#aiBtn");

const API_KEY = "";
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);



 async function run() {
    let lists = document.querySelector(".lists");
    let text = document.querySelector(".input input").value;
    let list = document.createElement("li");


    list.setAttribute("id", `${count}`)
    
    if(text.length<=0)
    {
        return input.style.borderBlockColor = "red";
    }
    else{
    
    //Initiate Gemini Ai
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = text;

    //Loading Screen
    const loading = aiBtn.innerText = "Loading"
     
    //to temporarily Disable the Gen Ai Button to avoid multiple clicks
    aiBtn.setAttribute("disabled","");

    const result = await model.generateContent(prompt);


    const response = await result.response;

    let textContent;

    aiBtn.innerText = "Gen AI"

    try {
        textContent = response.text();
    } catch (error) {
        alert("Error: Please rephrase your query and try again!")
        aiBtn.removeAttribute("disabled","");
        return
    } 
   
    list.innerHTML = `${prompt}: <br>${textContent} <i id="${count}" class="fa-regular fa-trash-can"></i> `;
    list.style.whiteSpace = "pre-line"; //to preserve white spaces of recieved content

    //Delete button for the created list
    let deleteItem = list.querySelector('i');
    deleteItem.addEventListener("click", function(e) {
        let target = e.target.id;
        let deleteList = document.getElementById(target);
        deleteList.remove();
    });


    lists.prepend(list);
    clearTextValue();

    //to Enable the Gen Ai Button
    aiBtn.removeAttribute("disabled","");
}
    
}


aiBtn.addEventListener("click", () => {
    run();
})

function clearTextValue(){
    let clearTextValue = input;
    clearTextValue.value = "";
    count++
}






