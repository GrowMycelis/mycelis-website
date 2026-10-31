const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");

function closeMenu() {
  if (!menuButton || !menu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menu.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

const finePointerMotion = window.matchMedia(
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
);

document.querySelectorAll("[data-product-panel]").forEach((panel) => {
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;

  panel.addEventListener("pointermove", (event) => {
    if (!finePointerMotion.matches) return;
    const bounds = panel.getBoundingClientRect();
    pointerX = event.clientX - bounds.left;
    pointerY = event.clientY - bounds.top;
    if (frame) return;

    frame = window.requestAnimationFrame(() => {
      panel.style.setProperty("--spot-x", `${pointerX}px`);
      panel.style.setProperty("--spot-y", `${pointerY}px`);
      panel.style.setProperty("--image-x", `${(pointerX / bounds.width - 0.5) * 8}px`);
      panel.style.setProperty("--image-y", `${(pointerY / bounds.height - 0.5) * 8}px`);
      frame = 0;
    });
  });

  panel.addEventListener("pointerleave", () => {
    window.cancelAnimationFrame(frame);
    frame = 0;
    panel.style.removeProperty("--spot-x");
    panel.style.removeProperty("--spot-y");
    panel.style.removeProperty("--image-x");
    panel.style.removeProperty("--image-y");
  });
});
