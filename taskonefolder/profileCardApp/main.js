// function updateTime() {
//   const utcTimeElement = document.getElementById('utc-time');
//   const now = new Date();
//   utcTimeElement.textContent = now.toUTCString();
// }

// // Update the time when the page loads
// updateTime();

document.addEventListener('DOMContentLoaded', function() {
  // Display current time in UTC
  const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const currentTime = new Date().toUTCString();
  currentTimeElement.textContent = ` ${currentTime}`;
})