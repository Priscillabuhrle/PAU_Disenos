// guardar en favoritos

// Código para guardar en favoritos
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

favoritoIcon.addEventListener('click', toggleBookmark);


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

