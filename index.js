const dropdownBtns = document.querySelectorAll(".dropdown>a");
const dropdownContent = document.querySelectorAll(".dropdown-content");
const arrow = document.querySelectorAll(".dropdown>a>img");
const mMenuBtn = document.querySelector(".menu-icon");
const mMenuClose = document.querySelector(".menu-icon-close");
const mDropBtn = document.querySelectorAll(".m-drop-btn");

mMenuBtn.addEventListener("click", () => {
  document.querySelector(".mobile-menu-items").classList.add("show-nav");
});

mMenuClose.addEventListener("click", () => {
  document.querySelector(".mobile-menu-items").classList.remove("show-nav");
});

mDropBtn.forEach((down, i) => {
  down.addEventListener("click", ()=>{
    document.querySelectorAll(".m-dropdown")[i].classList.toggle("show-nav");
    document.querySelectorAll(".m-drop-btn .arrow-icon-down")[i].classList.toggle("rotate");
  });
});



document.addEventListener("click", (e) => {
  // first check if it was already open
  const wasOpen = e.target.matches(".dropdown>a") && e.target.nextElementSibling.classList.contains("show");
  // next close every dropdown
  for (let i = 0; i < dropdownContent.length; i++) {
    dropdownContent[i].classList.toggle("show", false);
    arrow[i].classList.toggle("rotate", false);
  }
  // then if a link was clicked, open the associated dropdown, BUT only if not open before
  if (!wasOpen && e.target.matches(".dropdown>a")) {
    e.target.nextElementSibling.classList.toggle("show");
    e.target.lastChild.classList.toggle("rotate");
  }
});
