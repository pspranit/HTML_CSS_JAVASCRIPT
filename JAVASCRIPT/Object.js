let emp={
    eName:"pranit",
    eId:123,
    ePlace:"mystore"
}

console.log(emp);
console.log(emp.ePlace);

emp.eSalary=10000;
console.log(emp);

console.log(typeof emp);

let stu={
    sName:"pranit",
    sId:123,
    sAddress:{

        street:"RM circle",
        city:"mystore"
    }
}
console.log(stu);
stu.sAddress.Spin=571006;
console.log(stu);

console.table(stu);