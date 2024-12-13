// script.js

// Get the elements
const logo = document.getElementById('logo');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Add event listener for logo to refresh the page
logo.addEventListener('click', () => {
  location.reload();
});

// Add event listener for tabs
tabBtns.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and content
    tabBtns.forEach((btn) => btn.classList.remove('active'));
    tabContents.forEach((content) => content.classList.remove('active'));

    // Add active class to the clicked button and corresponding content
    button.classList.add('active');
    document.getElementById(`contentTab${index + 1}`).classList.add('active');

    // Add font animation
    button.style.animation = 'font-change 1s ease-in-out';
    setTimeout(() => {
      button.style.animation = '';
    }, 1000);
  });
});

// Right-click to open in a new tab (works automatically with default browser behavior)
logo.addEventListener('contextmenu', (e) => {
  e.preventDefault(); // prevent default right-click menu
  window.open(location.href, '_blank'); // open site in a new tab
});

// Set the first tab as active by default when the page loads
window.addEventListener('load', () => {
  tabBtns[0].classList.add('active'); // Activate the first tab button
  tabContents[0].classList.add('active'); // Show the first tab content
});
