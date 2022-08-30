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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSDtBQUNsSDtBQUNBLDZDQUE2QyxlQUFlLGNBQWMsMkJBQTJCLHNDQUFzQyxHQUFHLFVBQVUsaUJBQWlCLDhCQUE4Qix1QkFBdUIsdUJBQXVCLEdBQUcsa0NBQWtDLGtCQUFrQix3QkFBd0IsbUNBQW1DLHlCQUF5QiwwQkFBMEIsOEJBQThCLGdCQUFnQixvQkFBb0IsR0FBRyx1QkFBdUIsa0JBQWtCLGlCQUFpQix3QkFBd0Isc0JBQXNCLEdBQUcsc0NBQXNDLG9CQUFvQixHQUFHLDZCQUE2QixzQkFBc0IsbUJBQW1CLHNCQUFzQixHQUFHLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0Qiw4QkFBOEIsaUJBQWlCLHVCQUF1QixHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxvQkFBb0Isc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRywyQkFBMkIsNkJBQTZCLDhCQUE4QixHQUFHLG1DQUFtQyx1QkFBdUIsdUJBQXVCLGlCQUFpQixpQkFBaUIsOEJBQThCLDhCQUE4Qix1QkFBdUIsR0FBRyxxQkFBcUIsYUFBYSx3QkFBd0IsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQixxQkFBcUIsd0JBQXdCLGdCQUFnQix3QkFBd0IsNEJBQTRCLEdBQUcsb0JBQW9CLGtCQUFrQix3QkFBd0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsb0NBQW9DLEdBQUcsc0RBQXNELDhCQUE4QixtQkFBbUIsb0JBQW9CLEdBQUcsc0JBQXNCLDBCQUEwQixtQkFBbUIsR0FBRyxtSUFBbUksZ0JBQWdCLG1CQUFtQixLQUFLLG1CQUFtQixrQkFBa0IsS0FBSyxzQkFBc0IsOEJBQThCLHNDQUFzQyxLQUFLLEdBQUcsNkZBQTZGLGlCQUFpQixrQkFBa0IsMEJBQTBCLDRCQUE0QixnQkFBZ0IsR0FBRywyQkFBMkIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxpQ0FBaUMsNEJBQTRCLG1CQUFtQixpQkFBaUIsd0JBQXdCLGtCQUFrQix1QkFBdUIscUNBQXFDLEdBQUcsdUNBQXVDLCtCQUErQixHQUFHLDRCQUE0Qix1QkFBdUIsOEJBQThCLGtCQUFrQix1QkFBdUIsdUJBQXVCLDhCQUE4QixvQkFBb0IsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsc0VBQXNFLDhCQUE4QixHQUFHLDhCQUE4QixrQkFBa0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsR0FBRyxpRkFBaUYseUdBQXlHLG1CQUFtQixlQUFlLGlCQUFpQixxQkFBcUIsa0JBQWtCLDJCQUEyQixjQUFjLHdCQUF3Qiw4RUFBOEUsZ0JBQWdCLGdCQUFnQix1QkFBdUIsc0JBQXNCLHNCQUFzQixtQkFBbUIsR0FBRyxzQkFBc0IsZ0JBQWdCLHVCQUF1QixtQkFBbUIscUJBQXFCLEdBQUcseUJBQXlCLGdCQUFnQixnQkFBZ0IsMkJBQTJCLGtCQUFrQixvQkFBb0IsR0FBRyw2QkFBNkIsb0JBQW9CLGlCQUFpQixvQkFBb0IsdUJBQXVCLEdBQUcsa0NBQWtDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsK0NBQStDLHNCQUFzQixzQkFBc0IsbUJBQW1CLEdBQUcsZ0RBQWdELHNCQUFzQixzQkFBc0IsaUJBQWlCLEdBQUcsa0NBQWtDLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcseUNBQXlDLG1CQUFtQixHQUFHLHdDQUF3QyxrQkFBa0IsNEJBQTRCLDBCQUEwQixHQUFHLDRCQUE0Qiw0QkFBNEIsZ0JBQWdCLGtCQUFrQixpQkFBaUIsb0JBQW9CLEdBQUcseUNBQXlDLDBCQUEwQixrQkFBa0Isb0JBQW9CLGdCQUFnQixpQkFBaUIsR0FBRyw2Q0FBNkMsOEJBQThCLGlCQUFpQixrQ0FBa0Msb0JBQW9CLEdBQUcsT0FBTyx3RkFBd0YsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sWUFBWSxXQUFXLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxZQUFZ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O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ1M7QUFDRztBQUN6QztBQUNBLG1EQUFTO0FBQ1Qsc0RBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YTE0YSIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL3NyYy9hcHAvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL3NyYy9hcHAvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1oYXphcmQtbWFwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWhhemFyZC1tYXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItaGF6YXJkLW1hcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFzYXAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXNhcFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4Nzc5NTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLyogTmF2IEJhciAtIENvbW1vbiAgKi9cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODc3OTU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDd2aDtcXG59XFxubmF2IC5sb2dvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjI1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5uYXYgLmxvZ28tY29udGFpbmVyIC5sb2dvLWljb24gaW1nIHtcXG4gIG1heC13aWR0aDogMnJlbTtcXG59XFxubmF2IC5sb2dvLWNvbnRhaW5lciAubG9nbyB7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGNvbG9yOiAjRjBDODA4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbm5hdiAubmF2LWJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTcyNjA4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5uYXYgLm5hdi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwQzgwODtcXG59XFxubmF2IC5uYXYtYnRuIGltZyB7XFxuICBtYXgtd2lkdGg6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbm5hdiAubmF2LWJ0biBpbWcuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEM4MDg7XFxufVxcblxcbi8qIEFzaWRlLXJpZ2h0ICovXFxuLm5hdi1saW5rcyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTEwMCU7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjdCNkMxO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiwgMC40cztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLm5hdi1saW5rcy5hY3RpdmUge1xcbiAgcmlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ubmF2LWxpbmtzIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjB2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm5hdi1saW5rcyB1bCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMTg3Nzk1O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xcbn1cXG4ubmF2LWxpbmtzIHVsIGxpOmhvdmVyLCAubmF2LWxpbmtzIHVsIGxpOmhvdmVyID4gKiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTcyNjA4O1xcbiAgY29sb3I6ICNGMEM4MDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYtbGlua3MgdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzE4Nzc5NTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIE1PQklMRSBOQVYtbGlua3MgU1RZTElORyAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm5hdi1saW5rcyB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIC5uYXYtbGlua3MgdWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5uYXYtbGlua3MgdWwgbGkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcXG4gIH1cXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIFNlYXJjaCBDb250YWluZXIgKi9cXG4vKiAtLS0tLS0tLS0tLS0tLS0tICovXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIGxhYmVsIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiBjbGFtcCgxMHJlbSwgMjByZW0sIDgwdncpO1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciBsYWJlbCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgI0E3MjYwODtcXG59XFxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODc3OTU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzE4Nzc5NTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGMEM4MDg7XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbjpob3ZlciwgLnNlYXJjaC1jb250YWluZXIgYnV0dG9uOmhvdmVyID4gKiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTcyNjA4O1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b24gaSB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDAuMjVyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBNYWluIENvbnRhaW5lciAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXG4ubWFpbiB7XFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tICovXFxuICAvKiBXZWF0aGVyIFNlY3Rpb24gKi9cXG4gIC8qIC0tLS0tLS0tLS0tLS0tICovXFxuICBib3JkZXI6IDJweCBzb2xpZCAjQTcyNjA4O1xcbiAgbWluLXdpZHRoOiA4MCU7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gIC8qIEhhemFyZHMgU2VjdGlvbiAqL1xcbiAgLyogLS0tLS0tLS0tLS0tLS0gKi9cXG59XFxuLm1haW4gLnRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjRjBDODA4O1xcbn1cXG4ubWFpbiAuZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0YwQzgwODtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcbi5tYWluIC50ZW1wLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tYWluIC50ZW1wLWNvbnRhaW5lciA+ICoge1xcbiAgbWluLXdpZHRoOiA0cmVtO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZmxleC1iYXNpczogMzMlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWFpbiAudGVtcC1jb250YWluZXIgLmF2ZXJhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbiAudGVtcC1jb250YWluZXIgLmF2ZXJhZ2UgOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI0I3QjZDMTtcXG59XFxuLm1haW4gLnRlbXAtY29udGFpbmVyIC5hdmVyYWdlIDpudGgtY2hpbGQoMikge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuLm1haW4gLnRlbXAtY29udGFpbmVyIC5tZWRpYW5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWFpbiAudGVtcC1jb250YWluZXIgLm1lZGlhbnMgaDMgPiBwIHtcXG4gIGNvbG9yOiAjQjdCNkMxO1xcbn1cXG4ubWFpbiAudGVtcC1jb250YWluZXIgLndlYXRoZXItaWNvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbiAuaGF6YXJkcy1jb250YWluZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDMzdmg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tYWluIC5oYXphcmRzLWNvbnRhaW5lciAuaGF6YXJkLWxpc3Qge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubWFpbiAuaGF6YXJkcy1jb250YWluZXIgLmhhemFyZC1saXN0ID4gKiB7XFxuICBib3JkZXI6IGRhc2hlZCAycHggeWVsbG93O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgd2lkdGg6IGNsYW1wKDRyZW0sIDI1JSwgMTAwJSk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQVpKOztBQWNBO0VBQ0ksWUFBQTtFQUNBLHlCQWhCSztFQWlCTCxrQkFBQTtFQUNBLGtCQUFBO0FBWEo7O0FBY0Esc0JBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQTVCSztFQTZCTCxXQUFBO0VBQ0EsZUFBQTtBQVhKO0FBYUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFYUjtBQWVZO0VBQ0ksZUFBQTtBQWJoQjtBQWlCUTtFQUNJLGlCQUFBO0VBQ0EsY0E5Q0Q7RUErQ0MsaUJBQUE7QUFmWjtBQW1CSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQXhERTtFQXlERixZQUFBO0VBQ0Esa0JBQUE7QUFqQlI7QUFtQlE7RUFDQSx5QkFBQTtBQWpCUjtBQW9CUTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWxCUjtBQW9CUTtFQUNJLHdCQUFBO0VBQ0Es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LDZCQUFBO0VBQ0EsZUFBQTtBQTNEaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGVudjogdW5kZWZpbmVkO1xcbi8vaW1wb3J0c1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFzYXAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLy9WYXJpYWJsZXNcXHJcXG4kYmFja2dyb3VuZDojMDcxMDEzO1xcclxcbiRwcmltYXJ5OiMxODc3OTU7XFxyXFxuJGNvbnRyYXN0OiAjRjBDODA4O1xcclxcbiRkZXRhaWw6ICNCN0I2QzE7IFxcclxcbiRkZXRhaWwtMjojQTcyNjA4O1xcclxcbi8vY29uc3RzXFxyXFxuXFxyXFxuXFxyXFxuLy9zdHlsaW5nIFN0YXJ0cyBIZXJlXFxyXFxuKntcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQXNhcCcsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOYXYgQmFyIC0gQ29tbW9uICAqL1xcclxcbm5hdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogN3ZoO1xcclxcblxcclxcbiAgICAubG9nby1jb250YWluZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZ2FwOiAwLjI1cmVtO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcblxcclxcbiAgICAgICAgLmxvZ28taWNvbntcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBpbWd7XFxyXFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMnJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubG9nbyB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICRjb250cmFzdDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2LWJ0biB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICAgICAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGV0YWlsLTI7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEM4MDg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbWd7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246MC40cztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICYuYWN0aXZlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwQzgwODtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKiBBc2lkZS1yaWdodCAqL1xcclxcbiAubmF2LWxpbmtzIHtcXHJcXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgIHJpZ2h0Oi0xMDAlO1xcclxcbiAgICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRldGFpbDtcXHJcXG4gICAgIHRyYW5zaXRpb246IGVhc2UtaW4sIDAuNHM7XFxyXFxuICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAgJi5hY3RpdmUge1xcclxcbiAgICAgICAgcmlnaHQ6IDA7ICAgXFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgfVxcclxcblxcclxcbiAgICAgdWwge1xcclxcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmhvdmVyPip7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGV0YWlsLTI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbnRyYXN0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICB9XFxyXFxuIH1cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLyogTU9CSUxFIE5BVi1saW5rcyBTVFlMSU5HICovXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5uYXYtbGlua3N7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIHVsIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiBTZWFyY2ggQ29udGFpbmVyICovXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCAkZGV0YWlsLTI7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgIGxhYmVsIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDogY2xhbXAoMTByZW0sIDIwcmVtLCA4MHZ3KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkICRkZXRhaWwtMjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDsgICAgXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb250cmFzdDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgJjpob3ZlciwgJjpob3Zlcj4qIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGV0YWlsLTI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpe1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMC4yNXJlbTtcXHJcXG4gICAgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4vKiBNYWluIENvbnRhaW5lciAqL1xcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4gICAgLyogV2VhdGhlciBTZWN0aW9uICovXFxyXFxuICAgIC8qIC0tLS0tLS0tLS0tLS0tICovXFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRkZXRhaWwtMjtcXHJcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg4MCUsODAlLDgwJSk7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWluLWhlaWdodDpjbGFtcCg2MHZoLCA2MHZoLCA2MHZoKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAudGl0bGV7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbnRyYXN0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kZXNjcmlwdGlvbntcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgY29sb3I6ICRjb250cmFzdDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRlbXAtY29udGFpbmVye1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwJTtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcblxcclxcbiAgICAgICAgJiA+ICoge1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogNHJlbTtcXHJcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgICAgICAgZmxleC1iYXNpczogMzMlO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hdmVyYWdlIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICA6Zmlyc3QtY2hpbGR7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkZXRhaWw7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAubWVkaWFuc3tcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICAgICAgIGgzID4gcCB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGV0YWlsO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC53ZWF0aGVyLWljb25zIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuICAgIC8qIEhhemFyZHMgU2VjdGlvbiAqL1xcclxcbiAgICAvKiAtLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiAgICAuaGF6YXJkcy1jb250YWluZXJ7XFxyXFxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgaGVpZ2h0OjMzdmg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuICAgICAgICAuaGF6YXJkLWxpc3R7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICA+KiB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogZGFzaGVkIDJweCB5ZWxsb3c7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6Y2xhbXAoNHJlbSwgMjUlLCAxMDAlKTtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRvbUFwcGVuZCB9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxuY29uc3Qga2V5U3RvcmFnZSA9ICgoKSA9PiB7XHJcbiAgbGV0IEFQSSA9IGAwM2FkMmRhOTQwZjdjYzJkZGM1MmQ4OTZiZmE0ZGViNGA7XHJcblxyXG4gIGNvbnN0IHZpZXdLZXkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gQVBJO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHZpZXdLZXkgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGZldGNoV2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7a2V5U3RvcmFnZS52aWV3S2V5KCl9JnVuaXRzPW1ldHJpY2AsXHJcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgKTsgLy8gZmV0Y2ggcmV0dXJucyBhIHByb21pc2VcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLy5qc29uKCkgcmV0dXJucyBhIHByb21pc2UuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiBkb21BcHBlbmQoZGF0YSk7IC8vIGlmIHlvdSB0cnkgYW5kIHJldHVybiBkYXRhLCBpdCBpcyBjYWxsZWQgcHJpb3IgdG8gYXdhaXRpbmdcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldElucHV0ID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hCb3hcIikudmFsdWU7XHJcbiAgcmV0dXJuIGlucHV0O1xyXG59O1xyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWNvbnRhaW5lclwiKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZmV0Y2hXZWF0aGVyKGdldElucHV0KGUpKTtcclxufSk7XHJcblxyXG4vL2RvIGkgbmVlZCBvdCByZXR1cm4gaXQgaGVyZT8gdGhlIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGNhbGxlZFxyXG4vL3Bhc3MgdGhhdCB0byBhIG9iamVjdCwgdGhhdCBjYW4gYmUgZGVzdHJ1Y3R1cmVkLlxyXG4vL3RoaXMgY2FuIGFsbCBoYXBwZW4gaW4gdGhlIEVMLlxyXG4vL25lZWQgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBvYmplY3QgcmVzcG9zbmUsIGRlc3RydWN0dXJlIGl0LCBhbmQgdGhlbiBhc3NpZ24gaXQgdG8gdGhlIGRvbSBPYmplY3QuXHJcblxyXG5leHBvcnQgeyBmZXRjaFdlYXRoZXIgfTtcclxuIiwiaW1wb3J0IHsgZmV0Y2hXZWF0aGVyIH0gZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5jb25zdCBuYXZCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYnRuXCIpO1xyXG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlua3NcIik7XHJcbiAgY29uc3QgYnRuSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYnRuID4gaW1nXCIpO1xyXG5cclxuICByZXR1cm4gQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgYnRuSW1nLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vL0RPTSBPYmplY3QgZm9yIGFzc2lnbmluZyBhbmQgZGVzdHJ1Y3R1cmluZyB0aGUgSnNvbi5yZXNwb25zZS5cclxuXHJcbmNvbnN0IGRvbUFwcGVuZCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgZGVncmVlID0gYFxcdTAwQjBDYDtcclxuICBjb25zdCBmYXJlbmhlaWdodCA9IGBcXHUwMEIwYDtcclxuICBjb25zdCBkYXRhSWNvbiA9IGAke2RhdGEud2VhdGhlclswXS5pY29ufWA7XHJcblxyXG4gIC8vc2V0cyB0aXRsZVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcclxuICBjb25zb2xlLmxvZyhkYXRhLm5hbWUpO1xyXG4gIGxvY2F0aW9uLmlubmVyVGV4dCA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS5zeXMuY291bnRyeX1gO1xyXG5cclxuICAvL3NldHMgd2VhdGhlciBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcclxuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgJHtkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcclxuXHJcbiAgLy9zZXRzIGF2ZXJhZ2UsIGhpZ2ggJiBsb3cgdGVtcFxyXG4gIGNvbnN0IGF2ZXJhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F2ZXJhZ2VCb3hcIik7XHJcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS1oaWdoXCIpO1xyXG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS1sb3dcIik7XHJcbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLWZlZWxzXCIpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLWh1bWlkXCIpO1xyXG4gIGF2ZXJhZ2UuaW5uZXJUZXh0ID0gYCR7ZGF0YS5tYWluLnRlbXB9JHtkZWdyZWV9YDtcclxuICBoaWdoLmlubmVyVGV4dCA9IGAke2RhdGEubWFpbi50ZW1wX21heH0ke2RlZ3JlZX1gO1xyXG4gIGxvdy5pbm5lclRleHQgPSBgJHtkYXRhLm1haW4udGVtcF9taW59JHtkZWdyZWV9YDtcclxuICBmZWVsc0xpa2UuaW5uZXJUZXh0ID0gYCR7ZGF0YS5tYWluLmZlZWxzX2xpa2V9JHtkZWdyZWV9YDtcclxuICBodW1pZGl0eS5pbm5lclRleHQgPSBgJHtkYXRhLm1haW4uaHVtaWRpdHl9JWA7XHJcbiAgLy9zZXRzIGZlZWxzLWxpa2VcclxuXHJcbiAgLy9zZXRzIHdlYXRoZXIgSWNvblxyXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWltZ1wiKTtcclxuICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhSWNvbn1AMngucG5nYDtcclxufTtcclxuXHJcbmV4cG9ydCB7IG5hdkJ1dHRvbiwgZG9tQXBwZW5kIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgbmF2QnV0dG9uIH0gZnJvbSBcIi4vYXBwL2RvbVwiO1xyXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIgfSBmcm9tIFwiLi9hcHAvYXBpXCI7XHJcblxyXG5uYXZCdXR0b24oKTtcclxuZmV0Y2hXZWF0aGVyKGBsb25kb25gKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9