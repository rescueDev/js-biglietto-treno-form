/* Partendo dall’esercizio di ieri, aggiungiamo la parte visiva come da screenshot(quindi come non detto : bowtie: su layout, fatelo come quello dello screeshot, però gestite prima tutta la parte logica e funzionale, poi vi preoccupate del layout vero e proprio)
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno(numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall’utente */


//variabili

var eta = document.getElementById('eta');
console.log("Età passeggero:", eta.value);

//variabili associate a button e output

var nameTicket = document.getElementById("name");

var tragittoTicket = document.getElementById("km");


var bottoneGenera = document.getElementById("bottone_genera");

bottoneGenera.addEventListener('click' ,
    function() { 
        var campoName = document.getElementById('name');
        console.log("Nome passeggero:", campoName.value);
        var campoKm = document.getElementById('km');
        console.log("Km da percorrere:", campoKm.value);  
        nameTicket.innerHTML =  campoName.value;
        tragittoTicket.innerHTML = campoKm.value;
    }
);

var bottoneAnnulla = document.getElementById("bottone_annulla");

