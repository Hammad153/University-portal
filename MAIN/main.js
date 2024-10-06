//login function button
const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const Identity = document.getElementById("Identity").value;
  const password = document.getElementById("password").value;

  const validIdentity = "PEAKHEIGHTS";
  const validPassword = "MYPASSWORD";

  if (Identity === validIdentity && password === validPassword) {
    window.location.href = "Home.html";
  } else {
    message.textContent = "Invalid Username or password";
  }
});

const passwordHint = document.querySelector(".hint");
const passwordhint = document.querySelector(".showdetails");

passwordhint.addEventListener("click", (e) => {
  passwordHint.style.display =
    passwordHint.style.display === "none" ? "block" : "none";
});
