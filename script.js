document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.getElementById('currentTimeUTC');
    const currentDayElement = document.getElementById('currentDay');

    function updateTime() {
        const now = new Date();
        const options = { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const timeFormatter = new Intl.DateTimeFormat('en-US', options);
        const dayFormatter = new Intl.DateTimeFormat('en-US', { timeZone: 'Africa/Lagos', weekday: 'long' });

        currentTimeElement.textContent = timeFormatter.format(now);
        currentDayElement.textContent = dayFormatter.format(now);
    }

    updateTime();
    setInterval(updateTime, 1000);
});
