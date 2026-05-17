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
        ],
    complejodeportivo: [
        'fotos-gestionComplejo/Login.png',
        'fotos-gestionComplejo/PanelAdmin.png',
        'fotos-gestionComplejo/MisReservas.png',
        'fotos-gestionComplejo/IndiceAsistencia.png',
        'fotos-gestionComplejo/EjemploTurnos.png',
        'fotos-gestionComplejo/EjemploReportes.png',
        'fotos-gestionComplejo/EjemploBuscandoRival.png',
        'fotos-gestionComplejo/ControlUsuarios.png',
        'fotos-gestionComplejo/ConfiguracionPagosYDescuentos.png'
        ], 
    artesanos: [
        'fotos-artesanos/Login.png',
        'fotos-artesanos/AgregarPieza.png',
        'fotos-artesanos/CatalogoPropio.png',
        'fotos-artesanos/CatalogoPublico.png',
        'fotos-artesanos/ChatInterno.png',
        'fotos-artesanos/ConfigRanking.png',
        'fotos-artesanos/ControlPedidos.png',
        'fotos-artesanos/CrearEvento.png',
        'fotos-artesanos/CuponesDescuento.png',
        'fotos-artesanos/FeedBack.png',
        'fotos-artesanos/FeriasDisponibles.png',
        'fotos-artesanos/GestionClientes.png',
        'fotos-artesanos/InteraccionArtesanos.png',
        'fotos-artesanos/ModPiezas.png',
        'fotos-artesanos/PanelAdmin.png',
        'fotos-artesanos/PanelUsuario.png',
        'fotos-artesanos/PerfilUsuario.png',
        'fotos-artesanos/PerfilYReseñasArtesanos.png',
        'fotos-artesanos/Premium.png',
        'fotos-artesanos/Ranking.png'
    ],
    pilates: [
        'fotos-pilates/Alumnos.png',
        'fotos-pilates/AsignarCamas.png',
        'fotos-pilates/CreacionAlumnos.png',
        'fotos-pilates/CreacionClase.png',
        'fotos-pilates/Dashboard.png',
        'fotos-pilates/GeneracionPagos.png',
        'fotos-pilates/GeneracionPrecios.png'
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
