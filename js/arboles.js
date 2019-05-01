


add (val) {
  if (this.isEmpty()) {
      this.root = new Node(val)
      return
  }
  var aux = this.root
  while (aux) {
    //a la izquierdaaa
    if (val < aux.value) {
      if (aux.left) {
          aux = aux.left
      } else {
        aux.left = new Node(val)
        return
      }
    } else {
      //a la derechaaa
      if (aux.right) {
        aux = aux.right
      } else {
        aux.right = new Node(val)
      }
    }
  }
}

//CONSTRUCTORES

function node() {
  this.value = val; //Valor del nodo
  this.childred = []; //lista de referencia de los hijos nodo
}

function tree() {
  this.root = null; //referencia al nodo raíz
}

//BÚSQUEDA

