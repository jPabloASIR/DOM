function analizarDOM() {
  // Mostrar la imagen al hacer clic en el botón
  document.getElementById("miImagen").style.display = "block";

  const resultado = document.getElementById("resultado");

  const titulo = document.title;
  const imagenes = document.images;
  const enlaces = document.links;

  let html = `<p><strong>Título:</strong> ${titulo}</p>`;

  html += `<p><strong>Total de imágenes:</strong> ${imagenes.length}</p>`;
  html += "<ul>";
  for (let img of imagenes) {
    html += `<li>${img.src}</li>`;
  }
  html += "</ul>";

  html += `<p><strong>Total de enlaces:</strong> ${enlaces.length}</p>`;
  html += "<ul>";
  for (let link of enlaces) {
    html += `<li><a href="${link.href}" target="_blank">${link.href}</a></li>`;
  }
  html += "</ul>";

  resultado.innerHTML = html;
}
