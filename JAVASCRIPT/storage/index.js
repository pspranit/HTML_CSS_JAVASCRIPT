localStorage.setItem("name","pranit")
localStorage.setItem("company","qspiders")

//ADD DATA FROM LOCAL STORAGE
let name=localStorage.getItem("name")
let company=localStorage.getItem("company")
console.log(`my name is ${name} and im working in ${company}`)

//REMOVE ELEMENT FROM LOCAL STORAGE
// let name=localStorage.getItem("name")
// localStorage.removeItem("company")
// let company=localStorage.getItem("company")
// console.log(`my name is ${name} and im working in ${company}`)