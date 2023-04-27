/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
  

  // return (Object.entries(objeto))
////////////

 var array = []
 var keys = Object.keys(objeto);

 for(var i = 0; i < keys.length; i++) {
   array.push([keys[i], objeto[keys[i]]]) }


 return array;


    

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

var sort = string.split("").sort(function(a,b) {
   return a.localeCompare(b)
}).join("")

var obj = {};

   for (var i = 0; i < string.length; i++){
       
 
if (string[i] in obj) {
obj[string[i]]++
} else {
   obj[string[i]] = 1
}
   }
 
  return obj;



}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   
   var resultado = "";
var may = "";
var min = "";

for(var i = 0; i < string.length; i++) {
   if (string[i] === string[i].toUpperCase()) {
      may +=string[i];
   }else {
      min+=string[i]
   }
}
resultado = may + min;

   return resultado;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   //var ar = frase.split('');    
    var ar = frase.split(" ");
   var nuevo = [];

    for (var i = 0; i < ar.length; i++) {
       var espejo = ar[i].split("").reverse().join("");
       nuevo.push(espejo)
     // if (ar[i] !== ' ') {
     // nuevo.push(ar[i]);
      }
    // }nuevo.reverse();
   //return nuevo.join(" ");

   return nuevo.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

 let num = numero.toString().split("").reverse().join("");
 if (num == numero) return "Es capicua";
 return "No es capicua";
//////////////
//   var numString = numero.toString();
   
//   var invertido = numString
//   .split('')
//   .reverse()
//   .join('');

//   if (numString === invertido){
// return "Es capicua";
//   }else {
//     return "No es capicua";
//   }
   


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

 // var arr = string.split('');
  
 // var validacion = ["a", "b", "c"];
 // var vuelta = arr.filter(i => !validacion.includes(i));

 // return vuelta;
  
  /////////
   return string.replace(/[abc]/g, "")

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

/////////////

let largoA = arrayOfStrings.length -1;
let aux = arrayOfStrings;
for (let i = 0; i< largoA; i++) {
   for (let j = 0; j < largoA - i; j++) {
      if (aux[j].length > aux[j + 1].length) {
         let temp = aux[j];
         aux[j] = aux[j + 1];
         aux[j + 1] = temp;
      }
   }
}
return aux;

// return arrayOfStrings.sort((a, b)=> a.length -b.length)



}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
// var comun = array1.filter(n => array2.includes(n));

// return comun;

/////////////////

let numeros = [];

for (let i = 0; i < array1.length; i++) {
   for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
         numeros.push(array1[i]);
      }
   }
}
return numeros;

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
