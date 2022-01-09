// introduction aux évènements
const titre = document.querySelector("h1");
console.log(titre);
// avec fonction directement en paramètre
titre.addEventListener("click", function () {
    console.log("hello");
    titre.style.background = "#c1c1c1";
});
// avec fonction en référence
titre.addEventListener("mouseover", maFonction);
// fonction de référence
function maFonction() {
    titre.style.background = "red";
}
