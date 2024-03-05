const btnAddBoard = document.getElementById("addBoard");
const inputNameBoard = document.getElementById("nameBoard");
const mainContent = document.querySelector("main");

btnAddBoard.addEventListener("click", () => {
  const boardName = inputNameBoard.value.trim();
  if (boardName === "") {
    alert("Veuillez saisir un nom pour le tableau.");
    return;
  }
  createBoard(boardName);
});

function createBoard(name) {
  const newBoard = document.createElement("section");
  newBoard.classList.add("board");

  const boardTitle = document.createElement("h2");
  boardTitle.textContent = name;

  const deleteBoardButton = createDeleteButton(newBoard);
  deleteBoardButton.classList.add("deleteBtn");

  const addListButton = document.createElement("button");
  addListButton.textContent = "Ajouter une liste";
  addListButton.addEventListener("click", function () {
    const listName = prompt("Nom de la liste :");
    if (listName === null || listName.trim() === "") {
      return;
    }
    createList(listName, newBoard);
  });
  addListButton.classList.add("addBtn");

  const containerList = document.createElement("div");
  containerList.classList.add("container-list");
  containerList.appendChild(boardTitle);
  containerList.appendChild(deleteBoardButton);
  containerList.appendChild(addListButton);

  newBoard.appendChild(containerList);

  mainContent.appendChild(newBoard);
}

function createList(name, parent) {
  const newList = document.createElement("article");
  newList.classList.add("list");

  const listNameElement = document.createElement("h3");
  listNameElement.textContent = name;

  const deleteListButton = createDeleteButton(newList);
  deleteListButton.classList.add("deleteBtn");

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Ajouter une tâche";
  addTaskButton.addEventListener("click", function () {
    const taskName = prompt("Nom de la tâche :");
    if (taskName === null || taskName.trim() === "") {
      return;
    }
    createTask(taskName, newList);
  });
  addTaskButton.classList.add("addBtn");

  const containerCard = document.createElement("div");
  containerCard.classList.add("container-card");
  containerCard.appendChild(listNameElement);
  containerCard.appendChild(deleteListButton);
  containerCard.appendChild(addTaskButton);

  newList.appendChild(containerCard);
  parent.appendChild(newList);
}

function createTask(name, parent) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.textContent = name;

  const deleteTaskButton = createDeleteButton(newTask);
  deleteTaskButton.classList.add("deleteBtn");

  newTask.appendChild(deleteTaskButton);
  parent.appendChild(newTask);
}

function createDeleteButton(parent) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Supprimer";
  deleteButton.addEventListener("click", function () {
    parent.remove();
  });
  return deleteButton;
}
