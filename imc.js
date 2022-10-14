/* Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 abaixo do peso
Entre 18,50 e 24,99 peso normal
Entre 25 e 29,99 Acima do peso*/

//peso/(altura*altura)
var peso;
var altura;
var imc;
var resultado;

alert('coloque a pontuação das medidas de altura e peso!')
function calcular(event){
  event.preventDefault();
peso = document.getElementById('peso').value
altura = document.getElementById('altura').value
imc = peso/(altura*altura)
resultado = ('Seu imc é de '+ imc )




if(imc <= 17){

   resultado = document.getElementById('resultado');
   resultado.innerHTML = '<br/>Seu resultado foi :'+ imc.toFixed(2) + '<br>Você está muito abaixo do peso!'
} else if(imc > 17 && imc <= 18.49 ){
    resultado = document.getElementById('resultado')
    resultado.innerHTML = '<br/>Seu resultado foi :'+ imc.toFixed(2) + '<br>abaixo do peso!'
}else if(imc >= 18.5 && imc <= 24.99){
    resultado = document.getElementById('resultado')
    resultado.innerHTML = '<br/>Seu resultado foi :'+ imc.toFixed(2) + '<br>Seu peso está Normal!'
}else if(imc > 25 && imc <= 29.99){
    resultado = document.getElementById('resultado')
    resultado.innerHTML = '<br/>Seu resultado foi :'+ imc.toFixed(2) + '<br>Você está acima do peso!'
}else if(imc > 30){
    resultado = document.getElementById('resultado')
    resultado.innerHTML = '<br/>Seu resultado foi :'+ imc.toFixed(2) + '<br>Você está Obeso!'
}



}

function deletar(){
    let apagar = document.getElementById( 'resultado' ) . innerHTML  =  "" ;

}

