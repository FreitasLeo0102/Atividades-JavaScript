// 1) Crie um algoritmo que leia 5 preços de produtos, posteriormente, imprima o índice do produto mais caro e do preço.

let produtos = []
let maior = 0
let indice

for (let i = 0; i < 5; i++) {
    let preco = Number(prompt("Digite o preço do produto"))
    produtos.push(preco)
}

produtos.forEach((item, index) => {
    if (maior < produtos[index]) {
        maior = produtos[index]
        indice = index
    }
})

console.log(`O maior produto possui o preco de ${maior} e de indice ${indice} `)