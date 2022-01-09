// EXERCICE 7 : JavaScript moderne

// 1. Créez une fonction flêchée qui retourne "Hello World", elle doit être écrite dans sa syntaxe la plus courte possible.(élégante)

const str = () => console.log("Hello world");
str();

// 2. Créez une classe Humain qui sert à créer des objets avec deux propriétés : poids et taille.
class Humain {
    constructor(poids, taille) {
        this.poids = poids;
        this.taille = taille;
    }
}
const humain2 = new Humain(95, 190);
console.log(humain2);