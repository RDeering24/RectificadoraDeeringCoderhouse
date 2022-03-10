document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});
scrollReveal().reveal('.principal');
scrollReveal().reveal('.servicios');
scrollReveal().reveal('.logos-marca');