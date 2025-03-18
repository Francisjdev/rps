let userChoice;
let pcChoice;
let userScore = 0;
let pcScore = 0;
let keepGoing = true 
let sentinel = 0

//getting data from webpage to add eventListeners
const buttons = document.querySelectorAll('button')
const userResults = document.querySelector('.user-score')
const pcResults = document.querySelector('.pc-score')
const winner = document.createElement('div')
const userScorebox = document.createElement('div')
const pcScorebox = document.createElement('div')

userResults.textContent = userScore   
pcResults.textContent = pcScore 



function getPcChoice(){
    let answer = Math.floor(Math.random()*3);
    if(answer ==0){
        return 'rock';
    } else if(answer ==1) {
        return 'paper';
    } else{
        return 'scissors'
    }
}
function getClickevent(dombuttons){
    dombuttons.forEach(button => {
        button.addEventListener("click", () => {
            playRound(button.id)
            displayScore()
          });
    });
}

function playRound(humanChoice){
    pcChoice = getPcChoice()
    getWinner(humanChoice, pcChoice)
    getResult(userScore, pcScore)
}    


function getWinner(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("it's a tie ")
        return 
    } else if (humanChoice =='rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' == computerChoice == 'paper'){
        console.log(`The Human wins ${humanChoice} beats ${computerChoice}`)
        return ++userScore
    }else {
        console.log(`the PC wins ${computerChoice} beats ${humanChoice}` )
      
        return ++pcScore
    } 
}

function getResult(userResult, pcResult){
    if(userResult === 5 || pcResult === 5){
        if (userResult > pcResult){
            console.log(`The Human wins ${userResult} to ${pcResult}`)
        } else if (userResult === pcResult){
            console.log(`It's a Tie. The score is ${pcResult} to ${userResult}`)
        } else {
           console.log(`the PC wins ${pcResult} to ${userResult}` )
        }
        userScore = 0
        pcScore = 0 
    }
    }
   
function displayScore(){
    userResults.textContent = userScore   
    pcResults.textContent = pcScore 
}

getClickevent(buttons)
