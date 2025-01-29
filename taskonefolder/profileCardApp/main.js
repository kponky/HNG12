// function updateTime() {
//   const utcTimeElement = document.getElementById('utc-time');
//   const now = new Date();
//   utcTimeElement.textContent = now.toUTCString();
// }

// // Update the time when the page loads
// updateTime();

// document.addEventListener('DOMContentLoaded', function() {
//   // Display current time in UTC
//   const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
//   const currentTime = new Date().toUTCString();
//   currentTimeElement.textContent = ` ${currentTime}`;
// })

const currentUTCTime = document.querySelector('.time');




function updateTime() {
  const now = new Date(); 

 

  let hours = now.getHours(); 
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM'; 
  hours = hours % 12; 
  hours = hours ? hours : 12;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  const dateInMS = now.getTime();

  currentUTCTime.innerHTML = ` UTC Time: ${dateInMS}`;
  currentUTCTime.style.color = "#c42b3b";
  currentUTCTime.style.fontWeight = "bold";
}

updateTime();
setInterval(updateTime, 60000);
