// Set the target date for the event
const targetDate = new Date("December 31, 2024 23:59:59").getTime();

// Update the countdown every second
const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the HTML
    document.getElementById("days").querySelector(".countdown-number").innerText = days;
    document.getElementById("hours").querySelector(".countdown-number").innerText = hours;
    document.getElementById("minutes").querySelector(".countdown-number").innerText = minutes;
    document.getElementById("seconds").querySelector(".countdown-number").innerText = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = "Event has started!";
    }
}, 1000);
