// 2) Leia o Tipo sanguineo de 10 pessoas, ao final, imprima o índice do cadastro e o tipo de cada sangue cadastrado.

let sangue = []

for (let i = 0; i < 10; i++) {
    let tipo = prompt("Digite qual seu tipo sanguineo")
    sangue.push(tipo)
}

sangue.forEach((item, index) => {
    console.log(`A pessoa no indice ${index}, possui o sangue ${sangue[index]}`)
})