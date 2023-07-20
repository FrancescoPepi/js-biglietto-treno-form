// DICHIARAZIONI VARIABILI
const CostoXkm = 0.21;
const Minorenne = 18;
const Over = 65;
const ButtonSearch = document.getElementById("search-button");
let kmInput = document.getElementById("km-input");
let NameInput = document.getElementById("name-user");
let AgeInput = document.getElementById("age-user");
let Discount = 0;
let TicketDiscount = 0;

// ON CLICK
ButtonSearch.addEventListener("click", function () {
  // Chiedere all'utente nome
  const UserName = NameInput.value;
  console.log(UserName);

  // Chiedere all'utente ChilometriDaPercorrere
  const ChilometriDaPercorrere = kmInput.value;
  console.log(ChilometriDaPercorrere);

  // Chiedere all'utente Eta
  const UserAge = parseInt(AgeInput.value);
  console.log(UserAge);

  // Calcolare TicketIntero -> ChilometriDaPercorrere * CostoXkm;
  let TicketIntero = ChilometriDaPercorrere * CostoXkm;
  console.log(TicketIntero + " €");

  // Calcolo sconto
  if (UserAge == 1) {
    TicketDiscount = TicketIntero - (TicketIntero * 20) / 100;
    Discount = 20;
    console.log(TicketDiscount);
    console.log(TicketIntero);
  } else if (UserAge == 3) {
    TicketDiscount = TicketIntero - (TicketIntero * 40) / 100;
    Discount = 40;
    console.log(TicketDiscount);
    console.log(TicketIntero);
  }
  let KmOutput = document.getElementById("km");
  let DiscountOutput = document.getElementById("discount");
  let PriceNotDiscountOutput = document.getElementById("price-not-discount");
  let PriceFinalOutput = document.getElementById("price");

  //  Stampa su schermo il biglietto.
  KmOutput.innerHTML =
    "Kilometri da percorrere : " + ChilometriDaPercorrere + " Km";
  DiscountOutput.innerHTML = "Sconto applicato : " + Discount + " %";
  PriceNotDiscountOutput.innerHTML =
    "Prezzo del Ticket intero è di : " + TicketIntero.toFixed(2) + " €";
  PriceFinalOutput.innerHTML =
    "Prezzo del Ticket scontato è di : " + TicketDiscount.toFixed(2) + " €";
});
