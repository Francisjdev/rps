let userChoice;
let pcChoice;
let userScore = 0;
let pcScore = 0;
let keepGoing = true 
let sentinel = 0
function getPcChoice(){
    let answer = Math.floor(Math.random()*3);
    if(answer ==0){
        return pcChoice = 'rock';
    } else if(answer ==1) {
        return pcChoice = 'paper';
    } else{
        return pcChoice = 'scissors'
    }
}
function getUserChoice(){
    return userChoice = prompt('Rock, Paper or Scissors: ').toLowerCase()
}
function playRound(humanChoice, computerChoice) {
    return getWinner(humanChoice, computerChoice)
  }

function getWinner(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("it's a tie ")
        return 
    } else if (humanChoice =='rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' == computerChoice == 'paper'){
        console.log('the human wins')
        return ++userScore
    }else {
        console.log('the machina wins')
      
        return ++pcScore
    } 
}
function playGame(humanChoice, computerChoice){
    return playRound(humanChoice, computerChoice)
}
function getResult(userResult, pcResult){
    if (userResult > pcResult){
        console.log(`The Human wins ${userResult} to ${pcResult}`)
    } else if (userResult === pcResult){
        console.log("It's a Tie")
    } else {
       console.log(`the PC wins ${pcResul} to ${userResult}` )
    }
}


while(keepGoing){
    const humanSelection = getUserChoice();
    const computerSelection = getPcChoice();
    playGame(humanSelection,computerSelection)
    sentinel++
    console.log(sentinel)
    if(sentinel == 5) keepGoing = false;
}
getResult(userScore, pcScore)

