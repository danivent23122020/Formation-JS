/**
 * class -> usine (moule) qui sert à créer des objets
 * avec des propriétés particulières grace à this
 * attention : par convention le nom d'une class commence par une majuscule
 * il y a une méthode constructor avec this
 * on créé un nouvel objet avec le mot clé new
 * on peut créer une méthode dans la class directement avec son nom
 */
class Pays {
    constructor(pop, nom, pib) {
        this.nom = nom;
        this.pop = pop;
        this.pib = pib;
    }
    showPop() {
        console.log(this.pop);
    }
}
const France = new Pays(70, "France", 2000);
console.log(France);
const Australie = new Pays(25, "Australie", 1300);
console.log(Australie.showPop());
