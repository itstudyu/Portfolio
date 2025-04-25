// Load shared navbar
fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => {
    const temp = document.createElement("div");
    temp.innerHTML = data;
    document.body.insertBefore(
      temp.firstElementChild,
      document.body.firstChild
    );
    initDropdown(); // Call dropdown setup after loading
  });

function initDropdown() {
  document.querySelectorAll(".dropbtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const dd = btn.closest(".dropdown");
      document.querySelectorAll(".dropdown.open").forEach((d) => {
        if (d !== dd) d.classList.remove("open");
      });
      dd.classList.toggle("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document
        .querySelectorAll(".dropdown.open")
        .forEach((d) => d.classList.remove("open"));
    }
  });
}
// script.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropbtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const dd = btn.closest(".dropdown");
      document.querySelectorAll(".dropdown.open").forEach((d) => {
        if (d !== dd) d.classList.remove("open");
      });
      dd.classList.toggle("open");
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document
        .querySelectorAll(".dropdown.open")
        .forEach((d) => d.classList.remove("open"));
    }
  });
});
