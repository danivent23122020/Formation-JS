/**
 * Une fonction d’ordre supérieur est une fonction
 * qui prend une ou plusieurs fonctions de rapelle
 * (callback) en paramètre et/ou qui retourne une autre fonction.
 */
// exemple : extraire d'un tableau les valeurs sup à 5
const notSortedArr = [10, 42, 7, 2, 63, 3, 47, 98];

// nouveau tableau qui va contenir ces valeurs
const newArr = [];

// boucle pour itérer dans le tableau à trier et à placer dans le nouveau tableau
for (let i = 0; i < notSortedArr.length; i++) {
    if (notSortedArr[i] > 5) {
        newArr.push(notSortedArr[i]);
    }
}
console.log(newArr);

// Fonction d'ordre supérieur, avec en paramètre :
// un tableau -> arr
// et une fonction de rappel (callback) -> fn
function supCinq(arr, fn) {
    // on créé un nouveau tableau à l'intérieur
    const newArr = [];
    // on copie/colle la boucle faite plus haut en changeant les paramètres
    // attention à ne pas oublier la fonction callback dans le if
    // ne pas oublier le return
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) > 5) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// on log la fonction supCinq avec le nom du tableau à trier en paramètre
console.log(
    supCinq(notSortedArr, item => {
        if (item > 5) {
            return item;
        }
    })
);
// de cette manière on peut réutiliser la fonction supCinq comme une class
// et utiliser d'autres valeurs de triage, ici : > 50
const newArr1 = supCinq(notSortedArr, item => {
    if (item > 50) {
        return item;
    }
});
console.log(newArr1);
