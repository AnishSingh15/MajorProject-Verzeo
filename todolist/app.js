const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-lists");
const priortyfilter =  document.querySelector(".priorty");
const Btn = document.querySelector(".btn-to");

todoButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo-style");
    ////////////////////////////
    const newLI = document.createElement("li")
    newLI.classList.add("todo-style");
    newDiv.appendChild(newLI);
    ////////////////////////////////////
    const text = document.createElement("textarea");
    text.innerText = todoInput.value;
    text.classList.add("textarea-style");
    newLI.appendChild(text);
    /////////////////////////////
    const Check = document.createElement("button");
    Check.innerHTML = 'Low'
    Check.classList.add("p1")
    newDiv.appendChild(Check);
    //////////////////////////////
    const Check2 = document.createElement("button");
    Check2.innerHTML = 'Med'
    Check2.classList.add("p2")
    newDiv.appendChild(Check2);
    /////////////////////////////
    const Check3 = document.createElement("button");
    Check3.innerHTML = 'High'
    Check3.classList.add("p3")
    newDiv.appendChild(Check3);
    ////////////////////////////
    const trash = document.createElement("button");
    trash.innerHTML = '<i class="fas fa-trash"></i>'
    trash.classList.add("p4")
    newDiv.appendChild(trash);
    //////////////////////////////
    todoList.appendChild(newDiv);
    todoInput.value = "";
    /////////////////////////////
    trash.addEventListener("click", () => {
        newDiv.remove();
    })
})

todoList.addEventListener("click", (e) => {
    const item = e.target;
    if(item.classList.contains("p1")) {
       const itemParent = item.parentElement;
       itemParent.classList.toggle("toggleGreen");
    }
    else if(item.classList.contains("p2")) {
        const itemParent = item.parentElement;
        itemParent.classList.toggle("toggleAmber");
     }
     else if(item.classList.contains("p3")) {
        const itemParent = item.parentElement;
        itemParent.classList.toggle("toggleRed");
     }
     
})



priortyfilter.addEventListener("click", (e) => {
    const priortyItem = todoList.childNodes;
    priortyItem.forEach(function(item) {
        switch(e.target.value){
            case "all":
                item.style.display = "flex";
                break;
            case "low":
                if(item.classList.contains("toggleGreen")){
                    item.style.display = "flex";
                }else {
                    item.style.display = "none";
                }
              break;
            case "medium":
                if(item.classList.contains("toggleAmber")){
                    item.style.display = "flex";
                }else {
                    item.style.display = "none";
                }
                break;
            case "high":
                if(item.classList.contains("toggleRed")){
                    item.style.display = "flex";
                }else {
                    item.style.display = "none";
                }

        }
    })
})


Btn.addEventListener("click", (e) => {
    const priortyItem = todoList.childNodes;
    priortyItem.forEach(function(item) {
        switch(e.target.value) {
        case "l": 
        if(item.classList.contains("toggleGreen")){
            item.style.display = "flex";
        }else {
            item.style.display = "none";
        }
        break;
        case "m":
            if(item.classList.contains("toggleAmber")){
                item.style.display = "flex";
            }else {
                item.style.display = "none";
            }
            break;
        case "h":
            if(item.classList.contains("toggleRed")){
                item.style.display = "flex";
            }else {
                item.style.display = "none";
            } 
        }
    })
})

