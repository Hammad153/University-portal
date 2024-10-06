// menuicon toggling functioning
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const shownav = document.getElementById("shownav");

menuIcon.addEventListener("click", () => {
  // Toggling the display property of the navbar
  navbar.style.display = navbar.style.display === "none" ? "block" : "none";
  shownav.innerText = shownav.innerText === "&#9776;" ? "&#10006;" : "&#9776;";
});
