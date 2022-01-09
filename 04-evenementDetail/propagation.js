// bubbling -> bouillonnement
// propagation de l'enfant au parent
// méthode pour stopper la propagation
const btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("Event Button");
});

document.body.addEventListener("click", function () {
    console.log("Event Body");
});
