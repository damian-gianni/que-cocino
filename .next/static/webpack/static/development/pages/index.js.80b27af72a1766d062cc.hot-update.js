webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/translation.js":
/*!******************************!*\
  !*** ./utils/translation.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var language = 'es';
var TEXTS = [{
  key: 'vegan',
  es: 'Vegano',
  en: 'Vegan'
}, {
  key: 'vegetarian',
  es: 'Vegetariano',
  en: 'Vegetarian'
}, {
  key: 'indifferent',
  es: 'Indiferente',
  en: 'Indifferent'
}, {
  key: 'type.of.food',
  es: 'Seleccione tipo de comida',
  en: 'Select type of food'
}, {
  key: 'recipes',
  es: 'Recetas',
  en: 'Recipes'
}, {
  key: 'vegetables.selector',
  es: 'Seleccione sus vegetales',
  en: 'Select your vegetables'
}];
/* harmony default export */ __webpack_exports__["default"] = (function (key) {
  try {
    return TEXTS.find(function (t) {
      return t.key === key;
    })[language];
  } catch (error) {
    console.log("Error find the key: ".concat(key));
    return key;
  }
});

/***/ })

})
//# sourceMappingURL=index.js.80b27af72a1766d062cc.hot-update.js.map