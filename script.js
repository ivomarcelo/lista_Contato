document.getElementById("contactForm").addEventListener("submit", function(event) {
  // Obter o valor do campo de e-mail
  var email = document.getElementById("mail").value;
  // Expressão regular para verificar se o e-mail contém pelo menos um símbolo "@"
  var emailRegex = /@/;
  // Verificar se o campo de e-mail está vazio ou não contém um símbolo "@"
  if (email === "" || !emailRegex.test(email)) {
    // Se estiver vazio ou não contiver o símbolo "@", prevenir o envio do formulário
    event.preventDefault();
    // Exibir uma mensagem de erro
    document.getElementById("mailError").textContent = "Por favor, insira um endereço de e-mail válido.";
  } else {
    // Se estiver preenchido corretamente, limpar qualquer mensagem de erro anterior
    document.getElementById("mailError").textContent = "";
  }
  });