document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.getElementById('chatHistory');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Auto-resize textarea
    userInput.addEventListener('input', () => {
        userInput.style.height = 'auto';
        userInput.style.height = userInput.scrollHeight + 'px';
    });

    // send message
    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Add user message to chat
        addMessage(message, 'user');
        userInput.value = '';
        userInput.style.height = 'auto';

        // Show loading
        loadingOverlay.style.display = 'flex';

        try {
            // API call to OpenAI
            // simulate a response
            await simulateAIResponse(message);
        } catch (error) {
            addMessage('Sorry, I encountered an error. Please try again.', 'ai');
        } finally {
            loadingOverlay.style.display = 'none';
        }
    }

    async function simulateAIResponse(message) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = `I understand you're asking about "${message}". Let me help you with that...`;
        addMessage(response, 'ai');
    }

    // Add message to chat
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-avatar">
                    <i class="fas fa-${type === 'ai' ? 'robot' : 'user'}"></i>
                </div>
                <div class="message-text">${text}</div>
            </div>
        `;
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });


    chatHistory.scrollTop = chatHistory.scrollHeight;
});