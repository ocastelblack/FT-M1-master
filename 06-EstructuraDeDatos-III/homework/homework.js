'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/


//Esructura
// function BinarySearchTree(value){
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }
//BinarySearchTree.prototype.size = function(){}
// BinarySearchTree.prototype.insert = function(){}
// BinarySearchTree.prototype.contains = function(){}
// BinarySearchTree.prototype.depthFirstForEach = function(){}
// BinarySearchTree.prototype.breadthFirstForEach = function(){}

function BinarySearchTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function(value){
  if(!this.left && !this.right) return 1
  if(!this.left) return 1 + this.right.size()
  if(!this.right) return 1 + this.left.size()
  return 1 + this.left.size() + this.right.size()
}


BinarySearchTree.prototype.insert = function(value){
  if (value < this.value) {
    if (!this.left) {
      let mytree = new BinarySearchTree(this.value)
      this.left = mytree
    } else {
      this.left.insert(value)
    }
  } else if (value > this.value) {
    if (!this.right) {
      let mytree = new BinarySearchTree(this.value)
      this.right = mytree
    } else {
      this.right.insert(value)
    }
  }
}

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value) return true;
}


BinarySearchTree.prototype.depthFirstForEach = function(cb,recorrido){

  if (recorrido === "in-order" || !recorrido) {
    this.left && this.left.depthFirstForEach(recorrido)
    cb(this.value)
    this.right && this.right.depthFirstForEach(recorrido)
  }
  
  
  if (recorrido === "post-order") {
    this.left && this.left.depthFirstForEach(cb, recorrido);
    this.right && this.right.depthFirstForEach(cb, recorrido);
    cb(this.value);
  }

  if (recorrido === "pre-order") {
    cb(this.value);
    this.left && this.left.depthFirstForEach(cb, recorrido);
    this.right && this.right.depthFirstForEach(cb, recorrido);
  } 
  
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb,arr){
  
  if(!arr){
    var arr = []
  }
    
  cb(this.value)
  this.left && arr.push(this.left)
  this.right && arr.push(this.right)

  arr.length && arr.shift().breadthFirstForEach(cb,arr)
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
