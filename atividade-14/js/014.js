function CalcularReajuste(){
    let salarioAtual = parseFloat(document.querySelector("#salario").value);
    let porcentagemReajuste = 0, valorReajuste = 0, salarioNovo = 0 ;

    if(salarioatual <= 280){
        porcentagemReajuste = 20;
    }else if(salarioAtual <= 700){
        porcentagemReajuste = 15;
    }else if(salarioAtual <= 1500){
        porcentagemReajuste = 10
    }else{
        porcentagemReajuste = 5;
    }

    valorReajuste = salarioAtual = (porcentagemReajuste/100);
    salarioNovo = valorReajuste + salarioAtual;

    document.querySelector("#resultado").innerHTML = "Salário Atual: R$ " + salarioAtual;
    document.querySelector("#resultado").innerHTML += "<br>Percentual de reajuste: " + porcentagemReajuste + "%";
    document.querySelector("#resultado").innerHTML += "<br>Valor do aumento: R$ " + valorReajuste;
    document.querySelector("#resultado").innerHTML += "<br>Salário Novo: R$ " + salarioNovo;
}