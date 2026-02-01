const projectsGallery = {
    concesionaria: [
        'fotos-proyectos/CrearConcesionaria.png',
        'fotos-proyectos/CrearAuto.png',
        'fotos-proyectos/CrearCamioneta.png',
        'fotos-proyectos/CrearContacto.png',
        'fotos-proyectos/consultaconce.png',
        'fotos-proyectos/MostrarAuto.png',
        'fotos-proyectos/MostrarCamioneta.png',
        'fotos-proyectos/MostrarContacto.png',
        'fotos-proyectos/MostrarContactoConcesionaria.png',
        'fotos-proyectos/MostrarInformeConcesionaria.png'
        ]
};

const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('gallery-image');
const closeBtn = document.querySelector('.gallery-close');
const nextBtn = document.querySelector('.gallery-btn.next');
const prevBtn = document.querySelector('.gallery-btn.prev');

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.dataset.project;
        if (!projectsGallery[key]) return;

        currentImages = projectsGallery[key];
        currentIndex = 0;
        openModal();
    });
});

function openModal() {
    modal.classList.remove('hidden');
    updateImage();
}

function closeModal() {
    modal.classList.add('hidden');
}

function updateImage() {
    modalImg.src = currentImages[currentIndex];
}

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateImage();
};

prevBtn.onclick = () => {
    currentIndex =
        (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateImage();
};

closeBtn.onclick = closeModal;

// cerrar con ESC
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});
