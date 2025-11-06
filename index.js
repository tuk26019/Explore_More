// import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  const container = document.querySelector(".card-containers");
  if (!container) {
    console.error("Card container not found");
    return;
  }

  const cards = [
    {
      title: "Destinations",
      description: "Explore breathtaking places around the globe",
      image: "./images/Nature.jpeg",
      link: "./Destination/destination.html",
    },
    {
      title: "Food",
      description: "Discover flavors from every corner of the world",
      image: "./images/Byrek.png",
      link: "./Food/food.html",
    },
    {
      title: "Travel Tips",
      description: "Get practical advice to make your journey smoother",
      image: "./images/TravelTips.jpg",
      link: "./Travel_Tips/tips.html",
    },
  ];

  cards.forEach((results) => {
    const content = `
      <a href="${results.link}" class="card-link">
        <div class="card-body">
          <div class="card">
            <div class="cardHeader">
              <img src="${results.image}" class="cardImage" />
            </div>
            <div class="cardBody">
              <h5>${results.title}</h5>
              <p>${results.description}</p>
            </div>
          </div>
        </div>
      </a>
    `;
    container.innerHTML += content;
  });

  const textbox = document.querySelector(".subtitle");
  if (!textbox) {
    console.error("Textbox not found");
    return;
  }

  const h3 = document.createElement("h3");
  h3.textContent =
    "Welcome to Explore More. Your Gateway to Adventure and Flavor from around the world. Whether you're chasing sunsets on distant beaches or discovering hidden cafes in your hometown, we're here to inspire every step of your journey.";
  textbox.appendChild(h3);

  const h1 = document.createElement("h1");
  h1.textContent = "What Would You Like to Explore?";
  textbox.appendChild(h1);
});
