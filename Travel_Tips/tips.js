document.addEventListener("DOMContentLoaded", () => {
  const accordionTitles = document.querySelectorAll(".accordionTitle");

  accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
      if (accordionTitle.classList.contains("is-open")) {
        accordionTitle.classList.remove("is-open");
      } else {
        const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
        accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
          accordionTitleWithIsOpen.classList.remove("is-open");
        });
        accordionTitle.classList.add("is-open");
      }
    });
  });

  const tipsContainer = document.querySelector(".tipcard-container");
  if (!tipsContainer) {
    console.error("Tip Card container not found");
    return;
  }

  const Tipcards = [
    {
      title: "Before You Go",
      description: [
        "Pack light but smart",
        "Check visa requirements",
        "Make copies of important documents",
      ],
      image: "../images/BeforeTrip.jpg",
      link: "https://travel.state.gov/en/international-travel/planning.html",
    },
    {
      title: "During Your Trip",
      description: [
        "Try local cuisines",
        "Use public transport",
        "Stay hydrated",
      ],
      image: "../images/DuringTrip.png",
    },
    {
      title: "Sustainable Travel",
      description: [
        "Reduce plastic use",
        "Respect local culture",
        "Choose eco-friendly accommodations",
      ],
      image: "../images/SustainableTravel.png",
      link: "https://your.yale.edu/workplace-services/business-travel/travel-guidance/sustainable-travel-tips",
    },
  ];

  Tipcards.forEach((results) => {
    const listItems = results.description
      .map((item) => `<li>${item}</li>`)
      .join("");

    const linkHTML = results.link
      ? `<a href="${results.link}" target="_blank" class="tip-link">Learn more →</a>`
      : "";

    const Tipcontent = `
      <div class="tip-card-body">
        <div class="tip-card">
          <div class="tip-card-header">
            <img src="${results.image}" class="tip-card-image" alt="${results.title}" />
            <h5>${results.title}</h5>
          </div>
          <div class="tip-card-content">
            <ul>${listItems}</ul>
            ${linkHTML}
          </div>
        </div>
      </div>
    `;
    tipsContainer.innerHTML += Tipcontent;
  });

  const textbox = document.querySelector(".subheader");
  if (!textbox) {
    console.error("Textbox not found");
    return;
  }

  const h1 = document.createElement("h1");
  h1.textContent = "Essential Travel Resources";
  textbox.appendChild(h1);
});
