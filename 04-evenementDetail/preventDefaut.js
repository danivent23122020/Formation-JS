// preventDefault()
// La méthode preventDefault(), rattachée à l'interface Event, indique à l'agent utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.
// ne sert pas uniquement au formulaire, on peut l'utiliser avec tous les évènments, cela va prévenir le comportement par défaut des évènments.
const form = document.querySelector("form");
const inp = document.querySelector("input");
//
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(inp.value);
});
