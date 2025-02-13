const user = prompt("Choisissez Papier/Caillou/Ciseau").toLowerCase(); // Demande a l'utilisateur d'entrée un des 3 choix meme avec majuscule
const robot = ["papier", "caillou", "ciseau"]; //tableau des 3 choix
let choixHazard = Math.floor(Math.random() * robot.length); // un nombre random par rapport a la taille du tableau
choixHazard = robot[choixHazard]; // par rapport a l'index recuperer la valeur

console.log(`L'ordinateur a choisit : ${choixHazard}`);
if (user === choixHazard) {
  console.log("Il y'a égalité");
} else if (
  (user === "ciseau" && choixHazard === "papier") ||
  (user === "papier" && choixHazard === "caillou") ||
  (user === "caillou" && choixHazard === "ciseau")
) {
  console.log("Vous avez gagné!");
} else if (
  (user === "papier" && choixHazard === "ciseau") ||
  (user === "caillou" && choixHazard === "papier") ||
  (user === "ciseau" && choixHazard === "caillou")
) {
  console.log("Vous avez perdu...");
}
