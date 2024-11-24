const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    switch (userInput) {
        case 'rock'   :
        case 'paper'  :
        case 'sissors': 
        case 'bomb'   : return userInput
        default: console.log("Invalid Choice")
    }
}
const test1 = 0

const getRandomChoice = (number = 3) => {
    const randNum = Math.floor(Math.random() * number)    
    return ({
        0: 'rock',
        1: 'paper',
        2: 'sissors',
        3: 'bomb' //only player available
    })[randNum] ?? `Bad Data :: randNum = ${randNum}`
}

const convertChoiceToInt = (choice) => {
    return ({        
        'rock'   : 0,
        'paper'  : 1,
        'sissors': 2
    })[choice] ?? `Bad Data :: winner = ${choice}`
}

const determineWinner = (playerChoice, compChoice) => {
    const player = convertChoiceToInt(playerChoice)
    const computer = convertChoiceToInt(compChoice)
    //This will give 1 if player wins, 2 if computer wins, 0 for a tie
    const winner = (3 + player - computer) % 3
    return winner
}

let playerWins = 0
let computerWins = 0
let ties = 0
let cheated = 0
const playGame = (userInput) => {
    console.log(`Begin Play`)
    if (userInput.toLowerCase() === 'bomb') {
        console.log(`Player choice is :: ${userInput}`)        
        console.log('Player Wins! <:)')
        playerWins++
        cheated++
        return '--BOOOOOM! player killed the computer. You bastard!'
    }
    let playerChoice = getUserChoice(userInput)
    console.log(`Player choice is :: ${playerChoice}`)
    let compChoice = getRandomChoice()
    console.log(`Computer choice :: ${compChoice}`)
    const winner = determineWinner(playerChoice,compChoice)
    switch(winner) {
        case 0: ties++
        break
        case 1: playerWins++
        break
        case 2: computerWins++
        break
    }   
    return ({
        0: 'It was a Tie!',
        1: 'Player Wins! <:)',
        2: 'Computer Wins >:('
    })[winner] ?? `Bad Data :: winner = ${winner}` 
      
}


const iterations = 100
for (let i=0; i<iterations; i++){
    console.log(`${i+1}:-----------------`)
    console.log(playGame(getRandomChoice(4)))    
}

console.log(`Results of ${iterations} games::`)
console.log(`Player Wins   : ${playerWins}`)
console.log(`Computer Wins : ${computerWins}`)
console.log(`Ties          : ${ties}`)
console.log(`Player Cheated: ${cheated}`)

  





