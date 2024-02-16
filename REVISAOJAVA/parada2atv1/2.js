let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];


function combinarProdutoPreco(produtos,precos){
return produtos.map((produto)=>{//map lista todos os produtos individualmente
  let precoProduto  = precos.find((preco)=>preco.nome === produto.nome); // metodo find encontrar o valor preco.nome for igual a produto.nome 
   return {
    nome: produto.nome,
    categoria: produto.categoria,
    precos: precoProduto.preco
   };
   });
}

const combinarProduto = combinarProdutoPreco(produtos,precos)
console.log(combinarProduto)

//atv 02 ----------------------------------------------------------------



function buscarPorCategoria(arrayDeProduto, categoria){
    return arrayDeProduto.filter((produto)=>produto.categoria === categoria);

}
 const CategoriaProduto = buscarPorCategoria(combinarProduto,"Eletrônicos")
 console.log(CategoriaProduto)