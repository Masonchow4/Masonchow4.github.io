if (window.location.hash) {
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
  window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
