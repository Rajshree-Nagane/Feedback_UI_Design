// Variable Declarations
const ratings = document.querySelectorAll(".rating");  // Collection of rating elements
const ratingsContainer = document.querySelector(".ratings-container");  // Container for ratings
const sendButton = document.getElementById("send");  // Send button element
const panel = document.getElementById("panel");  // Panel to display feedback
let selectedRating = "Satisfied";  // Default selected rating

// Function to remove the "active" class from all rating elements
const removeActive = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
};

// Event Listener for Rating Clicks
ratingsContainer.addEventListener("click", (e) => {
  // Check if the clicked element's parent has the "rating" class
  if (e.target.parentNode.classList.contains("rating")) {
    // Remove the "active" class from all ratings
    removeActive();
    // Add the "active" class to the clicked rating
    e.target.parentNode.classList.add("active");
    // Update selectedRating with the value of the next sibling's inner HTML
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

// Event Listener for Send Button Click
sendButton.addEventListener("click", (e) => {
  // Update the panel with a thank-you message and the selected rating
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});
