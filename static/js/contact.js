document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            alert('Message has been sent!');
            this.reset(); // Clear the form
            window.location.href = '{% url "dashboard" %}'; // Redirect to home page
});