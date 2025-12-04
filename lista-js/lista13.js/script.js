function verificar() {
    var n = Number(document.getElementById("numero").value);

    if(n % 5 == 0){
        document.getElementById("resultado").innerText = 
        n + " é múltiplo de 5";
    } else {
        document.getElementById("resultado").innerText = 
        n + " não é múltiplo de 5";
    }
}
