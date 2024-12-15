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
  
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  // Fetch values dynamically on form submission
  const icon_name = document.querySelector('input[name="plant_icon"]:checked')?.value || 'default_icon';
  const plant_name = document.querySelector('#plant_name').value.trim();
  const plant_location = document.querySelector('#plant_location').value.trim();
  const brightness = document.querySelector('input[name="light_condition"]:checked')?.value || 'N/A';
  const watering = document.querySelector('input[name="water_condition"]:checked')?.value || 'N/A';
  const plant_safe = document.querySelector('input[name="pet_friendly"]:checked')?.value || 'N/A';
  const no_plant = document.getElementById('no_plant')

  no_plant.style.display = 'none';

  if (!plant_name || !plant_location) {
    alert("Please fill in all required fields."); // Validation check
    return;
  }

  const container = document.querySelector('.my_plants');
  const newCard = plantcard_template(icon_name, plant_name, plant_location, brightness, watering, plant_safe);

  // Append new card to container
  container.insertAdjacentHTML('beforeend', newCard); // Use insertAdjacentHTML for better performance
});

