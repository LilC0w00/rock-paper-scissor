const user = prompt("Choisissez Papier/Caillou/Ciseau").toLowerCase; // Demande a l'utilisateur d'entrée un des 3 choix meme avec majuscule
const robot = ["papier", "caillou", "ciseau"]; //tableau des 3 choix
let choixHazard = Math.floor(Math.random() * robot.length); // un nombre random par rapport a la taille du tableau
choixHazard = robot[choixHazard]; // par rapport a l'index recuperer la valeur
console.log(`L'ordinateur a choisit : ${choixHazard}`);
let userCaillou = user === Caillou;
