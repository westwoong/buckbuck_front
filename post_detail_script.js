window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(data => {
            const post = data.post;
            document.getElementById('title').innerText = post.title;
            document.getElementById('content').innerText = post.content;
            document.getElementById('cost').innerText = 'Cost: ' + post.cost;
            document.getElementById('level').innerText = 'Level: ' + post.level;
            document.getElementById('createdAt').innerText = 'Created At: ' + new Date(post.createdAt).toLocaleString();
        })
        .catch(error => console.error('Error fetching post details:', error));
}
