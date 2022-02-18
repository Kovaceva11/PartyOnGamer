const newFormHandler = async (event) => {
  event.preventDefault();

  const pogUsername = document.querySelector('#pogUsername').value.trim();
  const steamID = document.querySelector('#steamID').value.trim();
  const battlenetID = document.querySelector('#battlenetID').value.trim();
  const twitchID = document.querySelector('#twitchID').value.trim();

  if (pogUsername && steamID && battlenetID && twitchID) {
    const response = await fetch(`/api/profiles`, {
      method: 'POST',
      body: JSON.stringify({ pogUsername, steamID, battlenetID, twitchID }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create profile');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/profiles/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete profile');
//     }
//   }
// };

document
  .querySelector('.create-profile')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.profile-list')
//   .addEventListener('click', delButtonHandler);
