// getting dayta from the wed sit using fetch operator also called api operation

let url = "https://jsonplaceholder.typicode.com/posts"

// fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
//     {
//             // console.log(reponse) // will give the body of the api
//         return response.json() // will give the internall json data in to javascript form 
//     }
// ).then(data =>{  //using then we could acces the data from the body


//     const user = data.map(user =>user.id) // traversal through map
//     console.log(user);
// })
// console.log("hi");



//  using normal async functon 

// async function stuff(){

//     const responce = await fetch(url)
//     const user =  await responce.json()
//     console.log(user.map(user =>user.id));
// }

// stuff()



//  pposting the stuff to the given api

async function stuff(){

    const responce = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:"new title"
        })
    })
    const post =  await responce.json()
    console.log(post);
}

stuff()

// event delegation help to find the button clicked on certion element

// button declred later

document.addEventListener("click",e=>{
    console.log("clicked");
})

document.body.addEventListener("click",e=>{

    e.stopPropagation()
    console.log("body clicked");
},
{capture:true})


const newButton = document.createElement("button")

newButton.innerText="button"

document.body.append(newButton)

newButton.addEventListener("click",e=>{
    console.log("button clicked");
})


document.addEventListener("click",e=>{
    console.log(e.target);
})