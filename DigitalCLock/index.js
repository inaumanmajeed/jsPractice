// get all values for the clock

const hours = document.getElementById("hours");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("sec");
const AmPm = document.getElementById("AMPM");

// Function to get the current time

function getTime() {
  setInterval(() => {
    const date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = "AM";

    // Check if the time is in 12 hours format or 24 hours format
    if (hrs > 12) {
      hrs = hrs - 12;
      ampm = "PM";
    }

    // Add 0 before single digit numbers
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    sec = sec < 10 ? "0" + sec : sec;

    // Display the time in the clock
    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = sec;
    AmPm.innerHTML = ampm;
  }, 1000);
}

// function to greet on behalf of time and apend it to the DOM element with id "greet"

function greet() {
  const date = new Date();
  let hrs = date.getHours();
  let greet = document.getElementById("greet");

  if (hrs < 12) {
    greet.innerHTML = "Good Morning!";
  } else if (hrs < 18) {
    greet.innerHTML = "Good Afternoon!";
  } else {
    greet.innerHTML = "Good Evening!";
  }
}

// Call the function
greet();
getTime();
