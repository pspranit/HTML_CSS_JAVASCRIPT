const score=90;
const promise=new Promise((resolve,reject)=>{
    if(score<100)
    {
        resolve("hey you got more than 100")
    }
    else{
        reject("you not scored")
    }
})

.then((value)=>{console.log(value+"success")})
.catch((error)=>{console.log(error+"unsccessful")})

// let promise = new Promise(function(resolve, reject) {
//     let isroomcleand=true;
//     {
//         if (isroomcleand) {
//             resolve("yes,claned")
//             document.body.style.backgroundColor="tomato";
//             document.write("Thank you room is cleaned")
//         } else {
//             reject("not cleaned")
//             document.body.style.backgroundColor="black";
//             document.write("idiot clean room")
//             document.body.style.color="white";
//         }
//     }
// }).then(data=>{console.log(data);})
// .catch(err=>{console.log(err);})
// .finally(()=>{console.log("done")});

// function checkmail(){
//     return promise = new Promise((resolve, reject) => {
//         let x = Math.floor(Math.random() * 200);
//         if (x > 150) {
//             resolve("mail has been arrived")
//         } else {
//             reject("something went wrong")
//         }
//     })
// }
// checkmail()
// .then(data=>{console.log(data)})
// .catch(err=>{console.log(err)})
// .finally(fina=>{console.log(fina)})

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am first")
//     },1000);
//     setTimeout(() => {
//         reject("oops i am last")
//     }, 2000);
// }).then(data=>{console.log(data)}).catch(err=>{console.log(err)}).finally(done=>{console.log(done);})

// let promise1= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am promise1")
//     }, 1000);
//     setTimeout(() => {
//         reject("i am reject")
//     },1000)
// })

// let promise2= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am promise2")
//     }, 1000);
//     setTimeout(() => {
//         reject("i am reject")
//     },1000)
// })
// let promise3= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am promise3")
//     }, 1000);
//     setTimeout(() => {
//         reject("i am reject")
//     },1000)
// })
// let promise4= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am promise4")
//     }, 1000);
//     setTimeout(() => {
//         reject("i am reject")
//     },1000)
// });

// Promise.all([promise1,promise2,promise3,promise4])
// .then(data=>{console.log(data)})
// .catch(err=>{console.log(err)})
// .finally(done=>{console.log("executed")})

// Promise.any([promise1,promise2,promise3,promise4])
// .then(data=>{console.log(data)})
// .catch(err=>{console.log(err)})
// .finally(done=>{console.log("executed")})

// Promise.allSettled([promise1,promise2,promise3,promise4])
// .then(data=>{console.log(data)})
// .catch(err=>{console.log(err)})
// .finally(done=>{console.log("executed")})

// let promise1= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am promise1")
//     }, 10000);
//     setTimeout(() => {
//         reject("i am reject")
//     },1000)
// })

// let promise2= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am promise2")
//     }, 1000);
//     setTimeout(() => {
//         reject("i am reject")
//     },1000)
// })
// let promise3= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am promise3")
//     }, 1000);
//     setTimeout(() => {
//         reject("i am reject")
//     },1000)
// })
// let promise4= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am promise4")
//     }, 1000);
//     setTimeout(() => {
//         reject("i am reject")
//     },1000)
// });

// here based on timmings it will executed
// if it's in reject state also it will lokk on timmings only
// Promise.race([promise1,promise2,promise3,promise4])
// .then(data=>{console.log(data)})
// .catch(err=>{console.log(err)})
// .finally(done=>{console.log("executed")})

// task on promises
// let S1 = new Promise((resolve, reject) => {
//     let ishunger = true ;
//     {
//         if (ishunger) {
//             resolve("he is hunger")
//         } else {
//             reject("he already had")
//         }
//     }
// })
// let S2 = new Promise((resolve, reject) => {
//     let ishunger = true ;
//     {
//         if (ishunger) {
//             resolve("he is hunger")
//         } else {
//             reject("he already had")
//         }
//     }
// })
// let S3 = new Promise((resolve, reject) => {
//     let ishunger = true ;
//     {
//         if (ishunger) {
//             resolve("he is hunger")
//         } else {
//             reject("he already had")
//         }
//     }
// })
// let S4 = new Promise((resolve, reject) => {
//     let ishunger = true ;
//     {
//         if (ishunger) {
//             resolve("he is hunger")
//         } else {
//             reject("he already had")
//         }
//     }
// })
// Promise.allSettled([S1,S2,S3,S4])
// .then(data=>{console.log(data)})
// .catch(err=>{console.log(err)})
// .finally(done=>{console.log(("go and have lunch"))})

// let a = prompt("enter the value")
// let b = a.split("").reverse().join("")
// console.log(b);
// if (a==b) {
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }

// let b = Number(prompt("enter the number"))
// if (b%2==0) {
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// let c= prompt("enter the number")
// for(i=0; i<c.length; i++)
// {
//     if (c[i]%2==0) {
//         console.log(c[i],"even");
//     } else {
//         console.log(c[i],"odd");
//     }
// }

// ARM STRONG NUMBER
// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');
// let temp = number;
// while (temp > 0) {
//     let remainder = temp % 10;
//     sum += remainder * remainder * remainder;
//     temp = parseInt(temp / 10);
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// ASYNC & AWIAT
// let x = async function(){

//     let data = await window.fetch("https://api.github.com/users")
//     console.log(data);
//     let finaldata = await data.json();
//     console.log(finaldata);
//     finaldata.map(x=>{
//         console.log(x);
//         console.log(x.id);
//     })
// };
// x();

// let x = async function(){
//     try {
//         let data = await window.fetch("https://api.github.com/user")
//     console.log(data);
//     let finaldata = await data.json();
//     console.log(finaldata);
//     finaldata.map(x=>{
//         console.log(x);
//         console.log(x.id);
//     })

//     } catch (error) {
//         console.log("error maga");
//     }
// }
// x()

// let x = async function () {
//   try {
//     let data = await window.fetch("https://api.github.com/users");
//     console.log(data);
//     let finaldata = await data.json();
//     console.log(finaldata);
//     finaldata.map(x => {
//       let div = document.createElement("div");
//       div.innerHTML += `
//         <table border="2px" cellspacing="15px" cellpadding="15px" height="200px" width="200px">   
//         <tr>
//             <td>${x.id}</td>
//             <td>${x.login}</td>
//             <td><img src=${x.avatar_url}></td>
//         </tr>
//       </table>`;
//       document.body.appendChild(div);
//     });
//   } catch (error) {
//     console.log("error maga");
//   }
// };
// x();

// let m = async function(){
//     try {
//             let data = await window.fetch("")
//             console.log(data);
//             let finaldata = await data.json();
//             console.log(finaldata);
//             let section = document.createElement("section");
//             finaldata.map(x=>{
//                 let div = document.createElement("div")
//                 div.innerHTML+=`

//                 `
//             document.body.appendChild(section)
//             document.appendChild(div)
//             }

//             )}
//             catch (error) {
//                         console.log("error maga");
//                     }
//         }

// setTimeout(() => {
//     console.log("hello");
// }, 1000);

// function is() {
//     console.log("i am function");
// }

// setTimeout(is(),20000)

// let up= document.getElementById("up");
// up.addEventListener("keydown",()=>{
//     document.body.style.backgroundColor = `tomato`
// })
// up.addEventListener("keyup",()=>{
//     document.body.style.backgroundColor = `green`
// })

// let m = document.querySelector("button");
// m.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor = `orange`
// })
// m.addEventListener("mouseout",()=>{
//     document.body.style.backgroundColor = `white`
// })