// 1.select all the things 

const open = document.querySelector("#open-btn")

const close = document.querySelector("#close-btn")

const popUP = document.querySelector("#popUP");

const overlay = document.querySelector("#overlay")

// now add event listner to add open


open.addEventListener('click',()=>{
    popUP.classList.add("open")
    overlay.classList.add("open");
 })
 


 close.addEventListener('click',()=>{
    popUP.classList.remove("open")
    overlay.classList.remove("open");
 })



 overlay.addEventListener('click',()=>{
    popUP.classList.remove("open")  
    overlay.classList.remove("open");
 })
