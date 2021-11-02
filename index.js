let displayMessage = document.getElementById("display-message")
let displaySum = document.getElementById("player-sum")
let displayCards = document.getElementById("player-cards")
let playerInfo = document.getElementById("player-info")
let player = {
  name: "Your chips",
  chips: 200
}
playerInfo.textContent = player.name + ": $" + player.chips
let cards = []
let message = ""
let hasBlackjack = false
let isPlaying = false

const getRandomCard = () => {
  let randomNumber = Math.floor(Math.random()*13)+1
  if (randomNumber < 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}
console.log(getRandomCard())
const startGame = () => {
  
}

const renderGame = () => {
  
}

const newCard = () => {
  
}