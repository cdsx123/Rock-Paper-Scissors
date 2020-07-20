let playerScore;
let computerScore;
let playerSelection;
let computerSelection;

function computerPlay() {
    let choice = Math.floor(Math.random()*3+1);
    ;
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

function game(){
    playerScore = 0;
    computerScore = 0;
    while(+playerScore !== 3 && +computerScore !== 3){
    
    playerSelection = prompt('Choose one of rock/paper/scissors.');
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    playRound()
    console.log(winOrLose());
    if (outcome === 'win'){
        playerScore++;
    }
    else if (outcome ==='lose'){
        computerScore++;
    };
    console.log(playerScore);
    
    }
    if (playerScore > computerScore){
        console.log('Congratulations! You win!')
    }
    else{
        console.log('Oh no, you lost.')
    }
    console.log(`The final score was ${playerScore} to ${computerScore}`)
}
game()