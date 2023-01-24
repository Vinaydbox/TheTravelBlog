let response="empty";
const postRequest=new XMLHttpRequest();
let tableBody = document.getElementById("tablebody")
postRequest.open("POST","https://reqres.in/api/users");
postRequest.setRequestHeader("Content-type","application/Json");
var psh=document.getElementById("push");
psh.addEventListener("click",function(){
     post();
});



function renderCard(first_name,last_name,email)
{
    return `
    <tr>
    <td>${first_name}</td>
    <td>${last_name}</td>
    <td>${email}</td>
    </tr>
    `
}

function post(){
    userFirstName=document.getElementById("firstName");
    userLastName=document.getElementById("lastName");
    userEmail=document.getElementById("Email");
    datax={firstName:userFirstName.value,lastName:userLastName.value,Email:userEmail.value};
    data=JSON.stringify(datax);
    postRequest.send(data);
    postRequest.onload=function(){
        datax=JSON.parse(postRequest.responseText);
        console.log(datax);
        alert(datax.firstName);
        tableBody.innerHTML += renderCard(datax.firstName,datax.lastName,datax.Email);
    }
}