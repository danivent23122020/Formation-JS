/**
 * Les expressions rationnelles sont des motifs utilisés
 * pour correspondre à certaines combinaisons de caractères
 * au sein de chaînes de caractères. En JavaScript,
 * les expressions rationnelles sont également des objets.
 * Ces motifs sont utilisés avec les méthodes exec et test de
 * RegExp, et avec les méthodes match, matchAll, replace, search et
 * split de String. Ce chapitre explique comment utiliser
 * les expressions rationnelles en JavaScript (aussi appelées
 * expressions régulières ou « RegExp »).
 * Voir MDN - Expressions rationnelles
 *
 */
const str = "Lorem ipsum dolor sit amet.";

const regex = /[0-9\s]/;

console.log(str.match(regex));

/**
 * La méthode replace() renvoie une nouvelle chaîne de
 * caractères dans laquelle tout ou partie des correspondances
 * à un modèle sont remplacées par un remplacement.
 * Le modèle utilisé peut être une RegExp et le remplacement
 * peut être une chaîne ou une fonction à appeler pour chaque
 * correspondance.
 * Si modèle est une chaîne de caractères, seule la première
 * correspondance sera remplacée.
 * Paramètres
 * regexp (modèle)
 * Un objet ou un littéral RegExp. La ou les correspondances sont
 * remplacées  par nouvSouschn ou par la valeur retournée par la
 * fonction indiquée.
 */
// dans cette manipulation, le a est remplacé par z !
const strReplace = str.replace(/a/, "z");
console.log(strReplace);