const adicao = document.querySelector('button#adicionar-produto')

function adicionaProduto(){
    const table = document.querySelector('table#lista')
    table.innerHTML += `<tr class="produto">
        <td><input type="text"  name="nome-produto" class="nome-produto"></td>
        <td><input type="number"  name="valor-unitario" class="valor-unitario" ></td>
        <td><input type="number"  name="quantidade" class="quantidade" ></td>
        <td><input type="number"  name="sub-total" class="sub-total" ></td>
    </tr>`


    
}