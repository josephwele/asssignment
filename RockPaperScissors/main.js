const playerPick = document.querySelector('#playerPick')
const computerPick = document.querySelector('#computerPick')
const outcome = document.querySelector('#gameOutcome')

const choices = document.querySelectorAll(".choice")

let player
let computer
let playerScore = 0
let computerScore = 0

choices.forEach(button => button.addEventListener('click', () => {

    player = button.textContent
    computer = computerChoice()

    playerPick.textContent = `Player (${playerScore}): ${player}`
    computerPick.textContent = `Computer (${computerScore}): ${computer}`
    outcome.textContent = checkWinner()
}))


function computerChoice(){
    const num = Math.floor(Math.random() * 3) + 1

    if (num == 1){
        return "👊"
        }
    else if (num == 2){
        return "👋"
        }
    else {
        return "✌️"
        }
 }


 function checkWinner(){
    if(player == computer){
        return "Draw"
    }
    else if (computer == "👊"){
        if (player == "👋"){
            playerScore++
            return "You win"
        }
        else{
            computerScore++
           return "You lose"
        }
    }
    else if (computer == "👋" ){
        if (player == "✌️"){
            playerScore++
            return "You win"
        }
        else{
            computerScore++
            return "You lose"
        }  
    }
    else if (computer == "✌️" ){
        if (player == "👊"){
            playerScore++
            return "You win"
        }
        else{
            computerScore++
            return "You lose"
        }  
    }

 }