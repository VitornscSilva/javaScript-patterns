// This function starts a timer that repeatedly executes the provided callback function
// at a specified interval. It stops when the callback returns false or the counter reaches 5.

function startTimer(callback, interval) {
  // Initialize a counter to keep track of the number of times the callback has been called.
  let counter = 1;

  // This inner function handles the execution of the callback and manages the timer.
  const runCurrentTimer = (currentTimerId) => {
    // Check if the callback returns false, indicating the timer should stop.
    if (!callback(counter)) {
      // If the callback returned false, clear the timer and stop further execution.
      clearTimeout(currentTimerId);
      return;
    }

    // Increment the counter for the next iteration.
    counter++;

    // Set up the timer for the next callback execution.
    currentTimerId = setTimeout(runCurrentTimer, interval);
  }

  // Set an initial timer to start the callback execution.
  let timerId = setTimeout(() => runCurrentTimer(timerId), interval)
}

// This callback function logs the current counter value and returns true if the counter is less than 5.
// It controls the termination of the timer based on the counter value.
function callback(counter) {
  console.log(counter);

  // Continue the timer execution as long as the counter is less than 5.
  return counter < 5;
}

// Start the timer with the specified callback and interval.
// The timer is expected to output values 1, 2, 3, 4, and 5 with a 50ms interval.
startTimer(callback, 50);