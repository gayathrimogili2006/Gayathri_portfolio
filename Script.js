// =========================
// MOBILE MENU
// =========================


let menuIcon=document.querySelector("#menu-icon");

let navbar=document.querySelector(".navbar");


menuIcon.onclick=()=>{

    navbar.classList.toggle("active");

};




// =========================
// TYPING EFFECT
// =========================


const text=[

"Software Developer",

"Web Developer",

"Python Programmer",

"Problem Solver"

];


let index=0;

let charIndex=0;


let typing=document.getElementById("typing");



function typeEffect(){

    if(charIndex < text[index].length){

        typing.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}



function eraseEffect(){

    if(charIndex>0){

        typing.textContent=text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index>=text.length){

            index=0;

        }


        setTimeout(typeEffect,500);

    }

}



typeEffect();




// =========================
// SCROLL ANIMATION
// =========================


const sections=document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let top=window.scrollY;

let offset=section.offsetTop-200;

let height=section.offsetHeight;


if(top>=offset && top<offset+height){

section.classList.add("show");

}


});


});




// =========================
// CONTACT MESSAGE
// =========================


document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();


alert(
"Thank you for contacting me! I will respond soon."
);


this.reset();


});
