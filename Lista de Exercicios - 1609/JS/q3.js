// 3) Faça a leitura de uma fita de RNA de 10 elementos. Após a leitura, faça o complemento de leitura dessa fita e imprima os elementos na sequencia correta.

const fita = []

for (let i = 0; i < 10; i++) {
    let base = prompt("Digite a base (A, U, C, G):").toUpperCase()

    fita.push(base)
}


let complemento = fita.map(base => {
    if (base === "A"){
        return "U"
    }

    else if (base === "U"){
        return "A"
    } 

    else if (base === "C"){
        return "G"
    }

    else if (base === "G"){
        return "C"
    } 

})

console.log(`A fita complementar a ${fita} é ${complemento}`)