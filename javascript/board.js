const addBoardBtn = document.querySelector("#add-board-btn");
const addBoardModal = document.getElementById("add-board-modal");
const closeBoardModal = document.getElementById("cancel-board-modal");
const closeBoardModalIcon = document.getElementById("close-btn-icon");
const addBoardInput = document.getElementById("board-name");
const submitBoardBtn = document.getElementById("submit-board-btn");

// handle add new board modal open
function addNewBoard() {
  addBoardBtn.addEventListener("click", () => {
    handleOpenModal(addBoardModal);
  });
}

// Close button add board modal close
closeBoardModal.addEventListener("click", () => {
  handleCloseModal(addBoardModal);
});

closeBoardModalIcon.addEventListener("click", () => {
  handleCloseModal(addBoardModal);
});

const handleCloseModal = (ele) => {
  ele.style.display = "none";
};

const handleOpenModal = (ele) => {
  ele.style.display = "block";
};

//handle input on add board

function handleBoardValue() {
  const boardName = addBoardInput.value;

  // Blank input validation
  if (boardName == "") {
    alert("Board name should not be empty");
    return;
  }

  displayBoardName(boardName);

  // clear the values
  addBoardInput.value = "";
  handleCloseModal(addBoardModal);
}

function displayBoardName(boardName) {
  console.log(boardName);
}

submitBoardBtn.addEventListener("click", handleBoardValue);

addNewBoard();
displayBoardName();
