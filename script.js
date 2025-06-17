document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the form from submitting normally
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        
        alert(`Thank you for your submission, ${name}! We will get in touch with you at ${email}.`);
    });
});
