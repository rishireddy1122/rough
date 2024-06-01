function New(variable) {

    let c = 10;

    return function(variable2){

        console.log(variable);
        console.log(variable2);
        console.log(c);
    }
}

 let a = New(1);
 a(2);

 

//  firstly inner function   should be functional in order to execute whole function

// type of conversion of data type

parseInt // to convert string into Number

.toString //is used to convert the number in to string

//  any thing is not equal to NaN . to use NaN use //isNaN // to check 
const promice = new promice((resolve,reject=>{
    
}))