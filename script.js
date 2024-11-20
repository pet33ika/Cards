const users = [
  {
    image: "https://i.postimg.cc/k5fWsKfY/download.png",
    name: "John Doe",
    email: "johndoe@example.com",
    age: 28,
    info: "A passionate wildlife enthusiast and photographer, often found exploring nature.",
  },
  {
    image: "https://i.postimg.cc/k5fWsKfY/download.png",
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 34,
    info: "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.",
  },
  {
    image: "https://i.postimg.cc/Tw1g41sd/download-2.png",
    name: "Sarah Johnson",
    email: "sarahjohnson@example.com",
    age: 30,
    info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country.",
  },
  {
    image: "https://i.postimg.cc/6Q9dCYLG/download-1.png",
    name: "Mike Brown",
    email: "mikebrown@example.com",
    age: 45,
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
  },
  {
    image: "https://i.postimg.cc/k5fWsKfY/download.png",
    name: "Mike Brown",
    email: "mikebrown@example.com",
    age: 45,
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
  },
  {
    image: "https://i.postimg.cc/Tw1g41sd/download-2.png",
    name: "Mike Brown",
    email: "mikebrown@example.com",
    age: 45,
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
  },
  {
    image: "https://i.postimg.cc/6Q9dCYLG/download-1.png",
    name: "Mike Brown",
    email: "mikebrown@example.com",
    age: 45,
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
  },
  {
    image: "https://i.postimg.cc/k5fWsKfY/download.png",
    name: "Mike Brown",
    email: "mikebrown@example.com",
    age: 45,
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
  },
];

// Populate the container with user cards
const container = document.querySelector(".users-container");
const template = document.querySelector("#user-template");

users.forEach((user) => {
  const clone = template.content.cloneNode(true);

  // Set user data
  clone.querySelector(".user-image").src = user.image;
  clone.querySelector(".user-name").textContent = user.name;
  clone.querySelector(".user-email").textContent = user.email;
  clone.querySelector(".user-age").textContent = `${user.age} years old`;
  clone.querySelector(".user-info").textContent = user.info;

  // Add functionality to close button
  clone.querySelector(".btn-close").addEventListener("click", (e) => {
    const card = e.target.closest(".user-container"); // Find the closest card
    card.remove(); // Remove it from the DOM
  });

  container.appendChild(clone);
});
