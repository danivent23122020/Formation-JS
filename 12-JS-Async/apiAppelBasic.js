/**
 * ----------------------
 * Appel basique avec XHR
 * ----------------------
 * Créer une liste à partir des données
 * ----------------------
 * XHR -> Xml Http Request
 */
const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");
const xhr = new XMLHttpRequest();

// event sur btn
btn.addEventListener("click", () => {
    xhr.open("get", "https://jsonplaceholder.typicode.com/posts");

    xhr.responseType = "json";

    xhr.onload = function () {
        // console.log(JSON.parse(xhr.response));
        console.log(xhr.response);

        // construction des li de la listes avec une boucle for
        for (let i = 0; i < xhr.response.length; i++) {
            let newLi = document.createElement("li");
            let newTitreCarte = document.createElement("h2");
            let newBodyCarte = document.createElement("p");

            newTitreCarte.innerText = xhr.response[i].title;
            newBodyCarte.innerText = xhr.response[i].body;

            newLi.appendChild(newTitreCarte);
            newLi.appendChild(newBodyCarte);
            liste.appendChild(newLi);
        }
    };

    xhr.send();
});
