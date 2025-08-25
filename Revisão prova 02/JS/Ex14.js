// 14. Crie 2 objetos do tipo livro e peça ao usuário para preenche-los. Depois, imprima na tela o livro com autoria mais antiga, o livro com mais páginas e o livro com autor brasileiro (caso haja).

let livro1 = {
    nome1: "",
    anodep1: 0,
    ndepa1: 0,
    autorb1: "",
}

let livro2 = {
    nome2: "",
    anodep2: 0,
    ndepa2: 0,
    autorb2: "",
}


livro1.nome1 = prompt("Digite o nome do primeiro livro: ")
livro1.anodep1 = Number(prompt("Digite o ano de lançamento do primeiro livro: "))
livro1.ndepa1 = Number(prompt("Digite o número de páginas do primeiro livro: "))
livro1.autorb1 = prompt("É de um autor brasileiro? ")


livro2.nome2 = prompt("Digite o nome do segundo livro: ")
livro2.anodep2 = Number(prompt("Digite o ano de lançamento do segundo livro: "))
livro2.ndepa2 = Number(prompt("Digite o número de páginas do segundo livro: "))
livro2.autorb2 = prompt("É de um autor brasileiro? ")


if(livro1.anodep1 > livro2.anodep2){
    console.log("O livro mais velho é", livro2.nome2)
} else {
    console.log("O livro mais velho é", livro1.nome1)
}


if(livro1.ndepa1 > livro2.ndepa2){
    console.log("O livro com mais páginas é", livro1.nome1)
} else {
    console.log("O livro com mais páginas é", livro2.nome2)
}


console.log("Os livros de autores brasileiros são:")
if(livro1.autorb1.toLowerCase() === "sim"){
    console.log(livro1.nome1)
}
if(livro2.autorb2.toLowerCase() === "sim"){
    console.log(livro2.nome2)
}

