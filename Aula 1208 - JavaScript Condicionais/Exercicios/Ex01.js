// Crie um codigo em javascript que receba como entrada o tipo de operação que o usuario deseja realizar (Soma, subtração, multiplicação, divisão), em seguida, realize a leitura de 2 valores do teclado e mostre o resultado da operação no console. Lembre-se de impedir a realização do calculo da divisao por zero, mostrando o erro na tela caso o usuario insista em tantar realizar essa operação.

let op = prompt(`QUal a operação desejada
    a = adição
    s = subtração
    m = multiplicação
    d = divisão`)

let n1 = Number(prompt("Digite um numero: "))
let n2 = Number(prompt("Digite outro numero"))
let r

if (op == 'a'){
    r = n1 + n2
}

else if (op == 's'){
    r = n1 - n2
}

else if (op =='m'){
    r = n1 * n2
}

else if (op == 'd'){
    r = n1 / n2
}

console.log("O resultado da oeração é: ")