let aray =[1,2,3,4,5,6,7,8]

aray.forEach((number,index) =>{

    console.log(index,":",number);
}

)
// mapping dosent modifyn the array it returns the brand new array... use referance to acces the array

let newA = aray.map((number) =>{
    
    return number *5
}

)

console.log(newA);

// filter will helps to 

let newB = aray.filter((number) =>{
    
    return number <2 ; // acctep in the boolean form 
}

)

console.log(newB);

// find will return the firsst value that matches the ccondition

let newC = aray.find((number) =>{
    
    return number<2;
}

)

console.log(newC);

// "some" will return true or false based on the condition 
// if the givrn condition matches even once it will give true
let newD = aray.map((number) =>{
    
    return number <2
}

)

console.log(newD);

// "every" it is same as some but every thing must match the the condition

let newE = aray.every((number) =>{
    
    return number <2;
}

)

console.log(newE);

//  reduce : is used in unique way to make total of items ..  we must pass atlest 2 items as referance and starting value at end

const item =[ 
   { price:20},
   { price:23},
   { price:45},
    {price:2},
   { price:40},
    {price:10}
]

let newF = item.reduce((sum,item) =>{
    
    return sum + item.price;
}
,0
)

console.log( "total price is",newF);


// include returns if value exits true

let newG= aray.includes(2)
    console.log(newG);




