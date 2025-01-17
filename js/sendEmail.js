(function () {
  emailjs.init({
    publicKey: "IGdCd_1QKEOyeP9U2",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Perform validation
      const name = document.getElementById("inputName").value.trim();
      const email = document.getElementById("inputEmail").value.trim();
      const message = document.getElementById("inputText").value.trim();

      // Check if fields are filled
      if (!name || !email || !message) {
        console.log("Please fill in all fields.");
        return; // Stop further execution if validation fails
      }

      // Validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        console.log("Please enter a valid email address.");
        return;
      }

      // Send the form through EmailJS if validation passes
      emailjs.sendForm("contact-service", "contact_form", this).then(
        () => {
          alert("Message sent successfully");
          // Optional: Clear form fields after submission
          document.getElementById("contact-form").reset();
        },
        (error) => {
          alert("Failed to send message");
        }
      );
    });
};
