function menu() {
    let escolha = 0
    let slots = [null, null, null, null, null]

    do {

        slots.forEach((element, index) => {
            if (element != null) {
                slots[index].time++

                if (element.time > 2) {
                    slots[index] = null
                }
            }
        })

        escolha = prompt(`
            1- Status do servidor
            2- Requisitar slot
            3- Liberar slot
            4- Encerrar programa`)

        switch (escolha) {
            case '1': Status(slots)
                break

            case '2': requisitar(slots)
                break

            case '3': liberar(slots)
                break
        }
    } while (escolha != '4')
}

function Status(slots) {
    console.log(slots)
}

function requisitar(slots) {
    let indice = slots.findIndex((slot) => slot === null)

    if (indice != -1) {
        let nome = prompt("Digite o nome do slot")
        slots[indice] = {
            nome: nome,
            time: 0
        }
        return slots
    }

    else {
        alert("Todos os slots estão ocupados, libere um antes de requitar outro")
        return
    }
}

function liberar(slots) {
    let indice = prompt(`Digite o indice do slot q vc deseja liberar`)

    if (slots[indice] === null) {
        alert("Esse slot ja esta vazio")
        return
    }

    else {
        slots[indice] = null
        return slots
    }
}

menu()