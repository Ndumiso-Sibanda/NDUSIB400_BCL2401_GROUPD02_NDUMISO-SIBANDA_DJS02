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
   "Division not performed. Invalid number provided. Try again.";
  result.classList.add("error-message");
  console.error(
   "Division by zero error. Dividend:",
   dividend,
   "Divider:",
   divider
  );
  return;
 }

 // Perform the division
 result.innerText = Math.floor(dividend / divider);
 result.classList.remove("error-message");
});

/**###Scenario: Providing anything that is not a number should crash the program

- GIVEN that the submit button is pressed
- WHEN 'any key that is not a number’ is entered into the first input
- AND ‘ any key that is not a number’ is entered into the second input.
AND again if 'any key that is not a number’ is entered into the first input
THEN any number is entered
AND again if 'any number is entered’ into the first input
THEN 'any key that is not a number' is entered
- THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
**/
