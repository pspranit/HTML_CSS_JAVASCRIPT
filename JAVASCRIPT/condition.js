/////////////////////////////////(IF)/////////////////////////////////////////////
let a=2;
if(a%2==0)
{
    console.log("even");
}
///////////////////////////////(IF ELSE)////////////////////////////////////////////

let b=prompt("enter the number");
if(b%2==0)
{
    console.log("even");
}
else
{
    console.log("odd");
}
///////////////////////////////////(ELSE IF)/////////////////////////////////////////

let age=prompt("enter your age");

if(age==2)
{
    console.log("LKG");
}

else if(age==6)
{
    console.log("join LKG");
}
 else if(age==7)
 {
    console.log("join 1st std");
 }
 else
 {
    console.log("enter correct one");
 }
//////////////////////////////(SWITCH)////////////////////////////////////////////////

 
 let time=12;

 switch(time)
 {
    case 1:
        console.log("GOOD MORNING");
        break;

        case 12:
            console.log("GOOD EVENING");
            break;

            default:
                console.log("ENTER CORRECT ONE");
 }
////////////////////////////////(WHILE)////////////////////////////////////////////

let i=1;
let y=5;

while(i<=y)
{
    console.log(i);
    i++;
}
//////////////////////////////(Do WHILE)//////////////////////////////////////////////

do{
    console.log(i);
    i++;
}while(i<=y)

///////////////////////////////(FOR LOOP)//////////////////////////////////////////////////////

for(let i=1;i<=5;i++)
{
    console.log(i);
}