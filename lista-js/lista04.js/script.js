function calcularDesconto(){
    var preco = number(document.getElementById("preco").value);
    var desconto = preco * 0.10;
    var precoFinal = preco - desconto;

    document.getElementById("resultado").innerText = "preco com 10% de desconto: R$" + precoFinal.toFixed
}