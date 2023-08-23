// This utility function 'wrap' encapsulates another function, providing error handling and controlled execution.
// It returns a new function that, when called, executes the provided function and manages errors.

function wrap(execute) {
  // Flag to track whether the wrapped function executed with an error.
  let isExecutedWithError = false;
  // Variable to store the result of the wrapped function.
  let result = null;

  // Define the wrapped function that encapsulates the provided function.
  const wrappedFunction = () => {
    // If the wrapped function previously executed with an error, return the stored result.
    if (isExecutedWithError) {
      return result;
    }

    try {
      // Execute the provided function and store its result.
      result = execute();
      isExecutedWithError = false;
      return result;
    } catch (error) {
      // If an error occurs during execution, mark the wrapped function as having an error.
      isExecutedWithError = true;
      // Clear the stored result due to the error.
      result = null;
      return null;
    }
  };

  // Return the wrapped function for external use.
  return wrappedFunction;
}

// Create a wrapped function 'errorExec' that intentionally throws an error.
var errorExec = wrap(function () {
  throw new Error('Error');
});

// Create a wrapped function 'resultExec' that returns a result.
var resultExec = wrap(function () {
  return "Result";
});

// Check if the 'errorExec' wrapped function is callable and execute it.
// The output should be null since the function intentionally throws an error.
console.log(typeof errorExec === 'function' && errorExec()); // Should output null

// Check if the 'resultExec' wrapped function is callable and execute it.
// The output should be "Result" since the function returns a result.
console.log(typeof resultExec === 'function' && resultExec()); // Should output "Result"
