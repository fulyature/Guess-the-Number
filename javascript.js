//veriables
let min = 1,
  max = 100,
  finalNbr = 4,
  guessRight = 3;

const minNbr = document.querySelector(".min");
const maxNbr = document.querySelector(".max");
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const game = document.querySelector(".game");
const message = document.querySelector(".message");
//min ve max degerleri beliriedim
minNbr.textContent = min;
maxNbr.textContent = max;

// //when the game finish,start again
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//tahmine başlayalım
guessBtn.addEventListener("click", () => {
  const guessedNbr = guessInput.value;

  if (guessedNbr === "" || guessedNbr < min || guessedNbr > max) {
    messageWrite("Enter a value in the range. do not leave blank", "red");
  } else if (guessInput.value == finalNbr) {
    gameFinish(false, "you won!");
  } else {
    guessRight -= 1;
    if (guessRight == 0) {
      gameFinish(true, "you finished");
    } else {
      messageWrite(`you have ${guessRight} guesses left`);
    }
  }
});

function gameFinish(kontrol, msg) {
  let color;
  kontrol == true ? (color = "red") : (color = "green");
  guessInput.disabled = true;
  guessInput.style.borderColor = "red";
  messageWrite(msg, color);
  guessBtn.textContent = "play again";
  guessBtn.className = "play-again";
}

function messageWrite(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
