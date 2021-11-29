// funzione che fa il controllo della parola costruendo la parola rovesciata, resituisce un true o false come valore
function getPalindrome (word) {
    let controlWord = word.toLowerCase();
    
    let reverseWord = "";
    let matching = false;

    for(let i = controlWord.length - 1; i >= 0 ; i--) {
        reverseWord += controlWord[i];
    }
    
    if (reverseWord == controlWord) {
        matching = true;
    } 

    return matching;
}


let inputWord =  prompt("Inserisci una parola");

if(getPalindrome(inputWord)) {
    console.log("é un palindromo!");
} else {
    console.log("non è un palindromo");
}
