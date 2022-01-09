/**
 * --------------------
 * Utiliser les classes
 * --------------------
 * Créer des méthodes dans nos classes
 * --------------------
 */
class Voiture {
    constructor(marque, annee, couleur) {
        this.marque = marque;
        this.annee = annee;
        this.couleur = couleur;
    }
    // pas besoin de 'function' pour déclarer une méthode dans une classe
    dateSortie() {
        console.log(`Date de fabrication du véhicule : ${this.annee}`);
    }
}
const voiture1 = new Voiture("Ford", 2009, "Blanche");
const voiture2 = new Voiture("Peugeot", 2018, "grise");
const voiture3 = new Voiture("Renault", 2020, "rouge");

console.log(voiture1, voiture2, voiture3);
voiture1.dateSortie();
voiture2.dateSortie();
voiture3.dateSortie();
