function calcularMediaPeso(){
    var peso1 = number(document.getElementById("peso1").value);
    var peso2 = number(document.getElementById("peso2").value);
    var media = (peso1 + peso2) / 2;

    document.getElementById("resultado").innerText = "a media dos pesos e: " + media.toFixed(2) + " kg";
    
}