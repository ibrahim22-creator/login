document.getElementById("signup-btn").addEventListener("click", function () {
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
  
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
   
      showDashboard();
    } else {
      alert("Please fill all fields!");
    }
  });
  
  document.getElementById("login-btn").addEventListener("click", function () {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
  
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
  
    if (username === storedUsername && password === storedPassword) {
      
      showDashboard();
    } else {
      alert("Invalid credentials!");
    }
  });
  
  document.getElementById("logout-btn").addEventListener("click", function () {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("auth-container").style.display = "block";
    document.getElementById("login-section").style.display = "block";
    document.getElementById("signup-section").style.display = "none";
  });
  
  document.getElementById("show-login-btn").addEventListener("click", function () {
    document.getElementById("signup-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
  });
  
  document.getElementById("show-signup-btn").addEventListener("click", function () {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("signup-section").style.display = "block";
  });
  
  function showDashboard() {
    document.getElementById("auth-container").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  }
  