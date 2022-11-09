const getId = (id) => document.getElementById(id);

const getClasses = (classes) => document.querySelectorAll(classes);

const username = getId("username"),
  email = getId("email"),
  password = getId("password"),
  form = getId("form"),
  errorMsg = getClasses(".error"),
  successIcon = getClasses(".success-icon"),
  failureIcon = getClasses(".failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
