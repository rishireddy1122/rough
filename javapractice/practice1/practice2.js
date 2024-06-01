const fruit = ["apple","shabe","phal","mango"]
function addin (fruit,index) {
    console.log(`${index}.${fruit}`)

}
fruit.forEach(addin);


const rishi=[]

const man ={
    food:"chapithi",
    "sleepHrs":10`1`
}
const someOne = Object.keys(man);

someOne.forEach(function (key) {

    rishi.push(key,man[key])

})
console.log(`${rishi}`);