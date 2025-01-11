
  
  // Form Validation
  document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
  
    if (!name || !email || !mobile) {
      alert("All fields are required!");
      return;
    }
  
    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
  
    alert("Form submitted successfully!");
  });
  