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
 result.innerText = dividend / divider;
});
