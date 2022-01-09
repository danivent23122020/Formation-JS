// ------------------
// valeurs primitives vs références
// ------------------
// valeurs primitives : string number boolean undefined null

let a = "abc"; // "abc" est une valeur primitive
let b = a;
// c'est à dire que b sera toujours égale à "abc" même si l'on réaffecte
// d'autres valeurs à a par la suite,
a = "toto";
a = "tata";

console.log(`a = ${a}, b = ${b}`);

// ------------------
// valeurs reference : obj & tableaux
let obj1 = { str: "abc" }; // l'objet {str: "abc"} est ici une valeur de référence
let obj2 = obj1;
// à la différence d'une valeur primitive, si on modifie obj1 avec une réaffectation,
// tous les objets qui pointent vers obj1 prendront la nouvelle valeur

obj1.str = "zzz";
obj1.str = "qqq";

console.log(obj1, obj2);

// idem pour les tableaux
