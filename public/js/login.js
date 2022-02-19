const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profiles');
      } else {
        alert(response.statusText);
      };

      if (response.ok) {
        console.log('successful login')
      }
    }
  };
  
  // const signupFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const pog_username = document.querySelector('#pog_username').value.trim();
  //   const email = document.querySelector('#email').value.trim();
  //   const password = document.querySelector('#password').value.trim();
  //   const steamID = document.querySelector('#steamID').value.trim();
  //   const battlenetID = document.querySelector('#battlenetID').value.trim();
  //   const twitchID = document.querySelector('#twitchID').value.trim();

  //   // adding additional properties.
  
  //   if (pog_username && email && password && steamID && battlenetID && twitchID) {
  //     const response = await fetch('/api/pogProfile', {
  //       method: 'POST',
  //       body: JSON.stringify({ pog_username, email, password, steamID, battlenetID, twitchID}),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert(response.statusText);
  //     }
  //   }

  //   // create a post to a second db for user profiles
  // };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  // document
  //   .querySelector('.create-profile')
  //   .addEventListener('submit', signupFormHandler);