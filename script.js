let isNepali = false;

function toggleLanguage() {
  isNepali = !isNepali;

  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = isNepali
      ? el.getAttribute("data-ne")
      : el.getAttribute("data-en");
  });
}
