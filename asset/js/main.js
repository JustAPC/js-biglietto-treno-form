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

    if (età.value == Minorenne){
        prezzoScontato = prezzoBase - (prezzoBase * 0.2);
        document.getElementById("prezzo-finale").innerHTML = prezzoScontato.toFixed(2) + "&#8364;" 
    } 
    }
);

