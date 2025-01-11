import React, { useState } from "react";
import styled from "styled-components";

// Demo Data
const adviceData = {
  en: [
    "Offer discounts to loyal customers.",
    "Keep track of low stock items.",
    "Analyze seasonal trends for better planning.",
  ],
  es: [
    "Ofrezca descuentos a clientes leales.",
    "Controle los artículos de bajo stock.",
    "Analice las tendencias estacionales para una mejor planificación.",
  ],
  fr: [
    "Offrez des réductions aux clients fidèles.",
    "Suivez les articles en rupture de stock.",
    "Analysez les tendances saisonnières pour une meilleure planification.",
  ],
  hi: [
    "वफादार ग्राहकों को छूट दें।",
    "कम स्टॉक वाले वस्तुओं पर नज़र रखें।",
    "बेहतर योजना के लिए मौसमी प्रवृत्तियों का विश्लेषण करें।",
  ],
};

// Styled Components
const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f9fafc;
  font-family: "Roboto", sans-serif;
  color: #333;

  .dashboard-header {
    text-align: center;
    margin-bottom: 30px;

    h1 {
      font-size: 2.5rem;
      color: #222;
    }

    p {
      font-size: 1.2rem;
      color: #555;
    }

    .language-selection {
      margin-top: 15px;

      label {
        font-size: 1rem;
        margin-right: 10px;
        font-weight: 600;
      }

      select {
        font-size: 1rem;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #000;
      }
    }
  }
`;

const QuestionSection = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
    color: #444;
  }

  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    height: 80px;
  }

  .actions {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      padding: 10px 15px;
      font-size: 1rem;
      color: #fff;
      background-color: #007bff;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }

    .mic-icon {
      cursor: pointer;
      font-size: 1.5rem;
      color: #007bff;

      &:hover {
        color: #0056b3;
      }
    }
  }

  .response {
    margin-top: 20px;
    color: #007bff;
    font-size: 1rem;
  }
`;

const VoiceDialog = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  z-index: 1000;

  .spinner {
    font-size: 2rem;
    color: #007bff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #222;
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const BusinessDashboard = () => {
  const [language, setLanguage] = useState("en");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);

  const handleLanguageChange = (e) => setLanguage(e.target.value);

  const handleQuestionSubmit = () => {
    const randomAdvice = adviceData[language][
      Math.floor(Math.random() * adviceData[language].length)
    ];
    setResponse(randomAdvice);
  };

  const startListening = () => {
    setListening(true);
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang =
      language === "hi"
        ? "hi-IN"
        : language === "es"
        ? "es-ES"
        : language === "fr"
        ? "fr-FR"
        : "en-US";

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
      setListening(false);
    };

    recognition.onerror = () => {
      alert("Sorry, voice recognition failed. Try again.");
      setListening(false);
    };

    recognition.onend = () => setListening(false);
  };

  return (
    <DashboardContainer>
      <header className="dashboard-header">
        <h1>Business Dashboard</h1>
        <p>Monitor transactions and optimize your business effectively.</p>
        <div className="language-selection">
          <label htmlFor="language">Choose Language:</label>
          <select id="language" value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </header>

      <QuestionSection>
        <h3>Ask a Question</h3>
        <textarea
          placeholder="Enter your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="actions">
          <button onClick={handleQuestionSubmit}>Submit</button>
          <i className="fas fa-microphone mic-icon" onClick={startListening}></i>
        </div>
        {response && <div className="response"><strong>Advice:</strong> {response}</div>}
      </QuestionSection>

      {listening && (
        <VoiceDialog>
          <i className="fas fa-spinner fa-spin spinner"></i>
          <p>Listening... Speak in {language === "hi" ? "Hindi" : language}.</p>
          <button onClick={() => setListening(false)}>Cancel</button>
        </VoiceDialog>
      )}
    </DashboardContainer>
  );
};

export default BusinessDashboard;
