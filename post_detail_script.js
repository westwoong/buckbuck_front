window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').innerText = data.title;
            document.getElementById('content').innerText = data.content;
            document.getElementById('cost').innerText = 'Cost: ' + data.cost;
            document.getElementById('level').innerText = 'Level: ' + data.level;
            document.getElementById('createdAt').innerText = 'Created At: ' + new Date(data.createdAt).toLocaleString();
            document.getElementById('updatedAt').innerText = 'Updated At: ' + new Date(data.updatedAt).toLocaleString();
        })
        .catch(error => console.error('Error fetching post details:', error));
}
