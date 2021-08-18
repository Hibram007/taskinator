var buttonEl = document.querySelector("#save-task"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

//This is defining the function (intsructions)
var createTaskHandler = function() { 
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

  //This is calling the function (activating)
buttonEl.addEventListener("click", createTaskHandler);
