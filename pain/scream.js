// List of IPA characters (a subset for demonstration purposes)
const ipaChars = [
  'p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ŋ', 'l', 'r', 'j', 'w'
];

// Function to get a random IPA character
function getRandomIPAChar() {
  const randomIndex = Math.floor(Math.random() * ipaChars.length);
  return ipaChars[randomIndex];
}

// Function to update the letter every second
function updateLetter() {
  const letterElement = document.getElementById('center-letter');
  letterElement.textContent = getRandomIPAChar();
}

// Update the letter every second
setInterval(updateLetter, 500);
