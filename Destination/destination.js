document.addEventListener("DOMContentLoaded", () => {
  // CARD MODALS
  const cards = document.querySelectorAll(".card-button");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const modalId = card.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "flex";
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });

  // FILTER BUTTONS
  const btnContainer = document.getElementById("myBtnContainer");
  const btns = btnContainer.getElementsByClassName("btn");

  function filterSelection(category) {
    const cards = document.getElementsByClassName("filterDiv");
    const filter = category.toLowerCase();
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("show");
      if (filter === "show all") {
        cards[i].classList.add("show");
      } else if (cards[i].classList.contains(filter)) {
        cards[i].classList.add("show");
      }
    }
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      // Remove active class from previous
      const current = btnContainer.getElementsByClassName("active");
      if (current.length > 0) current[0].classList.remove("active");

      // Add active class
      this.classList.add("active");

      // Filter cards
      filterSelection(this.textContent.trim());
    });
  }

  // Initialize: show all cards
  filterSelection("show all");
});
