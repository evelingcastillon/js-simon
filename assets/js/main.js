//Descrizione:
//Un alert() espone 5 numeri generati casualmente.
//Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//Consigli del giorno:
//* Pensate prima in italiano.
//* Dividete in piccoli problemi la consegna.
//* Individuate gli elementi di cui avete bisogno per realizzare il programma.

/* function getRandomInt(max) {
    var result = Math.floor(Math.random() * max);
    return result;
}
console.log(getRandomInt(5))
 */

var listaRandom = [];
for(var i = 0; i < 5; i++) {
    var numeri = Math.ceil(Math.random()*30);
    listaRandom.push(numeri)
}
alert(listaRandom);

setTimeout(function(){
    var numeriUtenti;
    var listaUtente = []
    for(var i = 0; i < 5; i++) {
        numeriUtenti = Number(prompt('Indovini i numeri precedenti'));
        listaUtente.push(numeriUtenti);
    }
    console.log(listaUtente);
}, 1000);
