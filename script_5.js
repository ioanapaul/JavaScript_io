const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// 1. Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
const allRented = books.every(book => book.rented > 0);
console.log(allRented ? "Oui, tous les livres ont été empruntés au moins une fois." : "Non, certains livres n'ont jamais été empruntés.");

// 2. Quel est livre le plus emprunté ?
console.log("\nQuel est le livre le plus emprunté ?");
const mostRented = books.reduce((max, book) => max.rented > book.rented ? max : book);
console.log(`Le livre le plus emprunté est "${mostRented.title}" avec ${mostRented.rented} emprunts.`);

// 3. Quel est le livre le moins emprunté ?
console.log("\nQuel est le livre le moins emprunté ?");
const leastRented = books.reduce((min, book) => min.rented < book.rented ? min : book);
console.log(`Le livre le moins emprunté est "${leastRented.title}" avec ${leastRented.rented} emprunts.`);

// 4. Trouve le livre avec l'ID: 873495
console.log("\nLivre avec l'ID 873495 :");
const bookById = books.find(book => book.id === 873495);
console.log(bookById ? bookById : "Livre non trouvé");

// 5. Supprime le livre avec l'ID: 133712
console.log("\nSuppression du livre avec l'ID 133712");
const booksAfterDelete = books.filter(book => book.id !== 133712);
console.log(`Nombre de livres après suppression : ${booksAfterDelete.length} (avant : ${books.length})`);

// 6. Trie les livres par ordre alphabétique (sans celui avec l'ID 133712)
console.log("\nLivres triés par ordre alphabétique (sans l'ID 133712) :");
const sortedBooks = booksAfterDelete.sort((a, b) => a.title.localeCompare(b.title));
console.log(sortedBooks);