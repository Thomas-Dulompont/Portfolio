document.querySelector("nav").addEventListener("click", displayNavbar);

function displayNavbar() {
    var element = document.querySelector(".navbar-active");
    element.classList.toggle("navbar-active-display");
}

const footer = document.querySelector("footer");
const footerText = `
<h3>Contactons nous !</h3>
<p>N'hésitez pas à me contacter pour parler de votre projet,</p>
<p>je suis joignable par mail : <a href="mailto:thomasdulompont.1@gmail.com">thomasdulompont.1@gmail.com</a></p>
<p>ou connectons nous sur Linkedin : <a href="https://www.linkedin.com/in/thomas-dulompont-087544228/">Thomas-Dlmp</a></p>
`;

footer.innerHTML += footerText;
