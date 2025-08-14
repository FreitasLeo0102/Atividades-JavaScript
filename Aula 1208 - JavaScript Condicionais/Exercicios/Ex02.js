// Crie dois objetos para armazenar os dados de filmes em um serviço de streaming, em seguida preencha os dados com valores DIGITADOS pelo usuario e mostre os dados dos dois filmes na tela. Em seguida, compare as notas dos filmes e digite apenas o titulo do filme com melhor nota

let filme1 = {}
let filme2 = {}

filme1.titulo = prompt("Digite o título do primeiro filme:")
filme1.genero = prompt("Digite o gênero do primeiro filme:")
filme1.ano = prompt("Digite o ano de lançamento do primeiro filme:")
filme1.nota = Number(prompt("Digite a nota (0 a 10) do primeiro filme:"))

filme2.titulo = prompt("Digite o título do segundo filme:")
filme2.genero = prompt("Digite o gênero do segundo filme:")
filme2.ano = prompt("Digite o ano de lançamento do segundo filme:")
filme2.nota = Number(prompt("Digite a nota (0 a 10) do segundo filme:"))

if (filme1.nota > filme2.nota){
    console.log(filme1.titulo)
}

else if(filme2.nota > filme1.nota){
    console.log(filme2.titulo)
}

else{
    console.log("Ambos os filmes possuem a mesma nota")
}