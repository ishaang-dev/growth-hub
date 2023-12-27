console.log(
  "╔═╗╦═╗╔═╗╦ ╦╔╦╗╦ ╦  ╦ ╦╦ ╦╔╗\n║ ╦╠╦╝║ ║║║║ ║ ╠═╣  ╠═╣║ ║╠╩╗\n╚═╝╩╚═╚═╝╚╩╝ ╩ ╩ ╩  ╩ ╩╚═╝╚═╝"
);

// Set height of each section
const height = window.innerHeight;
const sectionElements = document.querySelectorAll("section");

sectionElements.forEach((section) => {
  section.style.height = `${height}px`;
});

// Smooth scroll animation function
function scrollToSection(element) {
  document
    .querySelector(element)
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollAnimation(event, hyperlink) {
  event.preventDefault();
  scrollToSection(hyperlink);
}

// Handle form submission overriding Netlify
function submitForm(event) {
  event.preventDefault();

  const form = document.querySelector('form[name="admissionForm"]');
  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      setTimeout(() => {
        form.reset();
        grecaptcha.reset();
        expiredCallback();
        scrollToSection("#about");
        setTimeout(() => {
          alert("Form submitted successfully!");
        }, 1500);
      }, 200);
    })
    .catch((error) => console.error(error));
}

function recaptchaCallback() {
  const submitButton = document.getElementById("submitButton");
  submitButton.removeAttribute("disabled");
  submitButton.classList.add("submitEnabled");
}

function expiredCallback() {
  const submitButton = document.getElementById("submitButton");
  submitButton.setAttribute("disabled", true);
  submitButton.classList.remove("submitEnabled");
}

// Changes color variables for each section
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  if (section.classList.contains("red")) {
    section.style.setProperty("--pr-color", "var(--pr-red)");
    section.style.setProperty("--gr-color", "var(--gr-red)");
  } else if (section.classList.contains("green")) {
    section.style.setProperty("--pr-color", "var(--pr-green)");
    section.style.setProperty("--gr-color", "var(--gr-green)");
  } else if (section.classList.contains("purple")) {
    section.style.setProperty("--pr-color", "var(--pr-purple)");
    section.style.setProperty("--gr-color", "var(--gr-purple)");
  } else if (section.classList.contains("yellow")) {
    section.style.setProperty("--pr-color", "var(--pr-yellow)");
    section.style.setProperty("--gr-color", "var(--gr-yellow)");
  }
});

// Capitalize input names in form
document.addEventListener("DOMContentLoaded", function () {
  const studentNameInput = document.querySelector('input[name="studentName"]');
  const fatherNameInput = document.querySelector('input[name="fatherName"]');

  function UpperCaseName(inputNameElement) {
    inputNameElement.addEventListener("input", function () {
      if (this.value.length < 6) {
        return;
      }
      this.value = this.value.toUpperCase();
    });
  }

  if (studentNameInput && fatherNameInput) {
    UpperCaseName(studentNameInput);
    UpperCaseName(fatherNameInput);
  }
});
