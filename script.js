new WOW().init();

document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with user ID
    emailjs.init('lzL0DNlABawdysupm');  

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill out all fields.";
        } else {
            // Prepare the template parameters
            const templateParams = {
                name: name,
                email: email,
                message: message
                
            };

            // Send the email using EmailJS
            emailjs.send('service_3pzsdkj', 'template_xfrpkdb', templateParams)
                .then(function(response) {
                    formMessage.style.color = "green";
                    formMessage.textContent = "Message sent successfully!";
                    contactForm.reset();
                }, function(error) {
                    console.error("EmailJS Error:", error);
                    formMessage.style.color = "red";
                    formMessage.textContent = "Oops! Something went wrong.";
                });
        }
    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the section is in view, add the class to trigger zoom-in
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Stop observing after the animation
        }
    });
}, {
    threshold: 0.4 // Trigger when 40% of the section is in view
});

// Target the sections you want to animate
const sections = document.querySelectorAll('.section-zoom');
sections.forEach(section => {
    observer.observe(section);
});