function presentation() {
    let nom = "dan";
    console.log(`Hello ${nom}`);
    console.log("Salut", nom);
}
presentation();
// ------------
function presentation2() {
    return 5;
}
presentation2();
console.log(presentation2());
// ------------
function presentation3(nb1, nb2) {
    return nb1 + nb2;
}
console.log(presentation3(10, 25));
// ------------
function presentation4(prenom) {
    return `Je m'apelle ${prenom}`;
}
console.log(presentation4("Dan"));
//
// -----------------------------------------------
// EXERCICE 2 : Les opérateurs, chaînes & fonctions.

// Écrivez une fonction qui retourne un nombre multiplié par deux en utilisant un paramètre.
function mulitipi(nb) {
    return nb * 2;
}
console.log(mulitipi(10));

//  Déterminez ce qui est vrai ou faux.

let solde = 150000;
solde += 50000;
// Ce code permet d'assigner la valeur 50 000 à solde.
// Vrai ou Faux ?
// c'est *Faux*

let resultat = 10 % 7;
// resultat est égal à 5.
// Vrai ou Faux ?
// c'est *Faux*

let nbPneus = 4;
let abc = `J'ai besoin de ${nbPneus} pour ma voiture.`;
// C'est la bonne façon d'intégrer une expression dans une chaîne.
// Vrai ou Faux ?
// c'est *Vrai*
