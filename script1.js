function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;

    const day = now.toLocaleString('default', { weekday: 'long' });
    const month = now.toLocaleString('default', { month: 'long' });
    const date = now.getDate();
    const year = now.getFullYear();

    const dateString = `${day}, ${month} ${date}, ${year}`;
    dateElement.textContent = dateString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
