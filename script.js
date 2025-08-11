
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