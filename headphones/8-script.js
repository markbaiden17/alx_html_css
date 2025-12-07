document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle'); // The hidden checkbox
    const navUl = document.querySelector('nav ul');
    const menuIcon = document.querySelector('.menu-icon i');

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            // If checked (menu opening)
            navUl.classList.add('nav-open');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
            this.setAttribute('aria-expanded', 'true');
        } else {
            // If unchecked (menu closing)
            navUl.classList.remove('nav-open');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
            this.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when a link is clicked
    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            // Check if the menu is open (checkbox is checked) before closing
            if (menuToggle.checked) {
                menuToggle.checked = false;
                navUl.classList.remove('nav-open');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});