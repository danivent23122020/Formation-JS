/**
 * -----------------------
 * Comprendre les promesses
 * -----------------------
 * Promise -> voir MDN
 * -----------------------
 * L'objet Promise (pour « promesse ») est utilisé
 * pour réaliser des traitements de façon asynchrone.
 * Une promesse représente une valeur qui peut
 * être disponible maintenant, dans le futur voire jamais.
 */

const promise1 = new Promise((resolve, reject) => {
    console.log("hello promise 1");
    resolve('les données sont arrivées')
    reject('les données ne sont pas arrivées !')
});
promise1.then((val)=>{
    console.log(val);
}).catch(()=>{
    console.log('il y a une erreur');
})




console.log(promise1);
