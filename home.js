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

    // Function to animate mission text words one by one
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

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class when in viewport
    function addAnimationClass(element, animationClass, callback) {
        if (isInViewport(element)) {
            element.classList.add('animate__animated', animationClass);
            if (callback) callback();
        }
    }

    // Elements to animate
    const missionSection = document.querySelector('.mission-statement');
    const announcementsSection = document.querySelector('.announcements');
    const volunteerSection = document.querySelector('.volunteer-form');
    const highlightsSection = document.querySelector('.featured-highlights');
    const quotesSection = document.querySelector('.member-quotes');

    // Scroll event listener
    window.addEventListener('scroll', function() {
        addAnimationClass(missionSection, 'animate__fadeInUp', animateMissionText);
        addAnimationClass(announcementsSection, 'animate__fadeInLeft');
        addAnimationClass(volunteerSection, 'animate__fadeInUp');
        addAnimationClass(highlightsSection, 'animate__fadeInRight');
        addAnimationClass(quotesSection, 'animate__fadeInUp');
    });

    // Initial check
    addAnimationClass(missionSection, 'animate__fadeInUp', animateMissionText);
    addAnimationClass(announcementsSection, 'animate__fadeInLeft');
    addAnimationClass(volunteerSection, 'animate__fadeInUp');
    addAnimationClass(highlightsSection, 'animate__fadeInRight');
    addAnimationClass(quotesSection, 'animate__fadeInUp');

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
