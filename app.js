const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach((hand) => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });

    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach((option) => {
      option.addEventListener('click', function () {
        const computerNumber = Math.floor(Math.random() * 3);
        computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // compare hands
          compareHands(this.textContent, computerChoice);

          // update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 1000);

        playerHand.style.animation = 'shakePlayer 1s ease';
        computerHand.style.animation = 'shakeComputer 1s ease';
      });
    });
  };

  const updatedScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }

    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player Wins';
        pScore++;
        updatedScore();
        return;
      } else {
        winner.textContent = 'Computer Wins';
        cScore++;
        updatedScore();
        return;
      }
    }
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer Wins';
        cScore++;
        updatedScore();
        return;
      } else {
        winner.textContent = 'Player Wins';
        pScore++;
        updatedScore();
        return;
      }
    }
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Computer Wins';
        cScore++;
        updatedScore();
        return;
      } else {
        winner.textContent = 'Player Wins';
        pScore++;
        updatedScore();
        return;
      }
    }
  };
  // call all the inner functions
  startGame();
  playMatch();
};

// start the game function
game();
