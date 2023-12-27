const arr = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    return arr[Math.floor(Math.random()* arr.length)];
}

function playRound(playerSelection, computerSelection){
    let result = undefined;
    switch (playerSelection){
        case 'rock':
            switch (computerSelection){
                case 'paper':
                    result = 'You Lose! Paper beats Rock';
                    break;
                case 'scissors':
                    result = 'You Won! Rock beats Scissors';
                    break;
                default:
                    result = 'It\s a Tie';
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection){
                case 'rock':
                    result = 'You Won! Paper beats Rock';
                    break;
                case 'scissors':
                    result = 'You Lose! Scissors beats Paper';
                    break;
                default:
                    result = 'It\s a Tie';
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection){
                case 'rock':
                    result = 'You Lose! Rock beats Scissors';
                    break;
                case 'paper':
                    result = 'You Won! Scissors beats Paper';
                    break;
                default:
                    result = 'It\s a Tie';
                    break;
            }
            break;
    }
    return result;
}

let playerSelection = prompt('Enter a value');
console.log(playRound(playerSelection,getComputerChoice()))