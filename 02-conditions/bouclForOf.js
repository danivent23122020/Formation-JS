// boucle for..of
/**
 * L'instruction for...of permet de créer une boucle Array qui parcourt un objet
 * itérable (ce qui inclut les objets Array, Map, Set, String,
 * TypedArray, l'objet arguments, etc.)
 * et qui permet d'exécuter une ou plusieurs instructions
 * pour la valeur de chaque propriété.
 * */
const tab1 = [1, 2, 3, 4, 5];
for (const valeur of tab1) {
    console.log(valeur);
}
// -----chaine de caractères-----
let pixel = "pixel";
for (let valeur of pixel) {
    console.log(valeur);
}
