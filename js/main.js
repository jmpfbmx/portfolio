let actualCurrentSession = window.location.hash;

const sections = document.querySelectorAll("home, skills, experience, projects, blogs, contacts");
const links = document.querySelectorAll("nav a");

function updateHashOnScroll() {
    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section;
        }
    });

    if(currentSection && window.location.hash !== `${currentSection.id}`) {
        history.replaceState(null, null, `#${currentSection.id}`);
        actualCurrentSession = `#${currentSection.id}`;
        updateAria();
    }
}

function updateAria() {
    links.forEach(link => {
        if (link.getAttribute('href') === actualCurrentSession) {
            link.setAttribute('aria-current', 'page');
            link.style.color = "#ffffff";
            link.classList.add('active');
        } else {
            link.removeAttribute('aria-current');
            link.style.color = "#9CA3AF";
            link.classList.remove('active');
        }
    });
}

let home = () => document.getElementById('home').scrollIntoView({behavior: 'smooth'});
let skills = () => document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
let experience = () => document.getElementById('experience').scrollIntoView({behavior: 'smooth'});
let projects = () => document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
let blogs = () => document.getElementById('blogs').scrollIntoView({behavior: 'smooth'});
let contact = () => document.getElementById('contact').scrollIntoView({behavior: 'smooth'});

window.addEventListener('scroll', updateHashOnScroll);
window.addEventListener('hashchange', updateAria);

updateHashOnScroll();
updateAria();
