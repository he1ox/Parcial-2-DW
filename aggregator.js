import {sumar, restar, multiplicar, dividir} from './modules/calculos.js';
import {generatePassword} from './modules/passwords.js';
import {celsiusToFahrenheit,fahrenheitToCelsius } from './modules/conversion.js'
import {initGallery} from './modules/galeria.js'

export {
    sumar,
    restar,
    multiplicar,
    dividir,
    generatePassword,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    initGallery
}


import { agregarTarea, marcarComoCompletada, mostrarTareas } from './modules/tareas.js';
export { agregarTarea, marcarComoCompletada, mostrarTareas };