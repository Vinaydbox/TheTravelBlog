function run(){
var data = {
    name: document.getElementById("titlecard").value,
    email: document.getElementById("desccard").value
}
data=JSON.stringify(data);
var x = new XMLHttpRequest();
x.open("POST", "https://reqres.in/api/users");
x.setRequestHeader("content-type", "application/json");
x.send(data);
x.onload = function () {
    response=JSON.parse(x.responseText);
    console.log(response);

    alert("Name : "+response.name + ", Email : "+response.email);
}
};