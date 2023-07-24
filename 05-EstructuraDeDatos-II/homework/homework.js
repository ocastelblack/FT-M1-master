'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  const newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
};

LinkedList.prototype.remove = function () {
  if (!this.head) {
    return null;
  } else if (!this.head.next) {
    const value = this.head.value;
    this.head = null;
    return value;
  } else {
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    return current.value;
  }
};

LinkedList.prototype.search = function (param) {
  if (!this.head) {
    return null;
  }

  function isMatchingCallback(value, callback) {
    return typeof callback === 'function' ? callback(value) : value === param;
  }

  let current = this.head;
  while (current) {
    if (isMatchingCallback(current.value, param)) {
      return current.value;
    }
    current = current.next;
  }

  return null;
};

LinkedList.prototype.size = function () {
  let count = 0;
  let current = this.head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
};


const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log(list.size()); 
console.log(list.search(3)); 
console.log(list.search((value) => value % 2 === 0)); 
console.log(list.search(5)); 

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/


function HashTable(clave, valor) {
  this.array = [];
  this.numBuckets = 35;
  }

  HashTable.prototype.hash = function(clave){
    let acumuladorHash = 0;
    for(let i=0; i<clave.length; i++){
      acumuladorHash = acumuladorHash +clave.charCodeAt(i);
    }
    return acumuladorHash % this.numBuckets;
  }

  HashTable.prototype.set = function(clave, valor){
    let dato = this.hash(clave);
    if(typeof clave !== 'string'){
    throw TypeError('keys must be strings')
  }
  if(!this.array[dato]){
    this.array[dato] = {};
  }
  this.array[dato][clave] = valor;
  }


  HashTable.prototype.get = function(clave){
  let dato = this.hash(clave);
  return this.array[dato][clave];
  }
  
  HashTable.prototype.hasKey = function(clave){
    let dato = this.hash(clave);
    return this.array[dato].hasOwnProperty(clave);
    }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
