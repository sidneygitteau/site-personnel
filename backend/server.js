require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB !'))
  .catch((error) => console.error('Erreur MongoDB :', error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur MongoDB :'));
db.once('open', () => console.log('Connecté à MongoDB !'));

// Modèle d'utilisateur
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'Utilisateur ajouté !' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
