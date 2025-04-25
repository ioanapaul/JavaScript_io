// script_7.js

// Fonction qui analyse un message et renvoie la réponse du bot adolescent
function teenageBot(message) {
  // Vérification si le message est vide
  if (message.trim() === "") {
    return "t'es en PLS ?";
  }
  
  // Vérification si c'est une question (se termine par "?")
  if (message.trim().endsWith("?")) {
    return "Ouais Ouais...";
  }
  
  // Vérification si le message est entièrement en majuscules
  // On exclut les messages qui n'ont pas de lettres
  const hasLetters = /[a-zA-Z]/.test(message);
  const isAllUppercase = message === message.toUpperCase() && hasLetters;
  if (isAllUppercase) {
    return "Pwa, calme-toi...";
  }
  
  // Vérification si le message contient "Fortnite" (insensible à la casse)
  if (message.toLowerCase().includes("fortnite")) {
    return "on s' fait une partie soum-soum ?";
  }
  
  // Réponse par défaut
  return "balek.";
}

// Démarrage du chat-bot avec une boucle
let conversation = true;

while (conversation) {
  // Demande un message à l'utilisateur
  const userMessage = prompt("Parle au bot adolescent (ou clique sur Annuler pour quitter):");
  
  // Si l'utilisateur clique sur Annuler, on sort de la boucle
  if (userMessage === null) {
    console.log("Chat terminé.");
    conversation = false;
  } else {
    // Sinon, on obtient et affiche la réponse du bot
    const botResponse = teenageBot(userMessage);
    console.log(`Toi: ${userMessage}`);
    console.log(`Bot Ado: ${botResponse}`);
    console.log("--------------------");
  }
}