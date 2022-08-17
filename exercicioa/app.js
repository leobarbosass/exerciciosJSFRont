'use strict'

function calcularSub(){

    const primeiro = +document.getElementById('primeiro').value
    const segundo = +document.getElementById('segundo').value
    const resultado = document.getElementById('resultado')

    const calcular = primeiro - segundo
    const calcular2 = segundo - primeiro

    if(primeiro > segundo){
        resultado.textContent = 'resultado ' + calcular
    }else{
        resultado.textContent = 'resultado ' + calcular2
    }

}

const botao = document.getElementById('subtracao').addEventListener('click', calcularSub)