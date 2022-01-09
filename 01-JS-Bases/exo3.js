// EXERCICE 3 : Tableaux, Objets, évènements...

// Créez un tableau avec trois valeurs à l'intérieur : 5124, true, et un objet qui contient une propriété.
const tableau = [5124, true, { age: 50 }];
console.log(tableau);

// Créez un objet avec trois propriétés
const myObj = {
    nom: "dan",
    age: 50,
    sexe: "m",
};
console.log(myObj);

// Dans l'HTML, il y a un texte, rentrez cet élement dans une constante,
const txt = document.querySelector("h2");
console.log(txt);

// puis changez la couleur de son fond au clic en violet(purple/violet);
txt.addEventListener("click", function() {
    txt.style.background = "violet";
});
