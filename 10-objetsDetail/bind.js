/**
 * ------------------
 * methode bind
 * ------------------
 * permet de lier le contexte d'un objet avec une fonction
 */

const voiture = {
    couleur: "noire",
    marque: "peugeot",
    annee: 2019,
    myFunction: function () {
        console.log(this.annee);
    },
};

const btn = document.querySelector("button");
btn.addEventListener("click", voiture.myFunction.bind(voiture));
