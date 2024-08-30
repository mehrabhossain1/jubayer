document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const logo = document.querySelector(".logo");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
    logo.style.visibility = menu.classList.contains("active")
      ? "hidden"
      : "visible";
  });
});
