/**
 * Programmation orientée objet : les objets
 */
const voiture = {
    marque: "Ford",
    annee: 2009,
    couleur: "blanche",
    rouler() {
        console.log("Vroom");
        console.log(this.annee);
    },
};
voiture.rouler();

// .hasOwnProperty('property') question : si a cette propriété
// retourne un boolean : true / false
console.log(voiture.hasOwnProperty("annee"));

// Object.values() -> methode liée aux objets
// retourne les valeurs de l'objet sous forme de tableau
console.log(Object.values(voiture));

// Object.keys() -> methode liée aux objets
// retourne les propriétés de l'objet sous forme de tableau
console.log(Object.keys(voiture));


