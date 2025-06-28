// ===== Script para controle do menu responsivo =====
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});
