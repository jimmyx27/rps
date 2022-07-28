let p1Choice = prompt("rps?"); //gets player choice
p1Choice = p1Choice.toLowerCase() // case sensitive with line 11
var rpsarray = [  //cpu choices 
    "rock",
    "paper",
    "scissors"
];
function getComputerChoice() {  //gives cpu random choice
    return rpsarray[Math.floor(Math.random() * rpsarray.length)];
}
var cpuChoice = getComputerChoice();  // turns function into variable
cpuChoice = cpuChoice.toLowerCase()
console.log(cpuChoice);
function play(p1Choice, cpuChoice) {
    if (p1Choice === cpuChoice) {
    alert("TIE!"); 
    }
    if (p1Choice === "rock" && cpuChoice === "paper" ||
    p1Choice === "paper" && cpuChoice === "scissors"||
    p1Choice === "scissors" && cpuChoice === "rock") {
    return "cpu";
        alert("YOU SUCK LOSER!");
    }
    if (p1Choice === "rock"  && cpuChoice === "scissors" ||
    p1Choice === "scissors" && cpuChoice === "paper" ||
    p1Choice === "paper" && cpuChoice === "rock")
    return "p1";
    alert("DING DING WEINNER!");
}
play(p1Choice, cpuChoice)
//let p1Score = 0
//let cpuScore = 0
//let pts = "P1:" + p1Score +  "cpu:" + cpuScore; 
//function game() {
//       let result = play(p1Choice, cpuChoice);
//        if (result === "p1") {
//            p1Score++;
//            a
//        }
//        
//    }
