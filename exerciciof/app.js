'use strict'

function ordemCresc(){

    const a = +document.getElementById('a').value
    const b = +document.getElementById('b').value
    const c = +document.getElementById('c').value
    const resultado = document.getElementById('resultado')


    if(c > b > a){
        resultado.textContent =  c + ' ' + b + ' ' + a
    }else if(b > a > c){
        resultado.textContent = b + ' ' + a + ' ' + c 
    }

}

const botao = document.getElementById('crescente').addEventListener('click', ordemCresc)