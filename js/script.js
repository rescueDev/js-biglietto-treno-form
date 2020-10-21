/* Partendo dall’esercizio di ieri, aggiungiamo la parte visiva come da screenshot(quindi come non detto : bowtie: su layout, fatelo come quello dello screeshot, però gestite prima tutta la parte logica e funzionale, poi vi preoccupate del layout vero e proprio)
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno(numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall’utente */


//variabili
var campoKm = document.getElementById('km');
console.log("Km da percorrere:", campoKm.value); 


//variabili associate a button e output

var nameTicket = document.getElementById("name-ticket");

var tragittoTicket = document.getElementById("km");

var FasciaTicket = document.getElementById("fascia");

var finalPrice = document.getElementById("costoTicket");

// variabili prezzo

var discount20Price = document.getElementById("costoTicket");

var discount40Price = document.getElementById("costoTicket");

//variabili codici

var trainCode = document.getElementById("carrozza");

var codiceCp = document.getElementById("codice-cp");

//OPERAZIONI

//calcolo prezzo biglietto
var ticketPrice = (campoKm.value * 0.21);

//calcolo biglietto con sconto 20%
var discount20 = (ticketPrice - (ticketPrice * 0.2)).toFixed(2);

//calcolo biglietto con sconto 40%
var discount40 = (ticketPrice - (ticketPrice * 0.4)).toFixed(2);


var bottoneGenera = document.getElementById("bottone_genera");

bottoneGenera.addEventListener('click' ,
    function() { 
        var campoName = document.getElementById('name');
        console.log("Nome passeggero:", campoName.value);

        var eta = document.getElementById('eta');
        console.log("Età passeggero:", eta.value); 

        var campoKm = document.getElementById('km');
        console.log("Km da percorrere:", campoKm.value);

        var ticketPrice = (campoKm.value * 0.21);
        console.log(ticketPrice);

        nameTicket.innerHTML =  campoName.value;
        FasciaTicket.innerHTML = eta.value;
        trainCode.innerHTML = Math.floor(Math.random() * 10000) + 90000;
        codiceCp.innerHTML = Math.floor(Math.random() * 1000) + 10000;

        if (eta.value === "Minorenne") {
            document.getElementById("costoTicket").innerHTML = discount20;
            console.log(discount20); 
        }
        else if (eta.value === "Anziano") {
        discount40Price.innerHTML = discount40;
        console.log(discount40);
        }
        else {
        finalPrice.innerHTML = ticketPrice;
        console.log(ticketPrice);
        }

        //comparsa biglietto
        document.getElementById("popup_ticket").style.display = "block";
    }
);

//bottone annulla e resetta form
var bottoneAnnulla = document.getElementById("bottone_annulla");

bottoneAnnulla.addEventListener('click',
    function () {
        //reset form
        document.forms["myForm"].reset(); 
        document.getElementById('eta').selectedIndex = 0;
        //scomparsa bgilietto
        document.getElementById("popup_ticket").style.display = "none";
    }
);




// OUTPUT


