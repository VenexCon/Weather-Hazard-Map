/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/styles/style.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/styles/style.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Asap&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Asap\", sans-serif;\n}\n\nbody {\n  margin: auto;\n  background-color: #187795;\n  position: relative;\n  overflow-x: hidden;\n}\n\n/* Nav Bar - Common  */\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  background-color: #187795;\n  width: 100%;\n  min-height: 7vh;\n}\nnav .logo-container {\n  display: flex;\n  gap: 0.25rem;\n  align-items: center;\n  margin-left: 2rem;\n}\nnav .logo-container .logo-icon img {\n  max-width: 2rem;\n}\nnav .logo-container .logo {\n  font-size: larger;\n  color: #F0C808;\n  font-weight: bold;\n}\nnav .nav-btn {\n  margin-right: 2rem;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #A72608;\n  border: none;\n  border-radius: 5px;\n}\nnav .nav-btn:hover {\n  background-color: #F0C808;\n}\nnav .nav-btn img {\n  max-width: 1.5rem;\n  transition: 0.4s;\n  border-radius: 5px;\n}\nnav .nav-btn img.active {\n  transform: rotate(90deg);\n  background-color: #F0C808;\n}\n\n/* Aside-right */\n.nav-links {\n  border-radius: 5px;\n  position: absolute;\n  right: -100%;\n  height: 90vh;\n  background-color: #B7B6C1;\n  transition: ease-in, 0.4s;\n  visibility: hidden;\n}\n.nav-links.active {\n  right: 0;\n  visibility: visible;\n}\n.nav-links ul {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  align-items: center;\n  width: 20vw;\n  align-items: center;\n  justify-content: center;\n}\n.nav-links ul li {\n  display: flex;\n  align-items: center;\n  color: #187795;\n  width: 100%;\n  height: 3rem;\n  box-shadow: 0 4px 2px -2px gray;\n}\n.nav-links ul li:hover, .nav-links ul li:hover > * {\n  background-color: #A72608;\n  color: #F0C808;\n  cursor: pointer;\n}\n.nav-links ul li a {\n  text-decoration: none;\n  color: #187795;\n}\n\n/* ------------------- */\n/* MOBILE NAV-links STYLING */\n/* ----------------- */\n@media only screen and (max-width: 600px) {\n  .nav-links {\n    width: 100vw;\n  }\n  .nav-links ul {\n    width: 100%;\n  }\n  .nav-links ul li {\n    justify-content: center;\n    box-shadow: 0 4px 2px -2px gray;\n  }\n}\n/* ---------------- */\n/* Search Container */\n/* ---------------- */\n.search-container {\n  height: 4rem;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.search-container label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-container label input {\n  background-color: white;\n  height: 1.5rem;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  text-align: center;\n  width: clamp(10rem, 20rem, 80vw);\n}\n.search-container label input:focus {\n  outline: 2px solid #A72608;\n}\n.search-container button {\n  width: fit-content;\n  background-color: #187795;\n  outline: none;\n  border-radius: 50%;\n  align-self: center;\n  border: 2px solid #187795;\n  cursor: pointer;\n}\n.search-container button:focus {\n  border: 2px solid #F0C808;\n}\n.search-container button:hover, .search-container button:hover > * {\n  background-color: #A72608;\n}\n.search-container button i {\n  width: 1.5rem;\n  color: white;\n  font-size: 1.2rem;\n  margin: 0.25rem;\n}\n\n/* ---------------- */\n/* Main Container */\n/* ---------------- */\n.main {\n  /* ---------------- */\n  /* Weather Section */\n  /* -------------- */\n  border: 2px solid #A72608;\n  min-width: 80%;\n  width: 80%;\n  margin: auto;\n  min-height: 60vh;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  align-items: center;\n  /* ---------------- */\n  /* Hazards Section */\n  /* -------------- */\n}\n.main .title {\n  width: 100%;\n  text-align: center;\n  font-size: larger;\n  font-weight: bold;\n  color: #F0C808;\n}\n.main .description {\n  width: 100%;\n  text-align: center;\n  color: #F0C808;\n  font-size: large;\n}\n.main .temp-container {\n  width: 100%;\n  height: 30%;\n  align-self: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n}\n.main .temp-container > * {\n  min-width: 4rem;\n  flex-grow: 1;\n  flex-basis: 33%;\n  text-align: center;\n}\n.main .temp-container .average {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main .temp-container .average :first-child {\n  font-size: larger;\n  font-weight: bold;\n  color: #B7B6C1;\n}\n.main .temp-container .average :nth-child(2) {\n  font-weight: bold;\n  font-size: larger;\n  flex-grow: 1;\n}\n.main .temp-container .medians {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main .temp-container .medians h3 > p {\n  color: #B7B6C1;\n}\n.main .temp-container .weather-icons {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n}\n.main .hazards-container {\n  border: 2px solid black;\n  width: 100%;\n  display: flex;\n  height: 33vh;\n  flex-wrap: wrap;\n}\n.main .hazards-container .hazard-list {\n  border: 2px solid red;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n}\n.main .hazards-container .hazard-list > * {\n  border: dashed 2px yellow;\n  flex-grow: 1;\n  width: clamp(4rem, 25%, 100%);\n  flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["$env: undefined;\n//imports\r\n@import url('https://fonts.googleapis.com/css2?family=Asap&display=swap');\r\n\r\n//Variables\r\n$background:#071013;\r\n$primary:#187795;\r\n$contrast: #F0C808;\r\n$detail: #B7B6C1; \r\n$detail-2:#A72608;\r\n//consts\r\n\r\n\r\n//styling Starts Here\r\n*{\r\n    padding:0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Asap', sans-serif;\r\n}\r\nbody{\r\n    margin: auto;\r\n    background-color: $primary;\r\n    position: relative;\r\n    overflow-x: hidden;\r\n}\r\n\r\n/* Nav Bar - Common  */\r\nnav{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    background-color: $primary;\r\n    width:100%;\r\n    min-height: 7vh;\r\n\r\n    .logo-container{\r\n        display: flex;\r\n        gap: 0.25rem;\r\n        align-items: center;\r\n        margin-left: 2rem;\r\n\r\n        .logo-icon{\r\n            \r\n            img{\r\n                max-width: 2rem;\r\n            }\r\n        }\r\n\r\n        .logo {\r\n            font-size: larger;\r\n            color: $contrast;\r\n            font-weight: bold;\r\n        }\r\n    }\r\n\r\n    .nav-btn {\r\n        margin-right: 2rem;\r\n        width: 2rem;\r\n        height: 2rem;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: $detail-2;\r\n        border: none;\r\n        border-radius: 5px;\r\n\r\n        &:hover {\r\n        background-color: #F0C808;\r\n        }\r\n\r\n        img{\r\n        max-width: 1.5rem;\r\n        transition:0.4s;\r\n        border-radius: 5px;\r\n\r\n        &.active {\r\n            transform: rotate(90deg);\r\n            background-color: #F0C808;\r\n            \r\n            \r\n        }\r\n        }\r\n    }\r\n}\r\n/* Aside-right */\r\n .nav-links {\r\n     border-radius: 5px;\r\n     position: absolute;\r\n     right:-100%;\r\n     height: 90vh;\r\n     background-color: $detail;\r\n     transition: ease-in, 0.4s;\r\n     visibility: hidden;\r\n    \r\n\r\n     &.active {\r\n        right: 0;   \r\n        visibility: visible;\r\n     }\r\n\r\n     ul {\r\n         display: flex;\r\n         flex-direction: column;\r\n         list-style: none;\r\n         align-items: center;\r\n         width: 20vw;\r\n         align-items: center;\r\n         justify-content: center;\r\n\r\n         \r\n\r\n         li {\r\n            display: flex;\r\n            align-items: center;\r\n            color: $primary;\r\n            width: 100%;\r\n            height: 3rem;\r\n            box-shadow: 0 4px 2px -2px gray;\r\n            \r\n\r\n            &:hover, &:hover>*{\r\n                    background-color: $detail-2;\r\n                    color: $contrast;\r\n                    cursor: pointer;\r\n                }\r\n\r\n            a {\r\n                text-decoration: none;\r\n                color: $primary;\r\n            }\r\n            \r\n\r\n         }\r\n     }\r\n }\r\n/* ------------------- */\r\n/* MOBILE NAV-links STYLING */\r\n/* ----------------- */\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .nav-links{\r\n        width: 100vw;\r\n        \r\n        ul {\r\n            width: 100%;\r\n           \r\n            li {\r\n                justify-content: center;\r\n                box-shadow: 0 4px 2px -2px gray;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n/* ---------------- */\r\n/* Search Container */\r\n/* ---------------- */\r\n\r\n.search-container {\r\n    //border: 2px solid $detail-2;\r\n    height: 4rem;\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    gap: 0.5rem;\r\n\r\n    label {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n\r\n        input{\r\n            background-color: white;\r\n            height: 1.5rem;\r\n            border: none;\r\n            border-radius: 10px;\r\n            outline: none;\r\n            text-align: center;\r\n            width: clamp(10rem, 20rem, 80vw);\r\n\r\n            &:focus {\r\n                outline: 2px solid $detail-2;\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n    button {\r\n        width: fit-content;    \r\n        background-color: $primary;\r\n        outline: none;\r\n        border-radius: 50%;\r\n        align-self: center;\r\n        border: 2px solid $primary;\r\n        cursor: pointer;\r\n        &:focus {\r\n            border: 2px solid $contrast;\r\n        }\r\n        \r\n        &:hover, &:hover>* {\r\n            background-color: $detail-2;\r\n        }\r\n\r\n        i{\r\n            width: 1.5rem;\r\n            color: white;\r\n            font-size: 1.2rem;\r\n            margin: 0.25rem;\r\n           \r\n        }\r\n    }\r\n}\r\n\r\n/* ---------------- */\r\n/* Main Container */\r\n/* ---------------- */\r\n\r\n.main {\r\n    /* ---------------- */\r\n    /* Weather Section */\r\n    /* -------------- */\r\n    border: 2px solid $detail-2;\r\n    min-width: 80%;\r\n    width: clamp(80%,80%,80%);\r\n    margin: auto;\r\n    min-height:clamp(60vh, 60vh, 60vh);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    align-items: center;\r\n\r\n    .title{\r\n        width: 100%;\r\n        text-align: center;\r\n        font-size: larger;\r\n        font-weight: bold;\r\n        color: $contrast;\r\n    }\r\n\r\n    .description{\r\n        width: 100%;\r\n        text-align: center;\r\n        color: $contrast;\r\n        font-size: large;\r\n    }\r\n\r\n    .temp-container{\r\n        width: 100%;\r\n        height: 30%;\r\n        align-self: flex-start;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n\r\n        & > * {\r\n            min-width: 4rem;\r\n            flex-grow: 1;\r\n            flex-basis: 33%;\r\n            text-align: center;\r\n        }\r\n\r\n        .average {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n\r\n            :first-child{\r\n                font-size: larger;\r\n                font-weight: bold;\r\n                color: $detail;\r\n            }\r\n\r\n            :nth-child(2) {\r\n                font-weight: bold;\r\n                font-size: larger;\r\n                flex-grow: 1;\r\n            }\r\n        }\r\n\r\n\r\n        .medians{\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n\r\n            h3 > p {\r\n                color: $detail;\r\n            }\r\n        }\r\n\r\n        .weather-icons {\r\n            display: flex;\r\n            justify-content: center;\r\n            justify-items: center;\r\n        }\r\n    }\r\n\r\n    /* ---------------- */\r\n    /* Hazards Section */\r\n    /* -------------- */\r\n\r\n    .hazards-container{\r\n        border:2px solid black;\r\n        width: 100%;\r\n        display: flex;\r\n        height:33vh;\r\n        flex-wrap: wrap;\r\n\r\n        .hazard-list{\r\n            border: 2px solid red;\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            width: 100%;\r\n            height: 100%;\r\n\r\n            >* {\r\n                border: dashed 2px yellow;\r\n                flex-grow: 1;\r\n                width:clamp(4rem, 25%, 100%);\r\n                flex-wrap: wrap;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/api.js":
/*!************************!*\
  !*** ./src/app/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeather": () => (/* binding */ fetchWeather)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/app/dom.js");


const keyStorage = (() => {
  let API = `03ad2da940f7cc2ddc52d896bfa4deb4`;

  const viewKey = () => {
    return API;
  };

  return { viewKey };
})();

const fetchWeather = async (location) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${keyStorage.viewKey()}&units=metric`,
      { mode: "cors" }
    ); // fetch returns a promise
    let data = await response.json(); //.json() returns a promise.
    console.log(data);
    return (0,_dom__WEBPACK_IMPORTED_MODULE_0__.domAppend)(data); // if you try and return data, it is called prior to awaiting
  } catch (error) {
    console.log(error);
    alert(`Location Not Found`);
  }
};

const getInput = (e) => {
  e.preventDefault();
  let input = document.querySelector(".searchBox").value;
  return input;
};

const form = document.querySelector(".search-container");
form.addEventListener("submit", (e) => {
  fetchWeather(getInput(e));
});

//do i need ot return it here? the function needs to be called
//pass that to a object, that can be destructured.
//this can all happen in the EL.
//need a function that takes the object resposne, destructure it, and then assign it to the dom Object.




/***/ }),

/***/ "./src/app/dom.js":
/*!************************!*\
  !*** ./src/app/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domAppend": () => (/* binding */ domAppend),
/* harmony export */   "navButton": () => (/* binding */ navButton)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/app/api.js");


const navButton = () => {
  const Btn = document.querySelector(".nav-btn");
  const aside = document.querySelector(".nav-links");
  const btnImg = document.querySelector(".nav-btn > img");

  return Btn.addEventListener("click", () => {
    aside.classList.toggle("active");
    btnImg.classList.toggle("active");
  });
};

//DOM Object for assigning and destructuring the Json.response.

const domAppend = (data) => {
  const degree = `\u00B0C`;
  const farenheight = `\u00B0`;
  const dataIcon = `${data.weather[0].icon}`;

  //sets title
  const location = document.querySelector(".title");
  console.log(data.name);
  location.innerText = `${data.name}, ${data.sys.country}`;

  //sets weather description
  const description = document.querySelector(".description");
  description.innerText = `${data.weather[0].description}`;

  //sets average, high & low temp
  const average = document.querySelector("#averageBox");
  const high = document.querySelector(".data-high");
  const low = document.querySelector(".data-low");
  const feelsLike = document.querySelector(".data-feels");
  const humidity = document.querySelector(".data-humid");
  average.innerText = `${data.main.temp}${degree}`;
  high.innerText = `${data.main.temp_max}${degree}`;
  low.innerText = `${data.main.temp_min}${degree}`;
  feelsLike.innerText = `${data.main.feels_like}${degree}`;
  humidity.innerText = `${data.main.humidity}%`;
  //sets feels-like

  //sets weather Icon
  const weatherIcon = document.querySelector(".weather-img");
  weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}@2x.png`;
};




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _app_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/dom */ "./src/app/dom.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api */ "./src/app/api.js");




(0,_app_dom__WEBPACK_IMPORTED_MODULE_1__.navButton)();
(0,_app_api__WEBPACK_IMPORTED_MODULE_2__.fetchWeather)(`london`);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sWUFBWSxXQUFXLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxZQUFZ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RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDUztBQUNHO0FBQ3pDO0FBQ0EsbURBQVM7QUFDVCxzREFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL3NyYy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9hMTRhIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwLy4vc3JjL2FwcC9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwLy4vc3JjL2FwcC9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXNhcCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBc2FwXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3Nzk1O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vKiBOYXYgQmFyIC0gQ29tbW9uICAqL1xcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4Nzc5NTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogN3ZoO1xcbn1cXG5uYXYgLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbm5hdiAubG9nby1jb250YWluZXIgLmxvZ28taWNvbiBpbWcge1xcbiAgbWF4LXdpZHRoOiAycmVtO1xcbn1cXG5uYXYgLmxvZ28tY29udGFpbmVyIC5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgY29sb3I6ICNGMEM4MDg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxubmF2IC5uYXYtYnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNzI2MDg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbm5hdiAubmF2LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBDODA4O1xcbn1cXG5uYXYgLm5hdi1idG4gaW1nIHtcXG4gIG1heC13aWR0aDogMS41cmVtO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubmF2IC5uYXYtYnRuIGltZy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwQzgwODtcXG59XFxuXFxuLyogQXNpZGUtcmlnaHQgKi9cXG4ubmF2LWxpbmtzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTAwJTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCN0I2QzE7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLCAwLjRzO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ubmF2LWxpbmtzLmFjdGl2ZSB7XFxuICByaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5uYXYtbGlua3MgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubmF2LWxpbmtzIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxODc3OTU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XFxufVxcbi5uYXYtbGlua3MgdWwgbGk6aG92ZXIsIC5uYXYtbGlua3MgdWwgbGk6aG92ZXIgPiAqIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNzI2MDg7XFxuICBjb2xvcjogI0YwQzgwODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1saW5rcyB1bCBsaSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMTg3Nzk1O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogTU9CSUxFIE5BVi1saW5rcyBTVFlMSU5HICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubmF2LWxpbmtzIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgLm5hdi1saW5rcyB1bCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm5hdi1saW5rcyB1bCBsaSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xcbiAgfVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tICovXFxuLyogU2VhcmNoIENvbnRhaW5lciAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnNlYXJjaC1jb250YWluZXIgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnNlYXJjaC1jb250YWluZXIgbGFiZWwgaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IGNsYW1wKDEwcmVtLCAyMHJlbSwgODB2dyk7XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIGxhYmVsIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjQTcyNjA4O1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4Nzc5NTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMTg3Nzk1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b246Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgI0YwQzgwODtcXG59XFxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9uOmhvdmVyLCAuc2VhcmNoLWNvbnRhaW5lciBidXR0b246aG92ZXIgPiAqIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNzI2MDg7XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbiBpIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMC4yNXJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIE1haW4gQ29udGFpbmVyICovXFxuLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5tYWluIHtcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gIC8qIFdlYXRoZXIgU2VjdGlvbiAqL1xcbiAgLyogLS0tLS0tLS0tLS0tLS0gKi9cXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNzI2MDg7XFxuICBtaW4td2lkdGg6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcbiAgLyogSGF6YXJkcyBTZWN0aW9uICovXFxuICAvKiAtLS0tLS0tLS0tLS0tLSAqL1xcbn1cXG4ubWFpbiAudGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNGMEM4MDg7XFxufVxcbi5tYWluIC5kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRjBDODA4O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuLm1haW4gLnRlbXAtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm1haW4gLnRlbXAtY29udGFpbmVyID4gKiB7XFxuICBtaW4td2lkdGg6IDRyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmbGV4LWJhc2lzOiAzMyU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluIC50ZW1wLWNvbnRhaW5lciAuYXZlcmFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluIC50ZW1wLWNvbnRhaW5lciAuYXZlcmFnZSA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjQjdCNkMxO1xcbn1cXG4ubWFpbiAudGVtcC1jb250YWluZXIgLmF2ZXJhZ2UgOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4ubWFpbiAudGVtcC1jb250YWluZXIgLm1lZGlhbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tYWluIC50ZW1wLWNvbnRhaW5lciAubWVkaWFucyBoMyA+IHAge1xcbiAgY29sb3I6ICNCN0I2QzE7XFxufVxcbi5tYWluIC50ZW1wLWNvbnRhaW5lciAud2VhdGhlci1pY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluIC5oYXphcmRzLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMzN2aDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm1haW4gLmhhemFyZHMtY29udGFpbmVyIC5oYXphcmQtbGlzdCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5tYWluIC5oYXphcmRzLWNvbnRhaW5lciAuaGF6YXJkLWxpc3QgPiAqIHtcXG4gIGJvcmRlcjogZGFzaGVkIDJweCB5ZWxsb3c7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB3aWR0aDogY2xhbXAoNHJlbSwgMjUlLCAxMDAlKTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBWko7O0FBY0E7RUFDSSxZQUFBO0VBQ0EseUJBaEJLO0VBaUJMLGtCQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFjQSxzQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBNUJLO0VBNkJMLFdBQUE7RUFDQSxlQUFBO0FBWEo7QUFhSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVhSO0FBZVk7RUFDSSxlQUFBO0FBYmhCO0FBaUJRO0VBQ0ksaUJBQUE7RUFDQSxjQTlDRDtFQStDQyxpQkFBQTtBQWZaO0FBbUJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBeERFO0VBeURGLFlBQUE7RUFDQSxrQkFBQTtBQWpCUjtBQW1CUTtFQUNBLHlCQUFBO0FBakJSO0FBb0JRO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbEJSO0FBb0JRO0VBQ0ksd0JBQUE7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O0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBM0RoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZW52OiB1bmRlZmluZWQ7XFxuLy9pbXBvcnRzXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXNhcCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vL1ZhcmlhYmxlc1xcclxcbiRiYWNrZ3JvdW5kOiMwNzEwMTM7XFxyXFxuJHByaW1hcnk6IzE4Nzc5NTtcXHJcXG4kY29udHJhc3Q6ICNGMEM4MDg7XFxyXFxuJGRldGFpbDogI0I3QjZDMTsgXFxyXFxuJGRldGFpbC0yOiNBNzI2MDg7XFxyXFxuLy9jb25zdHNcXHJcXG5cXHJcXG5cXHJcXG4vL3N0eWxpbmcgU3RhcnRzIEhlcmVcXHJcXG4qe1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBc2FwJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIE5hdiBCYXIgLSBDb21tb24gICovXFxyXFxubmF2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiA3dmg7XFxyXFxuXFxyXFxuICAgIC5sb2dvLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBnYXA6IDAuMjVyZW07XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuXFxyXFxuICAgICAgICAubG9nby1pY29ue1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIGltZ3tcXHJcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAycmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5sb2dvIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJGNvbnRyYXN0O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYtYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZXRhaWwtMjtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwQzgwODtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGltZ3tcXHJcXG4gICAgICAgIG1heC13aWR0aDogMS41cmVtO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjowLjRzO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICAgICAgJi5hY3RpdmUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBDODA4O1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi8qIEFzaWRlLXJpZ2h0ICovXFxyXFxuIC5uYXYtbGlua3Mge1xcclxcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgcmlnaHQ6LTEwMCU7XFxyXFxuICAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGV0YWlsO1xcclxcbiAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiwgMC40cztcXHJcXG4gICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgICAmLmFjdGl2ZSB7XFxyXFxuICAgICAgICByaWdodDogMDsgICBcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICB1bCB7XFxyXFxuICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICB3aWR0aDogMjB2dztcXHJcXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgIFxcclxcblxcclxcbiAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xcclxcbiAgICAgICAgICAgIFxcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIsICY6aG92ZXI+KntcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZXRhaWwtMjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29udHJhc3Q7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIFxcclxcblxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgIH1cXHJcXG4gfVxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiBNT0JJTEUgTkFWLWxpbmtzIFNUWUxJTkcgKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLm5hdi1saW5rc3tcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgdWwge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgbGkge1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIFNlYXJjaCBDb250YWluZXIgKi9cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLnNlYXJjaC1jb250YWluZXIge1xcclxcbiAgICAvL2JvcmRlcjogMnB4IHNvbGlkICRkZXRhaWwtMjtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG5cXHJcXG4gICAgbGFiZWwge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIGlucHV0e1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBjbGFtcCgxMHJlbSwgMjByZW0sIDgwdncpO1xcclxcblxcclxcbiAgICAgICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgJGRldGFpbC0yO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBidXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50OyAgICBcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbnRyYXN0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAmOmhvdmVyLCAmOmhvdmVyPioge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZXRhaWwtMjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGl7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwLjI1cmVtO1xcclxcbiAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi8qIE1haW4gQ29udGFpbmVyICovXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbiAgICAvKiBXZWF0aGVyIFNlY3Rpb24gKi9cXHJcXG4gICAgLyogLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgJGRldGFpbC0yO1xcclxcbiAgICBtaW4td2lkdGg6IDgwJTtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDgwJSw4MCUsODAlKTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtaW4taGVpZ2h0OmNsYW1wKDYwdmgsIDYwdmgsIDYwdmgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC50aXRsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29udHJhc3Q7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlc2NyaXB0aW9ue1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbnRyYXN0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVtcC1jb250YWluZXJ7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMzAlO1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuICAgICAgICAmID4gKiB7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA0cmVtO1xcclxcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAzMyU7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmF2ZXJhZ2Uge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIDpmaXJzdC1jaGlsZHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRldGFpbDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIC5tZWRpYW5ze1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgICAgICAgaDMgPiBwIHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkZXRhaWw7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLndlYXRoZXItaWNvbnMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4gICAgLyogSGF6YXJkcyBTZWN0aW9uICovXFxyXFxuICAgIC8qIC0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuICAgIC5oYXphcmRzLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBoZWlnaHQ6MzN2aDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgICAgIC5oYXphcmQtbGlzdHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgICAgID4qIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBkYXNoZWQgMnB4IHllbGxvdztcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDpjbGFtcCg0cmVtLCAyNSUsIDEwMCUpO1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZG9tQXBwZW5kIH0gZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5jb25zdCBrZXlTdG9yYWdlID0gKCgpID0+IHtcclxuICBsZXQgQVBJID0gYDAzYWQyZGE5NDBmN2NjMmRkYzUyZDg5NmJmYTRkZWI0YDtcclxuXHJcbiAgY29uc3Qgdmlld0tleSA9ICgpID0+IHtcclxuICAgIHJldHVybiBBUEk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgdmlld0tleSB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZmV0Y2hXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtrZXlTdG9yYWdlLnZpZXdLZXkoKX0mdW5pdHM9bWV0cmljYCxcclxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgICApOyAvLyBmZXRjaCByZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vLmpzb24oKSByZXR1cm5zIGEgcHJvbWlzZS5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIGRvbUFwcGVuZChkYXRhKTsgLy8gaWYgeW91IHRyeSBhbmQgcmV0dXJuIGRhdGEsIGl0IGlzIGNhbGxlZCBwcmlvciB0byBhd2FpdGluZ1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBhbGVydChgTG9jYXRpb24gTm90IEZvdW5kYCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0SW5wdXQgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJveFwiKS52YWx1ZTtcclxuICByZXR1cm4gaW5wdXQ7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtY29udGFpbmVyXCIpO1xyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBmZXRjaFdlYXRoZXIoZ2V0SW5wdXQoZSkpO1xyXG59KTtcclxuXHJcbi8vZG8gaSBuZWVkIG90IHJldHVybiBpdCBoZXJlPyB0aGUgZnVuY3Rpb24gbmVlZHMgdG8gYmUgY2FsbGVkXHJcbi8vcGFzcyB0aGF0IHRvIGEgb2JqZWN0LCB0aGF0IGNhbiBiZSBkZXN0cnVjdHVyZWQuXHJcbi8vdGhpcyBjYW4gYWxsIGhhcHBlbiBpbiB0aGUgRUwuXHJcbi8vbmVlZCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIG9iamVjdCByZXNwb3NuZSwgZGVzdHJ1Y3R1cmUgaXQsIGFuZCB0aGVuIGFzc2lnbiBpdCB0byB0aGUgZG9tIE9iamVjdC5cclxuXHJcbmV4cG9ydCB7IGZldGNoV2VhdGhlciB9O1xyXG4iLCJpbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmNvbnN0IG5hdkJ1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1idG5cIik7XHJcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1saW5rc1wiKTtcclxuICBjb25zdCBidG5JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1idG4gPiBpbWdcIik7XHJcblxyXG4gIHJldHVybiBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBidG5JbWcuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vRE9NIE9iamVjdCBmb3IgYXNzaWduaW5nIGFuZCBkZXN0cnVjdHVyaW5nIHRoZSBKc29uLnJlc3BvbnNlLlxyXG5cclxuY29uc3QgZG9tQXBwZW5kID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBkZWdyZWUgPSBgXFx1MDBCMENgO1xyXG4gIGNvbnN0IGZhcmVuaGVpZ2h0ID0gYFxcdTAwQjBgO1xyXG4gIGNvbnN0IGRhdGFJY29uID0gYCR7ZGF0YS53ZWF0aGVyWzBdLmljb259YDtcclxuXHJcbiAgLy9zZXRzIHRpdGxlXHJcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEubmFtZSk7XHJcbiAgbG9jYXRpb24uaW5uZXJUZXh0ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWA7XHJcblxyXG4gIC8vc2V0cyB3ZWF0aGVyIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xyXG4gIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGAke2RhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xyXG5cclxuICAvL3NldHMgYXZlcmFnZSwgaGlnaCAmIGxvdyB0ZW1wXHJcbiAgY29uc3QgYXZlcmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXZlcmFnZUJveFwiKTtcclxuICBjb25zdCBoaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLWhpZ2hcIik7XHJcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLWxvd1wiKTtcclxuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGEtZmVlbHNcIik7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGEtaHVtaWRcIik7XHJcbiAgYXZlcmFnZS5pbm5lclRleHQgPSBgJHtkYXRhLm1haW4udGVtcH0ke2RlZ3JlZX1gO1xyXG4gIGhpZ2guaW5uZXJUZXh0ID0gYCR7ZGF0YS5tYWluLnRlbXBfbWF4fSR7ZGVncmVlfWA7XHJcbiAgbG93LmlubmVyVGV4dCA9IGAke2RhdGEubWFpbi50ZW1wX21pbn0ke2RlZ3JlZX1gO1xyXG4gIGZlZWxzTGlrZS5pbm5lclRleHQgPSBgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX0ke2RlZ3JlZX1gO1xyXG4gIGh1bWlkaXR5LmlubmVyVGV4dCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcclxuICAvL3NldHMgZmVlbHMtbGlrZVxyXG5cclxuICAvL3NldHMgd2VhdGhlciBJY29uXHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItaW1nXCIpO1xyXG4gIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGFJY29ufUAyeC5wbmdgO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbmF2QnV0dG9uLCBkb21BcHBlbmQgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBuYXZCdXR0b24gfSBmcm9tIFwiLi9hcHAvZG9tXCI7XHJcbmltcG9ydCB7IGZldGNoV2VhdGhlciB9IGZyb20gXCIuL2FwcC9hcGlcIjtcclxuXHJcbm5hdkJ1dHRvbigpO1xyXG5mZXRjaFdlYXRoZXIoYGxvbmRvbmApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=