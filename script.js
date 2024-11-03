// Initialize the count variable
let count = 0;

// Get references to the display and buttons
const countDisplay = document.getElementById('count-display');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Function to update the display
function updateDisplay() {
    countDisplay.textContent = count; // Update the displayed count
}

// Event listener for the Increment button
incrementButton.addEventListener('click', () => {
    count++; // Increase count by 1
    updateDisplay(); // Update the display
});

// Event listener for the Decrement button
decrementButton.addEventListener('click', () => {
    count--; // Decrease count by 1
    updateDisplay(); // Update the display
});

// Event listener for the Reset button
resetButton.addEventListener('click', () => {
    count = 0; // Reset count to 0
    updateDisplay(); // Update the display
});

// Initialize the display on page load
updateDisplay();
