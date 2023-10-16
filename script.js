// Get all trash icons in the document
const trashIcons = document.querySelectorAll(".fa-trash-alt");

// Add click event listener to each trash icon
trashIcons.forEach((trashIcon) => {
  trashIcon.addEventListener("click", function () {
    // Show a confirmation dialog
    const isConfirmed = confirm("Are you sure you want to delete this todo?");

    // If user confirms, delete the todo item
    if (isConfirmed) {
      const listItem = this.parentElement.parentElement;
      listItem.remove();
    }
  });
});

// Add functionality to add new todos
const todoInput = document.getElementById("12");
const todoList = document.querySelector("ul");

todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && todoInput.value.trim() !== "") {
    // Create a new li element
    const newTodo = document.createElement("li");
    newTodo.innerHTML = `<span><i class="far fa-trash-alt"></i></span> ${todoInput.value.trim()}`;

    // Add click event listener to the new trash icon
    const trashIcon = newTodo.querySelector(".fa-trash-alt");
    trashIcon.addEventListener("click", function () {
      // Show a confirmation dialog
      const isConfirmed = confirm("Are you sure you want to delete this todo?");

      // If user confirms, delete the todo item
      if (isConfirmed) {
        const listItem = this.parentElement.parentElement;
        listItem.remove();
      }
    });

    // Append the new li element to the ul
    todoList.appendChild(newTodo);

    // Clear the input field
    todoInput.value = "";
  }
});
