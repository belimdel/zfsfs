// server.js
const express = require('express');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour traiter les données JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend Node.js !');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
