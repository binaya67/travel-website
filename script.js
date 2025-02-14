// Form Submission Handling
document.getElementById('travelForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;
  const travelers = document.getElementById('travelers').value;

  alert(`Travel package checked!\nDestination: ${destination}\nDate: ${date}\nTravelers: ${travelers}`);
});

// Newsletter Subscription
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.querySelector('#newsletterForm input').value;
  alert(`Thank you for subscribing! You will receive updates at ${email}.`);
});

// Bottom Tracker Interaction
const trackerDots = document.querySelectorAll('.tracker-dot');
let currentSlide = 0;

function updateTracker() {
  trackerDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % trackerDots.length;
  updateTracker();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + trackerDots.length) % trackerDots.length;
  updateTracker();
}

trackerDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateTracker();
  });
});
// script.js
function handleSearch() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = "block"; // Show matching cards
    } else {
      card.style.display = "none"; // Hide non-matching cards
    }
  });
}
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    darkModeToggle.innerHTML = '<i class="ri-sun-line"></i>';
  }
}

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    darkModeToggle.innerHTML = '<i class="ri-moon-line"></i>';
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkModeToggle.innerHTML = '<i class="ri-sun-line"></i>';
  }
});


// Travel Quiz Logic
const quizButtons = document.querySelectorAll("#quiz button");
const quizResult = document.getElementById("quizResult");

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const points = parseInt(button.getAttribute("data-points"));
    let resultText = "";

    if (points === 1) {
      resultText = "You should visit Bali, Indonesia! Enjoy the beaches and tropical vibes.";
    } else if (points === 2) {
      resultText = "You should visit Paris, France! Explore the bustling city and its iconic landmarks.";
    } else if (points === 3) {
      resultText = "You should visit Tokyo, Japan! Experience the perfect blend of tradition and modernity.";
    }

    quizResult.innerHTML = `<p>${resultText}</p>`;
  });
});