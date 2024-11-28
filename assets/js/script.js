document.addEventListener("DOMContentLoaded", function () {
    alert("Bem-vindo ao Tributo ao Brian O'Conner!");
});

const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const destination = this.getAttribute("href");
        alert(`Você está indo para: ${destination}`);
        setTimeout(() => {
            window.location.href = destination;
        }, 500);
    });
});

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#mensagem").value;

        if (name && email && message) {
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
            form.reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
}
