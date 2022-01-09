/**
 * Fonction de rappel (callback)
 * Une fonction de rappel (aussi appelée callback en anglais) est unex fonction  
 * passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée  * à l'intérieur de la fonction externe pour accomplir une sorte de routine ou  
 * d'action.
 */
const tab = [1, 2, 3];
tab.forEach(item => {
    console.log(item);
});
// Autre manière de faire
function customForEach(arr, callback) {
    for (let i = 0; i < tab.length; i++) {
        callback(arr[i]);
    }
}
customForEach(tab, item => {
    console.log(item);
});
