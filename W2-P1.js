/* ESERCIZIO 1
Scrivi un algoritmo per trovare il più grande tra due numeri interi.*/

function trovaIlPiuGrande(num1, num2) { //(dichiariamo la funzione)
    if (num1 > num2) { //La condizione if (num1 > num2) verifica se il primo numero è maggiore del secondo//
        return num1; // Se la condizione è vera, la funzione restituisce il valore del primo numero.
    } else {
        return num2; ////Altrimenti, la funzione restituisce il valore del secondo numero.//
    }
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.*/

function controllaSeUguale(num) { //(dichiariamo la funzione) La funzione controllaSeUguale() accetta un argomento num che rappresenta il numero da verificare.
    if (num !== 5) { //Utilizza l'operatore di confronto "non uguale a" (!==) per verificare se il numero è diverso da 5
        console.log("not equal"); //Se la condizione è vera, viene stampato "not equal" in console. Altrimenti, non viene eseguita alcuna azione.
    }
}

controllaSeUguale(3); // stampa "not equal"
controllaSeUguale(5); // non viene stampato nulla
controllaSeUguale(10); // stampa "not equal"

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)*/

function controllaSeDivisibilePerCinque(num) { //(dichiariamo la funzione) La funzione controllaSeDivisibilePerCinque() accetta un argomento num che rappresenta il numero da verificare.
    if (num % 5 === 0) { //Utilizza l'operatore di modulo (%) per verificare se il numero è perfettamente divisibile per 5.
        console.log("divisible by 5");
        // Se il resto della divisione è uguale a 0, viene stampato "divisible by 5" in
        // console. Altrimenti, non viene eseguita alcuna azione. L'operatore di modulo
        // restituisce il resto della divisione di un numero per un altro. Ad esempio,
        // 10 % 3 restituisce 1, poiché 3 può essere diviso una volta perfettamente in
        // 10, con un resto di 1.
    }
}

controllaSeDivisibilePerCinque(10); // stampa "divisible by 5"
controllaSeDivisibilePerCinque(15); // stampa "divisible by 5"
controllaSeDivisibilePerCinque(20); // stampa "divisible by 5"
controllaSeDivisibilePerCinque(25); // stampa "divisible by 5"

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function controllaSeUgualeAOtto(num1, num2) { //(dichiariamo la funzione) La funzione controllaSeUgualeAOtto() accetta due argomenti num1 e num2 che rappresentano i due numeri da verificare. (dichiariamo le funzione)
    if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) { // Utilizza una struttura di controllo if-else con una condizione composta (if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8)) per verificare se uno dei numeri è uguale a 8 o se la loro somma o differenza è uguale a 8
        return true; //L'operatore di OR (||) verifica se almeno una delle condizioni è vera. Se la condizione è vera, la funzione restituisce true.
    } else {
        return false; //Altrimenti, la funzione restituisce false
    }
}

/*PLUS: L'operatore di OR (||)  è un operatore di confronto che restituisce true se almeno una delle due condizioni è vera, altrimenti restituisce false*/

//Ecco un esempio di come puoi utilizzare l'operatore di OR:

  if (num1 > num2 || num1 === num2) { //(dichiariamo le funzione)
  // questo codice viene eseguito se la prima condizione (num1 > num2) o la seconda condizione (num1 === num2) sono vere
}

//L'operatore di OR viene spesso utilizzato in combinazione con l'operatore di AND (&&), che restituisce true solo se entrambe le condizioni sono vere.

  if (num1 > 0 && num1 < 10) {
  // questo codice viene eseguito solo se num1 è maggiore di 0 e minore di 10
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function calcolaTotaleCheckout(totalShoppingCart) {
    let costoSpedizione;
    if (totalShoppingCart > 50) {
        costoSpedizione = 0;
    } else {
        costoSpedizione = 10;
        return totalShoppingCart + costoSpedizione;
    }

}

console.log(calcolaTotaleCheckout(40))

/* ESERCIZIO 6
Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.*/

function calcolaTotaleCheckout(totalShoppingCart) {
    let costoSpedizione;
    if (totalShoppingCart > 50) {
        costoSpedizione = 0;
    } else {
        costoSpedizione = 10;
    }
    const sconto = totalShoppingCart * 0.2;
    return totalShoppingCart - sconto + costoSpedizione;
}

console.log(calcolaTotaleCheckout(40))

/* ESERCIZIO 7
Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.Alla fine mostra il risultato in console.*/

function OrdinaNumeri(num1, num2, num3) {
    let numeriOrdinati = [num1, num2, num3];
    // var num ordinati abbiamo creato un "array" insieme di variabili/contenitore,
    // tutte dello stesso tipo, identificato da un nome unico
    numeriOrdinati.sort(function (a, b) {
        // metodo "Sort" accetta una funzione di confronto come argomento, speciafica
        // l'ordine degli elementi dell'Array, in questo caso la funzione di confronto
        // restituisce la differenza tra "a" e "b" e causa l'ordinamento dei numeri in
        // ordine decrescente
        return b - a;
    });

    console.log(numeriOrdinati);
}

OrdinaNumeri(10, 5, 8);
//stampa i numeri ordinati

/* ESERCIZIO 8
Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").*/

function isIntOrFloat(value) {
    if (typeof value === 'number') {
        if (Number.isInteger(value)) {
            console.log('numero intero', value);
        } else {
            console.log('numero non intero (float)', value);
        }
    }
}

isIntOrFloat(1); // stampa 1 intero
isIntOrFloat(1.5); // stampa 1.5 non intero (float)

//correzzione in classe:
function controllaSeIntero(num) {
    if (typeof num === 'number' && Number.isInteger(num)) {
        return true;
    } else {
        return false;
    }
}

console.log(controllaSeIntero(5)); // stampa 1 intero

/* ESERCIZIO 9
Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)*/

function controllaSeDispari(num) {
    if (num % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

console.log(controllaSeDispari(5))

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 3
if (val < 5) {
  console.log("meno di 5");
} else if (val < 10){
  console.log("meno di 10");
}else{
  console.log("uguale a 10 o maggiore");
}


/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 22;

if (num < 5) {
    console.log("Tiny");
} else {
    if (num < 10) {
        console.log("Small");
    } else {
        if (num < 15) {
            console.log("Medium");
        } else {
            if (num < 20) {
                console.log("Large");
            } else {
                console.log("Huge");
            }
        }
    }
}

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

let isMale = true;
let gender = isMale
    ? "male"
    : "female";
// operatore ternario per eseguire una semplice assegnazione basata su una sola
// condizione senza usare if - else che alle volte però può essere meno
// leggibile

console.log(gender);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.*/

let num = 0;
while (num <= 5) { //il cliclo viene eseguito finchè siamo nella condizione <=5
    console.log(num);
    num++ //incremento di 1 per ogni ciclo
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.*/

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

for (var i = 0; i <= 10; i++) {
    if (i === 8 || i === 3) {
        continue;
    }
    console.log(i);
}

for (var i = 0; i <= 10; i++) {
    if (i !== 3 && i !== 8) {
        console.log(i);
    }
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " è un numero pari");
    } else {
        console.log(i + " è un numero dispari");
    }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i %5 !== 0) {  //numero div per 3 ma non per 5
        console.log('Fizz');
    } else if (i %5 === 0 && i %3 !== 0) {  //il numero è divisibile per 5 ma non per 3
        console.log('Buzz');
    } else if (i %5 === 0 && i %3 === 0) {  //il numero è divisibile sia per 3 che per 5
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".*/

let day = 5;
switch (day) {
    case 1:
        console.log('lunedì');
        break;

    case 2:
        console.log('martedì');
        break;

    case 3:
        console.log('mercoledì');
        break;

    case 4:
        console.log('giovedì');
        break;

    case 5:
        console.log('venerdì');
        break;

    case 6:
        console.log('sabato');
        break;

    case 7:
        console.log('domenica');
        break;
    default:
        console.log('stop!')
}
