/**
 * -----------------------
 * Utiliser async et await
 * -----------------------
 */

async function foo() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("action effectuée !"), 1000);
    });
    let result = await p1;
    console.log(result);
}

foo();
