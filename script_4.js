const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// 1. Entrepreneurs nés dans les années 70
console.log("Entrepreneurs nés dans les années 70 :");
const seventiesEntrepreneurs = entrepreneurs.filter(entrepreneur => 
  entrepreneur.year >= 1970 && entrepreneur.year < 1980
);
console.log(seventiesEntrepreneurs);

// 2. Array avec prénom et nom des entrepreneurs
console.log("\nPrénom et nom des entrepreneurs :");
const names = entrepreneurs.map(entrepreneur => 
  ({ firstName: entrepreneur.first, lastName: entrepreneur.last })
);
console.log(names);

// 3. Âge qu'aurait chaque entrepreneur aujourd'hui
console.log("\nÂge qu'aurait chaque entrepreneur en 2025 :");
const currentYear = 2025;
const ages = entrepreneurs.map(entrepreneur => 
  ({ name: `${entrepreneur.first} ${entrepreneur.last}`, age: currentYear - entrepreneur.year })
);
console.log(ages);

// 4. Entrepreneurs triés par ordre alphabétique du nom de famille
console.log("\nEntrepreneurs triés par ordre alphabétique du nom de famille :");
const sortedEntrepreneurs = [...entrepreneurs].sort((a, b) => 
  a.last.localeCompare(b.last)
);
console.log(sortedEntrepreneurs);