let button = document.querySelector("button")
let p = document.querySelector("p")

button.addEventListener("click",function(){
    p.innerHTML = +p.innerHTML + 1;
})