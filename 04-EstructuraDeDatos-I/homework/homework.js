'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function nFibonacci(n) {
  if (n === 0) {
    return 0; 
  } else if (n === 1) {
    return 1; 
  } else {
    return nFibonacci(n - 1) + nFibonacci(n - 2); 
  }
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.elements = []; // Array para almacenar los elementos de la queue

  // Método para agregar un valor al final de la queue (enqueue)
  this.enqueue = function (value) {
    this.elements.push(value);
  };

  // Método para remover el primer valor de la queue (dequeue)
  this.dequeue = function () {
    return this.elements.shift();
  };

  // Método para obtener el tamaño de la queue
  this.size = function () {
    return this.elements.length;
  };
}

// Crear una nueva queue
const myQueue = new Queue();

// Agregar elementos a la queue
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

// Obtener el tamaño de la queue
console.log(myQueue.size()); // Output: 3

// Remover elementos de la queue
console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.dequeue()); // Output: 20

// Obtener el tamaño actualizado de la queue
console.log(myQueue.size()); // Output: 1

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
