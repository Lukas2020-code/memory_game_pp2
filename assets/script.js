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

//Array of card objects
const cardsArray = [
    { name: "bee", image: "assets/img/bee.png" },
    { name: "bunny", image: "assets/img/bunny.png" },
    { name: "lamb", image: "assets/img/lamb.png" },
    { name: "snake", image: "assets/img/snake.png" },
    { name: "cow", image: "assets/img/cow.png" },
    { name: "tiger", image: "assets/img/tiger.png" },
    { name: "dog", image: "assets/img/dog.png" },
    { name: "cat", image: "assets/img/cat.png" },
    { name: "bee", image: "assets/img/bee.png" },
    { name: "bunny", image: "assets/img/bunny.png" },
    { name: "lamb", image: "assets/img/lamb.png" },
    { name: "snake", image: "assets/img/snake.png" },
    { name: "cow", image: "assets/img/cow.png" },
    { name: "tiger", image: "assets/img/tiger.png" },
    { name: "dog", image: "assets/img/dog.png" },
    { name: "cat", image: "assets/img/cat.png" },
];