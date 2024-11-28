document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');
    const messages = document.getElementById('messages');
  
    // Helper to add messages to the chat
    function addMessage(text, sender = 'user') {
      const messageElement = document.createElement('li');
      messageElement.textContent = sender === 'user' ? `You: ${text}` : `Bot: ${text}`;
      messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
      messages.appendChild(messageElement);
      messages.scrollTop = messages.scrollHeight;
    }
  
    // Send message and get response
    sendBtn.addEventListener('click', function () {
      const message = messageInput.value.trim();
      if (message) {
        addMessage(message);
        messageInput.value = '';
  
        // Simulate a bot response after a short delay
        setTimeout(() => {
          addMessage('This is a bot response.', 'bot');
        }, 500);
      }
    });
  
    messageInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendBtn.click();
      }
    });
  });
  