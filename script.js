let menuicon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let icon = document.querySelector(".menu-icon i"); // Fixed this to target the icon correctly

menuicon.addEventListener("click", function() {
    navbar.classList.toggle("open"); // Toggle the 'open' class on the navbar
    
    // Toggle the hamburger icon to 'x' mark
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent default link behavior

        // Scroll to the target element with smooth animation
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector("form").addEventListener("submit", function(e) {
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector('textarea').value;

    // Basic validation
    if (name === "" || email === "" || message === "") {
        e.preventDefault(); // Prevent form submission
        alert("Please fill out all fields!");
    }
});

<button id="darkModeToggle">Toggle Dark Mode</button>

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('.skills');
    const skillsOffset = skillsSection.offsetTop;
    const skillsHeight = skillsSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    if (scrollY + windowHeight >= skillsOffset && scrollY < skillsOffset + skillsHeight) {
        // Add animation to progress bars
        document.querySelectorAll('.progress').forEach(progress => {
            const width = progress.style.width;
            progress.style.width = 0;  // Reset width
            setTimeout(() => {
                progress.style.width = width;
            }, 100);
        });
    }
});
