document.addEventListener('DOMContentLoaded', function() {
    // Animate letters coming in one by one for banner text
    const welcomeText = document.getElementById('welcome-text');
    const text = welcomeText.textContent;
    welcomeText.textContent = '';
    text.split('').forEach((char, index) => {
        setTimeout(() => {
            welcomeText.textContent += char;
        }, 100 * index);  // Adjust timing as needed
    });

    // Animate words coming in one by one for mission statement
    function animateMissionText() {
        const missionText = document.querySelector('.mission-text');
        const missionWords = missionText.textContent.split(' ');
        missionText.textContent = '';
        missionWords.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.classList.add('mission-word');
            missionText.appendChild(span);
            setTimeout(() => {
                span.classList.add('animate__animated', 'animate__fadeInUp');
            }, 200 * index);  // Adjust timing as needed
        });
    }

    // Function to add animation class
    function addAnimationClass(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (window.innerWidth < 768) { // Mobile
                    entry.target.classList.add('animate__animated', entry.target.dataset.mobileAnimation);
                } else { // Desktop
                    entry.target.classList.add('animate__animated', entry.target.dataset.animation);
                }
                if (entry.target.classList.contains('mission-statement')) {
                    animateMissionText();
                }
                observer.unobserve(entry.target); // Stop observing after animation is added
            }
        });
    }

    // Intersection Observer
    const observer = new IntersectionObserver(addAnimationClass, {
        threshold: 0.1
    });

    // Elements to animate
    const sections = document.querySelectorAll('[data-animation]');

    sections.forEach(section => {
        observer.observe(section);
    });

    // Navbar scroll effect
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

