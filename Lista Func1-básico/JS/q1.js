/*
1) Crie um menu interativo e implemente cada uma das opções desse menu em uma função separada. 
Não use variáveis globais. Assuma que está criando um gerenciador de vendas e despesas diárias. 
O menu deve ter as opções:
	a) Inserir Valor de uma Venda
	b) Ver status das vendas do dia (numero de vendas e valor total vendido)
	c) Inserir Valor de uma Despesa 
	d) Ver total de despesas do dia
	e) Encerrar 
*/

function menu() {
	let Escolha
	let vendas = []
	let despesas = []

	do {
		Escolha = prompt(`
	a) Inserir Valor de uma Venda
	b) Ver status das vendas do dia (numero de vendas e valor total vendido)
	c) Inserir Valor de uma Despesa 
	d) Ver total de despesas do dia
	e) Encerrar `)

		switch (Escolha) {
			case 'a': inserirVendas(vendas)
				break

			case 'b': statusVenda(vendas)
				break

			case 'c': inserirDespesas(despesas)
				break

			case 'd': statusDespesas(despesas)
				break
		}
	} while (Escolha !== 'e');
}

function inserirVendas(vendas) {
	let valor = Number(prompt("Digite o valor da venda"))
	vendas.push(valor)
	return vendas
}

function statusVenda(vendas) {
	let totalVendas = 0
	vendas.forEach(element => {
		totalVendas += element
	})

	alert(`Número de vendas: ${vendas.length}
		Total vendido: R$ ${totalVendas}`)
}

function inserirDespesas(despesas) {
	let valor = Number(prompt("Digite o valor da despesa"))
	despesas.push(valor)
	return despesas
}

function statusDespesas(despesas) {
	let totalDespesas = 0
	despesas.forEach(element => {
		totalDespesas += element
	})

	alert(`Número de despesas: ${despesas.length}
		Total de despesas: R$ ${totalDespesas}`)
}

menu()