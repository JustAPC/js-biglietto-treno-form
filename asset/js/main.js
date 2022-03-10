let inputNome = document.getElementById("inputnome");
let inputKm = document.getElementById("inputkm");
let eta = document.getElementById("età")

let bottoneGenera = document.getElementById("bottone-genera");
let resoconto = document.getElementById("resoconto");

let prezzoBase = (inputKm.value * 0.21);
let prezzoMaggiorenni = prezzoBase - (prezzoBase * 0.2);
let prezzoOver65 = prezzoBase - (prezzoBase * 0.4);

bottoneGenera.addEventListener("click",
  function(){
    console.log(inputNome.value);
    console.log(inputKm.value);
    console.log(eta.value);

    if (eta.value == 1){
        document.getElementById("biglietto-scontato").innerHTML = "Biglietto Scontato" 
        document.getElementById("prezzo-finale").innerHTML = prezzoMaggiorenni.toFixed(2) + "&#8364;" 
    } else if (eta.value == 2) {
        document.getElementById("biglietto-standard").innerHTML = "Biglietto Standard" 
        document.getElementById("prezzo-finale").innerHTML = prezzoBase.toFixed(2) + "&#8364;" 
    } else if (eta.value == 3) {
        document.getElementById("biglietto-scontato").innerHTML = "Biglietto Scontato" 
        document.getElementById("prezzo-finale").innerHTML = prezzoOver65.toFixed(2) + "&#8364;" 
    }
  }
);

document.getElementById("nome").innerHTML = inputNome.value
document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * 99999) + 9999;

