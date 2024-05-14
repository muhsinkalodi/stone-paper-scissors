let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara  = document.querySelector("#user-score")
const compScorePara  = document.querySelector("#comp-score")

const genComputerChoice = () => {
    const options = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
};
const drawGame =() => {
    console.log("draw game");
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor ="#081B31";
}

const showWinner =  (userWin , choiceId, compChoice) => {
    if(userWin){
        console.log('you win');
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You Lose! ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (choiceId)=>{
    console.log("user choice = " , choiceId);;
    const compChoice = genComputerChoice()
    console.log("comp choice =", compChoice);

    if (choiceId === compChoice){
        drawGame();
        
    }else{
        let userWin = true;
        if (choiceId === "rock"){
            userWin = compChoice === "paper" ? false :true;
        }else if (choiceId === "paper"){
           userWin = compChoice === "scissors"? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,choiceId, compChoice);
    }

};

choices.forEach((choice) => {

    console.log(choice);
    choice.addEventListener("click", () =>{
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked", choiceId);
        playGame(choiceId);
    });
});