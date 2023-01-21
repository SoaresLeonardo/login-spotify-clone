const email_input = document.querySelector(".email");
const password_input = document.querySelector(".password");
const login_btn = document.querySelector(".login-button");
const campos = document.querySelectorAll(".required");
const message_error = document.querySelector(".message-error");
const paragrafos_error = document.querySelectorAll(".p-message-error");

function emailRegexValidator(email) {
  const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
  return emailRegex.test(email);
}

function setError(index) {
  campos[index].style.border = "1px solid red";
  paragrafos_error[index].style.display = "flex";
  message_error.style.display = "flex";
}

function removeError(index) {
  campos[index].style.border = "";
  paragrafos_error[index].style.display = "";
  message_error.style.display = "none";
}

function emailValidate() {
  if (!emailRegexValidator(campos[0].value)) {
    setError(0);
    return false;
  } else {
    removeError(0);
    return true;
  }
}

function passwordValidate() {
  if (password_input.value.length < 1) {
    setError(1);
    return false;
  } else {
    removeError(1);
    return true;
  }
}

function showMessageError() {
  if (!emailValidate() || !passwordValidate()) {
    message_error.classList.add("off");
  } else {
    message_error.classList.remove("off");
  }
}

login_btn.addEventListener("click", () => {
  emailValidate();
  passwordValidate();
  showMessageError();
});
