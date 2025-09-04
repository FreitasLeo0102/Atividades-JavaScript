// Escreva um algoritmo que receba os valores dos salários de todos os membros de uma família e ao final, mostre quanto dinheiro a família possui.

let salario = 1, salarioTotal = 0

while(salario != 0){
    salario = Number(prompt("Digite o salario de um membro da familia (Quando acabar os membros digite 0)"))

    salarioTotal = salarioTotal + salario
}

console.log("O salario total da familia é ", salarioTotal)

