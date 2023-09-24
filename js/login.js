// Get references to the login form and its elements
const loginForm = document.querySelector('#login form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Add an event listener to the login form
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the input values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Perform client-side validation if needed

  // Send a POST request to the server to handle login (you'll need to implement this)
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Redirect to the user's dashboard or perform any other action
      window.location.href = '/dashboard.html';
    } else {
      // Handle login error, show a message to the user, etc.
      console.error('Login failed');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
