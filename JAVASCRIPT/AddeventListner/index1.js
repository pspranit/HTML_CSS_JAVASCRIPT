let a=document.getElementById("ps1");
a.addEventListener("click",()=>{
    document.body.style.backgroundColor="red";
})

let b=document.getElementById("ip1");
b.addEventListener("keyup",()=>{
    document.body.style.backgroundColor="orange";
})

b.addEventListener("keydown",()=>{
    document.body.style.backgroundColor="black";
})