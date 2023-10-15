// Select the input element and the button element
const inputElement = document.querySelector(".input");
const buttonElement = document.querySelector(".abc");

// Add click event listener to the button
buttonElement.addEventListener("click", function () {
  // Get the value from the input element
  const inputValue = inputElement.value;

  // Log the input value to the console (you can do any other operation with this value)
  console.log("Input Value:", inputValue);
});
