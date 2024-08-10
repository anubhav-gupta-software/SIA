document.addEventListener('DOMContentLoaded', function() {
    // Function to add animation class when sections come into view
    function addAnimationClass(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                entry.target.style.setProperty('--animate-duration', '0.5s'); // Fast animation duration
                entry.target.style.opacity = '1'; // Ensure visibility after animation
                observer.unobserve(entry.target); // Stop observing after animation is added
            }
        });
    }

    // Intersection Observer to trigger animations
    const observer = new IntersectionObserver(addAnimationClass, {
        threshold: 0.1
    });

    // Elements to animate
    const sections = document.querySelectorAll('.resources-section');

    sections.forEach(section => {
        observer.observe(section);
    });

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
