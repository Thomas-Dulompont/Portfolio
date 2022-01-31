const buttonBurger = document.querySelector(".navbar-bars");
const navbar = document.querySelector("nav");

function navbarFullScreen(){
    const navbarActive = `
    <div class="navbar-active">
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="skills.html">Compétences</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="navbar-bars">
            <i class="fas fa-bars"></i>
        </div>
    </div>
    `

    navbar.innerHTML = navbarActive;
};

buttonBurger.addEventListener("click", navbarFullScreen, false);