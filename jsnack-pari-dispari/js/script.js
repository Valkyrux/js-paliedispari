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
// scelta di pari o dispari
let userChoice;
do {
    userChoice = prompt("inserisci pari o dispari");
} while (userChoice != "pari" && userChoice != "dispari")
// scelta del numero
let userValue;
do {
    userValue = parseInt(prompt("inserisci un numero da 1 a 5"));
} while (isNaN(userValue) || userValue < 1 || userValue > 5)
// numero generato per il pc
pcValue = getRandbyHand();
// somma dei numeri
const sumValue = userValue + pcValue;
console.log(sumValue);
// risposta del programma in base ai dai di input utilizzando la funzione isEven creata all'inizio
if(isEven(sumValue) && userChoice == "pari" || !(isEven(sumValue)) && userChoice == "dispari") {
    console.log("hai vinto");
} else {
    console.log("il computer ha vinto");
}