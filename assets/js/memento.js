function updateCalendar() {
  const startDate = new Date("1998-01-18");
  const currentDate = new Date();
  const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;

  const calendarElement = document.getElementById("calendar");
  calendarElement.innerHTML = ""; // Efface le contenu précédent

  for (let row = 0; row < 80; row++) {
    const rowElement = document.createElement("div");
    rowElement.className = "row";

    for (let week = 0; week < 52; week++) {
      const circleElement = document.createElement("div");
      circleElement.className = "circle";

      // Calcule la date de la semaine actuelle
      const currentWeekDate = new Date(
        startDate.getTime() + (row * 52 + week) * millisecondsInWeek
      );

      // Vérifie si la semaine est terminée et n'est pas la semaine en cours
      if (
        currentWeekDate <= currentDate &&
        !isSameWeek(currentDate, currentWeekDate)
      ) {
        circleElement.classList.add("filled");
      }

      rowElement.appendChild(circleElement);
    }

    // Affiche le numéro de ligne à la fin de chaque 5ème ligne, à partir de la 5ème ligne
    if (row >= 4 && row % 5 === 4) {
      const lineNumberElement = document.createElement("div");
      lineNumberElement.className = "line-number";
      lineNumberElement.textContent = row + 1; // Ajoute 1 pour afficher le numéro de ligne correct
      rowElement.appendChild(lineNumberElement);
    }

    calendarElement.appendChild(rowElement);
  }
}

function isSameWeek(date1, date2) {
  const oneWeekMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const diff = Math.abs(date1 - date2);
  return diff < oneWeekMilliseconds;
}

updateCalendar();

// Mise à jour automatique chaque jour (86400000 ms = 24 heures)
setInterval(updateCalendar, 86400000);
