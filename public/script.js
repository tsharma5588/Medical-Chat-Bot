async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value;
    if (message === "") return;
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="user">You: ${message}</div>`;
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });
    const data = await response.json();
    chatBox.innerHTML += `<div class="bot">Bot: ${data.reply}</div>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}