const httRequest = new XMLHttpRequest();
let get = document.getElementById("get");
httRequest.open("GET","https://reqres.in/api/users?page=1");
httRequest.send();
var data = "empty"
httRequest.onload = function() {
    data = JSON.parse(httRequest.responseText);
    console.log(data);
    users_data = data.data;
    for(var i=0; i<users_data.length; i++){
        get.innerHTML += renderUser(users_data[i].email,users_data[i].first_name);
    }
}

function renderUser(email, first_name)
{
    return `
    <tr>
    <td>${first_name}</td>
    <td>${email}</td>
    </tr>
    `
}