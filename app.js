let userScore = 0 ;
let compScore = 0 ; 
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const msg = document.querySelector("#msg");
const showWinner =(userWin,userChoice, compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win , your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else
    {
        compScore++;
        compScorePara.innerText =compScore;
         msg.innerText = `You loose ,  computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const drawGame = () =>{
    
    msg.innerText = "Game was Draw, play again";
    msg.style.backgroundColor= "black";
};
const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}
const playGame =(userChoice) =>
{
    console.log("userchoice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);
    if(userChoice === compChoice)
            drawGame();
        else{
            let userWin = true ;
            if(userChoice==="rock")
            {
                userWin = compChoice ==="paper"? false : true;
            }
            else if(userChoice==="paper")
            {
                userWin = compChoice ==="scissors"? false : true;
            }else if( userChoice  ==="scissors")
            {
                userWin = compChoice ==="rock" ? false: true;
            }
            showWinner(userWin,userChoice,compChoice);
        }

};
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice =  choice.getAttribute("id");
        playGame(userChoice);
        

    });

});