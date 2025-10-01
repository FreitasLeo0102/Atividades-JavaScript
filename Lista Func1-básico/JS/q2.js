/*
2) Crie um menu interativo e implemente cada uma das opções desse menu em uma função separada. Não use variáveis globais. Você ficou responsável por criar e gerenciar a parte de um jogo de capturas do Pokemão GO. Os módulos que deve implementar devem gerenciar: taxa de aparecimento de um pokemão, bem como dificuldades de captura balanceada dependendo do tipo de item utilizado. Seguem os detalhes:
    a) Gerar pokemão - Deve gerar um pokemão normal em 80% da vezes, em 15% um raro e em 5% um lendário. Ao 'gerar pokemão', deve imprimir na tela seu nome, tipo (normal, lendário ou raro).
    b) Taxas de captura - Ao escolher essa opção, deve imprimir na tela a chance de captura do pokemão atual dependendo do tipo de item usado. Existem 2 tipos de items, normais e raros. Itens normais multiplicam a chance de captura por 1.0 para pokemãos do tipo normal e raro e 0.8 para pokemãos lendários. Itens raros multiplicam a chance de captura por 2.0 para pokemãos normais e 1.2 para lendários.
    c) Histórico de pokemãos gerados - devem imprimir os pokemãos gerados até o momento, armazenando-os em um array.
    e) Encerrar
*/

function menu() {
    let escolha
    let pokemao = []

    do {
        escolha = prompt(`a) Gerar pokemão
b) Taxas de captura
c) Histórico de pokemãos gerados
e) Encerrar`)

        switch (escolha) {
            case 'a': gerar(pokemao)
                break

            case 'b': taxa(pokemao)
                break

            case 'c': historico(pokemao)
                break
        }

    } while (escolha !== 'e')
}

function gerar(pokemao) {
    let Nome = prompt(`Digite o nome do pokemão: `)
    let chance = Math.random() * 100
    let Raridade

    if (chance <= 80) {
        Raridade = 'normal'
    }

    else if (chance <= 95) {
        Raridade = 'raro'
    }

    else {
        Raridade = 'LENDARIO'
    }

    pokemao.push({
        nome: Nome,
        raridade: Raridade
    })

    alert(`O pokemão ${pokemao[pokemao.length - 1].nome} é da raridade ${pokemao[pokemao.length - 1].raridade}`)

    return pokemao
}

function taxa(pokemao) {
    let chance = 40
    let chanceFinal = 0

    if (pokemao.length === 0) {
        alert("Nenhum pokemão foi gerado ainda")
        return
    }

    let item = prompt(`"Digite o item usado (normal/raro):`).toLowerCase()

    if (pokemao[pokemao.length - 1].raridade === "normal") {
        if (item === "normal") {
            chanceFinal = chance * 1.0

            alert(`A chance de capturar o ${pokemao[pokemao.length - 1].nome} com um item ${item} é de ${chanceFinal}`)
        }

        else if (item === "raro") {
            chanceFinal = chance * 2.0

            alert(`A chance de capturar o ${pokemao[pokemao.length - 1].nome} com um item ${item} é de ${chanceFinal}`)
        }
    }

    else if (pokemao[pokemao.length - 1].raridade === "raro") {
        if (item === "normal") {
            chanceFinal = chance * 1.0

            alert(`A chance de capturar o ${pokemao[pokemao.length - 1].nome} com um item ${item} é de ${chanceFinal}`)
        }

        else if (item === "raro") {
            chanceFinal = chance * 1.0

            alert(`A chance de capturar o ${pokemao[pokemao.length - 1].nome} com um item ${item} é de ${chanceFinal}`)
        }
    }

    else if (pokemao[pokemao.length - 1].raridade === "LENDARIO") {
        if (item === "normal") {
            chanceFinal = chance * 0.8

            alert(`A chance de capturar o ${pokemao[pokemao.length - 1].nome} com um item ${item} é de ${chanceFinal}`)
        }

        else if (item === "raro") {
            chanceFinal = chance * 1.2

            alert(`A chance de capturar o ${pokemao[pokemao.length - 1].nome} com um item ${item} é de ${chanceFinal}`)
        }
    }
}

function historico(pokemao) {
    if (pokemao.length === 0) {
        alert("Nenhum pokemão foi gerado ainda")
        return
    }

    let lista = ""

    pokemao.forEach(element => {
        lista += `Pokemão: ${element.nome} | Raridade: ${element.raridade}\n`
    })

    alert(lista)
}

menu()