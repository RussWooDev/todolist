const inputItem = document.getElementById("userInput");
const enter = document.getElementById("enter");
const ul = document.querySelector("ul");
const button = document.querySelector("button");

const clear = document.getElementById("clear");

const inputValid = () => {
    return inputItem.value.length >0;
}

const createItem = () => {
    if(inputValid()) {
        const li = document.createElement("li");
        li.innerHTML = `<button class="completed">done</button> ${inputItem.value}`;
        ul.appendChild(li);
        inputItem.value = "";
    }
}

const keyPressed = (event) => {
    if(event.keyCode === 13){
        createItem();
    }
}

const deleteItem = (event) => {
    if(event.target.tagName === "LI") {
        const li = event.target;
        const parent = li.parentNode;
        parent.removeChild(li);
    }

}

const done = (event) => {
    if(event.target.classList.contains("completed")){
        const li = event.target.parentNode;
        li.classList.toggle("done");
    }
}

const clearTask = () => {
    const listAll = document.querySelectorAll("li");
    listAll.forEach(li => li.remove());
    
}

enter.addEventListener('click', createItem);

inputItem.addEventListener("keydown", keyPressed);

ul.addEventListener("click", done);

button.addEventListener("click", done);

clear.addEventListener("click", clearTask);