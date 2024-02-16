const peso = document.querySelector('pesoValor')
const altura = document.querySelector('alturaValo')
const botao = document.querySelector('#btn')



btn.addEventListener('click', (peso,altura)=>{
   
            peso = Number(pesoValor.value)
            altura = Number(alturaValor.value)
            imc = peso/(altura*altura)
            
          
             if(imc<=16,9){
               document.getElementById("classificacao").innerHTML = `Muito abaixo do peso`}

             if(imc>=17 && imc<= 18.4){
               document.getElementById("classificacao").innerHTML =`Abaixo do peso`}

             if(imc>=18.5 && imc<= 24.9){
               document.getElementById("classificacao").innerHTML =`Peso normal`}

             if(imc>=25 && imc<= 29.9){
               document.getElementById("classificacao").innerHTML =`Acima do peso`}

             if(imc>=30 && imc<= 34.9){
               document.getElementById("classificacao").innerHTML =`Obesidade grau I`}

             if(imc>=35 && imc<= 40){
               document.getElementById("classificacao").innerHTML =`Obesidade grau II`}

             if(imc>40){
               document.getElementById("classificacao").innerHTML =`Obesidade grau III`}

            return document.getElementById("resposta").innerHTML =`Seu IMC é:${(imc.toFixed(1) )}`
       })


// function calculo(peso,altura){
//     let peso = Number(pesoValor.value)
//     let altura = Number(alturaValor.value)
//     let imc = (altura*altura)/ peso
//     return document.write(`Seu IMC é:${imc}`)
// }




