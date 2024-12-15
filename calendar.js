const dates = document.getElementById("dates");
const monthElement = document.getElementById("month");
const prev_month_button = document.getElementById("prev");
const next_month_button = document.getElementById("next");

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();

function renderCalendar() {
    dates.innerHTML = ""; // Clear previous calendar
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Update the month heading
    monthElement.textContent = `${months[month]} ${year}`;

    // Calculate the first day of the month and total days in the month
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Add blank divs for the days before the first day
    for (let i = 0; i < firstDay; i++) {
        const blank = document.createElement("div");
        blank.classList.add("date");
        dates.appendChild(blank);
    }

    // Add divs for each date in the month
    for (let i = 1; i <= totalDays; i++) {
        const date = document.createElement("div");
        date.classList.add("date");
        date.textContent = i;
        dates.appendChild(date);
    }
}

// Attach event listeners to navigation buttons
prev_month_button.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

next_month_button.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Render the initial calendar
renderCalendar();
