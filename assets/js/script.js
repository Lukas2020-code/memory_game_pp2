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
const gameGrid = document.querySelector(".game-content");
const userName = document.getElementById("userName");
const userMoves = document.getElementById("userMoves");
const timeValue = document.getElementById("timer");
const userScores = document.querySelector(".user-scores");
let timerInterval = null;

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

allowedClick = true;

// read the user's name from input field;
function userInput() {
    let userNameValue = userNameInput.value;
    userName.innerHTML = `<span>Hi</span> ${userNameValue}`;
}

//initial the moves count and wins count
let movesCount = 0;
// winsCount = 0;

//create a function to count the user moves
function countingMoves() {
    userMoves.innerHTML = `<span>Moves: </span> ${movesCount}`;
    movesCount += 1;
}

//initial the time
let seconds = 0, minutes = 0;

//create a function to count the time when the game start
function timer() {
    seconds += 1;
    // for minutes
    if ((seconds === 60)) {
        minutes += 1;
        seconds = 0;
    }
    //displaying the time
    let secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;

    let minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;

    timeValue.innerHTML = `<span>Time:</span> ${minutesDisplay}:${secondsDisplay}`;
}

//create a function to flip the cards
function flipCard() {

    if (gameStarted) {
        if (allowedClick == true) {
            //start the timer
            if (timerInterval === null) {
                timerInterval = setInterval(timer, 1000);
            }
            //create variable to add attribute of card-id to the game-card
            const cardId = this.getAttribute("card-id");
            //add a chosen card to an empty array
            choosedCard.push(cardsArray[cardId].name);
            //and a card's id to other empty array
            idsOfChoosedCards.push(cardId);

            this.setAttribute("src", cardsArray[cardId].image);
            if (choosedCard.length === 2) {
                //set a time of 2s for checking the cards
                allowedClick = false;
                setTimeout(checkCards, 2000);
            }
        }   
    }
}

//create a game grid
function createGameGrid() {
    userInput();
    countingMoves();

    // sort the cardArray randomly
    cardsArray.sort(() => 0.5 - Math.random());
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

        // //and add a event listener for card to be flip when the user click on card
        // card.addEventListener("click", flipCard);
        //add all the cards to gameGrid
        gameGrid.appendChild(card);
    }
}

//create an empty array to store the user choosed card
let choosedCard = [];

//create array of choosed cards id's
let idsOfChoosedCards = [];

//create an array to control the cards
let wonCards = [];
//create a flag for starting the game
let gameStarted = false;

//create a function to check the fliped cards if the match
function checkCards() {
    //select the whole game grid for match
    const cards = document.querySelectorAll("img");
    const card1 = idsOfChoosedCards[0];
    const card2 = idsOfChoosedCards[1];

    if (choosedCard[0] == choosedCard[1]) {
        //removed the event listener from cards if they match
        cards[card1].removeEventListener("click", flipCard);
        cards[card2].removeEventListener("click", flipCard);
        // and add the cards to wonCards array
        wonCards.push(card1);       
        wonCards.push(card2);
    } else {
        //if they doesn't match flip the cards back again
        cards[card1].setAttribute("src", "assets/img/cardCover.jpg");
        cards[card2].setAttribute("src", "assets/img/cardCover.jpg");
    }
    // and add the moves
    countingMoves();
    allowedClick = true;

    choosedCard = [];
    idsOfChoosedCards = [];
    //if 
    if (wonCards.length == cardsArray.length) {
        clearInterval(timerInterval);
        timerInterval = null;
        displayUserScores();
        gameGrid.style.display = "none";
    }
}



//create a function to show the user-scores
function displayUserScores() {
    const timeString = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""
        }${seconds}`;

    userScores.innerHTML = `
        <h2>You won!!!</h2>
        <p>Moves: ${movesCount}</p> 
        <p>Time: ${timeString}</p>
        <div class="user-scores-buttons">
            <button id="start-again" class="play-button">Start Again</button>
            <button id="exit-game" class="cancel-button">Exit Game</button>
         </div>`;

    userScores.style.display = "block";
}

// Define a function to start the game
function startAgain() {
    // Reset game variables
    movesCount = 0;
    winsCount = 0;
    seconds = 0;
    minutes = 0;
    choosedCard = [];
    idsOfChoosedCards = [];
    wonCards = [];

    // Clear the game grid
    gameGrid.innerHTML = "";

    // Create a new game grid
    createGameGrid();

    // Reset the display of user information
    userMoves.innerHTML = "<span>Moves: </span> 0";
    timeValue.innerHTML = "<span>Time:</span> 00:00";
    userName.innerHTML = `<span>Hi</span> ${userNameValue}`;
}

function exitGame() {
    //hide the scores modal
    userScores.style.display = "none";
    //back to the home page
    window.location.href = "index.html";
}

//Event listener to open instruction modal
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

// Event listener to closed the user input modal
cancelButton.addEventListener("click", function () {
    userNameModal.style.display = "none";
    overlay.classList.remove("active");
    userNameInput.value = "";
});

// Event listener to start the game and handle user input
playButton.addEventListener("click", function () {
    //create variable to store user name
    const userName = userNameInput.value.trim();

    if (userName !== "") {
        console.log(userName);
        // Close the user input modal
        userNameModal.style.display = "none";
        overlay.classList.remove("active");

        //start the game goes here
        gameStarted = true;
        createGameGrid();
        gameGrid.style.display = "block";

        //and remove the listener from play button
        playButton.removeEventListener("click", () => { });
        userNameInput.value = "";

    } else {
        alert("Please provide a username to start the gamne!");
    }
});

//Event listener for start the game again
// startAgainButton.addEventListener("click", startAgain);

startAgainButton.addEventListener("click", function () {
    startAgain();
});

//Event listener for exit the game
exitGameButton.addEventListener("click", exitGame);