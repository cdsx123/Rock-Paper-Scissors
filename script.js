let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let text;

const container = document.querySelector('#container');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const final = document.createElement('h3')
const winLose = document.createElement('h2');
const round = document.createElement('h4')

container.insertBefore(round, scissors);
container.insertBefore(winLose, round)
container.appendChild(final, round)

scissors.addEventListener('click', function (){ game('scissors');});
rock.addEventListener('click', function () { game('rock');});
paper.addEventListener('click', function () { game('paper');});

final.addClassList('final');
container.addClassList('container');
round.addClassList('round');
winLose.addClassList('winLose');
scissors.addClassList('btn');
paper.addClassList('btn');
rock.addClassList('btn');

//Computer chooses rock paper or scissors
function computerPlay() {
    let choice = Math.floor(Math.random()*3+1);
    
    switch (choice){
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'rock';
            break;
        case 3:
            return 'paper';
            break;
        default:
            return 'scissors';
            break;
    };
}
//checks whether the player won or lost, or if there was a tie
function playRound(playerSelection){
    
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        outcome ='win';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        outcome ='lose';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        outcome ='win';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        outcome ='lose';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        outcome ='lose';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        outcome ='win';
    }
    else if (playerSelection === computerSelection){
        outcome ='tie';
    }
    else{
        return "Error, you must enter either rock, paper, or scissors.";
    };
    
    return outcome
}
//return's a statement depending on the outcome of the round
function winOrLose(){
    if (outcome === 'win'){
        
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if (outcome === 'lose'){
        
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else{
        return `It was a tie! You both chose ${computerSelection}`
    };
}
//plays the game
function game(choice){
    
    //loops until someone has 5 points
    if(+playerScore !== 5 && +computerScore !== 5){
        playerSelection = choice;
        computerSelection = computerPlay();
        playRound(choice);
        
        round.textContent = winOrLose();
        //increments either the playerScore or the computerScore depending on who won
        if (outcome === 'win'){
            playerScore++;
        }
        else if (outcome ==='lose'){
            computerScore++;
        };
        
    
    }
    //player won
    if (playerScore === 5){
        winLose.textContent = 'Congratulations! You win!'
    }
    //player lost
    else if (computerScore === 5){
        winLose.textContent = 'Oh no, you lost.'
    }
    //prints the final score
    if (playerScore === 5 || computerScore === 5){
        final.textContent = `The final score was ${playerScore} to ${computerScore}`
    }
    
}

