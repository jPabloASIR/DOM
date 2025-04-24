      function eliminarElemento() {
      const lista = document.getElementById("miLista");
      const primerLi = lista.querySelector("li"); // esto garantiza que sea un <li>, no un nodo de texto

      if (primerLi) {
        lista.removeChild(primerLi);
      } else {
        alert("¡No hay más elementos que eliminar!");
      }
    }
