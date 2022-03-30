"use strict";
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 5334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5406);



const Head = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().header)`
  display: flex;
  position: relative;
  margin-bottom: 2em;
`;
const PokeCircle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  position: absolute;
  right: -100px;
  top: -100px;
`;
const Header = ({ title , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Head, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                variant: "h1",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PokeCircle, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "280",
                    height: "280",
                    viewBox: "0 0 663 666",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M661.908 373C642.149 538.051 501.659 666 331.286 666C160.912 666 20.4223 538.051 0.663304 373H203.665C220.108 429.617 272.364 471 334.286 471C396.207 471 448.463 429.617 464.906 373H661.908ZM662.571 299H465.47C449.688 241.36 396.934 199 334.286 199C271.637 199 218.883 241.36 203.101 299H0C17.0311 131.06 158.853 0 331.286 0C503.718 0 645.54 131.06 662.571 299Z",
                            fill: "#EEEEEE"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            cx: "334.286",
                            cy: "333",
                            r: "75",
                            fill: "#EEEEEE"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 4634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_CARTS_ITEMS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query GetCartItems {
    cartItems @client
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_CARTS_ITEMS);


/***/ })

};
;