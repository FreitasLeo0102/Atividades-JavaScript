/* Um aluno deve preencher as notas trimestrais referentes a cada uma de suas 8 matérias, cada matéria deve ter o nome, nota e frequencia. Preencha os dados e posteriormente:
    a) imprima a média de frequencia de todas as disciplinas
    b) imprima a quantidade de notas acima da média (60%)
*/

const boletim = []

for(let i = 0; i < 8; i++){
    let materia = prompt(`Digite o nome da materia`)
    let nota = Number(prompt(`Digite sua nota em ${materia}`))
    let freq = Number(prompt(`Digite sua ffrequencia em ${materia}`))
    boletim.push({
        materia: materia,
        nota: nota,
        freq: freq
    })
}

let somaFreq = 0, acimaMedia = 0

boletim.forEach((item, indice) => {
    somaFreq += item.freq

    if(item.nota >= 6){
        acimaMedia++
    }
})

let mediaFreq = somaFreq / boletim.length

console.log(`A media de frequncia é ${mediaFreq} e o aluno esta com ${acimaMedia} notas acima da media`)