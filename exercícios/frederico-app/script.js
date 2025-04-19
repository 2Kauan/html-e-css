function enviarMensagem() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");
  
    if (input.value.trim() !== "") {
      const userMsg = document.createElement("li");
      userMsg.innerHTML = `<strong>Você:</strong> ${input.value}`;
      chat.appendChild(userMsg);
  
      const botMsg = document.createElement("li");
      botMsg.innerHTML = `<strong>Frederico:</strong> Ainda estou aprendendo! Em breve responderei melhor.`;
      chat.appendChild(botMsg);
  
      input.value = "";
    }
  }
  