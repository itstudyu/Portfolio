// Load shared navbar
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {
      const temp = document.createElement("div");
      temp.innerHTML = data;
      document.body.insertBefore(
        temp.firstElementChild,
        document.body.firstChild
      );
      initDropdown(); // Run dropdown setup after navbar is loaded
    });
});

function initDropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropbtn");
    const menu = dropdown.querySelector(".dropdown-content");

    // Toggle dropdown
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Close all other dropdowns
      dropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("open");
          d.querySelector(".dropbtn").setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("open");
      button.setAttribute("aria-expanded", !isExpanded);
    });

    // Handle keyboard navigation
    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        button.click();
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      }
    });

    // Handle keyboard navigation in menu
    const menuItems = menu.querySelectorAll("a");
    menuItems.forEach((item, index) => {
      item.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          dropdown.classList.remove("open");
          button.setAttribute("aria-expanded", "false");
          button.focus();
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          const nextIndex = (index + 1) % menuItems.length;
          menuItems[nextIndex].focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
          menuItems[prevIndex].focus();
        }
      });
    });
  });
}
