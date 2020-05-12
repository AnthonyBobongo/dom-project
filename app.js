// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const fiter = document.querySelector('#filer');
const taskInput = document.querySelector('#task');

//Load all even listeners

loadEventListeners();

//Loading all event listeners

function loadEventListeners() {
//DOM event listener
  document.addEventListener('DOMContentLoaded',getTasks);
//Add Task event
  form.addEventListener('submit',addTask);
  
  // Remove task event
  taskList.addEventListener('click',removeTask);

  //Clear task events
  clearBtn.addEventListener('click',clearTasks);

  //Filtering task events
filter.addEventListener('keyup', filterTasks);
}

//Get tasks from LS
function getTasks(){

  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks =[];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){

  const li=document.createElement('li');
 
  li.className = 'collection-item';
  //Create text node and append to li

  li.appendChild(document.createTextNode(task));

  //Create a new link element
  const link = document.createElement('a');

  //Add class
  link.className = 'delete-item secondary-content'

  //Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>'; 

  //Append the link to li
  li.appendChild(link);

  //Append li to ul

  taskList.appendChild(li);

  });

}


//Adding a task

function addTask(e){
  if(taskInput.value === ''){
    alert('Whoops did you forget something?');
  }

  //Create li Element
  const li=document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //Create text node and append to li

  li.appendChild(document.createTextNode(taskInput.value));

  //Create a new link element
  const link = document.createElement('a');

  //Add class
  link.className = 'delete-item secondary-content'

  //Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>'; 

  //Append the link to li
  li.appendChild(link);

  //Append li to ul

  taskList.appendChild(li);

  //Store app in local storage

  storeTaskInLocalStorage(taskInput.value);

  //Clear input

  taskInput.value= '';


  e.preventDefault();

}

//Store the tasks

function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks =[];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task 
function removeTask(e){
  if(e.target.parentElement.classList.contains
    ('delete-item')) {
      if(confirm('Are you sure?')) {
      }
    e.target.parentElement.parentElement.remove();

    //Removing task from Local Storage
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

function removeTaskFromLocalStorage(taskItem){

  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks =[];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent ===){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks',JSON.stringify(tasks));


}

//Clear all of the tasks
function clearTasks(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);

  }
}

function filterTasks(e) {

  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){

    const item= task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';

    } else{
      task.style.display = 'none';
    }

  });

}