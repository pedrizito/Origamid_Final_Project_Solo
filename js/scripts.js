const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  if (location.href === link.href) {
    link.classList.add("menu-active");
  }
});
