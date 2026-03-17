import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import LandingPage from './LandingPage';
import './index.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onstart = () => {
        setIsListening(true);
      };

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(prev => prev + (prev ? ' ' : '') + transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      console.warn("Speech Recognition API not supported in this browser.");
    }
  }, []);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setTranslatedText('');

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${API_URL}/api/translate`, {
        text: inputText,
        sourceLanguage,
        targetLanguage
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Translation Failed', error);
      setTranslatedText('Error: Translation Failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      if (recognitionRef.current) {
        const langMap = {
          'en': 'en-US',
          'es': 'es-ES',
          'fr': 'fr-FR',
          'hi': 'hi-IN',
          'ja': 'ja-JP'
        };
        recognitionRef.current.lang = langMap[sourceLanguage] || 'en-US';
        recognitionRef.current.start();
      } else {
        alert("Your browser doesn't support speech recognition.");
      }
    }
  };

  const handleSpeak = () => {
    if (!translatedText || !window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(translatedText);

    const voices = window.speechSynthesis.getVoices();
    const langMap = {
      'en': 'en-US',
      'es': 'es-ES',
      'fr': 'fr-FR',
      'hi': 'hi-IN',
      'ja': 'ja-JP'
    };

    const targetLangCode = langMap[targetLanguage] || 'en-US';

    const preferredVoice = voices.find(voice => voice.lang.includes(targetLangCode.split('-')[0]));
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setInputText(translatedText);
    setTranslatedText('');
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'ja', name: 'Japanese' }
  ];

  if (showLanding) {
    return (
      <LandingPage
        onEnter={() => setShowLanding(false)}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    );
  }

  return (
    <div className="app-container">
      <header className="header" style={{ position: 'relative' }}>
        <button
          onClick={() => setShowLanding(true)}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: '1px solid var(--avengers-red)',
            color: 'var(--avengers-red)',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'Orbitron, sans-serif'
          }}
        >
          BACK
        </button>
        <h1 className="title">Avengers Language Learner</h1>
        <p className="subtitle">Translate across the multiverse.</p>
      </header>

      <main className="main-content">
        <div className="translation-area">
          <div className="box-container input-box">
            <div className="controls">
              <select
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>

              <button className="btn-icon btn-jarvis" onClick={handleListen}>
                {isListening ? 'Stop' : 'Talk to JARVIS'}
              </button>
            </div>

            {isListening && <div className="listening-indicator">JARVIS is listening...</div>}

            <textarea
              placeholder="Type your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          <div className="box-container output-box">
            {isLoading && <div className="loading-text">Translating...</div>}
            <div className="controls">
              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>

              <button className="btn-icon" onClick={swapLanguages} title="Swap Languages">
                Swap
              </button>
            </div>

            <textarea
              placeholder="Translation will appear here..."
              value={translatedText}
              readOnly
              className={isLoading ? 'blur' : ''}
              style={{ opacity: isLoading ? 0.3 : 1 }}
            />
          </div>
        </div>

        <div className="action-center">
          <button
            className="btn-primary"
            onClick={handleTranslate}
            disabled={isLoading || !inputText.trim()}
          >
            {isLoading ? 'Translating...' : 'Translate'}
          </button>

          <button
            className="btn-icon"
            onClick={handleSpeak}
            disabled={!translatedText}
            style={{ fontSize: '1.2rem', padding: '1rem', border: '1px solid var(--avengers-red)', background: translatedText ? 'rgba(230, 36, 41, 0.1)' : 'transparent', color: translatedText ? '#fff' : '#555' }}
          >
            Hear Translation
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
