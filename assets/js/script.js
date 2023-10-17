
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
            //window.location.href = `instagram://library?AssetPath=${encodeURIComponent(imagenURL)}&InstagramCaption=${encodeURIComponent(descripcion)}`;
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

//mmm
//mmm
const smsIcon = document.querySelector('.sms'); // Selecciona el ícono de SMS

smsIcon.addEventListener('click', function (event) {
    event.preventDefault();
    compartirPorSMS();
});

function compartirPorSMS() {
    const url = window.location.href;
    const mensaje = 'Echa un vistazo a este enlace: ' + url;

    if ('share' in navigator) {
        // Si el navegador admite la API de Web Share, úsala
        navigator.share({
            title: document.title,
            text: mensaje,
            url: url,
        })
        .then(() => console.log('Enlace compartido con éxito'))
        .catch(error => console.error('Error al compartir: ', error));
    } else {
        // Si el navegador no admite la API de Web Share, abre un enlace de SMS
        window.open(`sms:?body=${encodeURIComponent(mensaje)}`, '_blank');
    }
}


//mmm
const facebookMessengerIcon = document.querySelector('.facebook-messenger'); // Selecciona el ícono de Facebook Messenger

facebookMessengerIcon.addEventListener('click', function (event) {
    event.preventDefault();
    compartirPorFacebookMessenger();
});

function compartirPorFacebookMessenger() {
    const url = window.location.href;
    const titulo = document.title;
    const mensaje = 'Echa un vistazo a este enlace: ' + url;

    // Abre la página de compartir de Facebook Messenger con el mensaje y la URL
    window.open(`fb-messenger://share?link=${encodeURIComponent(url)}&app_id=123456789&text=${encodeURIComponent(mensaje)}`, '_blank');
}


//mmm
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





