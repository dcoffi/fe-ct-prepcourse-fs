/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > 0){
        return 'Es positivo';
    } else if (num < 0){
      return 'Es negativo';
    }else{
      return false;
    }
}


function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   let str2 = str + "!";
   return str2;
}

// ------------------------------------------------


function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   let nombreCompleto = nombre + " " + apellido;
   return nombreCompleto;
}


function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   let saludo = "Hola " + nombre + "!";
   return saludo;
}


function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   let area = alto * ancho;
   return area;
}


function calcularFactorial(num) {
   // Calcule el factorial de un número entero.
   // Factorial es el producto de todos los números enteros mayores o iguales a uno que son menores o iguales  
   // a dicho número. Por ejemplo, el factorial de 5 es 1*2*3*4*5=12
   // Tu código:
   let fact = 1;
   for (let i = num; i > 0 ; i--){
     fact = fact * i;
   }
   return fact;
}


function sumarArrays(arr1, arr2) {
   // Suma los valores de dos arrays y devuelve un array con los resultados.
   // Si uno de los arrays tiene menos elementos que el otro, se completan con ceros.
   // Ejemplo: ([1,2],[3,4]) --> [4,6]
   // Tu código:
   let maxLength = Math.max(arr1.length, arr2.length);
   let newArr = [];
   for (let i = 0; i < maxLength; i++) {
      if (!isNaN(parseInt(arr1[i])) && !isNaN(parseInt(arr2[i]))) {
         newArr.push(parseInt(arr1[i])+parseInt(arr2[i]));
      } else {
         newArr.push(0);
      }
    }
   return newArr;
}


function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   let perimetro = lado * 4;
   return perimetro;
}


function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   let area = base * altura / 2;
   return area;
}


function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   let dolares = euro * 1.20;
   return dolares;
}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if (typeof letra === 'string' && letra.length > 1 ) {
      return 'Dato incorrecto';
       } 
   switch (letra){
      case 'a':
          return "Es vocal";
          break;
      case 'e':
          return "Es vocal";
          break;
      case 'i':
        return "Es vocal";
          break;
      case 'o':
          return "Es vocal";
          break;
      case 'u':
          return "Es vocal";
          break;
       default :
       return "Dato incorrecto";
       break;
   }
}  
          
 

function esPalindromo(palabra) {
   // Escribir una función que verifique si la palabra ingresada por el usuario es palíndromo o no
   // Palíndromos son palabras que se leen igual hacia adelante y hacia atrás.
   // Por ejemplo: madam, racecar, abcdcba
   // Tu código:
   let reversa= "";
   for (var i = palabra.length - 1; i >= 0; i--) {
      reversa += palabra[i];
     }
if (reversa == palabra) {

console.log ("La palabra "+palabra+" es palindromo") ;
}else{
   console.log ("La palabra "+palabra+" No es palindromo") ;
};
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
