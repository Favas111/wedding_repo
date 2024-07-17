document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('background-image');
    const header = document.querySelector('.header');

    function resizeHeader() {
        const windowAspectRatio = window.innerWidth / window.innerHeight;
        const imgAspectRatio = img.naturalWidth / img.naturalHeight;

        if (windowAspectRatio > imgAspectRatio) {
            img.style.width = '100%';
            img.style.height = 'auto';
        } else {
            img.style.width = 'auto';
            img.style.height = '100%';
        }
    }

    img.onload = resizeHeader;
    window.addEventListener('resize', resizeHeader);
    window.addEventListener('orientationchange', resizeHeader);

    // Initial call to set the background image size correctly
    if (img.complete) {
        resizeHeader();
    }

    // Countdown logic
    const targetDate = new Date('August 17, 2024 16:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('.days').textContent = days.toString().padStart(2, '0');
        document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.reminder').textContent = "The Big Day is here!";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to set the countdown immediately
});
