document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const dbStatus = document.getElementById('dbStatus');
  const messageBox = document.getElementById('messageBox');
  const btnGetUsers = document.getElementById('btnGetUsers');
  const usersList = document.getElementById('usersList');

  function showMessage(text, isError = false) {
    messageBox.textContent = text;
    messageBox.className = isError ? 'error' : '';
    messageBox.classList.remove('hidden');
  }

  // Handle Registration
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();

      if (response.ok) {
        showMessage(data.message || 'Registration successful!');
        registerForm.reset();
      } else {
        showMessage(data.message || 'Registration failed.', true);
      }
    } catch (err) {
      showMessage('Cannot connect to the server.', true);
    }
  });

  // Handle Login
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();

      if (response.ok) {
        showMessage(data.message || 'Login successful!');
        loginForm.reset();
      } else {
        showMessage(data.message || 'Login failed.', true);
      }
    } catch (err) {
      showMessage('Cannot connect to the server.', true);
    }
  });

  // Handle Get Users
  btnGetUsers.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/getuser');
      const data = await response.json();

      if (response.ok) {
        usersList.textContent = JSON.stringify(data, null, 2);
        usersList.classList.remove('hidden');
      } else {
        showMessage('Failed to fetch users.', true);
      }
    } catch (err) {
      showMessage('Cannot connect to the server.', true);
    }
  });

  // Check database status
  async function checkDbStatus() {
    try {
      const response = await fetch('/api/status');
      const data = await response.json();
      if (data.connected) {
        dbStatus.textContent = 'Database Link: Connected';
        dbStatus.style.color = '#385723';
      } else {
        dbStatus.textContent = 'Database Link: Offline';
        dbStatus.style.color = '#c00000';
      }
    } catch (err) {
      dbStatus.textContent = 'Database Link: Server Offline';
      dbStatus.style.color = '#c00000';
    }
  }

  checkDbStatus();
  setInterval(checkDbStatus, 5000);
});
