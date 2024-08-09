// document.addEventListener("DOMContentLoaded", function() {
//     // Navbar hide/show on scroll
//     let lastScrollTop = 0;
//     const navbar = document.querySelector('.navbar');

//     window.addEventListener('scroll', function() {
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         if (scrollTop > lastScrollTop) {
//             navbar.style.top = '-70px';  // Hide the navbar
//         } else {
//             navbar.style.top = '0';  // Show the navbar
//         }
//         lastScrollTop = scrollTop;
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    // Load the loading screen
    fetch('loading.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .then(() => {
            // Remove loading screen when the page is fully loaded
            window.addEventListener('load', function() {
                const loadingScreen = document.getElementById('loading-screen');
                if (loadingScreen) {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.remove();
                    }, 500); // Adjust this timing as needed
                }
            });
        });

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
