
var pagina = 1;

let btnJogarPInicial = document.querySelector('#btnJogaUm');
let btnNovaPalavra = document.querySelector('#adicionaPalavra');

let btnCancelar = document.querySelector('#btnCancelar');
let btnSalvaComecar = document.querySelector('#btnSalvaComecar');

let btnNovoJogo = document.querySelector('#btnNovoJogo');
let btnDesistir = document.querySelector('#btnDesistir');

let pagina1 = document.querySelector("#pagina-1");// pagina inicil
let pagina2 = document.querySelector("#pagina-2");// pagina adicionar palavra
let pagina3 = document.querySelector("#pagina-3");// pagina do jogo

//botoes da pagina 1
btnNovaPalavra.addEventListener('click', function() {
    pagina1.style.display = 'none';
    pagina2.style.display = 'block';
    pagina = 2
});

btnJogarPInicial.addEventListener('click', function(){
    pagina1.style.display = "none";
    pagina3.style.display = "block";
    pagina = 3;
    iniciarJogo();
});

//botoes da pagina 2
btnCancelar.addEventListener('click', function(){
    pagina2.style.display = 'none';
    pagina1.style.display = 'block';
    pagina = 1;
});
btnSalvaComecar.addEventListener('click', function(){
    pagina2.style.display = 'none';
    pagina3.style.display = 'block';
    pagina = 3;
    iniciarJogo();
})

//botoes da pagina 3
btnNovoJogo.addEventListener('click', function(){
    iniciarJogo()
})

btnDesistir.addEventListener('click', function(){
    pagina3.style.display = 'none';
    pagina1.style.display = 'block';

    pagina = 1;
});

addEventListener('keypress', function(event){
    event.preventDefault();
    jogo(event.key, pagina);
});
