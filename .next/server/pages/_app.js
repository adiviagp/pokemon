"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx





const BottomNav = (styled_default()).section`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
`;
const Nav = (styled_default()).nav`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const NavItem = (styled_default()).a`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
const Navbar = ()=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(1);
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(BottomNav, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Nav, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        passHref: true,
                        children: router.asPath === '/' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavItem, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "21",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    className: "inline-block mb-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M18.5 11.4v9h-13v-9c-1.1 0-2-.1-2 1v8c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-8c0-1.1-.9-1-2-1z",
                                            fill: "#00AA5B"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M21.5 12.5h-19c-.9 0-1.3-1.1-.7-1.7l8.8-8.5c.8-.7 2-.7 2.8 0l8.8 8.5c.7.6.2 1.7-.7 1.7z",
                                            fill: "#00AA5B"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M18.5 9.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2z",
                                            fill: "#00AA5B"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                                            fill: "#fff"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M14 15.5h-4c-.6 0-1 .4-1 1v6h6v-6c0-.6-.4-1-1-1z",
                                            fill: "#145638"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "tab tab-home block text-xs",
                                    children: "Beranda"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavItem, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "21",
                                    viewBox: "0 0 24 21",
                                    fill: "none",
                                    className: "inline-block mb-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
                                            fill: "#525A67"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M21.9 9.2l-9.2-7.7c-.4-.3-.9-.3-1.3 0L2.2 9.2c-.8.6-.4 1.8.6 1.8H4v8c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-8h1.2c1 0 1.4-1.2.7-1.8z",
                                            stroke: "#525A67",
                                            strokeWidth: "2",
                                            strokeMiterlimit: "10"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M13.5 13h-3c-.6 0-1 .4-1 1v6h5v-6c0-.6-.4-1-1-1z",
                                            stroke: "#525A67",
                                            strokeWidth: "2",
                                            strokeMiterlimit: "10"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "tab tab-home block text-xs",
                                    children: "Beranda"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/mypokemon",
                        passHref: true,
                        children: router.asPath === '/mypokemon' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavItem, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "19",
                                    height: "22",
                                    viewBox: "0 0 19 22",
                                    fill: "none",
                                    className: "inline-block mb-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M9 11.3a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6zm-8.2 7v1.9c0 .6.4 1 1 1h14.5c.6 0 1-.4 1-1v-1.9c0-1-1-6.3-8.2-6.3-7.2 0-8.3 5.4-8.3 6.3z",
                                            fill: "#05AA5B",
                                            stroke: "#00AA5B",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12 7c0 1.7-1.3 3-3 3S6 8.7 6 7",
                                            fill: "#fff"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M9 18c-2.2 0-4-1.8-4-4 0-.6.4-1 1-1s1 .4 1 1c0 1.1.9 2 2 2s2-.9 2-2c0-.6.4-1 1-1s1 .4 1 1c0 2.2-1.8 4-4 4z",
                                            fill: "#145638"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "tab tab-home block text-xs",
                                    children: "My Pokemon"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavItem, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "inline-block mb-1",
                                    width: "18",
                                    height: "21",
                                    viewBox: "0 0 18 21",
                                    fill: "none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M9 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm-8 7v2c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-2c0-1-1-6.5-8-6.5S1 16 1 17z",
                                        stroke: "#525A67",
                                        strokeWidth: "2",
                                        strokeMiterlimit: "10"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "tab tab-home block text-xs",
                                    children: "My Pokemon"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./src/lib/apollo.ts + 1 modules
var apollo = __webpack_require__(9362);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    const apolloClient = (0,apollo/* useApollo */.Uk)(pageProps);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(client_.ApolloProvider, {
        client: apolloClient,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [397,676,664,362], () => (__webpack_exec__(4201)));
module.exports = __webpack_exports__;

})();