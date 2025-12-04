function verificar(){
    var idade = number (document.getElementById("idade").value);
    var sexo = document.getElementById("sexo").value;
    var texto = "";

    if(sexo == "F" && idade > 40){
        texto = "Mulher com mais de 40 anos → TEM desconto!";
    }
    else if(sexo == "M" && idade > 50){
        texto = "Homem com mais de 50 anos → TEM desconto!";
    }
    else{
        texto = "Não tem direito ao desconto.";
    }

    document.getElementById("resultado").innerText = texto;
}
