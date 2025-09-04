// Faça um algoritmo que receba a idade de várias pessoas, ao final, mostre a idade média da população em questão. Quando o usuário digitar um valor 0 ou inferior, o algoritmo deve encerrar.

let idade = 0, idadeFinal = 0, media = 0, m =0

while(idade > 0){
    idade = Number(prompt("Digite a idade de um membro da familia(Quando acabar os mebros digite um numero menor ou igual a 0"))

    idadeFinal = idadeFinal + idade 
    m++
}

media = idadeFinal / (m - 1)

console.log("A meida das idades é " + media)
