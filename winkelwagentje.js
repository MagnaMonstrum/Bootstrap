function berekenSubTotaal(a, b, c) {
    var prijs = parseFloat(a.textContent) * 1000;
    var aantal = parseInt(b.value);
    var totaalprijs = prijs * aantal;
    c.textContent = totaalprijs.toFixed(2);
}

var motor_price = document.getElementById("motor_price");
var aantal = document.getElementById("aantal");
var totaal = document.getElementById("testje");



aantal.addEventListener("change", function () {
    berekenSubTotaal(motor_price, aantal, totaal);
});

var motor1_price = document.getElementById("motor1_price");
var aantal1 = document.getElementById("aantal1");
var totaal1 = document.getElementById("totaal1");


aantal1.addEventListener("change", function () {
    berekenSubTotaal(motor1_price, aantal1, totaal1);
});
var motor2_price = document.getElementById("motor2_price");
var aantal2 = document.getElementById("aantal2");
var totaal2 = document.getElementById("totaal2");


aantal2.addEventListener("change", function() {
    berekenSubTotaal(motor2_price, aantal2, totaal2);
});

var totaalprijs = (parseFloat(totaal.textContent)
+ parseFloat(totaal1.textContent)
+ parseFloat(totaal2.textContent));

var volletank = 0;
if(document.getElementById("benzine").checked) {
    totaalprijs = (totaalprijs + 50).toFixed(2);
}

totaalknop.addEventListener("click", function(){
    document.getElementById("totaalprijs").textContent = totaalprijs;
})
