let playerScore = 0;
 let computerScore = 0;

let computerPlay = () => {
    const moves = [
        'Rock',
        'Paper',
        'Scissors'
    ]
    let computerMove = moves[Math.floor(Math.random() * moves.length)];
    return computerMove.toLowerCase();
};

let computerSelection = computerPlay();

let playRound = (computerSelection) => {
    let userSelection = prompt("Type rock, paper or scissors");
    
   if (userSelection ===  computerSelection ){
        return "It's a draw!"
    }else if (userSelection === 'rock' && computerSelection === 'paper'
            || userSelection === 'paper' && computerSelection === 'scissors'
            || userSelection === 'scissors' && computerSelection === 'rock'){
        ++computerScore;
        return 'The computer won this round!';
    }else {
        ++playerScore;
        return 'You won this round!'
     }
};

let game = () => {
  
  for(let i = 1; i <= 5; i++) {
       console.log(playRound(computerSelection));
    }
   if (playerScore > computerScore){
       console.log('You win the game!');
   }else if (playerScore < computerScore){
       console.log('The computer wins the game!');
   }else {
       console.log('The game ends in a draw!')
   }
}

game();

