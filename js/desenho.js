
let displayAcerto =  document.querySelector('#displayAcerto');
let displayTentado = document.querySelector('#displayTentado');

let cabeca = document.querySelector('#cabeca');
let corpo = document.querySelector("#corpo");
let bracoEsquerdo = document.querySelector("#bEsquerdo");
let bracoDireito = document.querySelector('#bDireito');
let pernaEsquerda = document.querySelector("#pEsquerdo");
let pernaDireita = document.querySelector("#pDireito");

function imprimirSecreta(letra){
    for(var i = 0; i < letra.length; i++ ){
        var a = document.createElement("a");
        a.id = i;
        a.textContent = ' _ ';
        displayAcerto.appendChild(a);
    }

    if(letra === 0){
        for(let i = 0; i < displayAcerto.children.length;  ){
            displayAcerto.children[i].remove()
        }
    }

}

function imprimirAcerto(letra){
    for(var i = 0; i < letra.length; i++){
        if(letra[i] !== '_'){
            var a = document.getElementById(i);
            a.textContent = letra[i];
        }
        
    }
}

function imprimirForca(erros){
    erros === 1 ? cabeca.style.display = 'block':null;
    erros === 2 ? corpo.style.display = 'block':null ;
    erros === 3 ? bracoEsquerdo.style.display = 'block':null;
    erros === 4 ? bracoDireito.style.display = 'block':null;
    erros === 5 ? pernaEsquerda.style.display = 'block':null;
    erros === 6 ? pernaDireita.style.display = 'block':null;

    if(erros === 0){
        cabeca.style.display = "none";
        corpo.style.display = 'none';
        bracoEsquerdo.style.display = 'none';
        bracoDireito.style.display = 'none';
        pernaDireita.style.display = 'none';
        pernaEsquerda.style.displat = 'none';
    }
}

function imprimirTentado(letra){

    letra !== 0 ? displayTentado.textContent = letra: displayTentado.innerText = '';
}

