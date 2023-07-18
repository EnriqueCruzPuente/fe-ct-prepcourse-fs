/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
   
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) { 
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var incrementar = array.map(num => num + 1);
   return incrementar;
}

function agregarItemAlFinalDelArray(array, elemento) {//["lapiz", "estuche"] "borrador"
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) { //["frutas", "verduras", "manis"]
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var convertir = palabras.join(" ")
   return convertir;

}

function arrayContiene(array, elemento) {//["lapiz", "estuche"] "borrador"
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var contieneElemento = array.includes(elemento);
   return contieneElemento;
}

function agregarNumeros(arrayOfNums) {// [4, 5, 2, 9]
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumarNumeros = arrayOfNums.reduce((num1, num2) => num1 + num2)
   return sumarNumeros;
}

//                                                       i    
function promedioResultadosTest(resultadosTest) { // [6, 8, 2, 5]
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var resultado = 0 // 14
   for (var i = 0; i < resultadosTest.length; i++) {
      resultado = resultado + resultadosTest[i];
   }
   return resultado / resultadosTest.length

}
//                                          i
function numeroMasGrande(arrayOfNums) { // [8, 2, 7, 5]
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numMax = 0; // 8

   for (var i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > numMax) {
         numMax = arrayOfNums[i]
      }
   } 
   return numMax;
   
}
//                                     i
function multiplicarArgumentos() { // [3,2,3,4,5]
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplicacion = 1

   if (arguments.length  === 0) {
      return 0;
   } else if (arguments.length === 1) {
      return arguments[0];
   } else {
      for (var i = 0; i < arguments.length; i++) {
         multiplicacion *= arguments[i]
      }
      return multiplicacion;
   }

   
}
//                                    i 
function cuentoElementos(array) { // [1,2,3,4,5]
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         contador++
      }
   }
   return contador;
}
//                                        i
function diaDeLaSemana(numeroDeDia) { // [1,2,3,4,5,6,7]
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana"
   } else {
      return "Es dia laboral"
   }
}

function empiezaConNueve(num) { // 7421 => "7421"
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numero = num.toString();

   if (numero[0] === "9") {
      return true;
   } else {
      return false;
   }
}
//                                 i
function todosIguales(array) { // [2,2,2]
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (var i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) {
         return true;
      } else {
         return false;
      }
   }
}
//                                                         i      
function mesesDelAño(array) { // ["Enero", "Noviembre" "Octubre", "Marzo"]
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevaArray = []
   for (var i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         nuevaArray.push(array[i])
      } 
   }
   if (nuevaArray.length === 3) {
      return nuevaArray;
   } else {
      return "No se encontraron los meses pedidos";
   }

}
//                            i
function tablaDelSeis() { // [6, 12, 18, 24]
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   var tablaSeis = [];

   for (var i = 0; i < 11; i++) {
      tablaSeis[i] = 6 * i
   }
   return tablaSeis;
}
//                               i
function mayorACien(array) { // [0,1,2,3,4...200]
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var retornar = []

   for (var i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         retornar.push(array[i])
      } 
   }
   return retornar;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var sumar = []

   for (var i = 0; i < 10; i += 2) {
      sumar[i] = 2 + i
   }
   return sumar;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
