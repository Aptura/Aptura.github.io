// Liste des chemins vers les images
const images = [
  "64cd4aba2a4c88ee00b532c5_bueno.png",
  "64cd4d0d89236fc80a3395b4_runner.png",
  "64cd4d0257f3906c2314e093_roboto.png",
  "64d18f22bd4dfae30b7ea399_astro.png",
  "64d190d6faa5e45333b85ae6_pacheco.png",
  "new-beginnings.png",
  "pilot.png",
  "plants.png",
  "puppy.png",
  "reflecting.png",
  "rogue.png",
  "whoa.png",
  "coffee.png",
  "kiddo.png",
  "late-for-class.png",
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

// Sélectionnez les éléments du DOM nécessaires
const menuButton = document.getElementById("menu-toggle");
const menuDropdown = document.getElementById("menu-dropdown");

// Ajoutez un gestionnaire d'événement au bouton de menu
menuButton.addEventListener("click", () => {
  // Basculez la visibilité du menu déroulant
  menuDropdown.style.display =
    menuDropdown.style.display === "block" ? "none" : "block";
});
