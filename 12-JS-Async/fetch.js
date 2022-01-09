/**
 * ----------------------
 * Méthode fetch()
 * ----------------------
 * L'API Fetch fournit une interface pour la récupération
 * de ressources (e.g., à travers le réseau.)
 * Elle paraîtra familière à tout utilisateur de XMLHttpRequest,
 * mais cette nouvelle API propose néanmoins un ensemble
 * de fonctionnalités plus souples et plus puissantes.
 *
 * ----------------------
 * Voir MDN
 *
 * ----------------------
 * XHR -> Xml Http Request
 */

// si on log la méthode comme ceci, fetch nous retourne une promise
// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");
//
btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            // construction des li de la listes avec une boucle for
            for (let i = 0; i < data.length; i++) {
                let newLi = document.createElement("li");
                let newTitreCarte = document.createElement("h2");
                let newBodyCarte = document.createElement("p");

                newTitreCarte.innerText = data[i].title;
                newBodyCarte.innerText = data[i].body;

                newLi.appendChild(newTitreCarte);
                newLi.appendChild(newBodyCarte);
                liste.appendChild(newLi);
            }
        });
});
