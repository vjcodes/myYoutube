export function generateUniqueMessage() {
  // List of possible names and messages
  const names = ["Vinayak Jaiswal", "John Doe", "Jane Smith"];
  const messages = ["This is test message 1", "Hello world!", "Random message"];

  // Generate a unique id
  const uniqueId = generateUniqueId();

  // Generate random index for names and messages
  const randomNameIndex = Math.floor(Math.random() * names.length);
  const randomMessageIndex = Math.floor(Math.random() * messages.length);

  // Create and return the object with a unique id, name, and message
  const uniqueObject = {
    id: uniqueId,
    name: names[randomNameIndex],
    message: messages[randomMessageIndex]
  };

  return uniqueObject;
}

// Function to generate a unique id
export function generateUniqueId() {
  return Date.now(); // You may use a more sophisticated approach for production
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  // Check if the number is divisible by 2 or 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for prime numbers in increments of 6
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

export function nthPrime(n) {
  if (n === 1) return 2; // First prime number is 2
  if (n === 2) return 3; // Second prime number is 3

  let count = 2; // Starting count from the third prime number
  let num = 5; // Starting from the fifth number (after 2 and 3)

  while (count < n) {
    if (isPrime(num)) {
      count++;
    }

    // Move to the next candidate (considering only odd numbers)
    num += 2;
  }

  return num - 2; // Return the nth prime number
}
