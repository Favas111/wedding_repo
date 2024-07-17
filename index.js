// Function to adjust background image size based on viewport dimensions
function adjustBackgroundSize() {
    var header = document.querySelector('.header');
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    // Calculate aspect ratio of the viewport
    var viewportRatio = viewportWidth / viewportHeight;

    // Set the background image size based on aspect ratio
    if (viewportRatio > 1.5) {
        // Landscape orientation or wider screens
        header.style.backgroundSize = 'cover';
    } else {
        // Portrait orientation or narrower screens
        header.style.backgroundSize = 'contain';
    }
}

// Initial call to adjust background size on page load
adjustBackgroundSize();

// Event listener for window resize
window.addEventListener('resize', adjustBackgroundSize);

// Function to calculate remaining time until a specific end time
function getRemainingTime(endTime) {
    var dt = Date.parse(endTime) - Date.parse(new Date());
    var seconds = Math.floor((dt / 1000) % 60);
    var minutes = Math.floor((dt / 1000 / 60) % 60);
    var hours = Math.floor((dt / (1000 * 60 * 60)) % 24);
    var days = Math.floor(dt / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
}

// Function to initialize countdown timer
function initRemainingTime(id, endTime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateRemainingTime() {
        var t = getRemainingTime(endTime);
        daysSpan.innerHTML = ('0' + t.days).slice(-2);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.days <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateRemainingTime();
    var timeInterval = setInterval(updateRemainingTime, 1000);
}

// Set the wedding date and time (adjust as needed)
var weddingDate = new Date('2024-08-17T16:00:00');
initRemainingTime('reminder-clock', weddingDate);
