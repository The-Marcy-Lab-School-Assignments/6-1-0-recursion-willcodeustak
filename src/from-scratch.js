// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
  if(arr.length === 0){
   return 0;
}
// Recursive case: Add the first element of the array (arr[0])
  // to the sum of the rest of the array (arr.slice(1))
  return arr[0] + sum(arr.slice(1));
};

// Reverse string using recursive approach
const reverse = (str) => {
  // Base case: If the string is empty or has only one character, return it as is
  if (str.length <= 1) {
    return str;
  }

  // Recursive case: Reverse the substring excluding the first character
  // and append the first character to the end of the reversed substring
  return reverse(str.substring(1)) + str[0];
};
// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  
  // Handle base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Initialize the first two Fibonacci numbers
  let a = 0; // Fibonacci number at index 0
  let b = 1; // Fibonacci number at index 1

  // Compute Fibonacci numbers iteratively

  //The loop starts at i = 2 because we have already handled the base cases for Fibonacci numbers at indices 0 and 1 outside the loop.
  for (let i = 2; i <= n; i++) {
    const next = a + b; // The next Fibonacci number
    a = b; // A is now in position B 
    b = next; // B is now in its next position after its prior one.
  }

  // Return the nth Fibonacci number after loop has reached its end argument.
  return b;
};


// Recursive fibonacci
const fibRec = (n) => {
 // If n is 0, return 0 because fib(0) is always 0
 if (n === 0) return 0;
  
 // If n is 1, return 1 because fib(1) is always 1
 if (n === 1) return 1;
 
 // For any other number n, calculate the Fibonacci number
 // by adding the Fibonacci numbers of (n-1) and (n-2)
 // This is because fib(n) = fib(n-1) + fib(n-2)
 return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {

 // Base case: if the search range is invalid, target is not found
 if (start > end) return -1;
   // Find the middle index
   const mid = Math.floor((start + end) / 2);
  // Check if the target is at the middle index
  if (arr[mid] === target) return mid;
    // If target is less than the middle element, search in the left half
    if (target < arr[mid]) {
      return binarySearch(arr, target, start, mid - 1);
    }
 // "else"  If target is greater than the middle element, search in the right half
 return binarySearch(arr, target, mid + 1, end);
};
module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
