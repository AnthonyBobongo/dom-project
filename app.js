// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const fiter = document.querySelector('#filer');
const taskInput = document.querySelector('#task');

//Load all even listeners

loadEventListeners();

//Loading all even listeners

function loadEventListeners() {
//Add Task event
  form.addEventListener('submit',addTask);
}

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

  console.log(li);

  e.preventDefault

}
