'use strict'

function inteiro(){

    const primeiro = +document.getElementById('primeiro').value
    const resultado = document.getElementById('resultado')

    if(primeiro > 0){
        resultado.textContent = 'resultado ' + primeiro
    }else{
        const result2 = primeiro * -1
        resultado.textContent = 'resultado '+ result2
    }

}

const botao = document.getElementById('subtracao').addEventListener('click', inteiro)