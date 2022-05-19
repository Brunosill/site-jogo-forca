]

function jogo(){
    var palavraSecreta = "bruno";
    var palavra = [];
    var acertos = 0;
    var erros = 0;
    var tentado = [];
    var tentativa = "";

    for (var i = 0; i < palavraSecreta.length; i++){
        palavra.push(" ");
    }
    while (erros < 6){
        tentativa = prompt("letra");

        console.log(tentado.indexOf(tentativa))
        if(acertos == palavraSecreta.length){
            console.log("parabens!!")
            break;
        }
        if(tentado.indexOf(tentativa) == -1){
            tentado.push(tentativa);
            
            if(palavraSecreta.indexOf(tentativa) !== -1){
                for(let i = 0; i < palavraSecreta.length; i++){
                    if(palavraSecreta[i]==tentativa){
                        palavra[i] = tentativa;
                    }
                }
                console.log("Acertou !");
                acertos ++;
            }else{
                console.log("Errou!");
                erros ++;
            }
        }
        if(erros == 6){
            console.log("fim de jogo");
        }
        console.log(tentado);
        console.log(palavra);
    }

    
}
jogo();
