//4,5) Crie um objeto do tipo Computador com marca (h1), processador (h2), memoria ram (h2), hd (p). Crie uma div com classe produto. Adicione o objeto comptador, previamente preenchido a essa div

function criarComputador() {
    const computador = {
        marca: 'Positivo',
        processador: 'Um q processa',
        ram: '512gb',
        hd: '90T'
    }

    criarNo(computador)
}

function criarNo(computador) {
    const elemetoMarca = document.createElement("h1")
    elemetoMarca.innerHTML = `${computador.marca}`

    const elemetoProcessador = document.createElement("h2")
    elemetoProcessador.innerHTML = `${computador.processador}`

    const elemetoRam = document.createElement("h2")
    elemetoRam.innerHTML = `${computador.ram}`

    const elemetoHD = document.createElement("p")
    elemetoHD.innerHTML = `${computador.hd}`

    const divPC = document.createElement("div")
    divPC.classList.add("produto")

    divPC.appendChild(elemetoMarca)
    divPC.appendChild(elemetoProcessador)
    divPC.appendChild(elemetoRam)
    divPC.appendChild(elemetoHD)

    document.body.appendChild(divPC)
}

criarComputador()