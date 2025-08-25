// Crie um programa em JS que defina 2 objetos pokemãos, leia os dados desses objetos assumindo que possuem, id, nome, tipo(agua, fogo ou terra) e poder(sortear um valor entre 1 e 10 preenchido automático). Logo em seguida, coloque esses dois pokemãos para batalhar e apresente na tela o resultado da luta. Caso um dos pokemãos tenha vantagem elemental de tipo sobre o outro, respeitando (agua ganha de fogo, fogo ganha de terra, terra ganha de agua), o pokemão que possui vantagem deve ganhar 3 pontos de poder durante o calculo do resultado da luta.

let poke1 = {
    id: prompt("Digite o ID do primeiro Pokemão: "),
    nome: prompt("Digite o nome do primeiro Pokemão"),
    tipo: prompt(`Qual o tipo do primeiro Pokemão:
        1 - Agua
        2 - Fogo
        3 - Terra`),
    poder: Math.floor((Math.random() * 10) + 1)
}

let poke2 = {
    id: prompt("Digite o ID do segundo Pokemão: "),
    nome: prompt("Digite o nome do segundo Pokemão"),
    tipo: prompt(`Qual o tipo do segundo Pokemão:
        1 - Agua
        2 - Fogo
        3 - Terra`),
    poder: Math.floor((Math.random() * 10) + 1)
}

if (poke1.tipo == 1 && poke2.tipo == 2){ // poke1 = agua /// poke2 = fogo /// poke1 ganha
    poke1.poder = poke1.poder + 3
}

else if (poke1.tipo == 2 && poke2.tipo == 1){ // poke1 = fogo /// poke2 = agua /// poke2 ganha
    poke2.poder = poke2.poder + 3
}

else if (poke1.tipo == 2 && poke2.tipo == 3){ // poke1 = fogo /// poke2 = terra /// poke1 ganha
    poke1.poder = poke1.poder + 3
}

else if (poke1.tipo == 3 && poke2.tipo == 2){ // poke1 = terra /// poke2 = fogo /// poke ganha2
    poke2.poder = poke2.poder +3
}

else if (poke1.tipo == 3 && poke2.tipo == 1){ // poke1 = terra /// poke2 = agua /// poke1 ganha
    poke1.poder = poke1.poder + 3
}

else if (poke1.tipo == 1 && poke2.tipo == 3){ // poke1 = agua /// poke2 = terra /// poke ganha
    poke2.poder = poke2.poder + 3
}


if (poke1.poder > poke2.poder){
    alert(poke1.nome0 + " Wins")
}

else if (poke1.poder == poke2.poder){
    alert("Empate")
}

else{
    alert(poke2.nome + " Wins")
}

