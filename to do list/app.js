
const addItemInput = document.querySelector('input.addItemInput'); // select the input for adding items
const addItemButton = document.querySelector('button.addItemButton'); // selects the add button
const incompleteTasks = document.getElementById('incomeplete-tasks'); // selects incomplete task list by id
const completedTasks = document.getElementById('completed-tasks'); // selects completed task list by id



// adding items by clicking on button

addItemButton.addEventListener('click', () => {
  if(addItemInput.value.trim() === "") { // removing white spaces from string so that it would return as empty if no input
    return;} // return to exit the if function early
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
  
  // create finish button
  var finishButton = document.createElement("button");
  finishButton.className = "finishButton"
  li.insertBefore(finishButton, li.firstChild);
  finishButton.textContent = "Finished!" 
  // create delete button
  var deleteButton = document.createElement("button");
  deleteButton.className = "deleteItemButton"
  li.insertBefore(deleteButton, li.firstChild);
  deleteButton.textContent = "Delete"


  // finished button function
  finishButton.addEventListener('click', () => { // adds click event for finish button.
    document.querySelector('.finishButton').style.visibility = 'hidden'; // targets the button by class and hides it, stll occupying space
    let finishedTask = finishButton.parentNode; 
    finishButton.parentNode.parentNode.removeChild(finishButton.parentNode); // targetting button's parent's parent then removing their child,  which is button's parents
    completedTasks.appendChild(finishedTask)
   }); 
  
  // delete button function
  deleteButton.addEventListener('click', () => { // adds click event for finish button.
    let deleteTask = deleteButton.parentNode; 
    deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode); // targetting button's parent's parent then removing their child,  which is button's parents
  });
});







  
  

