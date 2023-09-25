// Sélectionnez les éléments du DOM nécessaires
const menuButton = document.getElementById("menu-toggle");
const menuDropdown = document.getElementById("menu-dropdown");

// Ajoutez un gestionnaire d'événement au bouton de menu
menuButton.addEventListener("click", () => {
  // Basculez la visibilité du menu déroulant
  menuDropdown.style.display =
    menuDropdown.style.display === "block" ? "none" : "block";
});
