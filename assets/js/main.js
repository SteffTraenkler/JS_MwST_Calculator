//variables for 'Was soll berechnet werden'
let nZb = document.getElementById("nettoZuBrutto");
let bZn = document.getElementById("bruttoZuNetto");

//variables for Mehrwertsteuersatz
let mw19 = document.getElementById("mw19");
// console.log(mw19.checked);
let mw7 = document.getElementById("mw7");

//variable for input price
let price = document.getElementById("price");

//variable for outputs
// ~*~*~*~~*~*~*~~*~*~*~~*~*~*~~*~*~*~
// output 'Nettobetrag (Preis ohne Mehrwertsteuer) in Euro' oder 'Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro
let mwStTxt = document.getElementById("mwstText");
// output € reiner mwst Betrag
let mwStBetrag = document.getElementById("mwtBetrag");
//output & textbeschreibung Endbetrag
let bNprice = document.getElementById("bruttoNettoTextBetrag");
let endPrice = document.getElementById("mwtGesBetrag");


// function!

function calcMw() {
    if ((nZb.checked == true)) {
        console.log(nZb.checked + " Netto zu Brutto ausgewählt");

        if (mw19.checked == true) {
            console.log(mw19.checked + " MwSt 19%");

            mwStTxt.innerHTML = ('Nettobetrag (Preis ohne Mehrwertsteuer) in Euro');
            mwStBetrag.innerHTML = ((price.value * 0.19).toFixed(2) + ' €');
            bNprice.innerHTML = ('Bruttobetrag (Endpreis)');
            endPrice.innerHTML = ((price.value * 1.19).toFixed(2) + ' €');
        } else if (mw7.checked == true) {
            console.log(mw7.checked + " MwSt 7%");

            mwStTxt.innerHTML = ('Nettobetrag (Preis ohne Mehrwertsteuer) in Euro');
            mwStBetrag.innerHTML = ((price.value * 0.07).toFixed(2) + ' €');
            bNprice.innerHTML = ('Bruttobetrag (Endpreis)');
            endPrice.innerHTML = ((price.value * 1.07).toFixed(2) + ' €');
        }
    } else if ((bZn.checked == true)) {
        console.log(nZb.checked + "   Brutto zu Netto ausgewählt");

        if (mw19.checked == true) {
            console.log(mw19.checked + " MwSt 19%");

            mwStTxt.innerHTML = ('Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro');
            mwStBetrag.innerHTML = (((price.value / 1.19) * 0.19).toFixed(2) + ' €');
            bNprice = ('Nettobetrag');
            endPrice.innerHTML = ((price.value / 1.19).toFixed(2) + ' €');
        } else if (mw7.checked == true) {
            console.log(mw7.checked + " MwSt 7%");

            mwStTxt.innerHTML = ('Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro');
            mwStBetrag.innerHTML = (((price.value / 1.07) * 0.07).toFixed(2) + ' €');
            bNprice = ('Nettobetrag');
            endPrice.innerHTML = ((price.value / 1.07).toFixed(2) + ' €');
        }
    } else {
        console.log("Error");
    }
}