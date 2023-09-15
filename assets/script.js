/* Buttons */
const instructionButton = document.getElementById("instruction-button");
const closeModalButton = document.getElementById("close-modal-button");
const startButton = document.getElementById("start-button");
const playButton = document.getElementById("play-button");
const cancelButton = document.getElementById("cancel-button");
const startAgainButton = document.getElementById("start-again");
const exitGameButton = document.getElementById("exit-game");

/* Modal */
const instructionModal = document.querySelector(".instruction-modal");
const userNameModal = document.querySelector(".user-name-modal");
const userNameInput = document.getElementById("userNameInput");
const overlay = document.getElementById("overlay");

/* Game */
const gameGrid = document.getElementById("game-container");
const userName = document.getElementById("userName");
const userMoves = document.getElementById("userMoves");
const timeValue = document.getElementById("timer");
const userScores = document.querySelector(".user-scores");