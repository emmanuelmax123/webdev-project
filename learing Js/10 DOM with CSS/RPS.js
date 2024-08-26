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
