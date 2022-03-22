let todoInput = document.querySelector(".inbox-area"); // todo input
let addTodoButton = document.querySelector(".add-btn"); // add todo button
let todosList = document.querySelector(".list"); // empty ul



function addTodo(){
    let todo = todoInput.value;
    // "" , 0 , false , undefined
    if(todo){
        let listItem = document.createElement("div"); // it creates a element
        listItem.classList.add("list-rec"); // it adds class to a element
        // <li class="todo-item"></li>;

        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;
        // <p class="todo">Learn HTML !!!</p>

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("del-btn");
        deleteButton.innerHTML = `<img src="./delete.png">`;
        // <button class="delete-task">img</button>


        deleteButton.addEventListener("click" , function(event){
            // console.log("delete todo clicked !!!");
            console.log(event);
            event.path[2].remove();
        })

        listItem.append(pTag);
        listItem.append(deleteButton);
        todosList.append(listItem);
        todoInput.value = "";
    }else{
        alert("You Haven't Entered Any Todo !!!");
    }
}



addTodoButton.addEventListener("click" , function(){
    console.log("clicked on add");
    addTodo();
});

todoInput.addEventListener("keypress" , function(e){
    if(e.key == "Enter"){
        addTodo();
    }
});
