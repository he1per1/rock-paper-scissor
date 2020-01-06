const game = () => {
  let pScore = 0
  let cScore = 0

  const startGame = () => {
    const start = document.querySelector('.intro button')
    const introScreen = document.querySelector('.intro')
    const match = document.querySelector('.match')

    start.addEventListener('click', () => {
      introScreen.classList.add('fadeOut')
      match.classList.add('fadeIn')
    })
  }

  const playMatch = () => {
    const options = document.querySelectorAll('.options button')
    const playerHand = document.querySelector('.player-hand')
    const computerHand = document.querySelector('.computer-hand')

    clearAnimation()

    const computerOptions = ['rock', 'paper', 'scissors']

    options.forEach(item => {
      item.addEventListener('click', function() {
        disabledButton(options, true)

        const computerNumber =
          computerOptions[Math.floor(Math.random() * computerOptions.length)]

        setTimeout(() => {
          compareHands(this.textContent, computerNumber)

          playerHand.src = `./img/${this.textContent}.png`
          computerHand.src = `./img/${computerNumber}.png`

          disabledButton(options, false)
        }, 2000)

        playerHand.src = './img/rock.png'
        computerHand.src = './img/rock.png'
        
        playerHand.style.animation = 'shakePlayer 2s ease'
        computerHand.style.animation = 'shakeComputer 2s ease'
      })
    })
  }

  const clearAnimation = () => {
    const hands = document.querySelectorAll('.hands img')
    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = ''
      })
    })
  }

  const disabledButton = (options, property) => {
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = property
    }
  }

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p')
    const computerScore = document.querySelector('.computer-score p')
    playerScore.textContent = pScore
    computerScore.textContent = cScore
  }

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner')
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie'
      return
    }
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player Wins'
        pScore++
        updateScore()
        return
      } else {
        winner.textContent = 'Computer Wins'
        cScore++
        updateScore()
        return
      }
    }
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player Wins'
        pScore++
        updateScore()
        return
      } else {
        winner.textContent = 'Computer Wins'
        cScore++
        updateScore()
        return
      }
    }

    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Computer Wins'
        cScore++
        updateScore()
        return
      } else {
        winner.textContent = 'Player Wins'
        pScore++
        updateScore()
        return
      }
    }
  }

  startGame()
  playMatch()
}

game()
