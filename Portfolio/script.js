let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.mobile-nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};



let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);

    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-x');  
        navbar.classList.remove('active'); 
    }
});


ScrollReveal().reveal('.home-img', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 100
});


ScrollReveal().reveal('.input-box input, .textarea textarea', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 50
});


ScrollReveal().reveal('.home-content', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.heading', {
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.home-content h1,.about-img,.service-card .service', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 50
});
ScrollReveal().reveal('.home-content p .service-card .service', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.skill-container .skill-left, .skill-container .skill-right', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.project-container .project', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.abt-content p', {
    origin: 'bottom',
    distance: '20px',
    duration: 2000,
    delay: 50
});


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'FullStack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



function updateRadialProgress(percentage) {
    const progressBar = document.querySelectorAll('.radial-bar .progress-bar');
    const totalLength = 502; 

    progressBar.forEach((bar, index) => {
        const percentageValue = percentage[index];
        const offset = totalLength - (totalLength * (percentageValue / 100)); 
        bar.style.strokeDashoffset = offset;
    });
}

updateRadialProgress([85, 70, 80, 75]); 




document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); 
    const navLinks = document.querySelectorAll("nav ul li a");

    function changeActiveSection() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveSection);
});

