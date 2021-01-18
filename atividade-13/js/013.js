function Mensagem(){
    let periodo = document.querySelector("#periodo").value;
    let mensagem = "";

    if(periodo == "m"){
        mensagem = "Bom Dia!";
    }else if(periodo == "v"){
        mensagem == "Boa Tarde!";
    }else if(periodo == "n"){
        mensagem == "Boa Noite!"
    }else{
        mensagem = " - ";
    }

    document.querySelector("#mensagem").innerHTML = mensagem;
}