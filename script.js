let choices = document.querySelectorAll(".choice");
let msgHolder = document.querySelector(".message-holder");
let message = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");

let count = 0;
//scores 
let userScore = 0;
let computerScore = 0;

//Mouse over effect
choices.forEach((choice) => {
    choice.addEventListener("mouseover" , () => {
        choice.style.border = "2px solid red";
        choice.style.borderRadius = "50%";
    })
})


//Mouse out effect
choices.forEach((choice) => {
    choice.addEventListener("mouseout" , () => {
        choice.style.border = "2px solid black";
        choice.style.borderRadius = "50%";

    })
})

const rock = () => {
    let inputRock = Math.floor(Math.random()*4);
    rockUpdater(inputRock);
}

const rockUpdater = (count) => {
    if(count === 0){
        message.innerText = "Paper beats Rock";
        computerScore++;
        computerScorePara.innerText = computerScore;
    }
    else if(count === 1){
        message.innerText = "Rock beats scissor";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else if (count === 2){
        message.innerText = "Paper beats Rock";
        computerScore++;
        computerScorePara.innerText = computerScore;
    }
    else if (count === 3){
        message.innerText = "Draw";
    }
}

const paperUpdater = (count) => {
    if(count === 0){
        message.innerText = "Draw";
    }
    else if(count === 1){
        message.innerText = "Scissor beats Paper";
        computerScore++;
        computerScorePara.innerText = computerScore;        
    }
    else if(count === 2){
        message.innerText = "Paper beats Rock";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else if(count === 3){
        message.innerText =  "Draw";
    }
}

const paper = () => {
    let inputPaper = Math.floor(Math.random()*4);
    paperUpdater(inputPaper);
} 

const scissorUpdater = (count) => {
    if(count === 1){
        message.innerText = "Scissor beats Paper";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else if(count === 2){
        message.innerText = "Rock beats Scissor";
        computerScore++;
        computerScorePara.innerText = computerScore;
    }
    else if(count === 3){
        message.innerText = "Draw";
    }
}

const scissor = () => {
    let inputScissor = Math.floor(Math.random()*4);
    scissorUpdater(inputScissor);
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        if(choice === choices[0]){
            count++;
            if(count>3){
                rock();
            }
            else{
                rockUpdater(count);
            }
        }
        else if (choice === choices[1]){
            count++;
            if(count>3){
                paper();
            }
            else{
                paperUpdater(count);
            }
        }
        else{
            count++;
            if(count>3){
                scissor();
            }
            else{
                scissorUpdater(count);
            }
        }
    })
})