function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
  document.addEventListener("click", function(event) {
  var menu=document.querySelector(".menu-links");
  var hamburger=document.querySelector(".hamburger-icon");
  if (!menu.contains(event.target) && !hamburger.contains(event.target))
    {
      menu.classList.remove("open");
      hamburger.classList.remove("open");
    }
  });

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
