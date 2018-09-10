function berekenSubTotaal(a, b, c) {
    var prijs = parseFloat(a.textContent) * 1000;
    var aantal = parseInt(b.value);
    var totaalprijs = prijs * aantal;
    c.textContent = totaalprijs.toFixed();
}

var motor_price = document.getElementById("motor_price");
console.log(motor_price.textContent);
var aantal = document.getElementById("aantal");
var totaal = document.getElementById("testje")
console.log(document.getElementById("testje")
);


aantal.addEventListener("change", function () {
    berekenSubTotaal(motor_price, aantal, totaal);
});

var motor1_price = document.getElementById("motor1_price");
var aantal1 = document.getElementById("aantal1");
var totaal1 = document.getElementById("totaal1")


aantal1.addEventListener("change", function () {
    berekenSubTotaal(motor1_price, aantal1, totaal1);
});

