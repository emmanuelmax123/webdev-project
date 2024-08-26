let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Draws: 0,
};

updateScoreElement();

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.Wins}, loss: ${score.Losses}, Ties: ${score.Draws}`;
}

let isAutoPlay = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerMove = pickBotmove();
      playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
    document.querySelector(".js-autoplay").innerHTML = "Stop Playing";
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
    document.querySelector(".js-autoplay").innerHTML = "Auto Play";
  }
}

const rock = document
  .querySelector(".js-Rock")
  .addEventListener("click", () => {
    playGame("Rock");
  });

const paper = document
  .querySelector(".js-paper")
  .addEventListener("click", () => {
    playGame("paper");
  });

const scissors = document
  .querySelector(".js-scissors")
  .addEventListener("click", () => {
    playGame("Scissors");
  });

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("Scissors");
  } else if (event.key === "a") {
    // controls autoplay
    autoPlay();
  } else if (event.key === "r") {
  } else if (event.key === "Backspace") {
    resetScore();
  }
});

function playGame(playerMove) {
  const botMove1 = pickBotmove();
  let result = "";
  if (playerMove === "Rock") {
    if (botMove1 === "Rock") {
      result = "Tie";
    } else if (botMove1 === "paper") {
      result = "You Lose";
    } else if (botMove1 === "Scissors") {
      result = "You win";
    }
  } else if (playerMove === "paper") {
    if (botMove1 === "Rock") {
      result = "You win";
    } else if (botMove1 === "paper") {
      result = "Tie";
    } else if (botMove1 === "Scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "Scissors") {
    if (botMove1 === "Rock") {
      result = "You Lose";
    } else if (botMove1 === "paper") {
      result = "You win";
    } else if (botMove1 === "Scissors") {
      result = "Tie";
    }
  }
  if (result === "You win") {
    score.Wins += 1;
  } else if (result === "You Lose") {
    score.Losses += 1;
  } else if (result === "Tie") {
    score.Draws += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="assets/${playerMove}-emoji.png" alt="" class="move-icon" />
<img src="assets/${botMove1}-emoji.png" alt="" class="move-icon" /> Ai picked`;
}
function pickBotmove() {
  let botMove1 = "";
  const botNum1 = Math.random();

  if (botNum1 >= 0 && botNum1 < 1 / 3) {
    botMove1 = "Rock";
  } else if (botNum1 >= 1 / 3 && botNum1 < 2 / 3) {
    botMove1 = "paper";
  } else if (botNum1 >= 2 / 3 && botNum1 < 1) {
    botMove1 = "Scissors";
  }
  return botMove1;
}

function resetScore() {
  score.Wins = 0;
  score.Losses = 0;
  score.Draws = 0;
  localStorage.removeItem("score");
  updateScoreElement();
}

document.querySelector(".js-resetbtn").addEventListener("click", () => {
  document.querySelector(".request").innerHTML =
    'are you sure you want to restart <button class="yes btn">Yes</button> <button class="no btn">NO</button>';
  const yesbtn = document.querySelector(".yes");
  yesbtn.addEventListener("click", () => {
    resetScore();
    document.querySelector(".request").innerHTML = "";
  });
  const nobtn = document.querySelector(".no");
  nobtn.addEventListener("click", () => {
    console.log("works");
    document.querySelector(".request").innerHTML = "";
  });
});
