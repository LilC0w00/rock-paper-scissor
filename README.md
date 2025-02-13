# rock-paper-scissor

## RESOLUTION DES PROBLEMES

### Comprendre le problème

Crée un jeu ou l’utilisateur doit choisir entre caillou, feuille et ciseau a chaque tour contre le "robot" qui doit lui faire un choix aléatoire. Si l’utilisateurs choisit un caillou et que le "robot" a choisit feuille, c’est le "robot" le gagnant, si l’inverse, c’est l’utilisateur le gagnant. Si l’utilisateur choisit feuille et que le "robot" choisit ciseau, c’est le "robot" le gagnant, si l’inverse, c’est l’utilisateur le gagnant. Si l’utilisateur choisit ciseau et que le "robot" choisit caillou, le "robot" gagne, a l’inverse, c’est l’utilisateur. Si les deux choisissent le même objet alors ils sont égaux.

### Planification

Votre programme possède t’il un interface ? A quoi ressemblera t’il ? -  
Pour ce projet tout ce fais dans la console (POUR LA PREMIERE PARTIE) donc pas besoin d’interface, l’utilisateur devra juste saisir caillou, feuille ou ciseau.

Quelles entrées votre programme aura t’il ? L’user saisira t’il des données ou obtiendrez vous des données d’une autre source ? - L’utilisateur devra saisir une chaine de caractère dans un boite prompt.

Quel est le résultat souhaité ? -
Le résultat souhaité est soi gagnant ou perdu pour l’utilisateur.

### Pseudo-Code

// L'utilisateur doit saisir une chaine de caractère et on la stock dans une valeur
// Crée une variable qui aura un tableau avec 3 chaine de caractère(papier,ciseau,caillou)
// une variable qui recupère au hasard une chaine de caractere du tableau
// Si l'entree utilisateur est ciseau et que la valeur au hasard est papier OU
// que l'utilisateur a choisi papier est que le robot est choisi ciseau
// OU que l'utilisateur est choisi caillou et que le robot est choisi ciseau
// Alors afficher("Vous avez gagnez")
// sinon si (l'entree utilisateur est papier et que la valeur au hasard est caillou OU
// que l'utilisateur a choisi ciseau est que le robot est choisi papier
// OU que l'utilisateur est choisi ciseau et que le robot est choisi caillou)
// Afficher ("Vous avez perdu")
// Sinon
// Afficher ("Egaliter")
// Afficher ("Le robot a total de point et vous avez total de point")
