const robot = ["papier", "caillou", "ciseau"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return robot[Math.floor(Math.random() * robot.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultText = `Vous avez choisi : ${humanChoice}<br>L'ordinateur a choisi : ${computerChoice}<br>`;

  if (humanChoice === computerChoice) {
    resultText += "Il y a égalité !";
  } else if (
    (humanChoice === "ciseau" && computerChoice === "papier") ||
    (humanChoice === "papier" && computerChoice === "caillou") ||
    (humanChoice === "caillou" && computerChoice === "ciseau")
  ) {
    resultText += "🎉 Vous avez gagné ce tour !";
    humanScore++;
  } else {
    resultText += "💀 Vous avez perdu ce tour...";
    computerScore++;
  }

  document.getElementById("resultat").innerHTML = resultText;
  document.getElementById(
    "score"
  ).innerHTML = `Joueur : ${humanScore} - Ordinateur : ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    document.getElementById("resultat").innerHTML += `<br><strong>${
      humanScore === 5
        ? "🎉 Félicitations, vous gagnez la partie !"
        : "💀 L'ordinateur a gagné la partie !"
    }</strong>`;

    // Désactiver les boutons après la victoire
    document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
  }
}

// Ajout des événements sur les boutons
document
  .getElementById("papier")
  .addEventListener("click", () => playRound("papier"));
document
  .getElementById("caillou")
  .addEventListener("click", () => playRound("caillou"));
document
  .getElementById("ciseau")
  .addEventListener("click", () => playRound("ciseau"));
