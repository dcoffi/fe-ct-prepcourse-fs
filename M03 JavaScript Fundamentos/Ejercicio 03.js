/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   return x===y?true:false;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (typeof str1==="string"){
      return str1.length === str2.length ? true : false ;}else{
      console.log("Error en el primer parametro");
   }
   
}


function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   return num <90 ? true : false ;
}
//Este no tiene evaluación 
function tieneLetraVocal(palabra){
   let vocal = ['a', 'e','i','o','u'];
   
   for (let i=0; i<vocal.length;i++){
      if (palabra.includes(vocal[i])){
           return true;
         } else {
            return false;
         }
   }
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   return num >50 ? true : false ;
}

function tieneNumeros(cadena){
   //Retorna true si la cadena contiene al menos un numero.
   //De lo contrario, retorna false.
   //Tu codigo:
   return /\d/.test(cadena);
}


function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   return num % 2 ==0?true:false;
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   return num % 2 !=0?true:false;
}

function esPositivo(num) {
   // Retorna true si "num" es positivo.
   // De lo contrario, retorna false.
   // Tu código:
   return num>0?true:false;
}

function esNegativo(num) {
   // Retorna true si "num" es negativo.
   // De lo contrario, retorna false.
   // Tu código:
   return num <0?true:false;
}

function esNumero(num) {
   // Retorna true si "num" es un número.
   // De lo contrario, retorna false.
   // Tu código:
   return typeof num === 'number' && !isNaN(num)?true:false;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
