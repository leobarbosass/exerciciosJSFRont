'use strict'

function calcularMed(){

    const primeiro = +document.getElementById('primeiro').value
    const segundo = +document.getElementById('segundo').value
    const terceiro = +document.getElementById('terceiro').value
    const quarto = +document.getElementById('quarto').value
    const resultado = document.getElementById('resultado')

    const calcular = (primeiro + segundo + terceiro + quarto) /4

    if(calcular > 5){
        resultado.textContent = 'Aprovado com a nota de: ' + calcular
    }else{
        resultado.textContent = 'Reprovado com a nota de: ' + calcular
    }

}

const botao = document.getElementById('media').addEventListener('click', calcularMed)