function loadToDO(){
    // This Function will Load the todo from the browser 
    const todo =  JSON.parse(localStorage.getItem("Data 1")) || {"todoList":[]};
    console.log(todo);
    return todo;
}
function addToDoToLocalStorage(todoText){
  const todo=  loadToDO();
  todo.todoList.push(todoText);
  localStorage.setItem("todo",JSON.stringify(todo));
}
function appendTodoInHtml(todoText){
    const todoList =  document.getElementById("todoList");
    const todo = document.createElement("li");
    todo.textContent = todoText;
    todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded",()=>{
    const todoinput = document.getElementById("todoInput");
    const submitButton = document.getElementById("ToDoButton");

    submitButton.addEventListener("click",()=>{
        todoText = todoinput.value;
        if(todoText ==''){
            alert("Please Enter Something ");
        }
        else{
            addToDoToLocalStorage(todoText);
            appendTodoInHtml(todoText);
        }
    })
    todoinput.addEventListener("change",(event)=>{
       // console.log("Something Change",event.target.value);
        //console.log(todoinput1.value);

        const todoText = event.target.value.trim();
        console.log(todoText);
    })
    loadToDO();
})

