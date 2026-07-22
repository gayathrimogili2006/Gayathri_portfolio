/*==========================================
        LOADER
==========================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

/*==========================================
        MOBILE MENU
==========================================*/

const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.onclick = () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");

    } else {

        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");

    }

};

document.querySelectorAll("#navbar a").forEach(link => {

    link.onclick = () => {

        navbar.classList.remove("active");

        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");

    }

});

/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

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

/*==========================================
        STICKY HEADER
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,27,41,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,27,41,.85)";
        header.style.boxShadow = "none";

    }

});

/*==========================================
        TYPING EFFECT
==========================================*/

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

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

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

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

/*==========================================
        DARK MODE
==========================================*/

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

        document.documentElement.style.setProperty("--bg","#f5f5f5");
        document.documentElement.style.setProperty("--card","#ffffff");
        document.documentElement.style.setProperty("--primary","#0077ff");

        document.body.style.background="#f5f5f5";
        document.body.style.color="#111";

    } else {

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

        document.documentElement.style.setProperty("--bg","#081b29");
        document.documentElement.style.setProperty("--card","#112e42");
        document.documentElement.style.setProperty("--primary","#00bfff");

        document.body.style.background="#081b29";
        document.body.style.color="#fff";

    }

};

/*==========================================
        SCROLL REVEAL
==========================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold:0.2

});

document.querySelectorAll("section").forEach(sec => {

    sec.classList.add("fade-up");

    observer.observe(sec);

});

/*==========================================
        CONTACT FORM
==========================================*/

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you for contacting me!\n\nI will get back to you soon.");

    form.reset();

});

/*==========================================
        SCROLL TO TOP BUTTON
==========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.background = "#00bfff";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.boxShadow = "0 0 15px rgba(0,191,255,.5)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*==========================================
        CURRENT YEAR
==========================================*/

const copyright=document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML="© "+new Date().getFullYear()+" Mogili Venkata Gayathri. All Rights Reserved.";

}

console.log("Portfolio Loaded Successfully");
