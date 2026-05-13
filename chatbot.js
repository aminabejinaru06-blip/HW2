const qaBank = [
    { key: "skills", response: "Amina knows HTML5, CSS3, Python, and SQL!" },
    { key: "projects", response: "Her main projects are SkillSwap and the Weather Dashboard." },
    { key: "contact", response: "You can reach her at amina.bejinaru06@e-uvt.ro" }
];

document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputField = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
    const userText = inputField.value.toLowerCase();

    // Adaugam mesajul utilizatorului (DOM Manipulation)
    const userDiv = document.createElement('p');
    userDiv.className = 'user-msg';
    userDiv.textContent = "You: " + inputField.value;
    chatWindow.appendChild(userDiv);

    // Cautam raspunsul in "baza de date"
    let botResponse = "I'm sorry, I don't know about that. Try 'skills'.";
    for (let item of qaBank) {
        if (userText.includes(item.key)) {
            botResponse = item.response;
            break;
        }
    }

    // Adaugam mesajul botului
    const botDiv = document.createElement('p');
    botDiv.className = 'bot-msg';
    botDiv.textContent = "Bot: " + botResponse;
    chatWindow.appendChild(botDiv);

    // Resetam inputul si scrollam jos
    inputField.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
});