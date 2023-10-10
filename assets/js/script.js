// guardar en favoritos

/*Código para guardar en favoritos
const favoritoIcon = document.getElementById('favoritoIcon');
const favoritoLabel = document.getElementById('favoritoLabel');

function toggleBookmark() {
    if (document.execCommand) {
        try {
            document.execCommand('AddBookmark', false, document.title, window.location.href);
            favoritoLabel.textContent = 'Favorito (Guardado)';
            favoritoIcon.classList.remove('fa-regular', 'fa-star');
            favoritoIcon.classList.add('fa-solid', 'fa-star');
        } catch (err) {
            console.error('No se pudo agregar a marcadores:', err);
        }
    } else if (window.sidebar && window.sidebar.addPanel) {
        window.sidebar.addPanel(document.title, window.location.href, '');
        favoritoLabel.textContent = 'Favorito (Guardado)';
        favoritoIcon.classList.remove('fa-regular', 'fa-star');
        favoritoIcon.classList.add('fa-solid', 'fa-star');
    } else {
        alert('Tu navegador no admite la función de agregar a marcadores. Por favor, utilice la opción de marcadores de su navegador para guardar esta página.');
    }
}

favoritoIcon.addEventListener('click', toggleBookmark);*/


//
//

const compartirIcon = document.getElementById('compartirIcon');
const redesSocialesIcons = document.getElementById('redesSocialesIcons');

// Oculta las redes sociales al cargar la página
redesSocialesIcons.style.display = 'none';

compartirIcon.addEventListener('click', function (event) {
    event.preventDefault();
    if (redesSocialesIcons.style.display === 'block') {
        redesSocialesIcons.style.display = 'none';
    } else {
        redesSocialesIcons.style.display = 'block';
    }
});

const redesSocialesIconos = document.querySelectorAll('.redesSocialesIcon');
redesSocialesIconos.forEach(function (icon) {
    icon.addEventListener('click', function (event) {
        event.preventDefault();
        const redSocial = icon.classList.contains('facebook') ? 'Facebook' :
            icon.classList.contains('instagram') ? 'Instagram' :
            icon.classList.contains('linkedin') ? 'LinkedIn' :
            icon.classList.contains('whatsapp') ? 'WhatsApp' :
            icon.classList.contains('twitter') ? 'Twitter' :
            'Otra Red Social'; // Personaliza esto para cada red social que agregues
        compartirEnRedSocial(redSocial);
    });
});

function compartirEnRedSocial(redSocial) {
    const url = window.location.href;
    const titulo = document.title;

    switch (redSocial) {
        case 'Facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'Instagram':
            // Agrega aquí la lógica para compartir en Instagram
            // No se puede compartir directamente desde un navegador, generalmente se usa la aplicación móvil.
            break;
        case 'LinkedIn':
            window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(titulo)}`, '_blank');
            break;
        case 'WhatsApp':
            // Puedes utilizar el enlace de WhatsApp para compartir el enlace actual
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'Twitter':
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(titulo)}`, '_blank');
            break;
        default:
            console.log('Red social no reconocida');
    }
}

const favoritoIcon = document.getElementById('favoritoIcon');

function copiarAlPortapapeles() {
    // Crea un elemento de entrada de texto temporal
    const input = document.createElement('input');
    input.setAttribute('value', 'https://priscillabuhrle.github.io/PAU_Disenos/');
    
    // Agrega el elemento de entrada de texto al documento
    document.body.appendChild(input);
    
    // Selecciona el contenido del elemento de entrada de texto
    input.select();
    
    // Copia el contenido seleccionado al portapapeles
    document.execCommand('copy');
    
    // Elimina el elemento de entrada de texto temporal
    document.body.removeChild(input);

    // Cambia el texto del span para indicar que se ha copiado
    const favoritoLabel = document.getElementById('favoritoLabel');
    favoritoLabel.textContent = 'Link Copiado';
    
    // Cambia el icono para proporcionar retroalimentación visual
    favoritoIcon.classList.remove('fa-regular', 'fa-copy');
    favoritoIcon.classList.add('fa-solid', 'fa-check');
    
    // Restaura el estado original después de un tiempo
    setTimeout(function () {
        favoritoLabel.textContent = 'Copiar Link';
        favoritoIcon.classList.remove('fa-solid', 'fa-check');
        favoritoIcon.classList.add('fa-regular', 'fa-copy');
    }, 3000); // Cambios de vuelta después de 2 segundos
}

favoritoIcon.addEventListener('click', copiarAlPortapapeles);

//
///

// animacion logo
// Obtiene la referencia a la imagen por su ID

const logoImage = document.getElementById('logoImage');

// Función para iniciar la animación
function iniciarAnimacion() {
    logoImage.classList.add('animacion');
}

// Agrega un controlador de eventos al cargar la página
window.addEventListener('load', iniciarAnimacion);

// Agrega un controlador de eventos al hacer clic en la imagen
logoImage.addEventListener('click', () => {
    // Reinicia la animación al hacer clic
    logoImage.classList.remove('animacion');
    void logoImage.offsetWidth; // Esto fuerza un reinicio de la animación
    logoImage.classList.add('animacion');
});





