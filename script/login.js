const users = document.querySelector(".js-name");
const pswds = document.querySelector(".js-pswd");
const login = document.querySelector(".js-login");
const signin = document.querySelector(".js-signin");

login.addEventListener("click", () => {
  if (users.value == "admin" && pswds.value == 1234) {
    console.log("logedd in");
    window.open("index.html");
  } else if (users.value == "" && pswds.value == "") {
    alert("please enter user name and password to login");
  } else {
    alert("wrong password or user name ");
  }
});
