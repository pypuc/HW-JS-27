document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('bookmarkInput');
    const addBtn = document.getElementById('addBookmarkBtn');
    const list = document.getElementById('bookmarkList');
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  
    function save() {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  
    function render() {
      list.innerHTML = '';
      bookmarks.forEach((url, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.textContent = url;
        a.target = "_blank";
  
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Видалити';
        delBtn.onclick = function() {
          bookmarks.splice(index, 1);
          save();
          render();
        };
  
        li.appendChild(a);
        li.appendChild(delBtn);
        list.appendChild(li);
      });
    }
  
    addBtn.onclick = function() {
      const url = input.value.trim();
      if (url) {
        bookmarks.push(url);
        save();
        render();
        input.value = '';
      }
    };
  
    render();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const saveBtn = document.getElementById('saveBtn');
  
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
  
    if (savedUsername) usernameInput.value = savedUsername;
    if (savedPassword) passwordInput.value = savedPassword;
  
    saveBtn.addEventListener('click', () => {
      localStorage.setItem('username', usernameInput.value);
      localStorage.setItem('password', passwordInput.value);
      alert('дані збережено');
    });
  });
  
  