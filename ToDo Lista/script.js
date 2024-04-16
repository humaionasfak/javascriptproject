"use strict";
const todoElm = document.querySelector(".todo_List_elm");
const input = document.querySelector("input");
const buttonAddtudu = document.querySelector("#add_btn");
const deleteBtn = document.querySelector(".delete");

//*get localStorage function
const getItemTodoList = () => {
  return JSON.parse(localStorage.getItem("youtubeTodoList"));
};

// remove local storage function
const addTodoListLocalStorage = (localTodo) => {
  return localStorage.setItem("youtubeTodoList", JSON.stringify(localTodo));
};
let localTodo = getItemTodoList() || [];

const addTodoDynamicElm = (currElm) => {
  const div = document.createElement("div");
  div.classList.add("main_todo_div");
  div.innerHTML = `<li>${currElm}</li> <button class="delete">Delete</button>`;
  todoElm.append(div);
};

//?main function
const addTudu = (e) => {
  const todoListValue = input.value.trim();
  input.value = "";

  if (todoListValue !== "" && !localTodo.includes(todoListValue)) {
    localTodo.push(todoListValue);
    localTodo = [...new Set(localTodo)];
    localStorage.setItem("youtubeTodoList", JSON.stringify(localTodo));
    addTodoDynamicElm(todoListValue);
  }
};

const showTodoList = () => {
  localTodo.forEach((currElm) => {
    addTodoDynamicElm(currElm);
  });
  console.log(localTodo);
};
showTodoList();

//remove todo list element and array
todoElm.addEventListener("click", function (e) {
  const todoList = e.target;
  let getTodoList = todoList.previousElementSibling.innerText;
  let parentElement = todoList.parentElement;

  localTodo = localTodo.filter((elm) => {
    return elm !== getTodoList;
  });
  addTodoListLocalStorage(localTodo);
  parentElement.remove();
  console.log(localTodo);
});

buttonAddtudu.addEventListener("click", addTudu);
