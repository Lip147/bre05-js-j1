var nombreMystere = Math.floor(Math.random() * 101);
var proposition = null;

while (proposition !== nombreMystere) {
  proposition = parseInt(window.prompt("Devinez le nombre (entre 0 et 100) :"));

  if (proposition < nombreMystere) {
    window.alert("C'est plus !");
  } else if (proposition > nombreMystere) {
    window.alert("C'est moins !");
  } else {
    window.alert("Bravo, vous avez gagné !");
  }
}
