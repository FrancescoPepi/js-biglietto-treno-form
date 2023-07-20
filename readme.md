# INTESTAZIONE

**_Calcolo del prezzo del biglietto del treno_**

_ticket train_

## TRACCIA

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

_L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)._

## ISTUZIONI

- Dichiarare _CostoXkm_ = 0.21;
- Dichiarare _Minorenne_ = 18;
- Dichiarare _Over_ = 65;

---

- Chiedere all'utente _ChilometriDaPercorrere_;
- Chiedete all'utente _Età_;

  **SE** l'utente non ha inserito dei numeri

- Chiedere di ricaricare la pagina e inserire dei numeri;

**ALTRIMENTI**

- Calcolare _TicketItero_ -> _ChilometriDaPercorrere_ \* _CostoXkm_;

**SE** _Età_ è < di _Minorenne_

- Togliere 20% da _TicketItero_;

**ALTRIMENTI** **SE** _Età_ è > di _Over_

- Togliere 40% da _TicketItero_;

Stampare a schermo _TicketIntero_;

## FINE.
