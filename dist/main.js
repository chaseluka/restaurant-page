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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactLoad\": () => (/* binding */ contactLoad)\n/* harmony export */ });\nconst contactLoad = (() => {\n    const content = document.getElementById('content');\n    \n\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('contact-container');\n    const aboutContainer = document.createElement('div');\n    aboutContainer.classList.add('about-container');\n\n    const contactUs = document.createElement('div');\n    contactUs.classList.add('contact-us');\n    contactUs.textContent = 'Contact Us';\n    const contactInfo = document.createElement('div');\n    contactInfo.classList.add('contact-info');\n\n    const location = document.createElement('div');\n    location.textContent = '9622 Scarn Ave Scranton, Pennsylvania';\n    const phone = document.createElement('div');\n    phone.textContent = '1-800-CEREALS';\n    const email = document.createElement('div');\n    email.textContent = 'mikescerealshack@dundermiflin.com';\n\n    const aboutOwner = document.createElement('div');\n    aboutOwner.classList.add('about-owner');\n    aboutOwner.textContent = 'About the Owner';\n    const aboutInfo = document.createElement('div');\n    aboutInfo.classList.add('about-info');\n    \n    const aboutText = document.createElement('div');\n    aboutText.classList.add('about-text');\n    aboutText.textContent = 'Michael has always wanted to own a restaurant to connect with others, but he hasn\\'t ever been able to cook. His solution: provide what others have already made! Between his time as regional manager at Dunder Miflin and Mike\\'s Cereal Shack, Michael is able to connect with others more than ever. And maybe one day, he just might own that yacht.';\n    const image = document.createElement('img');\n    image.src = '../images/michael.jpg';\n\n    const contactAppend = () => {\n        content.style.cssText = 'background-image: none;'\n        const contact = document.getElementById('contact');\n        contact.appendChild(contactContainer);\n        contact.appendChild(aboutContainer);\n        contactContainer.appendChild(contactUs);\n        contactContainer.appendChild(contactInfo);\n        contactInfo.appendChild(location);\n        contactInfo.appendChild(phone);\n        contactInfo.appendChild(email);\n        aboutContainer.appendChild(aboutOwner);\n        aboutContainer.appendChild(aboutInfo);\n        aboutInfo.appendChild(aboutText);\n        aboutInfo.appendChild(image);\n    }\n    return {contactAppend};\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footerLoad\": () => (/* binding */ footerLoad)\n/* harmony export */ });\nfunction footerLoad(){\n    const content = document.getElementById('content');\n\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n\n    content.appendChild(footer);\n\n    const svg = document.querySelector('svg');\n    const footerText = document.createElement('div');\n    footerText.classList.add('footer-text');\n    footerText.textContent = 'chaseluka';\n\n    footer.appendChild(svg);\n    footer.appendChild(footerText);\n} \n\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerLoad\": () => (/* binding */ headerLoad)\n/* harmony export */ });\nfunction headerLoad(){\n    const content = document.getElementById('content');\n\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    content.appendChild(header);\n    \n\n    const headerHome = document.createElement('div');\n    headerHome.classList.add('header-home');\n    headerHome.textContent = 'Home';\n    const headerMenu = document.createElement('div');\n    headerMenu.classList.add('header-menu');\n    headerMenu.textContent = 'Menu';\n    const headerContact = document.createElement('div');\n    headerContact.classList.add('header-contact');\n    headerContact.textContent = 'Contact';\n\n    header.appendChild(headerHome);\n    header.appendChild(headerMenu);\n    header.appendChild(headerContact);\n};\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeLoad\": () => (/* binding */ homeLoad)\n/* harmony export */ });\nconst homeLoad = (() => {\n    const content = document.getElementById('content');\n    \n\n    const homepageMain = document.createElement('div');\n    homepageMain.classList.add('homepage-main');\n\n    const homepageLocation = document.createElement('div');\n    homepageLocation.classList.add('homepage-location');\n    homepageLocation.textContent = 'Scranton, Pennsylvania';\n    const homepageTitle = document.createElement('div');\n    homepageTitle.classList.add('homepage-title');\n    homepageTitle.textContent = 'Mike\\'s Cereal Shack';\n    const homepageSlogan = document.createElement('div');\n    homepageSlogan.classList.add('homepage-slogan');\n    homepageSlogan.textContent = 'As many varieties as you can buy in the store!';\n\n    const homeAppend = () => {\n        content.style.cssText = 'background-image: url(../images/cereal.jpg);';\n        const home = document.getElementById('home');\n        console.log(home);\n        home.appendChild(homepageMain);\n        homepageMain.appendChild(homepageLocation);\n        homepageMain.appendChild(homepageTitle);\n        homepageMain.appendChild(homepageSlogan);\n    }\n    return {homeAppend}\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\nconst home = document.createElement('div');\nhome.setAttribute('id', 'home');\nconst menu = document.createElement('div');\nmenu.setAttribute('id', 'menu');\nconst contact = document.createElement('div');\ncontact.setAttribute('id', 'contact');\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__.headerLoad)();\ncontent.appendChild(home);\n_home__WEBPACK_IMPORTED_MODULE_3__.homeLoad.homeAppend();\n(0,_footer__WEBPACK_IMPORTED_MODULE_4__.footerLoad)();\n\n\nconst footer = document.querySelector('.footer');\n\n\nconst homeBtn = document.querySelector('.header-home');\nhomeBtn.addEventListener('click', () => {\n    content.insertBefore(home, footer);\n    if (content.contains(menu)){\n        content.removeChild(menu);\n    }\n    else if (content.contains(contact)){\n        content.removeChild(contact);\n    }\n    _home__WEBPACK_IMPORTED_MODULE_3__.homeLoad.homeAppend();\n});\n\nconst menuBtn = document.querySelector('.header-menu');\nmenuBtn.addEventListener('click', () => {\n    content.insertBefore(menu, footer);\n    if (content.contains(home)){\n        content.removeChild(home);\n    }\n    else if (content.contains(contact)){\n        content.removeChild(contact);\n    }\n    _menu__WEBPACK_IMPORTED_MODULE_1__.menuLoad.menuAppend();\n});\n\nconst contactBtn = document.querySelector('.header-contact');\ncontactBtn.addEventListener('click', () => {\n    content.insertBefore(contact, footer);\n    if (content.contains(menu)){\n        content.removeChild(menu);\n    }\n    else if (content.contains(home)){\n        content.removeChild(home);\n    }\n    _contact__WEBPACK_IMPORTED_MODULE_2__.contactLoad.contactAppend();\n});\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuLoad\": () => (/* binding */ menuLoad)\n/* harmony export */ });\nconst menuLoad = (() => {\n    const content = document.getElementById('content');\n    \n\n    const nameContainer = document.createElement('div');\n    nameContainer.classList.add('name-container');\n    const bowlContainer = document.createElement('div');\n    bowlContainer.classList.add('bowl-container');\n    const cerealContainer = document.createElement('div');\n    cerealContainer.classList.add('cereal-container');\n    const milksContainer = document.createElement('div');\n    milksContainer.classList.add('milks-container');\n    \n    const name = document.createElement('div');\n    name.classList.add('name');\n    name.textContent = 'Mike\\'s Cereal Shack';\n    \n    const bowlSelection = document.createElement('div');\n    bowlSelection.classList.add('selection-title');\n    bowlSelection.textContent = 'Bowl Sizes';\n    const bowlList = document.createElement('div');\n    bowlList.classList.add('bowl-list');\n    \n    const small = document.createElement('div');\n    small.classList.add('bowl');\n    small.textContent = 'Small $3.00';\n    const medium = document.createElement('div');\n    medium.classList.add('bowl');\n    medium.textContent = 'Medium $4.00';\n    const large = document.createElement('div');\n    large.classList.add('bowl');\n    large.textContent = 'Large $5.00';\n    \n    const cerealSelection = document.createElement('div');\n    cerealSelection.classList.add('selection-title');\n    cerealSelection.textContent = 'Cereal Selection';\n    const cerealList = document.createElement('div');\n    cerealList.classList.add('cereal-list');\n        \n    let cereals = [];\n\n    for (let i = 0; i < 20; i++){\n        const cereal = document.createElement('div');\n        cereals.push(cereal);\n    }\n    cereals[0].textContent = 'Honey Nut Cheerios';\n    cereals[1].textContent = 'Cinnamon Toast Crunch';\n    cereals[2].textContent = 'Frosted Mini-Wheats';\n    cereals[3].textContent = 'Apple Jacks';\n    cereals[4].textContent = 'Lucky Charms';\n    cereals[5].textContent = 'Rice Crispies';\n    cereals[6].textContent = 'Corn Pops';\n    cereals[7].textContent = 'Raison Bran';\n    cereals[8].textContent = 'Honey Smacks';\n    cereals[9].textContent = 'Froot Loops';\n    cereals[10].textContent = 'Life Cinnamon';\n    cereals[11].textContent = 'Frosted Flakes';\n    cereals[12].textContent = 'Fruity Pebbles';\n    cereals[13].textContent = 'Corn Flakes';\n    cereals[14].textContent = 'Cap\\'n Crunch';\n    cereals[15].textContent = 'Cap\\'n Crunch Berries';\n    cereals[16].textContent = 'Honey Bunches of Oats';\n    cereals[17].textContent = 'Reese\\'s Puffs';\n    cereals[18].textContent = 'Trix';\n    cereals[19].textContent = 'Oats';\n    \n    const milksSelection = document.createElement('div');\n    milksSelection.classList.add('selection-title');\n    milksSelection.textContent = 'Milk Selection';\n    const milksList = document.createElement('div');\n    milksList.classList.add('milk-list');\n    \n    let milks = [];\n\n    for (let i = 0; i < 6; i++){\n        const milk = document.createElement('div');\n        milks.push(milk);\n    }\n    milks[0].textContent = '2%';\n    milks[1].textContent = 'Whole';\n    milks[2].textContent = 'Soy';\n    milks[3].textContent = 'Nonfat';\n    milks[4].textContent = 'Almond';\n    milks[5].textContent = 'Oat';\n\n    const menuAppend = () => {\n        const menu = document.getElementById('menu');\n        content.style.cssText = 'background-image: none;';\n        menu.appendChild(nameContainer);\n        menu.appendChild(bowlContainer);\n        menu.appendChild(cerealContainer);\n        menu.appendChild(milksContainer);\n\n        nameContainer.appendChild(name);\n        \n        bowlContainer.appendChild(bowlSelection);\n        bowlContainer.appendChild(bowlList);\n\n        bowlList.appendChild(small);\n        bowlList.appendChild(medium);\n        bowlList.appendChild(large);\n        \n        cerealContainer.appendChild(cerealSelection);\n        cerealContainer.appendChild(cerealList);\n        cereals.forEach(cereal => cerealList.appendChild(cereal));\n        \n        milks.forEach(milks => milksList.appendChild(milks));\n\n        milksContainer.appendChild(milksSelection);\n        milksContainer.appendChild(milksList);\n\n    }\n    return {menuAppend}\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;