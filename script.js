document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const body = document.body;

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleButton.classList.add('active');
        }
    } else {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkMode) {
            body.classList.add("dark-mode");
            toggleButton.classList.add('active');
        } else {
            body.classList.add("light-mode");
        }
    }

    toggleButton.addEventListener("click", function () {
        body.style.transition = 'background-color 0.5s ease, color 0.5s ease'; 
        if (body.classList.contains("light-mode")) {
            body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark-mode");
            toggleButton.classList.add('active');
        } else {
            body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light-mode");
            toggleButton.classList.remove('active');
        }
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.fontSize = "1.1rem";
        });

        link.addEventListener("mouseout", function () {
            this.style.fontSize = "1rem";
        });
    });
});
