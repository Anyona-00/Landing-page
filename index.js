
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-link');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation links container
  navLinks.classList.toggle('active');
});

