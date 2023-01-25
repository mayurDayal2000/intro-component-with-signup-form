const form = document.querySelector(".subscription-component form");
const inputs = document.querySelectorAll(".subscription-component input");

const isEmptyMsgArr = ["First Name", "Last Name", "Email Address", "Password"];

const isValidMsgArr = [
  "real given name",
  "real family name",
  "valid email",
  "Password must be between 2 to 15 characters",
];

const isValidPattern = [
  /^[a-zA-Z]+$/,
  /^[a-zA-Z]+$/,
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
  /^[A-Za-z0-9]\w{2,14}$/,
];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  inputs.forEach((input, index) => {
    let inputValue = input.value.trim();

    const emptyInput = inputValue.length === 0;
    const validInput = inputValue.match(isValidPattern[index]);

    if (emptyInput) {
      input.parentElement.classList.add("warning");
      input.nextElementSibling.textContent = `${isEmptyMsgArr[index]} cannot be empty`;
    }

    if (!emptyInput && !validInput) {
      input.parentElement.classList.add("warning");
      input.nextElementSibling.textContent = `Looks like this is not a ${isValidMsgArr[index]}`;

      if (index === 3) {
        input.nextElementSibling.textContent = `${isValidMsgArr[index]}`;
      }
    }

    if (!emptyInput && validInput) {
      input.parentElement.classList.remove("warning");
      input.nextElementSibling.textContent = "";
      form.parentElement.classList.add("success");
    } else {
      form.parentElement.classList.remove("success");
    }
  });
});

window.addEventListener("beforeunload", () => {
  form.reset();
});
