const rollDice = document.querySelector(".card__btn-role");
const holdScore = document.querySelector(".card__btn-hold");
const newGame = document.querySelector(".card__btn-new");
const imgDice = document.querySelector(".card__img");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const info = document.querySelector(".card__img-instructions");
const popUp = document.querySelector(".card__info");

init();

imgDice.addEventListener("click", roleDice);
holdScore.addEventListener("click", holdDice);
newGame.addEventListener("click", init);
info.addEventListener("click", function() {
    document.querySelector(".card__info").style.visibility = "visible";
});
popUp.addEventListener("click", function() {
    document.querySelector(".card__info").style.visibility = "hidden";
});

function init() {
    player1Score = 0;
    player2Score = 0;
    currentScore = 0;
    player1.querySelector(".card__current-score").innerText = 0;
    player2.querySelector(".card__current-score").innerText = 0;
    player1.querySelector(".card__score").innerText = 0;
    player2.querySelector(".card__score").innerText = 0;
}

switchActivePlayer = (currentPlayer) => {
    currentScore = 0;
    currentPlayer.querySelector(".card__current-score").innerText = currentScore;
    player1.classList.toggle("active");
    player2.classList.toggle("active");
};

function roleDice() {
    const div = document.querySelector(".active");
    let player = div.dataset.player;
    const currentPlayer = document.querySelector(`.${player}`);
    let randomDice = Math.floor(Math.random() * 6) + 1;
    const playerScore = currentPlayer.querySelector(".card__current-score");
    imgDice.src = `./img/${randomDice}.png`;
    if (randomDice != 1) {
        currentScore += randomDice;
        playerScore.innerText = currentScore;
    } else {
        currentScore = 0;
        playerScore.innerText = currentScore;
        player1.classList.toggle("active");
        player2.classList.toggle("active");
    }
}

function holdDice() {
    const div = document.querySelector(".active");
    let player = div.dataset.player;
    const currentPlayer = document.querySelector(`.${player}`);
    const playerScore = currentPlayer.querySelector(".card__score");
    if (player === "player-1") {
        player1Score += currentScore;
        playerScore.innerText = player1Score;
        if (player1Score >= 50) {
            return winner(player);
        }
        switchActivePlayer(currentPlayer);
    } else {
        player2Score += currentScore;
        playerScore.innerText = player2Score;
        if (player2Score >= 50) {
            return winner(player);
        }
        switchActivePlayer(currentPlayer);
    }
}

function winner(player) {
    alert(`Winner is ${player}!!!`);
    init();
}