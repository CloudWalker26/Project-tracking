const humburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

humburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  humburger.classList.toggle("active");

  if (menu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});
