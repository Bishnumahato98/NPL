document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
  
    errorMessage.textContent = '';
  
    if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters long.';
      return;
    }
  
    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
      return;
    }
 
    
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    localStorage.setItem("confirmPassword",confirmPassword);
      



    window.location.href = 'login.html';
  });
  



















































