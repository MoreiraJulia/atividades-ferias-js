function VerificarTamanho(){
    let tamanho = document.querySelector("#tamanho").value;
    let tamanhoTexto = "";

    if(tamanho.toUpperCase() == "G"){
        tamanhoTexto = "G - Grande";
    }else if(tamanho.toUpperCase() == "M"){
        tamanhoTexto = "M - Médio";
    }else if(tamanho.toUpperCase() == "P"){
        tamanhoTexto = "P - Pequeno";
    }else{
        tamanhoTexto = "Tamanho inválido";
    }

    document.querySelector("#resposta").innerHTML = "Tamanho selecionado: " + tamanhoTexto;
}