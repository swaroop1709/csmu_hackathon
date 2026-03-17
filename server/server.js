require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory mock database for the hackathon
const translationHistory = [];

// Translate Route
app.post('/api/translate', async (req, res) => {
    try {
        const { text, sourceLanguage, targetLanguage } = req.body;

        if (!text || !sourceLanguage || !targetLanguage) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Call MyMemory API (Free and reliable without keys for simple queries)
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLanguage}|${targetLanguage}`;
        const response = await axios.get(url);

        // The MyMemory API returns the translated text in response.data.responseData.translatedText
        let translatedText = '';

        if (response.data && response.data.responseData) {
            translatedText = response.data.responseData.translatedText;
        } else {
            throw new Error("Invalid response from Translation API");
        }

        // Save to mock DB
        const translationRecord = {
            inputText: text,
            translatedText,
            sourceLanguage,
            targetLanguage,
            timestamp: new Date()
        };

        translationHistory.unshift(translationRecord); // Add to beginning (latest first)

        res.json({ translatedText });

    } catch (error) {
        console.error('Translation error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to translate' });
    }
});

// Get History Route
app.get('/api/history', async (req, res) => {
    try {
        // Return top 10 recent
        res.json(translationHistory.slice(0, 10));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch history' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} (Using In-Memory Database)`);
});
