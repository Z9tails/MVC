async function commentFormHandler(event) {
  
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const postId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  
  if (comment_text) {
    console.log("*******", postId)
    const response = await fetch('/api/comments', {
      method: 'post',
      body: JSON.stringify({
        postId: postId,
        comment_text: comment_text,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
