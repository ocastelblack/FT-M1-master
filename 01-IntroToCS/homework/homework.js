'use strict';

function BinarioADecimal(num) {
   /* var suma = 0;
   var exponente = num.lenght-1;
   
   for(let i=0;i<num.lenght;i++){
      suma += num[i] * Math.pow(2,exponente)
      exponente--;
   }
   return suma; */
   return parseInt(num,2);
}

function DecimalABinario(num) {
   var resultado = '';

   while(num !==0){
      resultado = (num % 2)+resultado;
      num = Math.floor(num/2);
   }
   return resultado;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
