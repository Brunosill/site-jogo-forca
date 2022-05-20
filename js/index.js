let btnJogarPInicial = document.querySelector('#btnJogaUm');
let btnNovaPalavra = document.querySelector('#adicionaPalavra');

let btnCancelar = document.querySelector('btnCancelar');

let pagina1 = document.querySelector("#pagina-1");// pagina inicil
let pagina2 = document.querySelector(".pagina-2");// pagina adicionar palavra
let pagina3 = document.querySelector(".pagina-3");// pagina do jogo

//botoes da pagina 1
btnNovaPalavra.addEventListener('click', function() {
    if(pagina1.style.display === "block"){
        pagina1.style.display = 'none';
        pagina2.style.display = 'block';
    }
    
});

btnJogarPInicial.addEventListener('click', function(){
    pagina1.style.display = "none";
    pagina3.style.display = "block";
});

//botoes da pagina 2
