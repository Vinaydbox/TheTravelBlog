//Local Storage
function store(){
	email = document.getElementById("emailAdd");
	password = document.getElementById("pwd");
	firstName = document.getElementById("firstName");
	lastName = document.getElementById("lastName");
	localStorage.setItem("emailAdd", email.value);
	localStorage.setItem("pwd", password.value);
	localStorage.setItem("firstName", firstName.value);
	localStorage.setItem("lastName", lastName.value);
	alert('Your account has been created');
}

//checking login
function checkLogin(){
	var storedName = localStorage.getItem("emailAdd");
	var storedPassword = localStorage.getItem("pwd");
	var storedFirstName = localStorage.getItem("firstName");
	var storedLastName = localStorage.getItem("lastName");

    
	var userName = document.getElementById("email1");
	var userPwd = document.getElementById("password1");
	var rememberMe = document.getElementById("rememberMe");

	if(userName.value == storedName && userPwd.value == storedPassword )
	{
		// alert("WOW!!! You have logged in...")
		window.location.href = "./homepage.html";
		// document.getElementById("profile").innerHTML = localStorage.getItem("storedFirstName") + " " + localStorage.getItem("storedLastName");
		// document.getElementById("profile").innerHTML = localStorage.getItem("storedFirstName");
	}
	else{
		alert("Invalid Login")
	}
}

document.getElementById("profile").innerHTML = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
document.getElementById("userNameAfterLogin").innerHTML = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
document.getElementById("userEmailAfterLogin").innerHTML = localStorage.getItem("emailAdd");
