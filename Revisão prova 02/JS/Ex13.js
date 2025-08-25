// 13. Crie um objeto pessoa com os atributos nome, peso, altura e temperatura. Faça uma saída que verifica se essa pessoa está ou não com febre.


let pessoa1 ={
    nome:  "CachorroLoko",
    peso: 90,
    altura: 1.96,
    temperatura: 41
}

console.log("Nome da pessoa: ",pessoa1.nome)
console.log("Peso da pessoa: ", pessoa1.peso)
console.log("Altura da pessoa: ", pessoa1.altura)


if( pessoa1.temperatura <= 37.6)
{
    console.log("Febre")
}

if(pessoa1.temperatura <= 36 && pessoa1.temperatura <= 37.5){

    console.log("Temperatura normal")
}

if( pessoa1.temperatura <= 35){
    console.log("Hipotermia")
}
