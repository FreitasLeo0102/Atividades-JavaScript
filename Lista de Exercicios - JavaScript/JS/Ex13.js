let distancia = Number(prompt("Digite a distancia (km) da viagem em: "))
let velocidade = Number(prompt("Digite a velocidade media (km/h) no decorrer da viagem: "))
let combustívelValor = Number(prompt("Digite o valor do litro de combustivel: "))
let combustivelConsumo = Number(prompt("Digite o consumo de combustivel (km por litro) do carro: "))

let tempo = distancia / velocidade
let combustivel = combustivelConsumo * distancia
let custo = (combustivelConsumo * distancia) * combustívelValor

console.log("O tempo estimado da viagem é: " + tempo)
console.log("A quantidade de combustivel consumido foi de: " + combustivel)
console.log("O custo estimado da viagem foi de :" + custo)
