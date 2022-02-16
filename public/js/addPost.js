function addPost(event) {
    event.preventDefault();

    const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
           username,
           post, 
        }),
        headers: {

        },
    }),
    
 //if the post is added, the 'all' template will be rerendered
 if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add post');
  }
}

//document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
