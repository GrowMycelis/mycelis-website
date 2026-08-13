document.documentElement.classList.add("js");

const menuButton = document.querySelector("[data-nav-toggle]");
const navigation = document.querySelector("[data-nav]");

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

const interestForm = document.querySelector("[data-interest-form]");
if (interestForm) {
  const productFromUrl = new URLSearchParams(window.location.search).get("interest");
  const availableProducts = ["mycelis", "verdelis", "both"];
  if (availableProducts.includes(productFromUrl)) {
    const matchingInput = interestForm.querySelector(`input[value="${productFromUrl}"]`);
    if (matchingInput) matchingInput.checked = true;
  }

  interestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = interestForm.querySelector("input[type='email']");
    const status = interestForm.querySelector("[data-form-status]");
    if (!email.checkValidity()) {
      email.reportValidity();
      return;
    }
    status.textContent = "Thanks for your interest. This preview does not send or store your details yet.";
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
