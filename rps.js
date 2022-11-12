

function getP1Choice() {
  prompt("rps?").toLowerCase() // case sensitive 
}; //gets player choice
let p1Choice = getP1Choice();


let rpsarray = [  //cpu choices 
    "rock",
    "paper",
    "scissors",
];


function getComputerChoice() {  //gives cpu random choice
    return rpsarray[Math.floor(Math.random() * rpsarray.length)].toLowerCase();
}
let cpuChoice = getComputerChoice();  // turns function into variable
console.log(cpuChoice);


function play(p1Choice, cpuChoice) {
    if (p1Choice === cpuChoice) {
        return  "tie";
    } else if (p1Choice === "rock" && cpuChoice === "paper" ||
    p1Choice === "paper" && cpuChoice === "scissors"||
    p1Choice === "scissors" && cpuChoice === "rock") {
        return "cpu";
    } else if (p1Choice === "rock"  && cpuChoice === "scissors" ||
    p1Choice === "scissors" && cpuChoice === "paper" ||
    p1Choice === "paper" && cpuChoice === "rock") {
        return "p1";
    }
}
let p1Score = 0
let cpuScore = 0
let pts = "p1:" + p1Score +  "cpu:" + cpuScore; 
function game() {
       let result = play(p1Choice, cpuChoice);
        if (result === "tie") {
            alert("tie");
        } else if (result === "cpu") {
            cpuScore++;
            alert("YOU SUCK LOSER!" + " cpu pts:" + cpuScore);
        } else if (result === "p1") {
            p1Score++;
            alert("DING DING WEINNER!" + " p1 pts:" + p1Score);
}
    }
