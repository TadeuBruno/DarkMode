const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function () {
  document.body.classList.toggle("dark");
  /*Save or remove dark mode */
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
/* Toggle dark mode */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* Load light or dark mode*/
function LoadTheme() {
  const darkMode = localStorage.getItem("dark");
  if (darkMode) {
    toggleDarkMode();
  }
}
LoadTheme();
