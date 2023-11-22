// Liste des chemins vers les images
const images = [
  "_c50840c5-6acb-4ee7-96c1-1cd0ac3808a2.jpg",
  // Ajoutez d'autres chemins d'images au besoin
];

// Sélectionne un index d'image au hasard
const randomIndex = Math.floor(Math.random() * images.length);

// Sélectionne l'élément img par son ID
const randomImage = document.getElementById("random-image");

// Chemin complet de l'image aléatoire
const imagePath = `./assets/img/${images[randomIndex]}`;

// Change la source de l'image pour afficher une image aléatoire
randomImage.src = imagePath;
