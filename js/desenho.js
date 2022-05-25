
var displayAcerto =  document.querySelector('#displayAcerto');

function imprecaoInicial(letra){
    for(var i = 0; i < letra.length; i++ ){
        var a = document.createElement("a");
        a.id = i;
        a.textContent = '_${i}_';
        displayAcerto.appendChild(a);
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

function imprimirTentado(letra){
    var displayTentado = document.querySelector('#displayTentado');
    for(var i = 0; i < letra.lenght; i++ ){
        var a = document.createElement("a");
        a.textContent = letra[i];
        displayTentado.appendChild(a);
    }
}