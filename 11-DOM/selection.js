/**
 * ---------------------
 * Sélecteurs du DOM
 * ---------------------
 * ---------------------
 * Parents-Enfants
 * ---------------------
 */
// class
const premierTitre = document.getElementsByClassName("premier-titre");
// const premierTitre = document.querySelector(".premier-titre");
// console.log(premierTitre);

// id
const premierId = document.getElementById("premier-id");
// const premierId = document.querySelector("#premier-id");
// console.log(premierId);

// titre nu
const titreNu = document.querySelector("h3");
// console.log(titreNu);

// balise li
// const baliseLi = document.querySelectorAll('li')
const baliseLi = document.querySelectorAll(".item-list");
// console.log(baliseLi);

// balise ul -> parent-enfants
const baliseUl = document.querySelector("ul");
console.log(baliseUl.children); // retourne une collection html des enfants dans la liste
console.log('---------------');
console.log(baliseUl.childNodes); // retourne les noeuds enfants dans la liste
console.log('---------------');
console.log(baliseUl.parentElement); // retourne le body
console.log('---------------');
console.log(baliseUl.firstElementChild); // retourne le premier élément enfant
console.log('---------------');
console.log(baliseUl.lastElementChild); // retourne le dernier élément enfant
console.log('---------------');

// voir les éléments de même frateries
const i2 = document.querySelector(".i2");
console.log(i2.previousElementSibling); // permet de voir le précédent li
console.log(i2.nextElementSibling); // permet de voir le prochain li
console.log('---------------');
