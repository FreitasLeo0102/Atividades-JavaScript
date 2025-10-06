function alterarMsg(nome) {
    const elemento = document.getElementById("msg")
    elemento.innerHTML = `Boa tarde ${nome}`
}

let elementoBtn = document.getElementById("btnComfirma")
elementoBtn.addEventListener("click", function () {

})

function mensagem() {
    const elemento = document.getElementById("msg")
    const nome = document.getElementById("nome").value
    elemento.innerHTML = 'Boa tarde &(nome)!'
}



/* Crie um laço de repetição que imprima os números de 1 a 100 no HTML*/

function q1() {
    let numeros = document.getElementById("numeros");

    for (let i = 1; i <= 100; i++) {
        numeros.innerHTML += i + ", ";
    }
}

q1 ()

