var palavraSecreta = palavraSorteada();
var acertos = 0;
var erros = 0;
var tentado = [];
var palavra = palavraDividida(palavraSecreta);
imprecaoInicial(palavra)

function jogo(tentativa, iniciar){


    if(iniciar === 3){
    

        if(acertos == palavraSecreta.length){
            console.log("parabens!!")
        }
        if(tentado.indexOf(tentativa) === -1){
            tentado.push(tentativa);
            
            
            if(palavraSecreta.indexOf(tentativa) !== -1){

                imprimirAcerto(tentativa);
                for(let i = 0; i < palavraSecreta.length; i++){
                    if(palavraSecreta[i]==tentativa){
                        palavra[i] = tentativa;
                        imprimirAcerto(palavra);
                    }
                }
                console.log("Acertou !");
                acertos ++;
                erros --;
            }else{
                erros ++;
            }
        }
        if(erros == 6){
            console.log("fim de jogo");
        }
    }
}