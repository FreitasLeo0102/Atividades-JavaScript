// Faça um algoritmo que lê 10 valores do usuário. O algoritmo deve, ao final, imprimir na tela o maior e o menor valor digitado. Use cada uma das 3 estruturas de repetição mostradas.

let i = 1, maior = 0, menor = 0, n

while(i < 10){
    n = Number(prompt("Digite um valor:"))

    if(i == 1){
        maior = n
        menor = n
    }

    if(maior < n){
        maior = n
    }

    if(menor > n){
        menor = n
    }

    i++
}

console.log("O maior numero digitado foi " + maior)
console.log("O menor numero digitado foi " + menor)

