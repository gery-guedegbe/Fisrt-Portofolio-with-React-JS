const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour traiter les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route pour gérer le formulaire
app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  // Configurer le transporter pour nodemailer (vous devez remplacer ces informations avec vos propres)
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: "votre_email@gmail.com",
      pass: "votre_mot_de_passe",
    },
  });

  // Configurer le contenu du mail
  const mailOptions = {
    from: "votre_email@gmail.com",
    to: "destination@example.com",
    subject: "Nouveau message depuis le formulaire de contact",
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erreur lors de l'envoi du message.");
    } else {
      console.log("Email envoyé: " + info.response);
      res.status(200).send("Message envoyé avec succès!");
    }
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
