// DICHIARAZIONI VARIABILI
const CostoXkm = 0.21;
const ButtonSearch = document.getElementById("search-button");
const ButtonReset = document.getElementById("reset-button");
const ContainerInput = document.getElementById("container-input");
const ContainerOutput = document.getElementById("container-output");
let PriceFinalOutput = document.getElementById("price-output");
let DiscountOutput = document.getElementById("discount-output");
let PriceDiscountOutput = document.getElementById("price-discount-output");

// ON CLICK

ButtonSearch.addEventListener("click", function () {
  // Dichiarazioni di variabili
  let NameInput = document.getElementById("name-user");
  let kmInput = document.getElementById("km-input");
  let AgeInput = document.getElementById("age-user");
  let Discount = 0;
  let TicketDiscount = 0;

  // Chiedere all'utente nome
  const UserName = NameInput.value;
  console.log(UserName);

  // Chiedere all'utente ChilometriDaPercorrere
  const ChilometriDaPercorrere = parseInt(kmInput.value);
  console.log(ChilometriDaPercorrere);

  // Chiedere all'utente Eta
  const UserAge = AgeInput.value;
  console.log(UserAge);

  if (isNaN(ChilometriDaPercorrere) || !NameInput.value) {
    return;
  } else {
    // Calcolare TicketIntero -> ChilometriDaPercorrere * CostoXkm;
    let TicketIntero = ChilometriDaPercorrere * CostoXkm;
    console.log(TicketIntero + " €");
    let PriceDiscount = 0;

    // Calcolo sconto
    if (UserAge == "Minorenne") {
      TicketDiscount = TicketIntero - (TicketIntero * 20) / 100;
      Discount = 20;
      PriceDiscount = TicketIntero - TicketDiscount;
      console.log(TicketDiscount);
      console.log(TicketIntero);
    } else if (UserAge == "Anziano") {
      TicketDiscount = TicketIntero - (TicketIntero * 40) / 100;
      Discount = 40;
      PriceDiscount = TicketIntero - TicketDiscount;
      console.log(TicketDiscount);
      console.log(TicketIntero);
    }

    console.log(PriceDiscount + "sono io");

    let NameOutput = document.getElementById("name-output");
    let KmOutput = document.getElementById("km-output");
    let AgeOutput = document.getElementById("age-output");
    let PriceNotDiscountOutput = document.getElementById(
      "price-not-discount-output"
    );

    //  Stampa su schermo il biglietto.
    NameOutput.innerHTML = "Nome : " + UserName;
    KmOutput.innerHTML =
      "Kilometri da percorrere : " + ChilometriDaPercorrere + " Km";
    AgeOutput.innerHTML = "Fascia d'età selezionata : " + UserAge;
    PriceNotDiscountOutput.innerHTML =
      "Prezzo del Ticket intero è di : " + TicketIntero.toFixed(2) + " €";
    if (TicketDiscount != 0) {
      DiscountOutput.innerHTML = "Sconto applicato : " + Discount + " %";
      PriceDiscountOutput.innerHTML =
        "Lo sconto è di : -" + PriceDiscount.toFixed(2) + " €";
      PriceFinalOutput.innerHTML =
        "Prezzo finale : " + TicketDiscount.toFixed(2) + " €";
    }

    // D-none form
    ContainerOutput.classList.remove("d-none");
    ContainerInput.classList.add("d-none");

    // Azzera input
    NameInput.value = "";
    kmInput.value = "";
    AgeInput.value = "Scegli la fascia d'età";
  }
});

ButtonReset.addEventListener("click", function () {
  ContainerInput.classList.remove("d-none");
  ContainerOutput.classList.add("d-none");

  DiscountOutput.innerHTML = "";
  PriceDiscountOutput.innerHTML = "";
  PriceFinalOutput.innerHTML = "";
});
