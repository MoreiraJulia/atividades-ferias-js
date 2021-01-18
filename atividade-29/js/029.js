function GerarTabuada(){
    let tabuada = parseFloat(document.querySelector("#tabuada").value);
    let inicio = parseFloat(document.querySelector("#inicio").value);
    let final = parseFloat(document.querySelector("#final").value);

    if(final < inicio){
        document.querySelector("#resposta").innerHTML = "O número final não pode ser menor que o inicial";
        return;
    }

    document.querySelector("#resposta").innerHTML =  "Vou montar a tabuada do " + tabuada + " começando em " + inicio + " terminando em " + final + "<br>";
    for(let i = inicio; i <= final; i++){
        document.querySelector("#resposta").innerHTML += i + " X " + tabuada + " = " + (tabuada * i) + "<br>";
    }
}