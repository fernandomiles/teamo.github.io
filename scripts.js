function login() {
    const password = document.getElementById('password').value;
    if (password === 'janny') {  // Reemplaza 'tu_clave_de_acceso' con la clave que desees
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('gallery-container').style.display = 'block';
    } else {
        alert('Clave incorrecta. Inténtalo de nuevo.');
    }
}

function enlargePhoto(img) {
    const enlargedPhoto = document.createElement('div');
    enlargedPhoto.id = 'enlarged-photo';
    enlargedPhoto.innerHTML = `<img src="${img.src}" alt="${img.alt}" onclick="closeEnlargedPhoto()">`;
    document.body.appendChild(enlargedPhoto);
    enlargedPhoto.style.display = 'flex';
}

function closeEnlargedPhoto() {
    const enlargedPhoto = document.getElementById('enlarged-photo');
    if (enlargedPhoto) {
        enlargedPhoto.remove();
    }
}

document.addEventListener('click', function(event) {
    if (event.target.id === 'enlarged-photo') {
        closeEnlargedPhoto();
    }
});