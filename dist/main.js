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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cereal.jpg */ \"./images/cereal.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0px;\\n    font-family: 'Odibee Sans', 'Sans Serif';\\n    background-color: #fdfff5;\\n    overflow-x: hidden;\\n}\\n\\n#content {\\n    background-color: #fdfff5;\\n    width: 100vw;\\n    height: 100vh;\\n    color: #fff;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    flex-direction: column;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: cover;\\n    background-position: bottom;\\n    z-index: -1;\\n}\\n\\n#menu, #contact{\\n    margin: 3vmax 0;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    color: #333;\\n    flex-direction: column;\\n    gap: max(20px, 4vmax);\\n    font-size: min(2vmax, 20px);\\n}\\n\\n.header {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: max(5px, 2vw);\\n    font-size: min(2.2vmax, 30px);\\n    text-decoration: underline;\\n    text-underline-offset: 17%;\\n    background-color: #00000066;\\n    width: 100%;\\n    min-height: 7vh;\\n    height: max(80px, 8vh)\\n}\\n\\n.header > div {\\n    padding: 1%;\\n    border-radius: 10px;\\n}\\n\\n.header > div:hover {\\n    background-color: #4e4e4edd;\\n    transform: scale(1.1);\\n}\\n\\n\\n.homepage-main {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 2.2vmax;\\n}\\n\\n.homepage-title {\\n    font-size: 5.6vmax;\\n}\\n\\n.footer {\\n    width: 100%;\\n    min-height: 6vh;\\n    height: max(20px, 8vh);\\n    background-color: #00000066;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 10px;\\n    font-size: min(2vmax, 20px);\\n}\\n\\n.name {\\n    font-size: 4vmax;\\n}\\n\\n.selection-title {\\n    font-weight: bolder;\\n    text-decoration: underline;\\n}\\n\\n.bowl-list, .cereal-container, .milks-container, .bowl-container {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: min(3vmax, 25px);\\n}\\n\\n.cereal-container, .milks-container, .bowl-container {\\n    flex-direction: column;\\n}\\n\\n.milks-container {\\n    max-height: fit-content;\\n}\\n\\n.milk-list {\\n    max-height: 100px;\\n}\\n\\n.cereal-list {\\n    display: grid;\\n    grid-template: repeat(4, 1fr) / repeat(5, 1fr);\\n    gap: min(3vmax, 25px);\\n    margin: 2%;\\n}\\n\\n.milk-list {\\n    display: grid;\\n    grid-template: repeat(2, 1fr) / repeat(3, 1fr);\\n    gap: min(3vmax, 25px);\\n}\\n\\n.contact-container, .contact-info, .about-container, .about-info {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 0.5vmax;\\n}\\n\\n.contact-us, .about-owner {\\n    font-size: 4vmax;\\n}\\n\\n.contact-container, .about-container {\\n    gap: max(20px, 2.7vmax);\\n}\\n\\n.about-info > img {\\n    height: 25vh;\\n    width: 25vw;\\n    border: 10px solid rgb(100, 156, 230);\\n    border-radius: 10px;\\n}\\n\\n.about-info {\\n    flex-direction: row;\\n    gap: 2vmax;\\n}\\n\\n.about-container {\\n    padding: 4%;\\n    gap: 1vmax;\\n}\\n\\n.about-text {\\n    max-width: 250px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nconst content = document.getElementById('content');\nconst home = document.createElement('div');\nhome.setAttribute('id', 'home');\nconst menu = document.createElement('div');\nmenu.setAttribute('id', 'menu');\nconst contact = document.createElement('div');\ncontact.setAttribute('id', 'contact');\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__.headerLoad)();\ncontent.appendChild(home);\n_home__WEBPACK_IMPORTED_MODULE_3__.homeLoad.homeAppend();\n(0,_footer__WEBPACK_IMPORTED_MODULE_4__.footerLoad)();\n\n\nconst footer = document.querySelector('.footer');\n\n\nconst homeBtn = document.querySelector('.header-home');\nhomeBtn.addEventListener('click', () => {\n    content.insertBefore(home, footer);\n    if (content.contains(menu)){\n        content.removeChild(menu);\n    }\n    else if (content.contains(contact)){\n        content.removeChild(contact);\n    }\n    _home__WEBPACK_IMPORTED_MODULE_3__.homeLoad.homeAppend();\n});\n\nconst menuBtn = document.querySelector('.header-menu');\nmenuBtn.addEventListener('click', () => {\n    content.insertBefore(menu, footer);\n    if (content.contains(home)){\n        content.removeChild(home);\n    }\n    else if (content.contains(contact)){\n        content.removeChild(contact);\n    }\n    _menu__WEBPACK_IMPORTED_MODULE_1__.menuLoad.menuAppend();\n});\n\nconst contactBtn = document.querySelector('.header-contact');\ncontactBtn.addEventListener('click', () => {\n    content.insertBefore(contact, footer);\n    if (content.contains(menu)){\n        content.removeChild(menu);\n    }\n    else if (content.contains(home)){\n        content.removeChild(home);\n    }\n    _contact__WEBPACK_IMPORTED_MODULE_2__.contactLoad.contactAppend();\n});\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuLoad\": () => (/* binding */ menuLoad)\n/* harmony export */ });\nconst menuLoad = (() => {\n    const content = document.getElementById('content');\n    \n\n    const nameContainer = document.createElement('div');\n    nameContainer.classList.add('name-container');\n    const bowlContainer = document.createElement('div');\n    bowlContainer.classList.add('bowl-container');\n    const cerealContainer = document.createElement('div');\n    cerealContainer.classList.add('cereal-container');\n    const milksContainer = document.createElement('div');\n    milksContainer.classList.add('milks-container');\n    \n    const name = document.createElement('div');\n    name.classList.add('name');\n    name.textContent = 'Mike\\'s Cereal Shack';\n    \n    const bowlSelection = document.createElement('div');\n    bowlSelection.classList.add('selection-title');\n    bowlSelection.textContent = 'Bowl Sizes';\n    const bowlList = document.createElement('div');\n    bowlList.classList.add('bowl-list');\n    \n    const small = document.createElement('div');\n    small.classList.add('bowl');\n    small.textContent = 'Small $3.00';\n    const medium = document.createElement('div');\n    medium.classList.add('bowl');\n    medium.textContent = 'Medium $4.00';\n    const large = document.createElement('div');\n    large.classList.add('bowl');\n    large.textContent = 'Large $5.00';\n    \n    const cerealSelection = document.createElement('div');\n    cerealSelection.classList.add('selection-title');\n    cerealSelection.textContent = 'Cereal Selection';\n    const cerealList = document.createElement('div');\n    cerealList.classList.add('cereal-list');\n        \n    let cereals = [];\n\n    for (let i = 0; i < 20; i++){\n        const cereal = document.createElement('div');\n        cereals.push(cereal);\n    }\n    cereals[0].textContent = 'Honey Nut Cheerios';\n    cereals[1].textContent = 'Cinnamon Toast Crunch';\n    cereals[2].textContent = 'Frosted Mini-Wheats';\n    cereals[3].textContent = 'Apple Jacks';\n    cereals[4].textContent = 'Lucky Charms';\n    cereals[5].textContent = 'Rice Crispies';\n    cereals[6].textContent = 'Corn Pops';\n    cereals[7].textContent = 'Raison Bran';\n    cereals[8].textContent = 'Honey Smacks';\n    cereals[9].textContent = 'Froot Loops';\n    cereals[10].textContent = 'Life Cinnamon';\n    cereals[11].textContent = 'Frosted Flakes';\n    cereals[12].textContent = 'Fruity Pebbles';\n    cereals[13].textContent = 'Corn Flakes';\n    cereals[14].textContent = 'Cap\\'n Crunch';\n    cereals[15].textContent = 'Cap\\'n Crunch Berries';\n    cereals[16].textContent = 'Honey Bunches of Oats';\n    cereals[17].textContent = 'Reese\\'s Puffs';\n    cereals[18].textContent = 'Trix';\n    cereals[19].textContent = 'Oats';\n    \n    const milksSelection = document.createElement('div');\n    milksSelection.classList.add('selection-title');\n    milksSelection.textContent = 'Milk Selection';\n    const milksList = document.createElement('div');\n    milksList.classList.add('milk-list');\n    \n    let milks = [];\n\n    for (let i = 0; i < 6; i++){\n        const milk = document.createElement('div');\n        milks.push(milk);\n    }\n    milks[0].textContent = '2%';\n    milks[1].textContent = 'Whole';\n    milks[2].textContent = 'Soy';\n    milks[3].textContent = 'Nonfat';\n    milks[4].textContent = 'Almond';\n    milks[5].textContent = 'Oat';\n\n    const menuAppend = () => {\n        const menu = document.getElementById('menu');\n        content.style.cssText = 'background-image: none;';\n        menu.appendChild(nameContainer);\n        menu.appendChild(bowlContainer);\n        menu.appendChild(cerealContainer);\n        menu.appendChild(milksContainer);\n\n        nameContainer.appendChild(name);\n        \n        bowlContainer.appendChild(bowlSelection);\n        bowlContainer.appendChild(bowlList);\n\n        bowlList.appendChild(small);\n        bowlList.appendChild(medium);\n        bowlList.appendChild(large);\n        \n        cerealContainer.appendChild(cerealSelection);\n        cerealContainer.appendChild(cerealList);\n        cereals.forEach(cereal => cerealList.appendChild(cereal));\n        \n        milks.forEach(milks => milksList.appendChild(milks));\n\n        milksContainer.appendChild(milksSelection);\n        milksContainer.appendChild(milksList);\n\n    }\n    return {menuAppend}\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./images/cereal.jpg":
/*!***************************!*\
  !*** ./images/cereal.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9df34a349e01fdf1694.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/cereal.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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