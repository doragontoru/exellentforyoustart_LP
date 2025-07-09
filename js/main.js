// AOS (Animate on Scroll) Initialization
AOS.init({
    duration: 800, // Animation duration
    once: true, // Whether animation should happen only once - while scrolling down
    offset: 50, // Offset (in px) from the original trigger point
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
