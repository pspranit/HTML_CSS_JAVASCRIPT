let a=document.getElementById("p1")
console.log(a);

let b= document.getElementsByClassName("sp1")
console.log(b);
console.log(typeof b);
console.log(Array.isArray(b));

let c=document.getElementsByTagName("h1")
console.log(c);
console.log(typeof c);
console.log(Array.isArray(c));

let e=document.querySelector(".sp1")
console.log(e);

let d=document.querySelectorAll(".sp1")
console.log(d);
console.log(typeof d);
console.log(Array.isArray(d));
