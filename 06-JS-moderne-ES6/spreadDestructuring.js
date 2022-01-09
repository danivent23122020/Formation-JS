/**
 * La syntaxe de décomposition spread permet d'étendre un itérable
 * (par exemple une expression de tableau ou une chaîne de caractères)
 * en lieu et place de plusieurs arguments
 * (pour les appels de fonctions) ou de plusieurs éléments
 * (pour les littéraux de tableaux) ou de paires clés-valeurs
 * (pour les littéraux d'objets).
 * permet d'effectuer des opérations
 */

const nb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...nb);

// opération sur les nbs
function sum(a, b, c, d, e, f, g, h, i) {
    return a + b + c + d + e + f + g + h + i;
}
console.log(sum(...nb));

// chaine de caractères
const str = "abcde";
console.log(...str);
