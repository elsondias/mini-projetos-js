function calcularIMC() {
    let nome = document.getElementById("nome").value.trim();
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (!nome || isNaN(altura) || isNaN(peso)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let imc = peso / (altura * altura);
    let resultado = `
        Nome: ${nome}<br>
        Altura: ${altura.toFixed(2)} m<br>
        Peso: ${peso} kg<br><br>
        Seu IMC é: ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        resultado += " (Abaixo do peso)";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado += " (Peso adequado)";
    } else if (imc >= 25 && imc < 29.9) {
        resultado += " (Levemente acima do peso)";
    } else if (imc >= 30 && imc < 34.9) {
        resultado += " (Obesidade grau I)";
    } else if (imc >= 35 && imc < 39.9) {
        resultado += " (Obesidade grau II)";
    } else {
        resultado += " (Obesidade grau III)";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function limparCampos() {
    document.getElementById("nome").value = '';
    document.getElementById("altura").value = '';
    document.getElementById("peso").value = '';
    document.getElementById("resultado").innerHTML = '';
}
