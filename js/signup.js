// Get references to the signup form and its elements
const signupForm = document.querySelector('#signup form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

// Add an event listener to the signup form
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the input values
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Perform client-side validation if needed

  // Check if the passwords match
  if (password !== confirmPassword) {
    console.error('Passwords do not match');
    return;
  }

  // Send a POST request to the server to handle signup (you'll need to implement this)
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      // Redirect to the login page or perform any other action
      window.location.href = '/page.html';
    } else {
      // Handle signup error, show a message to the user, etc.
      console.error('Signup failed');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
