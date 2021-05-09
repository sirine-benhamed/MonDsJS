
const todoInput1 = document.querySelector(".todo_input1");
const todoInput2 = document.querySelector(".todo_input2");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);


function addTodo(e) {
   e.preventDefault();
 
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   
   const newTodo = document.createElement("li");
   const name = todoInput1.value;
   const content = todoInput2.value;
   newTodo.innerHTML = "<b>" + name + ": " + "</b>" + content;
   newTodo.classList.add("todo_item");
   todoDiv.appendChild(newTodo);
   if (todoInput1.value === "" || todoInput2.value === "") {
      return null;
   }
   
   const deleteButton = document.createElement("button");
   deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
   deleteButton.classList.add("delete_btn");
   todoDiv.appendChild(deleteButton);
  
   todoList.appendChild(todoDiv);
  
   todoInput1.value = "";
   todoInput2.value = "";
}


function deleteTodo(e) {
   const item = e.target;
  
   if (item.classList[0] === "delete_btn") {
      const todo = item.parentElement;
     
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function () {
         todo.remove();
      });
   }
}
