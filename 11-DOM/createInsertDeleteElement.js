/**
 * Créer, Insérer, Remplacer et supprimer un éléments du DOM
 */

// changer un texte dans une balise existante
const premierTitre = document.querySelector(".premier-titre");
premierTitre.innerText = "Hello world depuis le JS !";

// insérer un élément html dans une div existante
const insertElement = document.querySelector(".insert-element");
insertElement.innerHTML = "<h3>Inner html h3!</h3>";
insertElement.style.backgroundColor = "#66ff00";

// créer un élément html ex. un li dans la liste ul
const liste = document.querySelector("ul");
let newLi = document.createElement("li");
newLi.innerText = "Nouveu li !";
newLi.style.backgroundColor = "#66ff00";
liste.appendChild(newLi);

// supprimer un element avec une position particulière
// dans cette exemple, supprimer le li en position 3
liste.children[2].remove();

// remplacer un élément à une position particulière
// dans cette exemple, remplacer le li en position 1
let newLi1 = document.createElement("li");
newLi1.innerText = "Nouveau li 2 !";
liste.children[1].replaceWith(newLi1);
