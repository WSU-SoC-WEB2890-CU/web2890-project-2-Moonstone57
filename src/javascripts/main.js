import "bootstrap"

let intervalID;
const deadlineMessage = "The Early Bird Sale has ended"

//Sets the deadline date
const deadline = new Date(2026, 4, 31, 17);

let daysCounter = document.getElementById('daysCounter');
let hoursCounter = document.getElementById('hoursCounter');
let minutesCounter = document.getElementById('minutesCounter');
let secondsCounter = document.getElementById('secondsCounter');

let countdownContainer = document.getElementById('countdownContainer');
let countdownTitle = document.getElementById('countdownTitle');

//Creates and displays the elements related to the deadline countdown timer
function initializeCountdown(){
    //Calls the start Countdown function every second to ensure the timer is updated every change in the countdown.
    intervalID = setInterval(startCountdown, 1000);
};

// Determines the time left on the timer and displays it
function startCountdown(){
    //Creates the new date and subtract today's date/time from it
    let today = new Date();
    let updatedDate = new Date(deadline - today);
    //Calculates how many days until the deadline date
    let daysUntil = updatedDate/86400000;
    let days = Math.floor(daysUntil);
    // Sets the hours, minutes, and seconds based on the previous time calculation
    let hours = updatedDate.getUTCHours();
    let minutes = updatedDate.getUTCMinutes();
    let seconds = updatedDate.getUTCSeconds();

    daysCounter.innerText = days;
    hoursCounter.innerText = hours;
    minutesCounter.innerText = minutes;
    secondsCounter.innerText = seconds;

    if ((deadline - today) <= 0){
        //Ensures the timer is not still being updated every second behind the scenes
        clearInterval(intervalID);
        //Hides the countdown
        countdownContainer.style.display = 'none';
        //Updates the title to display a deadline message when the countdown reaches 0 
        countdownTitle.textContent = deadlineMessage;
    }
};

// Calls the functions for the countdown
initializeCountdown();
startCountdown();



