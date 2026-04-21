const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

function getBotResponse(message) {
    message = message.toLowerCase();
    if (message.includes("fever")) {
        return "You may have a fever. Stay hydrated and take rest. If temperature is above 102°F, consult a doctor.";
    }
    else if (message.includes("headache") || message.includes("migraine")) {
        return "Headache can be due to stress or dehydration. Take rest and drink plenty of water.";
    }
    else if (message.includes("cold") || message.includes("cough")) {
        return "Common cold or cough: Take steam, drink warm fluids and rest properly.";
    }
    else if (message.includes("stomach pain") || message.includes("gas") || message.includes("acidity")) {
        return "Stomach pain may be due to indigestion. Avoid spicy food and drink warm water.";
    }
    else if (message.includes("diabetes")) {
        return "Diabetes is high blood sugar. Maintain proper diet, exercise regularly and monitor sugar levels.";
    }
    else if (message.includes("blood pressure") || message.includes("bp")) {
        return "High BP can cause dizziness and headache. Reduce salt intake and manage stress.";
    }
    else if (message.includes("covid")) {
        return "COVID symptoms include fever, cough and breathing issues. Get tested if symptoms worsen.";
    }
    else if (message.includes("malaria")) {
        return "Malaria symptoms include high fever, chills and sweating. Please consult a doctor immediately.";
    }
    else if (message.includes("dengue")) {
        return "Dengue symptoms include high fever, body pain and low platelets. Seek medical help quickly.";
    }
    else if (message.includes("typhoid")) {
        return "Typhoid symptoms include prolonged fever and weakness. Proper antibiotics are required.";
    }
    else if (message.includes("asthma")) {
        return "Asthma causes breathing difficulty. Use inhaler as prescribed and avoid dust.";
    }
    else if (message.includes("heart") || message.includes("chest pain")) {
        return "Chest pain may indicate heart problems. Seek immediate medical attention.";
    }
    else if (message.includes("allergy")) {
        return "Allergies cause sneezing and rashes. Avoid triggers and take antihistamines if needed.";
    }
    else if (message.includes("skin infection") || message.includes("rash")) {
        return "Skin infections may cause redness and itching. Keep area clean and consult doctor if severe.";
    }
    else if (message.includes("depression") || message.includes("sad")) {
        return "Depression affects mental health. Consider speaking to a counselor or mental health professional.";
    }
    else if (message.includes("anxiety")) {
        return "Anxiety causes nervousness and rapid heartbeat. Practice relaxation and breathing exercises.";
    }
    else if (message.includes("kidney stone")) {
        return "Kidney stones cause severe back pain. Drink water and consult doctor if pain is severe.";
    }
    else {
        return "I am not sure about that. Please consult a healthcare professional for proper medical advice.";
    }
}
app.post("/chat", (req, res) => {
    const userMessage = req.body.message;
    const botReply = getBotResponse(userMessage);
    res.json({ reply: botReply });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});