// Function to generate a message object
const generateMessage = (username, text) => {
  return {
    username,  // Username of the message sender
    text,      // Text content of the message
    createdAt: new Date().getTime(),  // Timestamp of message creation
  };
};

// Function to generate a location message object
const generateLocationMessage = (username, url) => {
  return {
    username,  // Username of the message sender
    url,       // URL of the location
    createdAt: new Date().getTime(),  // Timestamp of message creation
  };
};

// Exporting both functions as default export
export default {
  generateMessage,
  generateLocationMessage,
};
