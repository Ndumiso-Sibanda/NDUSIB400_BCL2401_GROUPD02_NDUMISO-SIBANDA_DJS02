const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
 event.preventDefault();

 const entries = new FormData(event.target);
 const { dividend, divider } = Object.fromEntries(entries);

 // Check if inputs are empty
 if (dividend.trim() === "" || divider.trim() === "") {
  result.innerText = "Both values are required in inputs. Please try again.";
  result.classList.add("error-message");
  return;
 }

 // Check if inputs are valid numbers
 if (isNaN(dividend) || isNaN(divider)) {
  result.innerText = "Invalid inputs. Enter valid numbers.";
  result.classList.add("error-message");
  return;
 }
 // Check for division by zero
 if (divider == 0) {
  result.innerText =
   "Division by zero is not allowed. Please enter a valid divider.";
  result.classList.add("error-message");
  return;
 }
 // Perform the division
 result.innerText = Math.floor(dividend / divider);
 result.classList.remove("error-message");
});
