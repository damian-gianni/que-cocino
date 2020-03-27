webpackHotUpdate("static/development/pages/recipes/mealt-selector.js",{

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
}, {
  key: 'root',
  es: 'Raiz',
  en: 'root'
}, {
  key: 'bulb',
  es: 'Bulbo',
  en: 'Bulb'
}, {
  key: 'stem',
  es: 'Tallo',
  en: 'Stem'
}, {
  key: 'leaf',
  es: 'Hoja',
  en: 'Leaf'
}, {
  key: 'flower',
  es: 'Flor',
  en: 'Flower'
}, {
  key: 'cow',
  es: 'Flor',
  en: 'Flower'
}, {
  key: 'pig',
  es: 'Flor',
  en: 'Flower'
}, {
  key: 'chicken',
  es: 'Flor',
  en: 'Flower'
}, {
  key: 'fish',
  es: 'Flor',
  en: 'Flower'
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
//# sourceMappingURL=mealt-selector.js.e54247c9ea561a3aad9e.hot-update.js.map