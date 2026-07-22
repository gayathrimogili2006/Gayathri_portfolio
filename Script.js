/* ==============================
   TYPING ANIMATION
============================== */

const words = [
    "Software Developer",
    "Web Developer",
    "Python Programmer",
    "C Programmer",
    "Full Stack Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* ==============================
   DARK / LIGHT MODE
============================== */

const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

    } else {

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

    }

};


/* ==============================
   MOBILE MENU
============================== */

const menuBtn = document.getElementById("menu-btn");

const navbar = document.getElementById("navbar");

menuBtn.onclick = () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuBtn.classList.remove("fa-bars");

        menuBtn.classList.add("fa-xmark");

    } else {

        menuBtn.classList.remove("fa-xmark");

        menuBtn.classList.add("fa-bars");

    }

};


/* ==============================
   CLOSE MENU WHEN CLICKING LINK
============================== */

document.querySelectorAll("#navbar a").forEach(link => {

    link.onclick = () => {

        navbar.classList.remove("active");

        menuBtn.classList.remove("fa-xmark");

        menuBtn.classList.add("fa-bars");

    };

});


/* ==============================
   ACTIVE NAVIGATION
============================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==============================
   STICKY HEADER
============================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,27,41,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(0,0,0,.3)";
        header.style.boxShadow = "none";

    }

});


/* ==============================
   SCROLL REVEAL ANIMATION
============================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==============================
   CONTACT FORM
============================== */

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting me!\n\nI will get back to you soon.");

    form.reset();

});


/* ==============================
   SMOOTH SCROLL
============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==============================
   PRELOADER
============================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==============================
   CONSOLE MESSAGE
============================== */

console.log("Portfolio Developed by Mogili Venkata Gayathri");
