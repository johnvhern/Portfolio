function copyEmail() {
  const textToCopy = document.getElementById("email-address").innerText;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        handleButtonTextChange();
      })
      .catch(() => {
        // Fallback if navigator.clipboard fails
        copyToClipboardFallback(textToCopy);
      });
  } else {
    // Fallback if Clipboard API is not supported
    copyToClipboardFallback(textToCopy);
  }
}

function copyToClipboardFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy"); // Fallback for unsupported Clipboard API
  document.body.removeChild(textarea);
  handleButtonTextChange();
}

function handleButtonTextChange() {
  const btnCopy = document.getElementById("btn-copy");
  const isSmallScreen = window.innerWidth <= 935;

  // Change button text to "Copied!"
  btnCopy.innerText = "Copied!";

  setTimeout(() => {
    // Revert text back to "Email" or "Copy" based on screen width
    btnCopy.innerText = isSmallScreen ? "Email" : "Copy";
  }, 1500);
}

function updateCopyEmailBtn() {
  const btnCopy = document.querySelector(".btn-copy");
  if (window.innerWidth <= 935) {
    btnCopy.textContent = "Email";
  } else {
    btnCopy.textContent = "Copy";
  }
}

window.addEventListener("resize", updateCopyEmailBtn);
window.addEventListener("load", updateCopyEmailBtn);

document.getElementById("btn-copy").addEventListener("click", copyEmail);

function downloadCV() {
  window.open(
    "https://drive.google.com/file/d/1otnBMCGNQqlTBDiIs-9eL6Gia8h2JV24/view?usp=sharing",
    "_blank"
  );
}

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
