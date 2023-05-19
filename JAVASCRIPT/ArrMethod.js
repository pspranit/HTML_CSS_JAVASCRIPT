//ARRAY

let arr=[1,2,3,4];

let a=arr.push(5,6);
console.log(arr);

let b=arr.pop();
console.log(arr);

let c=arr.shift();
console.log(arr);

let d=arr.unshift("k","s");
console.log(arr);

//////////////////////////////////////////////////////////////////////////

// STRING REVERSE
let e="HELLO";
let f=e.split("").reverse().join("");
console.log(f);

////////////////////////////////////////////////////////////////////////

//FILTER OF ARRAY

let g=[10,20,30,40,50];
let h=g.filter((e) => e > 30);
console.log(h);

let i=g.map((e)=>e*5);
console.log(i);

/////////////////////////////////////////////////////////////////////////

//REDUSE Function

let j=g.reduce((firstvalue,lastvalue)=>{

    return firstvalue+lastvalue;
});
console.log("j value is :"+j);

////////////////////////////////////////////////////////////////////////

//FETCH THE INDEX POSTION
console.log("FETCH THE INDEX POSITION");

let arrr=[100,200,300,400,500];
for (const arr1 in arrr) {
    console.log(arr1);        
    }

    console.log("FETCH THE DATA FROM ARRAY");

    for (const arr2 of arrr) {
        console.log(arr2);
    }
    
    console.log("FETCH THE INDEX POSITION AND DATA");
    
    arrr.forEach((value,index)=>
    {
        console.log(' ${value)==${index} ');
    })
