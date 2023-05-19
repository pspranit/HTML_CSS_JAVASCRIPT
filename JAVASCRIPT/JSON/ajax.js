let request=new XMLHttpRequest();
request.open('GET',"https://api.github.com/users")
request.send();
request.onload=() =>{
    console.table(JSON.parse(request.response));
}