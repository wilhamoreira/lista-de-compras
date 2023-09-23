const adicao = document.querySelector('button#adicionar-produto')

function adicionaProduto(){
    let table = document.querySelector('.lista')
    //criando novo html
    const newHTML = `<tr class="produto">
    <td><input type="text"  name="nome-produto" class="nome-produto"></td>        
    <td><input type="number"  name="valor-unitario" class="valor-unitario"></td>
    <td><input type="number"  name="quantidade" class="quantidade"></td>
    <td><input type="number"  name="sub-total" class="sub-total"></td>
    </tr>`
    //inserindo o novo hmtl sem perder os dados preenchidos no formulario
    table.insertAdjacentHTML("beforeend", newHTML)



    
}