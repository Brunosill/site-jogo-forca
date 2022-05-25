let dicionario = ['bruno', 'guedes']

function palavraDividida(palavraSorteada){
    var separada = [];
    for (var i = 0; i < palavraSorteada.length; i++){
        separada.push("_");
    }
    return separada;
}

function palavraSorteada(){
    return dicionario[getRandomIntInclusive(dicionario.length)];
}

function adicionarDicionario(palavra){
    dicionario.push(palavra);
    console.log(dicionario);
}

function getRandomIntInclusive(max){
    var min = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
