function triplo(n){
    return n * 3;
}

function mostrarTriplo(){
    var n = number(document.getElementById("numero").value);
    var resultado = triplo(n);

    document.getElementById("resultado").innerText =
        "O triplo de " + n + " é: " + resultado;
}
