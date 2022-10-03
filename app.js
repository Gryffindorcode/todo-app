// SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// EVENT LISTENERS

todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck)

// FUNCTIONS

 function addToDo (event) {
  // prevent form from submitting
  event.preventDefault()
  // ToDo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create LI
  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
  newToDo.classList.add('todo-item');
  todoDiv.appendChild(newToDo);
  // CHECK MARK BUTTON
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);
  // CHECK TRASH BUTTON
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  // APPEND TO LIST
  todoList.appendChild(todoDiv);
  // CLEAR TODO INPUT VALUE
  todoInput.value = '';

}

// DELETE BUTTON

function deleteCheck(e) {
  const item = e.target;
  // DELETE TODO
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    // ANIMATION
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });

  }

  // CHECK MARK
  if (item.classList[0]==='complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}








