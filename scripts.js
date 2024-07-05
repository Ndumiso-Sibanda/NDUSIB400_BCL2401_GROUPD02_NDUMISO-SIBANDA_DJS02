const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const criticalErrorDiv = document.querySelector('.critical-error');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if input fields are empty
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    result.classList.add("error-message");
    return;
  }

  // Check for division by zero
  if (divider === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    result.classList.add("error-message");
    console.error("Division by zero not permitted", new Error().stack);
    return;
  }

  // Check if inputs are valid numbers
  if (isNaN(dividend) || isNaN(divider)) {
    criticalErrorDiv.style.display = 'block';
    console.error("Invalid input provided", new Error().stack);
    return;
  }

  // Perform the division and display the result
  const finalCalculation = Math.trunc(dividend / divider);
  result.innerText = finalCalculation;
  result.classList.remove("error-message");
});
