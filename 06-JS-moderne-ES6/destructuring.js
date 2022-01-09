/**
 * ================DESTRUCTURING=================
 * Affecter par décomposition
 * L'affectation par décomposition (destructuring en anglais)
 * est une expression JavaScript qui permet d'extraire
 * (unpack en anglais) des données d'un tableau ou d'un objet
 * grâce à une syntaxe dont la forme ressemble à la structure du
 * tableau ou de l'objet.
 * A créer des variables à la volée à partir d'objets/tableaux
 */
// -------------------
// Décomposer un objet
const pays = {
    nom: "Suisse",
    pop: 10,
};
// Affectation par décomposition
// Attention pour la décomposition d'un objet on utilise des {}
const { nom, pop } = pays;
console.log(nom, pop);
// ---------------------
// Décomposer un tableau
const tab = ["un", "deux", "trois"];
// Affectation par décomposition
// Attention pour la décomposition d'un tableau on utilise des []
const [x, y, z] = tab;
console.log(x);
