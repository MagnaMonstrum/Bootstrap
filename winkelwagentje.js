var obj = document.getElementById("aantal");
obj.addEventListener("change", berekenSubTotaal)

var prijsinput = document.getElementById("motor price");
var aantalinput = document.getElementById("aantal");
var subtotaal = document.getElementById("totaal")
function berekenSubTotaal(prijsinput, aantalinput, subtotaal) {
    var prijs = parseFloat(document.getElementById("motor price").textContent) * 1000;
    var aantal = parseInt(document.getElementById("aantal").value);
    var totaalprijs = prijs * aantal;
    subtotaal.textContent = totaalprijs.toFixed();
}

berekenSubTotaal(prijsinput, aantalinput, subtotaal);