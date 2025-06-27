let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg")
let userChoice = 0;
let compChoice = 0;
let userScorePara = document.querySelector(".userScore");
let compScorePara = document.querySelector(".compScore");
let userScore = 0;
let compScore = 0;

const generateCompChoice = () =>{
    let arr = ["rock","paper","scissors"];
    randi = Math.floor(Math.random(arr) * 3);
    compChoice = arr[randi];
    return compChoice;
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.style.backgroundColor = "green"
        msg.innerText = `You Won!! (${userChoice} beats ${compChoice})`;
        userScore++;
        userScorePara.innerText = userScore;

    } else{
        msg.style.backgroundColor = "red"
        msg.innerText = `You lost  (${compChoice} beats ${userChoice})`;
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    compChoice = generateCompChoice();
    if(userChoice == compChoice){
        msg.style.backgroundColor = "#0f0f0f";
        msg.innerText = "Game Drawn.....Play again";
    } else{
        let userWin = true;
        if(userChoice == "rock"){
        userWin = (compChoice === "paper")? false : true; 
        } else if(userChoice == "paper"){
        userWin  = (compChoice === "rock")? true : false; 
        } else if(userChoice == "scissors"){
        userWin  = (compChoice === "rock")? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
      } 
}

 choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
       userChoice =  choice.getAttribute("id");
       console.log(`user choice= ${userChoice}`);
         playGame(userChoice);
    });
 });