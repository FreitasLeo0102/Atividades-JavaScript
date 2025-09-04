// Fazer com while, do-while e for) Crie um algoritmo que receba a temperatura de N pessoas. Ao final, imprima na tela a quantidade de pessoas que estão com febre. Assuma que estão com febre as pessoas que estiverem com temperatura acima de 38ºC

let temperatura = 1, qtdFebre = 0

//while
console.log("While")

while(temperatura > 0){
    temperatura = Number(prompt("Digite a temperatura (Quando acabar as pessoas digite um numero menor ou igual a 0"))

    if(temperatura >= 38){
        qtdFebre++
    }
    
}

console.log(qtdFebre + " pessoas estão com febre")


//do-while
temperatura = 1
qtdFebre = 0
console.log("Do-while")

do {
    temperatura = Number(prompt("Digite a temperatura (Quando acabar as pessoas digite um numero menor ou igual a 0"))

    if(temperatura >= 38){
        qtdFebre++
    }
    
} while (temperatura > 0);

console.log(qtdFebre + " pessoas estão com febre")


//for
console.log("For")
temperatura = 1
qtdFebre = 0
let pessoas = Number(prompt("Digite a quantidade de pessoas:"))

for (let i = 1; i <= pessoas; i++) {
    temperatura = Number(prompt("Digite a temperatura da pessoa " + i + ":"))

    if (temperatura > 38) {
        qtdFebre++
    }
}

console.log(qtdFebre + " pessoas estão com febre")