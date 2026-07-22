```javascript
/* =====================================================
   MOBILE MENU
===================================================== */

const menuIcon = document.querySelector("#menu-icon");

const navbar = document.querySelector(".navbar");


menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const text = [

    "Software Developer",

    "Web Developer",

    "Python Programmer",

    "Problem Solver"

];


let index = 0;

let charIndex = 0;


const typing = document.getElementById("typing");


function typeEffect() {


    if (charIndex < text[index].length) {


        typing.textContent +=

            text[index].charAt(charIndex);


        charIndex++;


        setTimeout(typeEffect, 100);


    }


    else {


        setTimeout(eraseEffect, 1500);

    }

}


function eraseEffect() {


    if (charIndex > 0) {


        typing.textContent =

            text[index].substring(

                0,

                charIndex - 1

            );


        charIndex--;


        setTimeout(eraseEffect, 50);


    }


    else {


        index++;


        if (index >= text.length) {

            index = 0;

        }


        setTimeout(typeEffect, 500);

    }

}


/* Start typing effect */

typeEffect();


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const sections = document.querySelectorAll("section");


function revealSections() {


    sections.forEach(section => {


        const sectionTop =

            section.getBoundingClientRect().top;


        const windowHeight =

            window.innerHeight;


        if (sectionTop < windowHeight - 100) {


            section.classList.add("show");

        }

    });

}


/* Run when scrolling */

window.addEventListener(

    "scroll",

    revealSections

);


/* Run when page loads */

window.addEventListener(

    "load",

    revealSections

);


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

window.addEventListener("scroll", () => {


    const scrollPosition =

        window.scrollY + 200;


    sections.forEach(section => {


        const sectionTop =

            section.offsetTop;


        const sectionHeight =

            section.offsetHeight;


        const sectionId =

            section.getAttribute("id");


        const currentLink =

            document.querySelector(

                `.navbar a[href="#${sectionId}"]`

            );


        if (

            scrollPosition >= sectionTop &&

            scrollPosition <

            sectionTop + sectionHeight

        ) {


            navLinks.forEach(link => {

                link.classList.remove("active");

            });


            if (currentLink) {

                currentLink.classList.add("active");

            }

        }

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =

    document.getElementById("contactForm");


contactForm.addEventListener(

    "submit",

    function (event) {


        event.preventDefault();


        alert(

            "Thank you for contacting me! " +

            "I will respond soon."

        );


        contactForm.reset();

    }

);
```
