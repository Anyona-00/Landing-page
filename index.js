const menuToggle = document.getElementById("menu-toggle");
const navBar = document.getElementById("nav-bar");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("show-menu");
});