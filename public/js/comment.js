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
    
 if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add post');
  }
}

