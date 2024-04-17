const mongoose = require("mongoose");

const voitureSchema = new mongoose.Schema({
  assurance: {
    type: String,
    required: true,
  },
  mat: {
    type: String,
    required: [true, "Please provide a matricule for the vehicule "],
  },
  numeroContrat: {
    type: String,
    required: [true, "Please provide a matricule for the vehicule "],
  },
});
const voiture = mongoose.model("voiture", voitureSchema);

module.exports = voiture;
