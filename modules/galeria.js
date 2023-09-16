// galeria.js

export function initGallery() {
    const galleryContainer = document.getElementById("gallery-container");
  
    // Agrega un evento para manejar la carga de imágenes
    document.getElementById("upload-button").addEventListener("change", (event) => {
      const file = event.target.files[0];
  
      if (file) {
        // Crea un elemento de imagen y configúralo con la imagen cargada
        const imageElement = document.createElement("img");
        imageElement.src = URL.createObjectURL(file);
  
        // Agrega la imagen al contenedor de la galería
        galleryContainer.appendChild(imageElement);
      }
    });
  }
  