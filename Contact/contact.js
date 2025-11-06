document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.textContent = "Sending...";
    message.style.color = "#333";

    const formData = new FormData(form);

    try {
      await fetch("https://formcarry.com/s/pVbgbQnu25r", {
        method: "POST",
        body: new FormData(form),
      });
      message.textContent =
        "✅ Thank you! Your message has been sent successfully.";
      message.style.color = "green";
      form.reset();
    } catch (error) {
      message.textContent = "❌ There was an error sending your message.";
      message.style.color = "red";
    }
  });
});
