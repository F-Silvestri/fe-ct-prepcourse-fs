/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
  

   return (Object.entries(objeto));

    



}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
var obj = {};
   for (var i = 0; i < string.length; i++){
       
 l = string.charAt(i);
if (charCount.containsKey(l)) {
contador = charCount.get(l);
charCount.put(l, contador + 1);
} else {
   charCount.put(l, 1);
}
   }
  obj = string.sort();

  return obj;



}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   for(var i = 0; i< string.length; i++){
      if (string[i] === string[i].isUpperCase()) {
         string.unshift(string[i]);
      }
      
   } return string;




}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var ar = frase.split('');
   var nuevo = [];

   for (var i = 0; i < ar.length; i++) {
      if (ar[i] !== ' ') {
      nuevo.push(ar[i]);
      }
   }nuevo.reverse();
   return nuevo;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var numString = numero.toString();
   
   var invertido = numString
   .split('')
   .reverse()
   .join('');

   if (numString === invertido){
return "Es capicua";
   }else {
     return "No es capicua";
   }
   


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

  var arr = string.split('');
  
  var validacion = ["a", "b", "c"];
  var vuelta = arr.filter(i => !validacion.includes(i));

  return vuelta;
  

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
var nuevoArreglo = [];

   for (var i = 0; i<arrayOfStrings.length; i++) {
      if (arrayOfStrings[i][0].length < arrayOfStrings[i].length) {
nuevoArreglo.unshift(arrayOfStrings[i][0]);

      }
   } return nuevoArreglo;


}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
var comun = array1.filter(n => array2.includes(n));

return comun;
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
