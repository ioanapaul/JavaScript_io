// script_3.js

// Demande à l'utilisateur le nombre d'étages
let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Conversion en nombre entier
etages = parseInt(etages);

// Création de la pyramide
for (let i = 1; i <= etages; i++) {
  // Calcul des espaces et des dièses
  let espaces = " ".repeat(etages - i);
  let dieses = "#".repeat(i);
  
  // Affichage de la ligne
  console.log(espaces + dieses);
}