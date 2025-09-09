// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form (EmailJS)
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Initialize EmailJS (replace with your keys after signing up at emailjs.com)
    emailjs.init("YOUR_USER_ID");
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        }, (error) => {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});