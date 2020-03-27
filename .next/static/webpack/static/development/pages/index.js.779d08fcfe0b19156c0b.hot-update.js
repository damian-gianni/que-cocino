webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/ButtonSelector.js":
/*!**************************************!*\
  !*** ./Components/ButtonSelector.js ***!
  \**************************************/
/*! exports provided: ButtonSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSelector", function() { return ButtonSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Link */ "./src/Link.js");
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/translation */ "./utils/translation.js");
var _this = undefined,
    _jsxFileName = "/Users/damiangianni/Documents/Workspace/que-cocino/Components/ButtonSelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1)
    },
    icon: {
      fontSize: '60px'
    }
  };
});
var ButtonSelector = function ButtonSelector(_ref) {
  var href = _ref.href,
      text = _ref.text,
      icon = _ref.icon,
      typeSelector = _ref.typeSelector;
  var classes = useStyles();
  return __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: href,
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    onClick: function onClick() {
      localStorage.setItem("".concat(typeSelector), text);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }, __jsx("i", {
    className: "".concat(classes.icon, " ").concat(icon),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "caption",
    display: "block",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, Object(_utils_translation__WEBPACK_IMPORTED_MODULE_5__["default"])(text))));
};

/***/ })

})
//# sourceMappingURL=index.js.779d08fcfe0b19156c0b.hot-update.js.map