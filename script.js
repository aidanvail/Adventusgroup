document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Thank you for your message. We will get back to you soon!');
                    form.reset();
                } else {
                    alert('Oops! There was a problem submitting your form. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Oops! There was a problem submitting your form. Please try again.');
            });
        });
    }

    // You can add more interactive features here, such as:
    // - Dynamic loading of company logos in the company grid
    // - Implementing the video background for the home section
    // - Adding animations or transitions for a more engaging user experience
});
