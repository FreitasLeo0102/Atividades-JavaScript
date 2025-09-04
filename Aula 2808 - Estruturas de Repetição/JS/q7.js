/*
7) Faça um programa que tenha um menu com as seguintes opçoes:
a) SOMA
b) SUBTRAÇÃO
c) MULTIPLICAÇÃO
d) DIVISÃO
e) sair
Ao escolher a opção sair, o programa deve listar quantas operações de cada tipo foram feitas. 
*/

let op = "", soma = 0, sub = 0, mult = 0, divi = 0
let n1, n2

do {
    op = prompt(`a) SOMA
b) SUBTRAÇÃO
c) MULTIPLICAÇÃO
d) DIVISÃO
e) sair`)

    if (op == "a" || op == "b" || op == "c" || op == "d") {
        n1 = Number(prompt("Digite o primeiro numero: "))
        n2 = Number(prompt("Digite o segundo numero: "))
    }

    switch (op) {
        case "a":
            console.log("O resultado da soma é: " + (n1 + n2))
            soma++
            break

        case "b":
            console.log("O resultado da subtração é: " + (n1 - n2))
            sub++
            break

        case "c":
            console.log("O resultado da multiplicação é: " + (n1 * n2))
            mult++
            break

        case "d":
            console.log("O resultado da divisão é: " + (n1 / n2))
            divi++
            break
    }
}
while (op != "e")

console.log("Somas: " + soma)
console.log("Subtrações: " + sub)
console.log("Multiplicações: " + mult)
console.log("Divisões: " + divi)
