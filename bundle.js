/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./aggregator.js":
/*!***********************!*\
  !*** ./aggregator.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* reexport safe */ _modules_tareas_js__WEBPACK_IMPORTED_MODULE_4__.agregarTarea),\n/* harmony export */   celsiusToFahrenheit: () => (/* reexport safe */ _modules_conversion_js__WEBPACK_IMPORTED_MODULE_2__.celsiusToFahrenheit),\n/* harmony export */   dividir: () => (/* reexport safe */ _modules_calculos_js__WEBPACK_IMPORTED_MODULE_0__.dividir),\n/* harmony export */   fahrenheitToCelsius: () => (/* reexport safe */ _modules_conversion_js__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius),\n/* harmony export */   generatePassword: () => (/* reexport safe */ _modules_passwords_js__WEBPACK_IMPORTED_MODULE_1__.generatePassword),\n/* harmony export */   initGallery: () => (/* reexport safe */ _modules_galeria_js__WEBPACK_IMPORTED_MODULE_3__.initGallery),\n/* harmony export */   marcarComoCompletada: () => (/* reexport safe */ _modules_tareas_js__WEBPACK_IMPORTED_MODULE_4__.marcarComoCompletada),\n/* harmony export */   mostrarTareas: () => (/* reexport safe */ _modules_tareas_js__WEBPACK_IMPORTED_MODULE_4__.mostrarTareas),\n/* harmony export */   multiplicar: () => (/* reexport safe */ _modules_calculos_js__WEBPACK_IMPORTED_MODULE_0__.multiplicar),\n/* harmony export */   restar: () => (/* reexport safe */ _modules_calculos_js__WEBPACK_IMPORTED_MODULE_0__.restar),\n/* harmony export */   sumar: () => (/* reexport safe */ _modules_calculos_js__WEBPACK_IMPORTED_MODULE_0__.sumar)\n/* harmony export */ });\n/* harmony import */ var _modules_calculos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculos.js */ \"./modules/calculos.js\");\n/* harmony import */ var _modules_passwords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/passwords.js */ \"./modules/passwords.js\");\n/* harmony import */ var _modules_conversion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/conversion.js */ \"./modules/conversion.js\");\n/* harmony import */ var _modules_galeria_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/galeria.js */ \"./modules/galeria.js\");\n/* harmony import */ var _modules_tareas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tareas.js */ \"./modules/tareas.js\");\n// Importaciones\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Exportaciones\r\n\r\n\n\n//# sourceURL=webpack://parcial-2-dw/./aggregator.js?");

/***/ }),

/***/ "./modules/calculos.js":
/*!*****************************!*\
  !*** ./modules/calculos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dividir: () => (/* binding */ dividir),\n/* harmony export */   multiplicar: () => (/* binding */ multiplicar),\n/* harmony export */   restar: () => (/* binding */ restar),\n/* harmony export */   sumar: () => (/* binding */ sumar)\n/* harmony export */ });\nfunction sumar(a, b) {\r\n  return a + b;\r\n}\r\n\r\nfunction restar(a, b) {\r\n  return a - b;\r\n}\r\n\r\nfunction multiplicar(a, b) {\r\n  return a * b;\r\n}\r\n\r\nfunction dividir(a, b) {\r\n  return a / b;\r\n}\n\n//# sourceURL=webpack://parcial-2-dw/./modules/calculos.js?");

/***/ }),

/***/ "./modules/conversion.js":
/*!*******************************!*\
  !*** ./modules/conversion.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   celsiusToFahrenheit: () => (/* binding */ celsiusToFahrenheit),\n/* harmony export */   fahrenheitToCelsius: () => (/* binding */ fahrenheitToCelsius)\n/* harmony export */ });\n// Función para convertir de Celsius a Fahrenheit\r\nfunction celsiusToFahrenheit(celsius) {\r\n    return (celsius * 9/5) + 32;\r\n}\r\n\r\n// Función para convertir de Fahrenheit a Celsius\r\nfunction fahrenheitToCelsius(fahrenheit) {\r\n    return (fahrenheit - 32) * 5/9;\r\n}\r\n\r\n// Exporta las funciones para que puedan ser utilizadas en otros archivos\r\n\r\n\n\n//# sourceURL=webpack://parcial-2-dw/./modules/conversion.js?");

/***/ }),

/***/ "./modules/galeria.js":
/*!****************************!*\
  !*** ./modules/galeria.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initGallery: () => (/* binding */ initGallery)\n/* harmony export */ });\n// galeria.js\r\n\r\nfunction initGallery() {\r\n    const galleryContainer = document.getElementById(\"gallery-container\");\r\n  \r\n    // Agrega un evento para manejar la carga de imágenes\r\n    document.getElementById(\"upload-button\").addEventListener(\"change\", (event) => {\r\n      const file = event.target.files[0];\r\n  \r\n      if (file) {\r\n        // Crea un elemento de imagen y configúralo con la imagen cargada\r\n        const imageElement = document.createElement(\"img\");\r\n        imageElement.src = URL.createObjectURL(file);\r\n  \r\n        // Agrega la imagen al contenedor de la galería\r\n        galleryContainer.appendChild(imageElement);\r\n      }\r\n    });\r\n  }\r\n  \n\n//# sourceURL=webpack://parcial-2-dw/./modules/galeria.js?");

/***/ }),

/***/ "./modules/passwords.js":
/*!******************************!*\
  !*** ./modules/passwords.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePassword: () => (/* binding */ generatePassword)\n/* harmony export */ });\n// passwords.js\r\n\r\n// Función para generar contraseñas aleatorias\r\nfunction generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {\r\n    let charset = \"abcdefghijklmnopqrstuvwxyz\";\r\n    let password = \"\";\r\n  \r\n    if (includeUppercase) {\r\n      charset += \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\r\n    }\r\n    if (includeNumbers) {\r\n      charset += \"0123456789\";\r\n    }\r\n    if (includeSymbols) {\r\n      charset += \"!@#$%^&*()-_+=<>?/[]{}\";\r\n    }\r\n  \r\n    for (let i = 0; i < length; i++) {\r\n      const randomIndex = Math.floor(Math.random() * charset.length);\r\n      password += charset[randomIndex];\r\n    }\r\n  \r\n    return password;\r\n  }\r\n  \r\n  \r\n  \n\n//# sourceURL=webpack://parcial-2-dw/./modules/passwords.js?");

/***/ }),

/***/ "./modules/tareas.js":
/*!***************************!*\
  !*** ./modules/tareas.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* binding */ agregarTarea),\n/* harmony export */   marcarComoCompletada: () => (/* binding */ marcarComoCompletada),\n/* harmony export */   mostrarTareas: () => (/* binding */ mostrarTareas)\n/* harmony export */ });\n// tareas.js\r\n\r\n// Lista de tareas\r\nconst listaDeTareas = [];\r\n\r\n// Función para agregar una tarea\r\nfunction agregarTarea(tarea) {\r\n  listaDeTareas.push({ tarea, completada: false });\r\n}\r\n\r\n// Función para marcar una tarea como completada\r\nfunction marcarComoCompletada(indice) {\r\n  if (indice >= 0 && indice < listaDeTareas.length) {\r\n    listaDeTareas[indice].completada = true;\r\n  }\r\n}\r\n\r\n// Función para mostrar la lista de tareas\r\nfunction mostrarTareas() {\r\n  console.log(\"Lista de Tareas:\");\r\n  listaDeTareas.forEach((tarea, indice) => {\r\n    const estado = tarea.completada ? \"Completada\" : \"Pendiente\";\r\n    console.log(`${indice + 1}. ${tarea.tarea} - ${estado}`);\r\n  });\r\n}\r\n\r\n// Exporta las funciones para que estén disponibles para otros módulos\r\n\r\n\n\n//# sourceURL=webpack://parcial-2-dw/./modules/tareas.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./aggregator.js");
/******/ 	
/******/ })()
;