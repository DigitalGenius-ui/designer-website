const bar = document.querySelector(".bar span");
const close = document.querySelector(".close");
const navMenu = document.querySelector("nav");
const form = document.querySelector(".form");
const nameInput = document.querySelector(".nameInput");
const email = document.querySelector(".emailInput");
const message = document.querySelector(".messageInput");

bar.addEventListener("click", () => {
  navMenu.classList.add("active");
});

close.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// form part
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value == "" && email.value == "" && message.value == "") {
    notification(nameInput, "inputError");
    notification(email, "inputError");
    notification(message, "inputError");
  }

  if (nameInput.value == "") {
    notification(nameInput, "inputError");
  } else if (email.value == "") {
    notification(email, "inputError");
  } else if (message.value == "") {
    notification(message, "inputError");
  } else {
    notification(nameInput, "inputSuccess");
    notification(email, "inputSuccess");
    notification(message, "inputSuccess");
  }
});

function notification(input, className) {
  input.classList.add(className);
}

// scroll animation
AOS.init();
