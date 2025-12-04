function mostrar(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    document.getElementById("resultado").innerText
   = "seu nome e" + nome + "sua idade e " + idade + "anos";
}