/**
 * Les tableaux sont des objets semblables à des listes dont le prototype possède des méthodes qui permettent de parcourir et de modifier le tableau. Ni la longueur ni le type des éléments d'un tableau JavaScript sont fixés. Comme la longueur d'un tableau peut varier à tout moment et que les données peuvent être stockées à des emplacements qui ne sont pas nécessairement contigus, les tableaux JavaScript ne sont pas forcément « pleins » / denses. Généralement, ces particularités sont appréciables mais si elles ne correspondent pas à votre usage, vous pourriez vouloir utiliser les tableaux typés.

Les tableaux ne peuvent pas utiliser de chaînes de caractères comme indices pour les éléments (à la façon des tableaux associatifs) mais doivent utiliser des entiers. Définir une valeur ou tenter d'y accéder avec un indice non-entier via la notation entre crochet (ou la notation avec le point) ne définira ou ne récupèrera pas la valeur mais définira ou récupèrera une variable associée aux propriétés de l'objet formé par le tableau. Les propriétés et les éléments d'un tableau sont distincts et les opérations de parcours et de modification du tableau ne peuvent pas être appliquées à ces propriétés.
Voir documentation MDN
 */

const tableau1 = ["a", "b", "c", "d", "e"];
const tableau2 = [1, 2, 3, 4, 5];

// .concat -> Renvoie un nouveau tableau qui est le tableau courant, joint avec d'autres tableaux ou valeurs.
const tableau3 = tableau1.concat(tableau2);
console.log(tableau3);

// .includes -> Détermine si le tableau contient une valeur et renvoie true ou false selon le cas de figure.
console.log(tableau3.includes(5));

// ajoute un élément à la fin du tableau
tableau1.push("e");

// supprime le DERNIER élément du tableau
tableau1.pop();

// supprime le PREMIER élément du tableau
tableau1.shift();

// ajoute un élément/plusieurs au début du tableau
tableau1.unshift("a");

// Trouver l'index d'un élément dans le tableau - rappel index tableau commence à 0
console.log(tableau1.indexOf("b"));

// supprimer un/plusieurs élément à partir d'un index et le nb d'éléments à suppr
// tableau1.splice(1, 2);

/**
 * Crée un nouveau tableau qui contient les éléments choisis d'un tableau
 * existant à partir d'un index n jusqu'à l'index n-1
 */
console.log(tableau1.slice(1, 4));

console.log(tableau1);
