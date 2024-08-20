"use strict";
const submitBtn = document.querySelector(".submit-todo");
const todoList = document.querySelector(".todo-list");
const inputTodo = document.querySelector(".input-todo");
const arr = [];

const updateUi = () => {
  todoList.innerHTML = "";
  arr.forEach(function (element, i) {
    let html = `<div class="flexy${i} flex">
              <div class="lists">${element}</div>
              <button class="add delete-todo" onclick = "
              arr.splice(${i},1)
              document.querySelector('.flexy${i}').remove()
              ">Delete</button>
            </div>`;
    todoList.insertAdjacentHTML("afterbegin", html);
  });
};

submitBtn.addEventListener("click", () => {
  arr.push(inputTodo.value);
  updateUi();
});
