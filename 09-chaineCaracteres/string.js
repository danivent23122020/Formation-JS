// Méthodes liées aux chaines de caractères
const str = "Lorem ipsum dolor sit amet.";
/**
 * La méthode charAt() renvoie une nouvelle chaîne contenant
 * le caractère (ou, plus précisément, le point de code UTF-16)
 * à la position indiquée en argument.
 * Paramètres index
 * Un entier entre 0 et la longueur de la chaîne - 1.
 * Si aucun index n'est fourni (ce qui correspond à fournir undefined)
 * ou si l'index ne peut pas être converti en entier,
 * la recherche sera effectuée à l'index 0 et le premier
 * caractère sera donc renvoyé.
 */
console.log(str.charAt(4));
/**
 * La méthode includes() détermine si une chaîne de caractères
 * est contenue dans une autre et renvoie
 * true ou false selon le cas de figure.
 * Paramètres chaîneRecherchée
 * Une chaîne à rechercher dans la chaîne courante.
 */
console.log(str.includes("ipsum"));
/**
 * La méthode indexOf() renvoie l'indice/index de la première
 * occurence de la valeur cherchée au sein de la chaîne
 * courante (à partir de indexDébut).
 * Elle renvoie -1 si la valeur cherchée n'est pas trouvée.
 * Paramètres valeurRecherchée
 * Une chaîne représentant la valeur qu'on cherche
 * dans la chaîne courante. Si aucune valeur n'est fournie explicitement,
 * valeurRecherchée sera convertie en "undefined"
 * et c'est cette chaîne qui sera recherchée.
 */
// index 6 pour ipsum dans la phrase
// note : l'espace compte comme index !!
console.log(str.indexOf("ipsum"));
/**
 * La méthode charCodeAt() retourne un entier compris
 * entre 0 et 65535 qui correspond au code UTF-16
 * d'un caractère de la chaîne situé à une position donnée.
 * Paramètres indice
 * Un entier supérieur ou égal à zéro et strictement
 * inférieur à la longueur de la chaîne.
 * La valeur par défaut (si le paramètre est
 * absent ou n'est pas un nombre) sera zéro (0).
 * Valeur de retour
 * Un nombre qui représente la valeur du point de
 * code UTF-16 pour le caractère à la position indiquée.
 * Si index pointe en dehors de la chaîne,
 * ce sera NaN qui sera renvoyé.
 */
console.log(str.charCodeAt("ipsum"));
/**
 * La méthode slice() extrait une section d'une chaine
 * de caractères et la retourne comme une nouvelle
 * chaine de caractères.
 * La chaîne de caractères courante n'est pas modifiée.
 * Paramètres indiceDebut
 * L'indice/index base 0 auquel commencer l'extraction.
 * Si négatif, il est traité comme (longueurSource + indiceDebut)
 * où longueurSource est la longueur de la chaine de caractères
 * (par exemple, si indiceDebut est -3, il sera traité comme longueurSource - 3).
 * Si indiceDebut est supérieur à la longueur de la chaîne,
 * slice() renvoie une chaîne vide.
 * Paramètres indiceFin
 * Paramètre optionnel. Un indice base 0 avant lequel terminer l'extraction.
 * Le caractère à cet indice ne sera pas inclus.
 * Si indiceFin est absent, slice() extraira jusqu'à la fin
 * de la chaine de caractères. Si négatif, il sera traité comme
 * (longueurSource + indiceFin) où longueurSource
 * est la longueur de la chaine de caractères
 * (par exemple s'il vaut -3, il sera traité comme longueurSource - 3)
 * Valeur retournée
 * Une nouvelle chaîne de caractères contenant la section extraite de la chaîne.
 */
console.log(str.slice(15));
/**
 * La méthode split() divise une chaîne de caractères en une liste
 * ordonnée de sous-chaînes, place ces sous-chaînes
 * dans un TABLEAU et retourne le tableau.
 * La division est effectuée en recherchant un motif ;
 * où le motif est fourni comme premier paramètre dans l'appel de la méthode.
 */
// toute la phrase est dans un tableau
let strSplit = str.split();
console.log(strSplit);
// sans espace - chaque LETTRE est entourée d'uns strophe
strSplit = str.split("");
console.log(strSplit);
// avec un espace - chaque MOT est entourée d'uns strophe
strSplit = str.split(" ");
console.log(strSplit);
// avec .join()
strSplit = str.split(" ").join();
console.log(strSplit);
/**
 * La méthode concat() combine le texte de plusieurs chaînes
 * avec la chaîne appelante et renvoie la nouvelle chaîne ainsi formée.
 */
const str1 = "hello";
const str2 = "world";
console.log(str1.concat(' ',str2));

