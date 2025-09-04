// Escreva um algoritmo que receba vários números e calcule o somatório desses números. Quando o usuário digitar zero o algoritmo deve imprimir o valor do somatório e depois terminar. 

let soma = 0, n = 1

while(n != 0){
    n = Number(prompt("Digite a idade: "))

    soma = soma + n
}

console.log("A soma dos numeros é " + soma)