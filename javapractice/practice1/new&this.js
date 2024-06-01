
// using normal key word

function user(name,age) {
    return{name:name,age:age}
}

// using new and this keyword

const print1 = user("rishi",20)
 console.log(print1);

 function User2(name, age){
    this.name = name
    this.age  = age
    this.human= true
 }

 const print2 = new User2("rishi",20)
 console.log(print2);

//  usimg clASSES

class Rishi{
    constructor(name,age){
        this.name=name
        this.age= age
        this.human= false
    }
}


// const print3 = new Rishi("raju",0)  both out puts are valid here


console.log(new Rishi("raju",0));


