const welcomeBtn = document.getElementById("welcomeBtn");

if (welcomeBtn) {
  welcomeBtn.addEventListener("click", function () {
    alert("Welcome to my portfolio!");
  });
}

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}