const TODO_LIST_KEY = 'todo-list';

const input = document.getElementById('input');
const addButton = document.getElementById('add-button');
const ul = document.getElementById('ul');

let todoList = JSON.parse(localStorage.getItem(TODO_LIST_KEY)) || [];

//초기화 - 화면에 표시
todoList.forEach((todo) => {
  const li = document.createElement('li');
  li.textContent = todo;
  ul.appendChild(li);
  }
)
  
const handleAddTodoList = (e) => {
  const value = input.value.trim();

  //빈 문자열일 때 return
  if (!value) return;

  const li = document.createElement('li');
  li.textContent = value;
  ul.appendChild(li);

  todoList.push(value);
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));

  //input 초기화
  input.value = '';
}

//버튼 클릭 시 이벤트
addButton.addEventListener('click', handleAddTodoList);