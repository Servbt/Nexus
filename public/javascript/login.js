// login logic
const loginFormHandler = async (event) => {
  event.preventDefault();

  let email = document.querySelector('#email-login').value.trim();
  let password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // POST request to /api/user/login
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });

    console.log(response);

    // good response sends user to homepage
    if (response.ok) {
      document.location.replace('/home');
    } else {
      console.log(response);
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.sign-in-htm')
  .addEventListener('submit', loginFormHandler);
