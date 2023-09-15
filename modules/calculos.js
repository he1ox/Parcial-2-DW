// calculos.js

export function sumar(a, b) {
    return a + b;
  } 
  
export function restar(a, b) {
    return a - b;
  }
  
export function multiplicar(a, b) {
    return a * b;
  }
  
export function dividir(a, b) {
    if(b === 0) {
      console.error("No se puede dividir por 0");
      return null;
    }
    
    return a / b;
  }
  
  