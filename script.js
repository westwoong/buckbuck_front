// API 호출 및 게시글 목록 표시
fetch('http://localhost:3000/posts?page=1')
    .then(response => response.json())
    .then(data => {
        const postList = document.getElementById('postList');
        data.posts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.classList.add('forum-post');
            postItem.innerHTML = `
                <div class="title"><a href="post_detail.html?id=${post.id}">${post.title}</a></div>
                <div class="writer">${post.nickName}</div>
                <div class="date">${new Date(post.createdAt).toLocaleDateString()}</div>
                <div class="views">-</div>
                <div class="likes">-</div>
            `;
            postList.appendChild(postItem);
        });
    })
    .catch(error => console.error('Error fetching posts:', error));
