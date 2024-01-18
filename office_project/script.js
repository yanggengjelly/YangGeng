const buttons = document.querySelectorAll("[data-nav-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((_button) => {
      _button.classList.remove("is_active");
    });
    button.classList.add("is_active");
  });
});

const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
const modalClose = document.querySelectorAll("[data-modal-close]");
modalTriggers.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    const slug = modal.dataset.modalTrigger;
    const target = document.querySelector(`[data-modal-target=${slug}]`);
    if (target) {
      target.classList.add("is_active");
    }
  });
});
modalClose.forEach((close) => {
  close.addEventListener("click", (e) => {
    const target = close.closest("[data-modal-target]");
    if (target) {
      target.classList.remove("is_active");
    }
  });
});
