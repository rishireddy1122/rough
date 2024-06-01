function rishi(name) {
    console.log(name);
}

rishi("rishith");

// arrow function

const rishith = (name) => {
    console.log(name);
}

rishith("raju")

// addition usung arrow function

const arrowsum = (a,d) =>{
    return a+d;
}

console.log(arrowsum(1,6));


// passing function to function

let rishi1 = (num,callback) =>{
    callback(num);
}

rishi1(16,(num) => {console.log(num);})



// call stack helps to find errors in the javascript using the browser soures-> call stack dption


// hosting is nothing but prettindeng that functions are written firsr on top . allowing them tom perform 
//  action even tho they decleared later. but it will not work for arrow functions and varables