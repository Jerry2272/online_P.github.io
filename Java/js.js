let label = document.getElementById("label");
let body = document.querySelector("body");

label.addEventListener("click" , ()=>{
    body.classList.toggle("active");
})