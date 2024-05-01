const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get("/nevnap", async (req, res) => {
    try {
        // Az API URL-jét a sajátodra cseréld
        const apiResponse = await axios.get('https://api.nevnapok.eu/ma');
        const data = apiResponse.data;
        // Feltételezem, hogy az adatok a JSON válasz egy bizonyos kulcs alatt vannak
        const names = data[Object.keys(data)[0]].join(', ');
        res.send(`Mai névnapok: ${names}`);
    } catch (error) {
        console.error('API Error:', error);
        res.send("Hiba történt a névnapok lekérésekor.");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
