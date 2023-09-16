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
    { name: "cat", image: "../img/cat.png" },
];

// sort the cardArray randomly
cardsArray.sort(() => 0.5 - Math.random());

// read the user's name from input field;
function userInput() {
    let userNameValue = userNameInput.value;
    userName.innerHTML = `<span>Hi</span> ${userNameValue}`;
}

//initial the moves count and wins count
let movesCount = 0,
    winsCount = 0;

//create a function to count the user moves
function countingMoves() {
    movesCount += 1;
    userMoves.innerHTML = `<span>Moves: </span> ${movesCount}`;
}

//initial the time
let seconds = 0,
    minutes = 0;

//create a function to count the time when the game start
function timer() {
    seconds += 1;
    // for minutes
    if ((seconds = 60)) {
        minutes += 1;
        seconds = 0;
    }
    //displaying the time
    let secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;

    let minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;

    timeValue.innerHTML = `<span>Time:</span> ${minutesDisplay}:${secondsDisplay}`;
}

//create a game grid
function createGameGrid() {
    //loop over the cardsArray
    for (let i = 0; i < cardsArray.length; i++) {
        //create an img element
        const card = document.createElement("img");
        //add class attribute of game-card
        card.classList.add("game-card");
        //set source attribute and assing the image source from cardsArray into it
        card.setAttribute("src", "assets/img/cardCover.jpg");
        //as well as set the card id attribute
        card.setAttribute("card-id", i);
        //and add a event listener for card to be flip when the user click on card
        card.addEventListener("click", flipCard);
        //add all the cards to gameGrid
        gameGrid.appendChild(card);
    }
}

//create an empty array to store the user choosen card
let choosedCard = [];

//create array of choosed cards id's
let idsOfChoosedCards = [];

//create an array to control the cards
let wonCards = [];
//create a flag for starting the game
let gameStarted = false;

//create a function to flip the cards
function flipCard() {
    if (gameStarted) {
        const cardId = this.getAttribute("card-id");
        //add a chosen card to an empty array
        choosedCard.push(cardsArray[cardId].name);
        //and a card's id to other empty array
        idsOfChoosedCards.push(cardId);

        this.setAttribute("src", cardsArray[cardId].image);
        if (choosedCard.length === 2) {
            //set a time of 5s for checking the cards
            setTimeout(checkCards, 500);
        }

        //start to count moves and time when the user start the game
        if (movesCount === 0 && seconds == 0 && minutes === 0) {
            //timer starts
            setInterval(timer, 1000);
        }
        userInput();
        countingMoves();
    }
}




instructionButton.addEventListener('click', function () {
    instructionModal.style.display = "block";
    overlay.classList.add("active");
});

// Event listener to close the instructions modal
closeModalButton.addEventListener("click", function () {
    instructionModal.style.display = "none";
    overlay.classList.remove("active");
});

// Event listener to show the user input modal
startButton.addEventListener("click", function () {
    userNameModal.style.display = "block";
    overlay.classList.add("active");
});

// Event listener to start the game and handle user input
playButton.addEventListener("click", function () {
    //create variable to store user name
    const userName = userNameInput.value.trim();

    if (userName !== "") {
        // Close the user input modal
        userNameModal.style.display = "none";
        overlay.classList.remove("active");

        //start the game goes here


        //and remove the listener from play button
        playButton.removeEventListener("click", () => { });
    } else {
        alert("Please provide a username to start the gamne!");
    }
});