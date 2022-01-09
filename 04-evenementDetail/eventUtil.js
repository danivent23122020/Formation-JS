const btn = document.querySelector("button");
//
btn.addEventListener("click", clikk);
//
function clikk() {
    console.log("Hello click");
    btn.removeEventListener("click", clikk);
}
//----------
const hh2 = document.querySelector("h2");
hh2.addEventListener("mouseenter", sourisEntre);
//
function sourisEntre() {
    console.log("Hello h2");
}
//----------
document.addEventListener("keydown", clavierTouche);
// document.addEventListener("click", clavierTouche);
//
function clavierTouche(e) {
    console.log(e.key);
}
// ------------
window.addEventListener("load", function () {
    console.log("tout a bien chargé");
});
// -------------
const inp = document.querySelector("input");
inp.addEventListener("input", function (e) {
    console.log(inp.value);
});
