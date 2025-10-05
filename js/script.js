/* Ciao ragazzi,
Esercizio di oggi: FizzBuzz
nome repo: js - fizzbuzz

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e peri multipli di 5 stampi Buzz.Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per ?
Abbiamo visto qualcosa di particolare che possiamo usare ?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare, proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

//utilizzaremo il ciclo for per generare una sequenza di numeri da 1 a 100 (estremi compresi) poi utilizzeremo le condizioni if else per avere tutte le variabili richieste utilizzaremo anche l operatore AND && ed infine stamperemo tutto.

for (let i = 0; i <= 100; i++) {
    let result = "";
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
    } else if (i % 3 === 0) {
        result = "Fizz";
    } else if (i % 5 === 0) {
        result = "Buzz";
    }
    console.log(i, result);
}
