// *** fonctions fléchées ***

// fonction classique
function foo() {
    return 3;
}
console.log(foo());

// fonction fléchée
/**
 *     Propriétés
 * 1 - il faut l'insérer dans une variable -> let - const
 * 2 - ce sont des expressions de fonction -> function expression
 *     une expression de fonction est située après le signe = (égal)
 * 3 - c'est pour éviter qu'il y ait le système de hoisting (issage/levage)
 *     qui se fasse avec ces fonctions et que l'on puisse les utiliser
 *     avant de les avoir déclarées
 * 4 - permet d'éviter les redéclarations et donc les bugs
 * 5 - les fonctions fléchées sont anonymes par nature
 */
const bar = () => {
    return 3;
};
console.log(bar());

// fonction fléchée avec this
const myObj = {
    a: 5,
    /**
     * fonction classique avec this -> fonctionne à son appel (console)
     * this dans une fonction classique fait référence au contexte appelant
     * ici myObj si on enlève le a
     *  ** Important **
     * si on veut utiliser this dans une méthode, il FAUT utiliser
     * une fonction classique !!
     */
    funcClasic: function () {
        console.log(this.a);
    },
    /**
     * fonction fléchée avec this -> ne fonctionne pas -> undefined
     * la fonction fléchée ne bind pas son propre this
     * c'est à dire qu'elle ne se lie pas à son contexte appelant
     * elle va se lier à son contexte englobant
     * ici window si on enlève le a
     * voir explication sur mdn et video formation
     * les fonctions fléchées sont beaucoup utilisées dans les méthodes
     * qui prennent en paramètres d'autres fonctions car plus rapide à écrire
     * méthode ou fonction callback
     */
    funcFleche: () => {
        console.log(this.a);
    },
};
myObj.funcClasic();
myObj.funcFleche();
