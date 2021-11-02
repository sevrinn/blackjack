let player = {
  name: "Your chips",
  chips: 200
}
let sum = 0
let cards = []
let message = ""
let hasBlackjack = false
let isPlaying = false

let displayMessage = document.getElementById("display-message")
let displaySum = document.getElementById("player-sum")
let displayCards = document.getElementById("player-cards")
let playerInfo = document.getElementById("player-info")


//displays players chip amount
playerInfo.textContent = player.name + ": $" + player.chips

/**
 * getRandomCard function creates a random number.
 * if the randomNumber is greater than 10 (11, 12, 13), return 10.
 * else if randomNumber is 1, return 11.
 * else if it's 2-10, return that number
 */
const getRandomCard = () => {
  let randomNumber = Math.floor(Math.random()*13)+1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

/**
 * startGame sets isPlaying to true (which we need to draw a new card)
 * sets firstCard and last card to randomCard() function and then pushes
 * them to the cards array. 
 * it then sets the sum to the sum of firstCard + secondCard
 * then calls the renderGame() function
 */
const startGame = () => {
  isPlaying = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards.push(firstCard, secondCard)
  sum = firstCard + secondCard
  // displaySum.textContent = "Sum: " + sum
  renderGame()
}

/**
 * renderGame() function displays all the cards in the cards array with 
 * a for loop. It then displays the sum of cards drawn. It also changes the
 * message that's displayed based on the sum of your current hand.
 */
const renderGame = () => {
  displayCards.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    displayCards.textContent += cards[i] + " "
  }

  displaySum.textContent = "Sum: " + sum

  if(sum <= 20) {
    message = "Would you like to draw another card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackjack = true
  } else {
    message = "You're out of the game!"
    isPlaying = false
  }
  displayMessage.textContent = message
}

/**
 * newCard() function checks to makes sure the player is playing and that
 * the player does not have black jack. if conditions are met, it assigns
 * card to getRandomCard(), adds number to sum, pushes new card to cards array,
 * and rendersGame()
 */
const newCard = () => {
  if (isPlaying === true && hasBlackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}