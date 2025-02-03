function calcular() {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    var soma = parseInt(num1) + parseInt(num2)

    document.getElementById('resultado').innerText = soma
}

document.getElementById('btncalcular').addEventListener('click', calcular)

function mudarCor() {
    document.getElementById("escuro").style.backgroundColor = "black"
    document.getElementById("escuro").style.color = "white"
}
document.getElementById('btnmudarCor').addEventListener('click', mudarCor)
function mudarCor() {
    var elemento = document.getElementById("escuro");
    // Verificando a cor atual para alternar corretamente
    if (elemento.style.backgroundColor === "black") { 
        elemento.style.backgroundColor = "#cdd0d5"; 
        elemento.style.color = "black"; 
    } else {
        elemento.style.backgroundColor = "black";
        elemento.style.color = "white"; 
    }
}

document.getElementById('btnmudarCor').addEventListener('click', mudarCor);


alert("Bem-Vindo ao Meu Site ")