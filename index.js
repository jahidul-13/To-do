const todoInput = document.querySelector("#todoInput");
const btnAdd = document.querySelector("#btnAdd");
const todoList = document.querySelector("#todoList");

let editTodo = null;

const addTodo = ()=>{
    const inputText = todoInput.value.trim();

    if(todoInput.value == ""){
        alert("input filed is empty");

        return;
    }

    if(btnAdd.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        btnAdd.value = "Add";
        todoInput.value = "";
    }

    else{
        
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit";
    btnEdit.classList.add("btn","editbtn")
    li.appendChild(btnEdit);
    
    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Remove";
    btnDelete.classList.add("btn", "deletebtn")
    li.appendChild(btnDelete);

    todoList.appendChild(li);
    todoInput.value = "";

    }
}

const updeteTodo =(e)=>{
    if(e.target.innerHTML === "Remove"){
        todoList.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML === "Edit"){
        todoInput.value = e.target.previousElementSibling.innerHTML;
        todoInput.focus();
        btnAdd.value = "Edit";
        editTodo = e;
    }
}

btnAdd.addEventListener("click", addTodo);
todoList.addEventListener("click", updeteTodo);


