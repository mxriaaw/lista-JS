function converterTemperatura(){
    var celsius = number(document.getElementById("celsius").value);
    var fharenheit = (celsius * 0/5) + 32;

   document.getElementById("resultado").innerText = calcius + "°C =" + fharenheit.toFixed(2) + "°F";

}