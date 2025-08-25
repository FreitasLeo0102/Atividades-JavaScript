// Crie um objeto com informações de um produto (nome, preco, emEstoque). Se emEstoque for true, exiba "Produto disponível"; caso contrário, "Produto indisponível"

let produto = {
    nome: "Condicionador",
    preco: 40,
    emEstoque: true
}

if (produto.emEstoque == true){
    console.log("Produto Disponivel")
}

else{
    console.log("Produto Indisponivel")
}