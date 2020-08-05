let playerScore;
let computerScore;
let playerSelection;
let computerSelection;

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
function playRound(){
    
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
//console.log's a statement depending on the outcome of the round
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
function game(){
    playerScore = 0;
    computerScore = 0;
    //loops until someone has 3 points
    while(+playerScore !== 3 && +computerScore !== 3){
    
    playerSelection = prompt('Choose one of rock/paper/scissors.');
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    playRound()
    console.log(winOrLose());
    //increments either the playerScore or the computerScore depending on who won
    if (outcome === 'win'){
        playerScore++;
    }
    else if (outcome ==='lose'){
        computerScore++;
    };
    
    
    }
    //player won
    if (playerScore > computerScore){
        console.log('Congratulations! You win!')
    }
    //player lost
    else{
        console.log('Oh no, you lost.')
    }
    //prints the final score
    console.log(`The final score was ${playerScore} to ${computerScore}`)
}
game()