function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// THIS IS DISCUSED WITH AI GPT
// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

// // Show arrow only after scrolling down
// window.addEventListener("scroll", () => {
//   const arrow = document.querySelector(".arrow");
//   if (window.scrollY > 200) {
//     arrow.classList.add("show");
//   } else {
//     arrow.classList.remove("show");
//   }
// });

// // Optional: Smooth scroll to top when arrow clicked
// document.querySelector(".arrow").addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });
