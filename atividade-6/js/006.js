function CalcularMulta(){
    let peso = document.querySelector("#peso").value;
    let limite = 50;
    let valorMultaUnidade = 4;
    let excesso = peso - limite;
    let valorTotalMulta = excesso * valorMultaUnidade;

    document.querySelector("#resultado").innerHTML = "<b>kilos excedidos:</b> " + excesso;
    document.querySelector("#resultado").innerHTML += "<br><b>Valor multa:</b> R$ " + valorTotalMulta;
}