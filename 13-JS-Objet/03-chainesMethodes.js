/**
 * --------------------
 * Faire des chaines de méthodes
 * --------------------
 */
class Voiture {
    constructor(marque, annee, option) {
        this.marque = marque;
        this.annee = annee;
        this.option = option;
    }

    rajoutOption(nomOption) {
        this.option++;
        console.log(
            `Rajout de ${nomOption}, nombre d'options : ${this.option}`
        );
        return this;
    }

    // pas besoin de 'function' pour déclarer une méthode dans une classe
    dateSortie() {
        console.log(`Date de fabrication du véhicule : ${this.annee}`);
    }
}
const voiture1 = new Voiture("Ford", 2009, 0);

console.log(voiture1);

// chaine de méthodes -> ici rajout d'options
voiture1
.rajoutOption("2 portes")
.rajoutOption("peinture métal")
.rajoutOption("spoiler")
.rajoutOption("toit ouvrant")
.rajoutOption("clim");
