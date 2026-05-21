// script.js

// Validação simples do formulário

const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const status = document.getElementById("mensagem-status");

  // Verifica se os campos estão preenchidos

  if(nome === "" || email === "" || mensagem === "") {

    status.innerText = "Preencha todos os campos.";

    return;
  }

  // Validação simples de e-mail

  if(!email.includes("@") || !email.includes(".")) {

    status.innerText = "Digite um e-mail válido.";

    return;
  }

  status.innerText = "Mensagem enviada com sucesso!";

  // Limpa os campos

  form.reset();

});