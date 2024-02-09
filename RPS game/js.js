let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");//for accessing the msg

//for accessing user and computer score
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    //console.log("game draw");
   msg.innerText = "Game was Draw. Play again.";
   msg.style.backgroundColor = "#081b31";
  };


  const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;//for updating
        //console.log("YOu Win");
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        ComputerScore++;
        computerScorePara.innerText = ComputerScore;
        //console.log("You Lose");
        msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //Generate computer choice (modular function)
    const computerChoice = genComputerChoice();
    //console.log("computer choice = ",computerChoice);

    if(userChoice === computerChoice){
        //Draw Game
        drawGame();
    }else{
       let userWin = true;
       if(userChoice === "rock"){
        //computer choice can be scissors or paper
        computerChoice ==="paper" ? false:true;
       } else if (userChoice === "paper"){
         //computer choice can be scissors or rock
         userWin = computerChoice === "scissors"?  false : true;
       } else {
        //computer choice can be rock or paper
        computerChoice === "rock" ? false : true;
       }
       showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",() => {
      const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked",userChoice);
    playGame(userChoice);
    });
});