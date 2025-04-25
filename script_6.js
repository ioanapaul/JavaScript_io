// script_6.js

// Fonction de traduction d'ARN en protéines
function translateARN(arn) {
  // Dictionnaire de correspondance codon -> acide aminé
  const geneticCode = {
    // Sérine
    "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine", 
    "AGU": "Sérine", "AGC": "Sérine",
    
    // Proline
    "CCU": "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
    
    // Leucine
    "UUA": "Leucine", "UUG": "Leucine",
    
    // Phénylalanine
    "UUU": "Phénylalanine", "UUC": "Phénylalanine",
    
    // Arginine
    "CGU": "Arginine", "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine",
    "AGA": "Arginine", "AGG": "Arginine",
    
    // Tyrosine
    "UAU": "Tyrosine", "UAC": "Tyrosine"
  };

  // Nettoyer l'ARN de tout caractère non-nucléotide
  const cleanARN = arn.toUpperCase().replace(/[^AUCG]/g, '');
  
  // Découper l'ARN en codons (groupes de 3 lettres)
  const codons = [];
  for (let i = 0; i < cleanARN.length; i += 3) {
    if (i + 3 <= cleanARN.length) {
      codons.push(cleanARN.substring(i, i + 3));
    }
  }
  
  // Traduire chaque codon en acide aminé
  const aminoAcids = codons.map(codon => {
    const aminoAcid = geneticCode[codon];
    return aminoAcid ? aminoAcid : "Inconnu";
  });
  
  // Joindre les acides aminés avec des tirets
  return aminoAcids.join('-');
}

// ARN de test donné dans l'exemple
const exampleARN = "UUACGCAGUAGA";
console.log("ARN d'exemple :");
console.log(exampleARN);
console.log("Traduction :");
console.log(translateARN(exampleARN));

// Traduire les deux ARN donnés pour la comparaison
const arn1 = "CCGUCGUUGCGCUACAGC";
console.log("\nARN 1 :");
console.log(arn1);
console.log("Traduction :");
console.log(translateARN(arn1));

const arn2 = "CCUCGCCGGUACUUCUCG";
console.log("\nARN 2 :");
console.log(arn2);
console.log("Traduction :");
console.log(translateARN(arn2));