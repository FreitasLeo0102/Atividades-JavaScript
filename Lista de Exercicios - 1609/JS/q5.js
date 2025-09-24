/* 5) Faça um programa que leia o nome e a nota de avaliação 6 filmes. Apos o cadastro de todos os filmes, exiba um menu com as opções:
    a) Imprimir dados de 1 filme - escolher um índice e imprimir os dados
    b) Avaliar um filme cadastrado - deve selecionar um índice e fazer a média da nova nota com a nota antiga.
    c) Alterar dados de um filme cadatrado - deve escolher o índice de um filme para alterar seus dados.
    d) Finalizar a execução do programa e imprimir todos os dados
*/

let filmes = []

for (let i = 0; i < 6; i++) {
    let filme = prompt("Digite o nome do filme: ")
    let nota = Number(prompt("Digite a nota de avaliação do filme: "))  

    filmes.push({
        nome: filme,
        avaliacao: nota
    })
}

let opcao

do {
    opcao = prompt(`
    a) Imprimir dados de 1 filme.
    b) Avaliar um filme cadastrado.
    c) Alterar dados de um filme cadastrado.
    d) Finalizar a execução do programa.`)

    if (opcao === 'a') {
        let indice = Number(prompt("Digite o índice do filme (0 a 5): "))
        console.log(filmes[indice])

    } else if (opcao === 'b') {
        let indice = Number(prompt("Digite o índice do filme: "))
        let novaNota = Number(prompt("Digite a nova nota: "))
        filmes[indice].avaliacao = (filmes[indice].avaliacao + novaNota) / 2
        console.log("Nota atualizada:", filmes[indice])

    } else if (opcao === 'c') {
        let indice = Number(prompt("Digite o índice do filme: "))
        let novoNome = prompt("Digite o novo nome: ")
        let novaNota = Number(prompt("Digite a nova nota: "))
        filmes[indice].nome = novoNome
        filmes[indice].avaliacao = novaNota
        console.log("Dados alterados:", filmes[indice])
    }

} while (opcao !== 'd')

console.log("Lista final de filmes:", filmes)
