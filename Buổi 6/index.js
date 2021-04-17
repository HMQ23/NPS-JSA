var adminaccount = {
  name: "admin@gmail.com",
  pass: "admin",
};

var LoginName = document.querySelector("#loginName");
var LoginPassword = document.querySelector("#loginPassword");
var SigninButton = document.querySelector("#btn-signin");

var data = [];

var registerName = document.querySelector("#registerName");
var registerUsername = document.querySelector("#registerUsername");
var registerEmail = document.querySelector("#registerEmail");
var registerPassword = document.querySelector("#registerPassword");
var registerRepeatPassword = document.querySelector("#registerRepeatPassword");
var SignupButton = document.querySelector("#btn-signup");

SignupButton.addEventListener("click", function (event) {
  console.log(
    registerName.value,
    registerUsername.value,
    registerEmail.value,
    registerPassword.value,
    registerRepeatPassword.value
  );
  data.push({
    name: registerName.value,
    username: registerUsername.value,
    email: registerEmail.value,
    password: registerPassword.value,
    repeatPassword: registerRepeatPassword.value,
  });
  console.log(data);
});

SigninButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    LoginName.value == adminaccount.name &&
    LoginPassword.value == adminaccount.pass
  ) {
    window.location.replace("https://www.w3schools.com/");
  } else {
    alert("Login failed!");
  }
});
