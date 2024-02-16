let produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];


  function precoMinino(arrayProduto, valorMinimo){
    return arrayProduto.filter((produto)=>produto.preco>= valorMinimo)

  }
  const produtoAcimaDoMinimo = precoMinino(mercadoria,500)
  console.log(produtoAcimaDoMinimo)
  