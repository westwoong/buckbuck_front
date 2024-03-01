window.onload = function() {
    // Get the post ID from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    // Fetch post details using the provided API
    fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(data => {
            // Update HTML elements with post details
            document.getElementById('title').innerText = data.title;
            document.getElementById('content').innerText = data.content;
            document.getElementById('cost').innerText = 'Cost: ' + data.cost;
            document.getElementById('level').innerText = 'Level: ' + data.level;
            document.getElementById('createdAt').innerText = 'Created At: ' + new Date(data.createdAt).toLocaleString();
            document.getElementById('updatedAt').innerText = 'Updated At: ' + new Date(data.updatedAt).toLocaleString();
        })
        .catch(error => console.error('Error fetching post details:', error));
}
