document.addEventListener("DOMContentLoaded", function() {
    // Navbar hide/show on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-70px';  // Hide the navbar
        } else {
            navbar.style.top = '0';  // Show the navbar
        }
        lastScrollTop = scrollTop;
    });
});
