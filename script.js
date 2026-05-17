const hours = document.querySelector("#hours span");
const minutes = document.querySelector("#minutes span");
const seconds = document.querySelector("#seconds span");
const day = document.querySelector(".period h5");

const dateEl = document.querySelector(".date h3");
const weekdayEl = document.querySelector(".date h5");
const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];

function updateClock() {
    const now = new Date();

    let gethours = now.getHours();
    let getminutes = now.getMinutes();
    let getseconds = now.getSeconds();
    let period;
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    let weekday = weekdays[now.getDay()];

    // AM / PM Updation
    if (gethours >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    // Convert to 12-hour format
    gethours = gethours % 12;

    if (gethours === 0) {
        gethours = 12;
    }

    // Leading zero for hours
    if (gethours < 10) {
        gethours = "0" + gethours;
    }

    // Leading zero for minutes
    if (getminutes < 10) {
        getminutes = "0" + getminutes;
    }

    // Leading zero for seconds
    if (getseconds < 10) {
        getseconds = "0" + getseconds;
    }

    // Update UI (clock)
    hours.textContent = gethours;
    minutes.textContent = getminutes;
    seconds.textContent = getseconds;
    day.textContent = period;
    weekdayEl.textContent = weekday;
    dateEl.textContent = `${month} ${date}, ${year}`;
   
}

// Run once
updateClock();

// Run every second
setInterval(updateClock, 1000);