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
      // these IDs from the previous steps
      emailjs.sendForm("contact-service", "contact_form", this).then(
        () => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Failed to send message");
        }
      );
    });
};
