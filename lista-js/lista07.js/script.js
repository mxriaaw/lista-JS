function tabuada(){
    var n = parseInt(document.getElementById("numero").value);
    var texto = " ";

    for(var i = 0; i <= 10; i++){
        texto += n + "+" + i + "=" + (n + i) + "\n";
    }

    document.getElementById("resultado").innerText = texto;

}