// Simple "Fade-in on Scroll" Animation

// 1. Select all the elements we want to fade in
const elementsToAnimate = document.querySelectorAll('section, footer');

// 2. Create the Intersection Observer
const observer = new IntersectionObserver((entries) => {
    // 3. Loop over the entries
    entries.forEach(entry => {
        // 4. If the element is visible
        if (entry.isIntersecting) {
            // 5. Add the 'is-visible' class
            entry.target.classList.add('is-visible');
        }
    });
});

// 6. Loop over the elements and observe each one
elementsToAnimate.forEach(element => {
    observer.observe(element);
});