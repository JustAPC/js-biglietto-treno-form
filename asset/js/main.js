let inputNome = document.getElementById("inputnome");
let inputKm = document.getElementById("inputkm");
let età = document.getElementById("età")

let bottoneGenera = document.getElementById("bottone-genera");
let resoconto = document.getElementById("resoconto");

let prezzoScontato = 0;

bottoneGenera.addEventListener("click",
  function(){
    console.log(inputNome.value);
    console.log(inputKm.value);
    console.log(età.value);


    let prezzoBase = (inputKm.value * 0.21);
    console.log("Il prezzo base del biglietto è di " + prezzoBase + "€");

    if (età.value = 1){
        prezzoScontato = prezzoBase - (prezzoBase * 0.2);
        document.getElementById("biglietto-scontato").innerHTML = "Biglietto Scontato" 
        document.getElementById("prezzo-finale").innerHTML = prezzoScontato.toFixed(2) + "&#8364;" 
    } else if (età.value = 2) {
        document.getElementById("biglietto-standard").innerHTML = "Biglietto Standard" 
        document.getElementById("prezzo-finale").innerHTML = prezzoBase.toFixed(2) + "&#8364;" 
    } else if (età.value = 3) {
        prezzoScontato = prezzoBase - (prezzoBase * 0.4);
        document.getElementById("biglietto-scontato").innerHTML = "Biglietto Scontato" 
        document.getElementById("prezzo-finale").innerHTML = prezzoScontato.toFixed(2) + "&#8364;" 
    }
  }
);

document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * 99999) + 9999;

