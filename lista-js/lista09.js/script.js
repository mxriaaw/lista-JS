function verificar(){
    var nota = number(document.getElementById("nota").value);

    if(nota >= 6){
        document.getElementById("resultado").innerText = "aprovado";
    }else{
        document.getElementById("resultado").innerText = "reprovado";
    }
}