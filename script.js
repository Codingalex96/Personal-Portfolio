new WOW().init();

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("themeToggle");

    // Check local storage for theme preference and apply it
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
        toggleButton.textContent = "Dark Theme"; // Set button text to Dark Theme
    } else {
        document.body.classList.add("dark-theme");
        toggleButton.textContent = "Light Theme"; // Set button text to Light Theme
    }

    toggleButton.addEventListener("click", function () {
        // Toggle between light and dark theme
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");

        // Save the preference in local storage and update button text
        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "Dark Theme"; // Change button text to Dark Theme
        } else {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "Light Theme"; // Change button text to Light Theme
        }
    });
});

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