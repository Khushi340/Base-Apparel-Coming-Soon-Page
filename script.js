const email = document.getElementById("email");
const form = document.getElementById("form");
document.getElementById("xy").addEventListener("click", function () {
  const emailVal = email.value;

  // Check if it is valid or not
  if (!validateEmail(emailVal)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    document.body.innerHTML = "Thank You!";
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
