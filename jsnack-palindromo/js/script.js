// funzione che fa il controllo della parola costruendo la parola rovesciata, resituisce un true o false come valore
function getPalindrome (word) {
    // variabile di ritorno
    let matching = false;
    // variabili di controllo
    let controlWord ="";
    let reverseWord = "";
    // ciclo che toglie gli spazi
    for(let i = 0; i < word.length ; i++) {
        if (word[i] != " ") {
            controlWord += word[i];
        }
    }
    // tutto in lowercase
    controlWord = controlWord.toLowerCase();
    // costruisco la parola contraria
    for(let i = controlWord.length - 1; i >= 0 ; i--) {
        reverseWord += controlWord[i];
    }
    // controllo se la parola matcha con quella contraria
    if (reverseWord == controlWord) {
        matching = true;
    } 
    return matching;
}
// input utente
let inputWord =  prompt("Inserisci una parola");
// risposta della macchina
if(getPalindrome(inputWord)) {
    console.log("é un palindromo!");
} else {
    console.log("non è un palindromo");
}
