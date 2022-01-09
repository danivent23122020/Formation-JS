// L'instruction for...in permet d'itérer sur les propriétés énumérables d'un objet qui ne sont pas des symboles. Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un bloc d'instructions).
// ---boucle for in pour objet----
const tesla = {
    couleur: "grise",
    portes: 5,
    prix: 100000,
};
for (const property in tesla) {
    console.log(`${property}: ${tesla[property]}`);
}
