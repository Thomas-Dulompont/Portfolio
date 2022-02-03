const body = document.querySelector("body");
const nav = document.querySelector("nav");

// NAVBAR

nav.addEventListener("click", displayNavbar);

function displayNavbar() {
    const element = document.querySelector(".navbar-active");
    element.classList.toggle("navbar-active-display");
};

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

autoFavIcon();


function autoFavIcon() {
    const head = document.querySelector("head");
    const favicon = `
    <link rel="apple-touch-icon" sizes="180x180" href="https://thomasdlmp.fr/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://thomasdlmp.fr/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://thomasdlmp.fr/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="https://thomasdlmp.fr/img/favicon/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    `;
    if (head === null) {
    } else {
        head.innerHTML += favicon;
    }
} 

autoNavbar();

function autoNavbar() {
    const nav = document.querySelector("nav");
    const navbar = `
    <div class="navbar-active">
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="compétences.html">Compétences</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="navbar-bars">
            <i class="fas fa-times"></i>
        </div>
    </div>
    `;
    if (nav === null) {
    } else {
        nav.innerHTML += navbar;
    }
}