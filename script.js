let userChoice = prompt("Do you want to choose r, p or s?");
let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "r";
} else if(computerChoice <= 0.67) {
    computerChoice = "p";
} else {
    computerChoice = "s";
}
let compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "r") {
    if(choice2 === "s") {
        return "r wins";
    } else {
        return "p wins";
    }
}
if(choice1 === "p") {
    if(choice2 === "r") {
        return "p wins";
    } else {
        if(choice2 === "s") {
            return "s wins";
    }
}
if(choice1 === "s") {
    if(choice2 === "r") {
        return "r wins";
    } else {
        if(choice2 === "p") {
            return "s wins";
        }
    }
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);