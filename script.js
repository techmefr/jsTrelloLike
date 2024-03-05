// Gestion des boards
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
    const newBoard = document.createElement("div");
    newBoard.classList.add("board");

    const boardTitle = document.createElement("h2");
    boardTitle.textContent = name;

    const newListInput = document.createElement("input");
    newListInput.setAttribute("type", "text");
    newListInput.setAttribute("placeholder", "Nom de la liste");

    const addListButton = document.createElement("button");
    addListButton.textContent = "Ajouter";
    addListButton.addEventListener("click", function() {
        const listName = newListInput.value.trim();
        if (listName === "") {
            alert("Veuillez saisir un nom pour la liste.");
            return;
        }
        createList(listName, newBoard);
        newListInput.value = "";
    });

    newBoard.appendChild(boardTitle);
    newBoard.appendChild(newListInput);
    newBoard.appendChild(addListButton);
    mainContent.appendChild(newBoard);
}

function createList(name, parent) {
    const newList = document.createElement("div");
    newList.classList.add("list");
    newList.textContent = name;
    parent.appendChild(newList);
}

// Gestion des lists

// Gestion des tasks