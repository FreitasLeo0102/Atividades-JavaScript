//6. A partir do exercício anterior, faça uma alteração para que cada aluno fique dentro de uma div própria de classe "aluno". Adicione configurações CSS na classe aluno para ter uma borda solida azul de 1px.

function declararAlunos() {
    const alunos = [
        { nome: 'Leo', nota: '10' },
        { nome: 'Tali', nota: '4.5' },
        { nome: 'Mary', nota: '1.5' }
    ]

    criarDiv(alunos)
}

function criarDiv(alunos) {
    const divAlunos = document.createElement("div")
    divAlunos.classList.add("alunos")

    alunos.forEach(element => {
        const divAluno = document.createElement("div")
        divAluno.classList.add("aluno")

        const nome = document.createElement("h3")
        nome.innerHTML = `${element.nome}`

        const nota = document.createElement("h3")
        nota.innerHTML = `${element.nota}`

        divAluno.appendChild(nome)
        divAluno.appendChild(nota)

        divAlunos.appendChild(divAluno)
    })

    document.body.appendChild(divAlunos)
}

declararAlunos()