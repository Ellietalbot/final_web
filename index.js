let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0"; // Start with hidden slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = "1"; // Show the current slide
  setTimeout(showSlides, 5000); // Change slides every 5 seconds
}

showSlides();

function plantcard_template(icon_name, plant_name, plant_location, brightness, watering, plant_safe) {
  return `
    <div class="card_container">
        <div class="plant_card">
            <img class="plant_img" src="images/${icon_name}.png" alt="plant Image">
            <div class="plant_info">
                <h1>${plant_name}</h1>
                <h2>${plant_location}</h2>
                <p>${brightness}</p>
                <p>${watering}</p>
                <p>${plant_safe}</p>
            </div>
        </div>
    </div>`;
}

// Attach event listener for form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload
  console.log('hi')

});
