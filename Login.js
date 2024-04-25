// Login Functionality

document
  .getElementById("input-login-btn")
  .addEventListener("click", function () {
    const emailInput = document.getElementById("input-email");
    const userEmail = emailInput.value;
    emailInput.value = "";

    const passwordInput = document.getElementById("input-password");
    const userPassword = passwordInput.value;
    passwordInput.value = "";

    if (userEmail == "omarfaruk@gmail.com" && userPassword == "omarfaruk") {
      //   alert("Login Successful");
      window.location.href = "Transection.html";
    } else {
      alert("Please input correct email or password");
    }
  });
