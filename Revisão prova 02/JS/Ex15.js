// 15. Crie um objeto filme que receba do usuário seu nome e classificação. Em seguida, imprima os dados desse filme, informando sua faixa etária classificatória.

let filme = {
    nome: prompt("Digite o nome do filme: "),
    classificacao: prompt("Digite a classificação do filme: "),
}

console.log("O filme " + filme.nome + " tem a classificação etária de " + filme.classificacao + " anos")