document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  let timer;

  function showSlides(n) {
    if (typeof n === "number") {
      slideIndex = n;
      clearTimeout(timer);
    } else {
      slideIndex++;
    }

    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");

    timer = setTimeout(() => showSlides(), 3000);
  }

  // Add click listeners to dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => showSlides(i));
  }

  showSlides();

  // Get all cards
  const cards = document.querySelectorAll(".card-button");

  // Add click event to each card
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const modalId = card.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "flex"; // only opens on click
    });
  });

  // Close modal when clicking X
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.style.display = "none";
    });
  });

  // Close modal when clicking outside content
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
});
