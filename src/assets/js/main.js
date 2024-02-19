const media = window.matchMedia("(width < 50em)");
window.onload = initialSetup;

function initialSetup() {
  setupElements();
  setupMainNavBar(media);
}

function setupMainNavBar(event) {
  const openMenu = document.getElementById("main-menu__open-button");
  const menu = document.getElementById("main-menu-wrapper");
  if (event.matches) {
    openMenu.setAttribute("aria-expanded", false);
    menu.setAttribute("inert", "");
    menu.style.transition = "none";
  } else {
    openMenu.setAttribute("aria-expanded", true);
    menu.removeAttribute("inert");
  }
}

function setupElements() {
  const openMenu = document.getElementById("main-menu__open-button");
  const menu = document.getElementById("main-menu-wrapper");
  const closeMenu = document.getElementById("main-menu__close-button");

  openMenu.addEventListener("click", () => {
    openMenu.setAttribute("aria-expanded", true);
    menu.removeAttribute("inert");
    menu.removeAttribute("style");
  });

  closeMenu.addEventListener("click", () => {
    openMenu.setAttribute("aria-expanded", false);
    menu.setAttribute("inert", "");
    setTimeout(() => {
      menu.style.transition = "none";
    }, 300);
  });

  media.addEventListener("change", () => {
    setupMainNavBar(media);
  });
}
