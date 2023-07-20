// DICHIARAZIONI VARIABILI
const CostoXkm = 0.21;
const Minorenne = 18;
const Over = 65;
let Eta = 0;
let Discount = 0;
let TicketDiscount = 0;

// Chiedere all'utente ChilometriDaPercorrere
const ChilometriDaPercorrere = parseInt(
  prompt(
    "Benvenuto/a\nPer acquistare il tuo biglietto inserisci quanti Kilometri devi percorrere"
  )
);
console.log(ChilometriDaPercorrere);

// Chiedere all'utente ChilometriDaPercorrere
if (isNaN(ChilometriDaPercorrere)) {
  alert(
    "QUALCOSA E' ANDATO STORTO\n\nForse non hai inserito dei numeri.\nProva a ricaricare la pagina e tentare di nuovo l'acquisto"
  );
} else {
  // Chiedere all'utente Eta
  Eta = parseInt(
    prompt(
      `
        Kilometri da percorrere : ${ChilometriDaPercorrere}
    
        Scopri se sei idoneo per ricevere uno sconto sul tuo biglietto!
        INSERISCI LA TUA ETA'`
    )
  );
  console.log(Eta);
  if (isNaN(Eta)) {
    alert(
      "QUALCOSA E' ANDATO STORTO\n\nForse non hai inserito dei numeri.\nProva a ricaricare la pagina e tentare di nuovo l'acquisto"
    );
  }
}

// Calcolare TicketIntero -> ChilometriDaPercorrere * CostoXkm;
let TicketIntero = ChilometriDaPercorrere * CostoXkm;
console.log(TicketIntero + " €");

// Calcolo sconto
if (Eta < Minorenne) {
  TicketDiscount = TicketIntero - (TicketIntero * 20) / 100;
  Discount = 20;
  console.log(TicketDiscount);
} else if (Eta > Over) {
  TicketDiscount = TicketIntero - (TicketIntero * 40) / 100;
  Discount = 40;
  console.log(TicketDiscount);
}

if (isNaN(ChilometriDaPercorrere) || TicketIntero || Eta || TicketDiscount) {
  document.getElementById("message").innerHTML = "Compra il tuo Biglietto";
  alert(
    "QUALCOSA E' ANDATO STORTO\n\nForse non hai inserito dei numeri.\nProva a ricaricare la pagina e tentare di nuovo l'acquisto"
  );
} else {
  //  Stampa su schermo il biglietto.
  document.getElementById("km").innerHTML =
    "Kilometri da fare : " + ChilometriDaPercorrere + " Km";
  document.getElementById("age").innerHTML = "Età : " + Eta + " Anni";
  document.getElementById("discount").innerHTML =
    "Sconto applicato : " + Discount + " %";
  document.getElementById("price-discount").innerHTML =
    "Prezzo del Ticket intero è di : " + TicketIntero.toFixed(2) + " €";
  document.getElementById("price").innerHTML =
    "Prezzo del Ticket scontato è di : " + TicketDiscount.toFixed(2) + " €";
}
