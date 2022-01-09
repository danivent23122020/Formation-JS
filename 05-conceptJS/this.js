// contexte appelant de cette méthode -> this
const myObj = {
    nom: "dan",
    taille: 190,
    presentation: function () {
        console.log(this.nom);
        console.log(this.taille);
        // console.log(this);
    },
};
myObj.presentation();
// ------------
console.log("---------------");
// ------------
function foo() {
    console.log(this);
}
foo();
// ------------
console.log("---------------");
// ------------
const btn = document.querySelector("button");
btn.addEventListener('click', function(){
    console.log(this);
})
