function soma3(a, b, c) {
    return a + b + c;
}

function mostrarSoma() {
    var n1 = number(document.getElementById("num1").value);
    var n2 = number(document.getElementById("num2").value);
    var n3 = number(document.getElementById("num3").value);

    var resultado = soma3(n1, n2, n3);

    document.getElementById("resultado").innerText = 
    "A soma dos valores é: " + resultado;
}
