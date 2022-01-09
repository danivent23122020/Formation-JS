/**
 * Utiliser setTimeout()
 * méthode directement intégrée dans JavaScript
 */
// setTimeout -> va permettre d'exécuter qqch au bout d'un certain temps
// avec 2 arguments, une fonction qui doit être exécutée et le temps en ms
// première manière de l'écrire
setTimeout(version1, 2000);
function version1() {
    console.log("hello version 1");
}

// deuxième manière de l'écrire
// avec les arguments directement dansd la méthode
setTimeout(function version2() {
    console.log("hello version 2");
}, 3000);

// troisième manière de l'écrire
// avec les arguments directement dans la méthode avec une fonction fléchée
setTimeout(() => {
    console.log("hello version 3");
}, 4000);
