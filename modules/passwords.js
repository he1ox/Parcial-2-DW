// passwords.js

// Función para generar contraseñas aleatorias
function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
  
    if (includeUppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      charset += "0123456789";
    }
    if (includeSymbols) {
      charset += "!@#$%^&*()-_+=<>?/[]{}";
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  export { generatePassword };
  