/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return Math.pow(num,2);
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return Math.pow(num,3);
}

function sumaDeNumeros(n1, n2){
   // Retorna la suma de los dos numeros recibidos como parametros.
    // Tu codigo:
    return n1 + n2;
}

function multiplicacionDeNumeros(n1, n2){
   // Retorna la multiplicación de los dos numeros recibidos como parametros.
    // Tu codigo:
    return n1 * n2;
}

function divisionDeNumeros(n1, n2){
   // Retorna la división entera del primer numero entre el segundo.
    // Tu codigo:
    if (n2 == 0){
        console.log("Error! No se puede dividir por cero.");
    }else{
      return parseInt(n1 / n2);
    }
    
}
   

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return Math.pow(num, exponent);
}


function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num);
}

// -------------------------------


function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}

function redondearHaciaAbajo(num) {
   // Redondea "num" hacia abajo y retórnalo.
   // Tu código:
   return Math.floor(num);
}

function redondearADecimal(num) {
   // Redondea "num" a un decimal y retórnalo.
   // Tu código:
   return num.toFixed(2);
}

// ----------------------------

function esPar(num) {
   // Verifica si "num" es par o no.
   // Tu código:
   return num % 2 === 0;
}

function esImpar(num) {
   // Verifica si "num" es impar o no.
   // Tu código:
   return !esPar(num);
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random();
}

function generarNumerosAleatorios(cantidad) {
   // Genera una cantidad de números aleatorios enteros entre 0 y 99, inclusive.
   // Tu código:
   let numeros = [];
   for (let i=0; i<cantidad; i++) {
      numeros[i] = Math.floor((Math.random() * 100));
   }
   return numeros;
}

function sumarArrays(...arrays) {
   // Suma todos los elementos del array que se le pasan como argumento.
   // Tu código:
   let total = 0;
   arrays.forEach(arr => {
      arr.forEach(elem => {
         total += elem;
      });
   });
   return total;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
