const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

function updateClock() {
    let date = new Date();

    // Get current hours, minutes, and seconds
    let hh = date.getHours() % 12; // Convert to 12-hour format
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculate rotations for each hand
    let hrRotation = 30 * hh + mm / 2; // 30 degrees per hour + minute adjustment
    let minRotation = 6 * mm; // 6 degrees per minute
    let secRotation = 6 * ss; // 6 degrees per second

    // Apply transformations to rotate hands
    hourHand.style.transform = `translateX(-50%) rotate(${hrRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
