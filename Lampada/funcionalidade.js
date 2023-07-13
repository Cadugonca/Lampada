    var lam = window.document.getElementById('lampada')

    function quebrada(){
        return lam.src.indexOf('quebrada') > -1
       }

    function ligar(){
        if (!quebrada()){
        lam.src = './Imagens/ligada.svg'
    }
}

function desliga(){
    if (!quebrada()){
    lam.src = './Imagens/desligada.svg'
    }
}


function quebrar(){
    lam.src = './Imagens/quebrada.svg'
}