const browserInfo = {
    appName: navigator.appName,
    appVersion: navigator.appVersion,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
  };
  localStorage.setItem('browserInfo', JSON.stringify(browserInfo));
  
  const footer = document.getElementById('footer-info');
  const storedInfo = JSON.parse(localStorage.getItem('browserInfo'));
  footer.innerHTML = `
    <h3>Інформація про браузер:</h3>
    <ul>
      <li><strong>Назва:</strong> ${storedInfo.appName}</li>
      <li><strong>Версія:</strong> ${storedInfo.appVersion}</li>
      <li><strong>Агент:</strong> ${storedInfo.userAgent}</li>
      <li><strong>Платформа:</strong> ${storedInfo.platform}</li>
      <li><strong>Мова:</strong> ${storedInfo.language}</li>
    </ul>
  `;
  
  fetch('https://jsonplaceholder.typicode.com/posts/19/comments')
    .then(response => response.json())
    .then(comments => {
      const commentsDiv = document.getElementById('comments');
      comments.forEach(comment => {
        const commentBlock = document.createElement('div');
        commentBlock.innerHTML = `
          <h4>${comment.name}</h4>
          <p>${comment.body}</p>
        `;
        commentBlock.classList.add('comment-block');
        commentsDiv.appendChild(commentBlock);
      });
    });
  
  function showModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  setTimeout(showModal, 60000);
  
  document.getElementById('open-modal').addEventListener('click', showModal);
  
  document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
  };
  
  window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  };
  
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  const currentHour = new Date().getHours();
  if (currentHour >= 21 || currentHour < 7) {
    document.body.classList.add('dark-mode');
  }