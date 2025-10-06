//5) Crie um array de objetos alunos com 3 alunos, onde tenha um nome (titulo) e uma nota (p). Posteriormente, insira esse conteudo dentro de uma div do HTML dinamicamente

function declararAlunos() {
    const alunos = [
    {nome: 'Leo', nota: '10'},
    {nome: 'Tali', nota: '4.5'},
    {nome: 'Mary', nota: '1.5'}
    ]

    criarDiv (alunos)
}

function criarDiv (alunos) {
    const divAlunos = document.createElement("div")

    alunos.forEach(element => {
      const nome = document.createElement("h3")
      nome.innerHTML = `${element.nome}`

      const nota = document.createElement("h3")
      nota.innerHTML = `${element.nota}`

      divAlunos.appendChild(nome)
      divAlunos.appendChild(nota)
    })

    document.body.appendChild(divAlunos)
}

declararAlunos ()