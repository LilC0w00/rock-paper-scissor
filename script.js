const robot = ["papier", "caillou", "ciseau"]; // Tableau des choix

function getComputerChoice() {
  const choixHazard = robot[Math.floor(Math.random() * robot.length)];
  return choixHazard;
}

function getHumanChoice() {
  const user = prompt("Choisissez : Papier, Caillou ou Ciseau").toLowerCase();
  if (!robot.includes(user)) {
    console.log("Choix invalide !");
    return getHumanChoice(); // Redemander si le choix n'est pas valide
  }
  return user;
}

function playRound(humanChoice, computerChoice) {
  console.log(`Vous avez choisi : ${humanChoice}`);
  console.log(`L'ordinateur a choisi : ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("Il y a égalité !");
    return 0; // Pas de points attribués
  } else if (
    (humanChoice === "ciseau" && computerChoice === "papier") ||
    (humanChoice === "papier" && computerChoice === "caillou") ||
    (humanChoice === "caillou" && computerChoice === "ciseau")
  ) {
    console.log("Vous avez gagné !");
    return 1; // L'humain gagne 1 point
  } else {
    console.log("Vous avez perdu...");
    return -1; // L'ordinateur gagne 1 point
  }
}

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 3; i++) {
//     // 3 manches
//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();

//     const result = playRound(humanChoice, computerChoice);

//     if (result === 1) {
//       humanScore++;
//     } else if (result === -1) {
//       computerScore++;
//     }

//     console.log(`Score : Vous ${humanScore} - ${computerScore} Ordinateur`);
//   }

//   // Résultat final
//   if (humanScore > computerScore) {
//     console.log("🎉 Félicitations, vous avez gagné la partie !");
//   } else if (humanScore < computerScore) {
//     console.log("💀 L'ordinateur a gagné la partie !");
//   } else {
//     console.log("🤝 La partie est une égalité !");
//   }
// }

// Lancer le jeu
playGame();
