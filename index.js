// Function to generate a random password
// Usage: node index.
const btn = document.getElementById('genBtn');
btn.addEventListener('click', () => {
  const passwordLength = 12;
  const password = generateRandomPassword(passwordLength);
  document.getElementById('password').textContent = password;
  
  // Copy h1 element text to clipboard
  const h1Text = document.querySelector('h1').textContent;
  navigator.clipboard.writeText(h1Text);
});
function generateRandomPassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  
  return password;
}

// Usage example



