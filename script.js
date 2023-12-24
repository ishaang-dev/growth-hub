// Smooth scroll animation function
function scrollToSection(element) {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Add click event listeners to the anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      scrollToSection(targetId);
    });
  });
});

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  if (section.classList.contains("red")) {
    section.style.setProperty("--tx-color", "var(--tx-red)");
    section.style.setProperty("--bg-color", "var(--bg-red)");
    section.style.setProperty("--pr-color", "var(--pr-red)");
    section.style.setProperty("--sc-color", "var(--sc-red)");
    section.style.setProperty("--gr-color", "var(--gr-red)");
    // Apply other styles as needed
  } else if (section.classList.contains("green")) {
    section.style.setProperty("--tx-color", "var(--tx-green)");
    section.style.setProperty("--bg-color", "var(--bg-green)");
    section.style.setProperty("--pr-color", "var(--pr-green)");
    section.style.setProperty("--sc-color", "var(--sc-green)");
    section.style.setProperty("--gr-color", "var(--gr-green)");
    // Apply other styles as needed
  } else if (section.classList.contains("purple")) {
    section.style.setProperty("--tx-color", "var(--tx-purple)");
    section.style.setProperty("--bg-color", "var(--bg-purple)");
    section.style.setProperty("--pr-color", "var(--pr-purple)");
    section.style.setProperty("--sc-color", "var(--sc-purple)");
    section.style.setProperty("--gr-color", "var(--gr-purple)");
    // Apply other styles as needed
  } else if (section.classList.contains("yellow")) {
    section.style.setProperty("--tx-color", "var(--tx-yellow)");
    section.style.setProperty("--bg-color", "var(--bg-yellow)");
    section.style.setProperty("--pr-color", "var(--pr-yellow)");
    section.style.setProperty("--sc-color", "var(--sc-yellow)");
    section.style.setProperty("--gr-color", "var(--gr-yellow)");
    // Apply other styles as needed
  }
  // Add more conditions for other classes/colors if needed
});
