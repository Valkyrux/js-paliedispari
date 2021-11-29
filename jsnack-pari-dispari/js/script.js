// funzione per stabilire se un numero è pari
function isEven(number) {
    let answer = true; 
    if(number % 2) {
        answer = false;
    }
    return answer;
}
// funzione che genera un numero random da 1 a 5
function getRandbyHand() {
    return Math.floor(Math.random()*5 + 1);
}
// aziono lo script con le mie funzioni
let userChoice;
do {
    userChoice = prompt("inserisci pari o dispari");
} while (userChoice != "pari" && userChoice != "dispari")

let userValue;
do {
    userValue = parseInt(prompt("inserisci un numero da 1 a 5"));
} while (isNaN(userValue) || userValue < 1 || userValue > 5)

pcValue = getRandbyHand();

const sumValue = userValue + pcValue;
console.log(sumValue);

if(isEven(sumValue) && userChoice == "pari" || !(isEven(sumValue)) && userChoice == "dispari") {
    console.log("hai vinto");
} else {
    console.log("il computer ha vinto");
}