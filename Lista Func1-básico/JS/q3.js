/*
3) Crie um menu interativo e implemente cada uma das opções desse menu em uma função separada. Não use variáveis globais. Um colecionador deseja armazenar as informações sobre sua coleção de livros. Você deve criar uma mini aplicação para ajuda-lo nessa tarefa.
Menu
    a) Inserir dados do livro (Nome Livro, Autor, ano publicação, avaliação)
    b) Imprimir Nomes de todos os livros cadastrados
    c) Imprimir Todos os dados de um livro específico
    d) Imprimir todos os dados dos livros de um autor específico
    e) Encerrar
*/

function menu() {
    let escolha
    let livros = []

    do {
        escolha = prompt(`
	a) Inserir dados do livro (Nome Livro, Autor, ano publicação, avaliação).
	b) Imprimir Nomes de todos os livros cadastrados.
	c) Imprimir Todos os dados de um livro específico.
	d) Imprimir todos os dados dos livros de um autor específico.
	e) Encerrar `)

        switch (escolha) {
            case 'a': inserirDados(livros)
                break

            case 'b': imprimirTodosLiv(livros)
                break

            case 'c': imprimirLivro(livros)
                break

            case 'd': imprimirLivAutor(livros)
                break
        }
    } while (escolha !== 'e');
}

function inserirDados(livros) {
    let Nome = prompt(`Digite o nome do livro:`)
    let Autor = prompt(`Digite o autor do livro`)
    let Ano = prompt(`Digite o ano de publicação do livro:`)
    let Avaliação = prompt(`Digite uma nota de avaliação do livro`)

    livros.push({
        nome: Nome,
        autor: Autor,
        ano: Ano,
        nota: Avaliação
    })

    return livros
}

function imprimirTodosLiv(livros) {
    let Nomes = []
    livros.forEach(element => {
        Nomes.push(element.nome)
    })

    alert(Nomes)
}

function imprimirLivro(livros) {
    let indice = Number(prompt(`Digite o indice do livro q deseja imprimir (0 a ${livros.length - 1})`))

    if (indice > livros.length - 1) {
        alert(`Não existe um livro com este indice`)
        return
    }

    else {
        alert(`Nome: ${livros[indice].nome}
            Autor: ${livros[indice].autor}
            Ano: ${livros[indice].ano}
            Nota: ${livros[indice].nota}`)
    }
}

function imprimirLivAutor(livros) {
    let autor = prompt(`Digite o nome do autor q vc deseja imprimir os livros`)
    let livrosAutor = []

    livros.forEach((element, index) => {
        if (autor == livros[index].autor) {
            livrosAutor.push(livros[index])
        }
    })

    alert(livrosAutor)
}

menu()