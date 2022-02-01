const body = document.querySelector("body");

// BODY ON LOAD

// window.addEventListener("load", function() {

// })

// NAVBAR

document.querySelector("nav").addEventListener("click", displayNavbar);

function displayNavbar() {
    const element = document.querySelector(".navbar-active");
    element.classList.toggle("navbar-active-display");
}


// BUTTON NAVIGATION

document.querySelector(".button-next").addEventListener("click", nextPage);
document.querySelector(".button-before").addEventListener("click", beforePage);

function animationNext() {
    const animation = `
    <div class="animation">
        <i class="fas fa-spinner"></i>
    </div>
    `
    body.innerHTML = animation;
}

function nextPage() {
    const text = document.getElementById("next").textContent;
    animationNext();
    setTimeout(function() {
        window.location.href = `${text}.html`;
    }, 400);
}

function beforePage() {
    const text = document.getElementById("before").textContent;
    animationNext();
    setTimeout(function() {
        window.location.href = `${text}.html`;
    }, 400);
}


// FOOTER
const footer = document.querySelector("footer");
const footerText = `
<h3>Contactons nous !</h3>
<p>N'hésitez pas à me contacter pour parler de votre projet,</p>
<p>je suis joignable par mail : <a href="mailto:thomasdulompont.1@gmail.com">thomasdulompont.1@gmail.com</a></p>
<p>ou connectons nous sur Linkedin : <a href="https://www.linkedin.com/in/thomas-dulompont-087544228/">Thomas-Dlmp</a></p>
`;

footer.innerHTML += footerText;
