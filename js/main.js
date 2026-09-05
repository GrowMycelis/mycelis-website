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

const waitlistForm = document.querySelector("[data-waitlist-form]");

if (waitlistForm) {
  const requestedInterest = new URLSearchParams(window.location.search).get("interest");
  if (["mycelis", "virelis", "both"].includes(requestedInterest)) {
    const requestedChoice = waitlistForm.querySelector(`input[name="interest"][value="${requestedInterest}"]`);
    if (requestedChoice) requestedChoice.checked = true;
  }

  waitlistForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = waitlistForm.querySelector('input[type="email"]');
    const message = waitlistForm.querySelector("[data-form-message]");

    if (!email.checkValidity()) {
      email.reportValidity();
      return;
    }

    message.textContent = "Nothing was sent—the mailing-list connection is not active yet. You can contact hello@mycelis.co.nz in the meantime.";
  });
}
