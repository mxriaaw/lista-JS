function calculadoraArea(){
    var base = number(document.getElementById("base").value);
    var base = number(document.getElementById("altura").value);
     var area = base * altura;


     document.getElementById("resultado").innerText = "a area do retangulo e: " + area;

}