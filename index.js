// /* script.js */
// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("fa-xmark");
//     navbar.classList.toggle('active');
// };

// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//             navlinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
//             });
//         }
//     });

//     // sticky navbar
//     let header = document.querySelector("header");
//     header.classList.toggle("scroll", window.scrollY > 100);

//     // remove toggle navbar icon
//     menuIcon.classList.remove("fa-xmark");
//     navbar.classList.remove('active');
// };

// // scroll reveal
// ScrollReveal({
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// // typed JS 
// const typed = new Typed('.multi-text', {
//     strings: ['Frontend Developer', 'Web Designer', 'Backend Developer'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true
// });
// console.log("hello")
/* script.js */
/* script.js */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    console.log("Menu icon clicked");
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add("active");
            });
        }
    });

    // sticky navbar
    let header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 100);

    // remove toggle navbar icon
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove('active');
};

// Check if ScrollReveal is defined
if (typeof ScrollReveal !== "undefined") {
    console.log("ScrollReveal is defined");

    // scroll reveal
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
} else {
    console.log("ScrollReveal is not defined");
}

// Check if Typed is defined
if (typeof Typed !== "undefined") {
    console.log("Typed is defined");

    // typed JS 
    const typed = new Typed('.multi-text', {
        strings: ['Frontend Developer', 'Web Designer', 'Backend Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
} else {
    console.log("Typed is not defined");
}

console.log("hello");
