const todoList = [];
renderRodolist();
function renderRodolist() {
  let todoListHTML = "";

  todoList.forEach((todoObject, i) => {
    const { name, dueDate } = todoObject;
    // this is called destucutring it works because the var name is the same as the property name
    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div> 
    <button class ="del-btn js-delete-btn">Delete</button>`;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document.querySelectorAll(".js-delete-btn").forEach((delbtn, i) => {
    delbtn.addEventListener("click", () => {
      todoList.splice(i, 1);
      renderRodolist();
    });
  });
}

const todoBtn = document
  .querySelector(".js-Todo-btn")
  .addEventListener("click", () => {
    addTodo();
  });
function addTodo() {
  const inputElem = document.querySelector(".js-name-input ");
  const name = inputElem.value;

  const dueDateElem = document.querySelector(".js-dueDate ");
  const dueDate = dueDateElem.value;

  // todoList.push({ name: name, dueDate: dueDate });
  todoList.push({ name, dueDate });
  // if the property and value have the same name then we can use the shortcut above

  inputElem.value = "";
  renderRodolist();
  localStorage.setItem("todo", JSON.stringify(todoList));
}
