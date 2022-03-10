let inputNome = document.getElementById("inputnome");
let inputKm = document.getElementById("inputkm");
let eta = document.getElementById("eta")

let bottoneGenera = document.getElementById("bottone-genera");
let bottoneAnnulla = document.getElementById("bottone-annulla");
let resoconto = document.getElementById("resoconto");

bottoneGenera.addEventListener("click",
function(){

    resoconto.style = "display: block"
    console.log(inputNome.value);
    console.log(inputKm.value);
    console.log(eta.value);
    let prezzoBase = (inputKm.value * 0.21);

    if (eta.value == 1){
        let prezzoMinorenni = prezzoBase - (prezzoBase * 0.2);
        document.getElementById("categoria-biglietto").innerHTML = "Biglietto Scontato" 
        document.getElementById("prezzo-finale").innerHTML = prezzoMinorenni.toFixed(2) + "&#8364;" 
    } else if (eta.value == 2) {
        document.getElementById("categoria-biglietto").innerHTML = "Biglietto Standard" 
        document.getElementById("prezzo-finale").innerHTML = prezzoBase.toFixed(2) + "&#8364;" 
    } else if (eta.value == 3) {
        let prezzoOver65 = prezzoBase - (prezzoBase * 0.4);
        document.getElementById("categoria-biglietto").innerHTML = "Biglietto Scontato" 
        document.getElementById("prezzo-finale").innerHTML = prezzoOver65.toFixed(2) + "&#8364;" 
    }
    document.getElementById("nome").innerHTML = inputNome.value
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * 99999) + 9999;
  }
);

bottoneAnnulla.addEventListener("click",
  function() {
      resoconto.style = "display: none"
  }
)


