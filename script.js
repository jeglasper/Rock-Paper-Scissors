var Options = ['R', 'P', 'S'];
var Wins = 0;
var Loses = 0;
var Ties = 0;

function LetsPlay () {

    alert('Are you ready to play Rock, Paper, Scissors?');

    var PlayerChoice = prompt('Enter Your Selection: R(ock), P(aper), or S(cissors)');
    PlayerChoice = PlayerChoice.toUpperCase();

    while (PlayerChoice != 'R' && PlayerChoice != 'P' && PlayerChoice != 'S') {
        alert('Invalid Response: Try Again');
        PlayerChoice = prompt('Enter Your Selection: R(ock), P(aper), or S(cissors)');
        PlayerChoice = PlayerChoice.toUpperCase();
    }
        
    alert('You have selected ' + PlayerChoice);

    var ComputerChoice = Options[Math.floor(Math.random()*Options.length)];
    alert ('The Computer has chosen ' + ComputerChoice + '.');

    if (PlayerChoice == 'R' && ComputerChoice =='S' || PlayerChoice == 'S' && ComputerChoice == 'P' || PlayerChoice == 'P' && ComputerChoice == 'R') {
        alert('You Win!');
        Wins++;
    } else if (PlayerChoice == 'R' && ComputerChoice =='R' || PlayerChoice == 'S' && ComputerChoice == 'S' || PlayerChoice == 'P' && ComputerChoice == 'P') {
        alert('Issa Tie!');
        Ties++;
    } 
    else {
        alert('You Lose!');
        Loses++;
    }

    alert ('Wins: ' + Wins + "; Loses: " + Loses + "; Ties: " + Ties);

    var PlayAgain = confirm ('Do You Want to Play Again? Click Ok to Play Again or Click Cancel to End the Game');

    if (PlayAgain == true) {
        LetsPlay();
    } else {
        alert('Thanks for Playing! See the console log for the final results :)')
        console.log('Wins: ' + Wins);
        console.log('Loses: ' + Loses);
        console.log('Ties: ' + Ties);
        return;
    }
}

LetsPlay();
