let emp={
    eName:"pranit",
    eId:123,
    ePlace:"mystore"
}
console.log(emp);
console.log(JSON.stringify(emp));
console.table(JSON.parse(JSON.stringify(emp)));