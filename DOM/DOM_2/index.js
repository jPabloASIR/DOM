      function agregarImagen() {
      
      let imagen = document.createElement("img");

      
      imagen.src = "https://via.placeholder.com/300"; 

      
      imagen.alt = "Imagen de ejemplo";

      
      let contenedor = document.getElementById("contenedor-imagen");

      
      contenedor.appendChild(imagen);
    }
 