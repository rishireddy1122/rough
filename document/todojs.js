// 1. sdelect the attributes for action 

const form = document.querySelector("#form")

const input = document.querySelector("#input")

const list = document.querySelector("#list")



// select text from input and add to the list

form.addEventListener('submit',e=>{
    e.preventDefault()

    
    const listItem = document.createElement("div")
    listItem.innerText=input.value
     listItem.classList.add("list")
    list.appendChild(listItem)
    input.value=""

   // Add click event listener to each individual item
   listItem.addEventListener("click", (event) => {
    event.preventDefault()
    listItem.remove();

   
   })
})








