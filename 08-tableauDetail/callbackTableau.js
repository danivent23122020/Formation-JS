const tableau1 = ["a", "b", "c", "d", "e"];
const numTab = [1, 2, 3, 4, 5];

/**
 * Méthode forEach() proposée par JS qui utilise une méthode callback
 * forEach appelle cette fonction callback pour chaque élément du tableau
 * note : le paramètre de la fonction callback s'appelle : valeur courante
 */
numTab.forEach(function (el) {
    // console.log(el);
});

/**
 * Méthode map() effectue une action sur chaque élément d'un tableau,
 * retourne un nouveau tableau avec, à chaque fois, l'action qui aura été
 * effectuée sur les éléments.
 */

// fonction callback avec fonction classique
const resultMap = numTab.map(function (el) {
    return el * 2;
});
console.log(resultMap);
// fonction callback avec fonction fléchée
const funcFlech = numTab.map(y => y * 20);
console.log(funcFlech);

/**
 * La méthode filter() crée et retourne un nouveau tableau contenant
 * tous les éléments du tableau d'origine qui remplissent
 * une condition déterminée par la fonction callback.
 * Renvoie un nouveau tableau qui contient tous les éléments
 * du tableau courant pour lesquels la fonction de filtre passée
 * en argument a renvoyé true.
 */
const fruits = ["Fraise", "Pomme", "Pastèque", "Banane", "Kiwi"];
// fonction callback avec fonction classique
// exo : filtrer les noms des fruits > à 4 lettres
const resultFilter = fruits.filter(function (fruit) {
    return fruit.length > 5;
});
console.log(resultFilter);
// fonction callback avec fonction fléchée
const filtercFlech = fruits.filter(fruit => fruit.length > 4);
console.log(filtercFlech);

/**
 * La méthode reduce() applique une fonction qui est
 * un « accumulateur » et qui traite chaque valeur
 * d'une liste (de la gauche vers la droite) afin de
 * la réduire à une seule valeur.
 * paramètres de la fonction callback :
 * a = accumulateur 
 * La valeur précédemment retournée par le dernier appel du callback, 
 * ou valeurInitiale, si elle est fournie (voir ci-après) 
 * (c'est la valeur « accumulée » au fur et à mesure des appels)
 * b = valeurCourante
 * La valeur de l'élément courant actuellement manipulé dans le tableau.
 */
const reduced = numTab.reduce(function (a, b) {
    return a + b;
});
console.log(reduced);