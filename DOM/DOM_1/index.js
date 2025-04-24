      function mostrarParrafos() {
      let parrafos = document.getElementsByClassName("parrafo");
      let resultado = document.getElementById("resultado");
      resultado.innerHTML = ""; // Limpiar antes de mostrar

      for (let i = 0; i < parrafos.length; i++) {
        // Mostrar cada párrafo al hacer clic
        parrafos[i].style.display = "block"; // Hacer visible el párrafo
        resultado.innerHTML += `<p><strong>Párrafo ${i + 1}:</strong> ${parrafos[i].textContent}</p>`;
      }
    }
