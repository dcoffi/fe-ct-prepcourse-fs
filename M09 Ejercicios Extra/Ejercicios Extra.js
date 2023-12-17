/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var claves = Object.keys(objeto);
  
  // Crea un nuevo array utilizando map
  /*
En este código, Object.keys(objeto) se utiliza para obtener un array de las claves del objeto. 
Luego, map se utiliza para iterar sobre ese array de claves y crear un nuevo array que contiene 
subarrays con cada par clave-valor. Finalmente, el array resultante se devuelve.
  */
  var arrayDeArrays = claves.map(function(clave) {
    // Por cada clave, crea un subarray con la clave y el valor correspondiente
    return [clave, objeto[clave]];
  });
  
  return arrayDeArrays;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var frecuenciaLetras = {};

   // Recorrer el string
   for (var i = 0; i < string.length; i++) {
     var letra = string[i];
 
     // Verificar si la letra ya está en el objeto
     if (frecuenciaLetras[letra]) {
       // Si está presente, incrementar la frecuencia
       frecuenciaLetras[letra]++;
     } else {
       // Si no está presente, inicializar la frecuencia en 1
       frecuenciaLetras[letra] = 1;
     }
   }
 
   // Ordenar las claves alfabéticamente
   var letrasOrdenadas = Object.keys(frecuenciaLetras).sort();
 
   // Construir el objeto resultado con las letras ordenadas
   var resultado = {};
   for (var i = 0; i < letrasOrdenadas.length; i++) {
     var letraOrdenada = letrasOrdenadas[i];
     resultado[letraOrdenada] = frecuenciaLetras[letraOrdenada];
   }
 
   return resultado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusculas = '';
   var minusculas = '';
   for (var i = 0; i < string.length; i++) {
      if (string[i].match(/^[A-Z]$/)) {
         mayusculas += string[i];
         } else {
            minusculas += string[i];
            }

}
return mayusculas+minusculas;
}
capToFront('soyHENRY');
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   // Separamos la frase en una matriz de palabras
   var palabras = frase.split(' ');
   // Recorremos la matriz para invertir cada palabra
   for (var i=0 ; i<palabras.length ; i++){
      palabras[i]=palabras[i].split("").reverse().join("");
      };
      // Volvemos a juntar todo en una sola cadena separando por espacios
      return palabras.join(" ");
      }
      // ------------------------------------------------
    

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numeroStr = numero.toString();
   reversaNumero = numeroStr.split("").reverse().join("");
   if (reversaNumero == numeroStr){
      return "Es capicua";
      }else{
         return "No es capicua";
      }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/gi, "");
   
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   arrayOfStrings.sort((a, b)=>{
      return a.length-b.length;
      });
      
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let interseccion = [];
   let vacio=[];
   let ocurre=false;
   for (let i=0;i<array1.length;i++){
      if (array2.includes(array1[i])){
         ocurre=true;
         interseccion.push(array1[i]);
      };
   };
   if(ocurre){
      return interseccion;
   }else{
      return vacio;
   }
         
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
   
};
