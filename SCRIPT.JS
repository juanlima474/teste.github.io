// script.js
document.querySelectorAll(".cta-button").forEach(button => {
    button.addEventListener("click", function() {
        alert("Produto adicionado ao carrinho!");
    });
});

document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Obrigado pelo seu cadastro, ${email}! Em breve, enviaremos nossas ofertas exclusivas.`);
});
