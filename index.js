//Update the current day of the week
function updateDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const dayOfTheWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  dayOfTheWeekElement.textContent = `Current Day of the Week: ${dayOfWeek}`;
}

//Update the current UTC time in milliseconds
function updateUTCTime() {
  const currentUTCTime = new Date().getTime();
  const UTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  UTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime} ms`;
}

//Update real-time data
updateDayOfTheWeek();
updateUTCTime();
