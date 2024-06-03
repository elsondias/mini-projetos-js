"use strict"

const display = document.getElementById("display")
const numeros = document.querySelectorAll("[id*=tecla]")
const operadores = document.querySelectorAll("[id=operador]")

let novoNumero = true
let operador
let numeroAnterior

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto
        novoNumero = false
    } else {
        display.textContent += texto
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)
numeros.forEach(numero => numero.addEventListener("click", inserirNumero))

const operacaoPendente = () => operador !== undefined

const calcular = () => {
    if (operacaoPendente()) {
        const numeroAtual = parseFloat(display.textContent.replace(',', '.'))
        novoNumero = true
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`)
        atualizarDisplay(resultado.toString().replace('.', ','))
        operador = undefined
    }
}

const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular()
        novoNumero = true
        operador = evento.target.dataset.operador
        numeroAnterior = parseFloat(display.textContent.replace(',', '.'))
    }
}

operadores.forEach(operador => operador.addEventListener("click", selecionarOperador))

const ativarIgual = () => {
    calcular()
    operador = undefined
}

document.querySelector("#igual").addEventListener("click", ativarIgual)

const limparDisplay = () => display.textContent = ''

document.querySelector("#limparDisplay").addEventListener("click", limparDisplay)

const limparCalculo = () => {
    limparDisplay()
    operador = undefined
    novoNumero = true
    numeroAnterior = undefined
}

document.querySelector("#limparCalculo").addEventListener("click", limparCalculo)

const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1)

document.querySelector("#backspace").addEventListener("click", removerUltimoNumero)

const inverterSinal = () => {
    novoNumero = true
    atualizarDisplay(display.textContent * -1)
}

document.querySelector("#inverter").addEventListener("click", inverterSinal)

const existeDecimal = () => display.textContent.indexOf(',') !== -1
const existeValor = () => display.textContent.length > 0

const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (existeValor()) {
            atualizarDisplay(',')
        } else {
            atualizarDisplay('0,')
        }
    }
}

document.querySelector("#decimal").addEventListener("click", inserirDecimal)
