document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-70px';  // Hide the navbar when scrolling down
        } else {
            navbar.style.top = '0';  // Show the navbar when scrolling up
        }
        lastScrollTop = scrollTop;
    });
});
