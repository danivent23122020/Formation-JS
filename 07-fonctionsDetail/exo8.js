// EXERCICE 8 : Les fonctions 🔥

// 1. Écrire une fonction pure qui sert à multiplier deux nombres ensemble.

const muitpli = (a, b) => a * b;

console.log(muitpli(5, 5));

// 2. Écrire une fonction d'ordre supérieur, qui prend une fonction callback en paramètre et un tableau rempli de nombres.
//   Cette fonction retournera un nouveau tableau, qui contient toutes les valeurs auxquelles on a ajouté 1

const arrExo = [10, 4, 15, 75, 26, 85, 74, 35, 3, 65, 42, 0];

function tabPlus(arr, fn) {
    const newArrExo = [];

    for (let i = 0; i < arr.length; i++) {
        newArrExo.push(fn(arr[i]));
    }
    return newArrExo;
}
const plusUn = nb => nb + 1;

const tabPlusUn = tabPlus(arrExo, plusUn);
console.log(tabPlusUn);
