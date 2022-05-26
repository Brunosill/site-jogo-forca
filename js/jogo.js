var palavraSecreta ;
var acertos = 0;
var erros = 0;
var tentado = [];
var palavra ;

function iniciarJogo(){
    imprimirForca(0);
    imprimirSecreta(0);
    imprimirTentado(0);
    tentado = [];
    palavraSecreta = palavraSorteada();
    palavra = palavraDividida(palavraSecreta);
    imprimirSecreta(palavra);
    
}

function jogo(tentativa, iniciar){


    if(iniciar === 3){
    

        if(acertos == palavraSecreta.length){
            console.log("parabens!!")
        }
        if(tentado.indexOf(tentativa) === -1){
            tentado.push(tentativa);
            imprimirTentado(tentado);
            
            
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
            }else{
                erros ++;
                imprimirForca(erros);
            }
        }
        if(erros == 6){
            console.log("fim de jogo");
        }
    }
    console.log(displayAcerto.getAttribute);
}