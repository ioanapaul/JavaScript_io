// script_2.js

// Demande à l'utilisateur un nombre
let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

// On convertit en entier (prompt retourne une chaîne)
number = parseInt(number);

// Fonction pour calculer la factorielle
function factorielle(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Appel de la fonction et affichage du résultat
console.log("Le résultat est : " + factorielle(number));
