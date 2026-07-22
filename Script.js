// =========================
// PORTFOLIO SCRIPT
// =========================

// Mobile Menu
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        navbar.classList.toggle("active");

        if (menuIcon.classList.contains("fa-bars")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        } else {
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        }
    };

    document.querySelectorAll(".navbar a").forEach(link => {
        link.onclick = () => {
            navbar.classList.remove("active");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        };
    });
}

// =========================
// Typing Effect
// =========================

const typing = document.getElementById("typing");

const words = [
    "Software Developer",
    "Web Developer",
    "Python Programmer",
    "Frontend Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(type, 1200);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }

    }

    setTimeout(type, deleting ? 70 : 120);
}

type();

// =========================
// Sticky Header
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {
        header.style.background = "rgba(8,27,41,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    } else {
        header.style.background = "rgba(8,27,41,.9)";
        header.style.boxShadow = "none";
    }

});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Scroll Animation
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// =========================
// Contact Form
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}

// =========================
// Scroll To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#00abf0";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px rgba(0,171,240,.5)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// =========================
// Footer Year
// =========================

const year = document.querySelector(".copyright");

if (year) {

    year.innerHTML =
        `© ${new Date().getFullYear()} Mogili Venkata Gayathri. All Rights Reserved.`;

}

console.log("Portfolio Loaded Successfully");
