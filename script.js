const email = document.getElementById("email");
const form = document.getElementById("form");
document.getElementById("xy").addEventListener("click", function () {
  const emailVal = email.value;

  // Check if it is valid or not
  if (!validateEmail(emailVal)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    document.body.innerHTML = `<div style="display:flex; align-items:center;justify-content:center"><h1>Thank You!</h1></div>`
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
