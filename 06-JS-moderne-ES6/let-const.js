// hoisting
// var -> fonction scoped 
// let & const -> block scoped

function foo() {
    if(true){

        var x = 5;
    }
    // pas d'erreur à l'extérieur du block
    console.log(`var -> x = ${x}`);
    if(true){
        
        let y = 15;
        // pas d'erreur à l'intérieur du block
        console.log(`let -> y = ${y}`);
    }
}
foo();
