const body = document.querySelector("body");
const nav = document.querySelector("nav");

// NAVBAR

nav.addEventListener("click", displayNavbar);

function displayNavbar() {
    const element = document.querySelector(".navbar-active");
    element.classList.toggle("navbar-active-display");
};


// BUTTON NAVIGATION

function animationNext() {
    const animation = `
    <div class="animation">
        <i class="fas fa-spinner"></i>
    </div>
    `
    body.innerHTML = animation;
}


autoFooter();


function autoFooter() {
    const footer = document.querySelector("footer");
    const footerText = `
    <h3>Contactons nous !</h3>
    <p>N'hésitez pas à me contacter pour parler de votre projet,</p>
    <p>je suis joignable par mail : <a href="mailto:thomasdulompont.1@gmail.com">thomasdulompont.1@gmail.com</a></p>
    <p>ou connectons nous sur Linkedin : <a href="https://www.linkedin.com/in/thomas-dulompont-087544228/">Thomas-Dlmp</a></p>
    `;
    if (footer === null) {
    } else {
        footer.innerHTML += footerText;
    }
} 