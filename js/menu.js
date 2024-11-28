document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuLinks = document.querySelectorAll('.nav-menu a');

    // Función para alternar el menú
    function toggleMenu() {
        navMenu.classList.toggle('active');
        const icon = mobileNavToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Event listener para el botón de menú
    mobileNavToggle.addEventListener('click', toggleMenu);

    // Cerrar el menú cuando se hace clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileNavToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileNavToggle.contains(e.target) && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});
