document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) { // S'assure que les éléments existent
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Ajoute ou retire la classe 'active'
        });
    }

    // Optionnel : Fermer le menu si on clique en dehors (pour les grands écrans si le menu reste ouvert)
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !menuToggle.contains(event.target) && mainNav.classList.contains('active')) {
            // Vérifie si le clic n'est ni sur le menu, ni sur le bouton, et si le menu est actif
            mainNav.classList.remove('active');
        }
    });

    // Optionnel : Fermer le menu si un lien est cliqué (utile pour les SPA ou les menus qui restent ouverts)
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
});