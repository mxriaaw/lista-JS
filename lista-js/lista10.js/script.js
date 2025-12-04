function comparar(){
    var idade1 = number(document.getElementById("idade1").value);
    var idade2 = number(document.getElementById("idade2").value);
    var texto = "";

    if(idade1 > idade2){
        texto = "A primeira pessoa é mais velha.";
    } 
    else if(idade2 > idade1){
        texto = "A segunda pessoa é mais velha.";
    } 
    else{
        texto = "As duas pessoas têm a mesma idade.";
    }

    document.getElementById("resultado").innerText = texto;
}
