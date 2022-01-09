// EXERCICE 5 : Boucles, mots clés, déclarations

// 1. Affichez à l'aide d'une boucle "for..in" toutes les valeurs des propriétés de cet objet dans la console.

const capitales = {
    autriche: "Vienne",
    argentine: "Buenos Aires",
    estonie: "Tallinn",
    australie: "Cambera",
};
for (const element in capitales) {
    console.log(`${element}: ${capitales[element]}`);
}
console.log(`---------------------`);
// variation juste avec les capitales
for (const capitale in capitales) {
    console.log(`${capitales[capitale]}`);
}

console.log(`---------------------`);

// 2. Idem mais avec une boucle "for..of" et ce tableau.

const fruits = ["Fraise", "Cerise", "Orange", "Citron", "Ananas"];

for (let valeur of fruits) {
    console.log(valeur);
}

console.log(`---------------------`);
// 3. Créez une fonction qui sert à repérer si un texte qu'on lui passe en argument contient la lettre "z".
// si c'est le cas, la fonction écrit dans la console "Alerte: le texte contient la lettre Z".
function letterZ(value) {
    for (let valeur of value) {
        // console.log(valeur);
        if (valeur === "z") {
            console.log(`Alerte : le mot '${value}' contient la lettre Z !`);
            break;
        }
    }
}
letterZ("zircone");
