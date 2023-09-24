const adicao = document.querySelector('button#adicionar-produto')

let id = 0

function adicionaProduto(){
    let table = document.querySelector('.corpo-tabela')
    
    let descricaoProduto =  prompt('Informe a descrição do produto')
    if( descricaoProduto === null){
        return
    }
    let valorProduto = Number(prompt('Informe o valor'))
    let quantidadeProduto = Number(prompt('Informe a quantidade'))

    let total = valorProduto * quantidadeProduto
    //criando novo html
    const newHTML = `<tr class="produto">
    <td><input type="text"  name="nome-produto-${id}" class="nome-produto" value="${descricaoProduto}"></td>        
    <td><input type="number"  name="valor-unitario-${id}" class="valor-unitario" value="${valorProduto}" min="0" max="9999"></td>
    <td><input type="number"  name="quantidade-${id}" class="quantidade" value="${quantidadeProduto}" maxlength="4"></td>
    <td><input type="number"  name="sub-total-${id}" class="sub-total" maxlength="4" value="${total}"  disabled></td>
    </tr>`
    //inserindo o novo hmtl sem perder os dados preenchidos no formulario
    table.insertAdjacentHTML("beforeend", newHTML)
    id++
    somandoValorProduto(valorProduto, quantidadeProduto)      
}

function somandoValorProduto(valor, quantidade){
    let totalPorProduto = valor * quantidade

    let subtotal = document.getElementsByName(`sub-total-${id}`)
    subtotal.value = totalPorProduto

    if(totalPorProduto > 0){
        let campoCompra = document.querySelector('#montante-compra')
        let totalCompra = Number(campoCompra.value)
        
        campoCompra.value = totalCompra + totalPorProduto
    }
}