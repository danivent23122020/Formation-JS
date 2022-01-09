// EXERCICE 6 : Les évènements.

// 1. Changez la couleur du cercle en "crimson" quand votre souris le survole.
const circle = document.querySelector("div#cercle");
circle.addEventListener("mouseover", function () {
    circle.style.background = "crimson";
});

// 2. Changez la couleur du carré en "violet" quand vous cliquez dessus.
const squar = document.querySelector("div.carre");
squar.addEventListener("click", function () {
    squar.style.background = "violet";
});

// 3. Rajoutez l'évenement "click" au document, puis loggez la position(x,y) des clics que vous effectuez sur le document.

document.addEventListener("click", foo);
function foo(e) {
    console.log(e);
    console.log(`Pos x : ${e.clientX}, Pos y : ${e.clientY}`);
}

document.addEventListener("keydown", faa);
function faa(e) {
    console.log(e.key);
}
