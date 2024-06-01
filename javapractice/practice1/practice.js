// try{
//     throw ReferenceError();

// } catch(e){
//     console.log("the error is throned");
//     console.log("reference error")
// }
// console.log("the program still works"
// );


try {

  function  addtonumbers(a,b)
    {

        if (typeof(a) ==!Number) {
            throw ReferenceError(error)
            console.log("a is not a number");

            
        } if(typeof(b) ==!Number) {
            throw ReferenceError(error)
            console.log("b is not a number");


        }else{
            console.log(a+b);
        }
    
    }
} catch (error) {
    console.log("given in put is in incorrect form");
    
}
console.log("CODE still works");

addtonumbers(1,2);