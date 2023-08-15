// Liste des chemins vers les images
const images = [
  "./assets/img/64cd4aba2a4c88ee00b532c5_bueno.png",
  "./assets/img/64cd4d0d89236fc80a3395b4_runner.png",
  "./assets/img/64cd4d0257f3906c2314e093_roboto.png",
  "./assets/img/64d18f22bd4dfae30b7ea399_astro.png",
  // Ajoutez d'autres chemins d'images au besoin
];

// Sélectionne un index d'image au hasard
const randomIndex = Math.floor(Math.random() * images.length);

// Sélectionne l'élément img par son ID
const randomImage = document.getElementById("random-image");

// Change la source de l'image pour afficher une image aléatoire
randomImage.src = images[randomIndex];
