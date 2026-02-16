const board = document.getElementById("board");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");
const scoreX = document.getElementById("score-x");
const scoreO = document.getElementById("score-o");
const scoreTies = document.getElementById("score-ties");

const state = {
  currentPlayer: "X",
  cells: Array(9).fill(""),
  isLocked: false,
  scores: {
    X: 0,
    O: 0,
    ties: 0,
  },
};

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const updateStatus = (message) => {
  statusText.textContent = message;
};

const updateScores = () => {
  scoreX.textContent = state.scores.X;
  scoreO.textContent = state.scores.O;
  scoreTies.textContent = state.scores.ties;
};

const highlightWinner = (line) => {
  if (!line) return;
  line.forEach((index) => {
    const cell = board.querySelector(`[data-index="${index}"]`);
    if (cell) {
      cell.classList.add("winner");
    }
  });
};

const clearHighlights = () => {
  board.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("winner");
  });
};

const checkWinner = () => {
  for (const line of winningLines) {
    const [a, b, c] = line;
    if (
      state.cells[a] &&
      state.cells[a] === state.cells[b] &&
      state.cells[a] === state.cells[c]
    ) {
      return { winner: state.cells[a], line };
    }
  }

  if (state.cells.every((cell) => cell !== "")) {
    return { winner: "tie" };
  }

  return null;
};

const handleMove = (event) => {
  const cell = event.target.closest(".cell");
  if (!cell || state.isLocked) return;

  const index = Number(cell.dataset.index);
  if (state.cells[index]) return;

  state.cells[index] = state.currentPlayer;
  cell.textContent = state.currentPlayer;
  cell.setAttribute("disabled", "disabled");

  const outcome = checkWinner();
  if (outcome) {
    state.isLocked = true;
    if (outcome.winner === "tie") {
      updateStatus("Tie game!");
      state.scores.ties += 1;
    } else {
      updateStatus(`${outcome.winner} wins!`);
      state.scores[outcome.winner] += 1;
      highlightWinner(outcome.line);
    }
    updateScores();
    return;
  }

  state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
  updateStatus(`${state.currentPlayer} turn`);
};

const resetBoard = () => {
  state.cells = Array(9).fill("");
  state.currentPlayer = "X";
  state.isLocked = false;
  clearHighlights();
  board.querySelectorAll(".cell").forEach((cell) => {
    cell.textContent = "";
    cell.removeAttribute("disabled");
  });
  updateStatus("X starts");
};

board.addEventListener("click", handleMove);
resetButton.addEventListener("click", resetBoard);

updateScores();
updateStatus("X starts");
