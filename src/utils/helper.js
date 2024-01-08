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