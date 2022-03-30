"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(8992);
// EXTERNAL MODULE: ./components/Header.tsx
var Header = __webpack_require__(5194);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./lib/queries/getPokemons.ts

const GET_POKEMONS = client_.gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
`;
/* harmony default export */ const getPokemons = (GET_POKEMONS);

// EXTERNAL MODULE: ./components/Loader.tsx
var Loader = __webpack_require__(4506);
// EXTERNAL MODULE: ./components/Typography.tsx
var Typography = __webpack_require__(3585);
// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(8579);
// EXTERNAL MODULE: ../public/loaderbg.png
var loaderbg = __webpack_require__(2562);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
// EXTERNAL MODULE: ./lib/queries/getCart.ts
var getCart = __webpack_require__(171);
;// CONCATENATED MODULE: ./components/pokemon/PokemonCard.tsx









const Card = (styled_default()).div`
  width: 47%;
  background: #fafafa;
  border-radius: 0.75em;
  padding: 1em;
  height: 150px;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const PokeImage = (styled_default()).div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const TotalOwned = (styled_default()).span`
  padding: 5px 8px;
  font-size: 0.5em;
  background: gray;
  border-radius: 1em;
  color: #fff;
`;
const PokemonCard = ({ pokemon  })=>{
    const { data , loading , error  } = (0,client_.useQuery)(getCart/* default */.Z);
    const countOwnedPokemon = data.cartItems.reduce((total, x)=>x.id === pokemon.id ? total + 1 : total
    , 0);
    return /*#__PURE__*/ jsx_runtime_.jsx(Card, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: `/pokemon/${pokemon.name}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                            variant: "h2",
                            children: pokemon === null || pokemon === void 0 ? void 0 : pokemon.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TotalOwned, {
                            children: [
                                "Owned: ",
                                countOwnedPokemon
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PokeImage, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: pokemon.image ? pokemon.image : loaderbg/* default */.Z,
                                width: 100,
                                height: 100,
                                alt: "poke"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const pokemon_PokemonCard = (PokemonCard);

;// CONCATENATED MODULE: ./components/pokemon/PokemonList.tsx







const PokemonContainer = (styled_default()).div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  gap: 10px;
`;
const LoadMore = (styled_default()).button`
  background-color: #0ea5e9;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 100px;
`;
const PokemonList = ()=>{
    const { loading , error , data , fetchMore  } = (0,client_.useQuery)(getPokemons, {
        variables: {
            limit: 10,
            offset: 0
        }
    });
    if (loading) return /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {});
    if (error) return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "Error :("
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PokemonContainer, {
                children: data.pokemons.results.map((pokemon, index)=>/*#__PURE__*/ jsx_runtime_.jsx(pokemon_PokemonCard, {
                        pokemon: pokemon
                    }, index)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LoadMore, {
                onClick: ()=>fetchMore({
                        variables: {
                            limit: 5,
                            offset: data.pokemons.nextOffset
                        }
                    })
                ,
                children: "LOAD MORE"
            })
        ]
    });
};
/* harmony default export */ const pokemon_PokemonList = (PokemonList);

// EXTERNAL MODULE: ./lib/apollo.ts + 1 modules
var apollo = __webpack_require__(9690);
;// CONCATENATED MODULE: ./pages/index.tsx








const Button = (styled_default()).button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
const Pokemon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                    title: "Pok\xe9dex"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(pokemon_PokemonList, {})
            ]
        })
    });
};
async function getServerSideProps(context) {
    const apolloClient = (0,apollo/* initializeApollo */["in"])();
    await apolloClient.query({
        query: getPokemons,
        variables: {
            limit: 10,
            offset: 0
        }
    });
    return (0,apollo/* addApolloState */._p)(apolloClient, {
        props: {}
    });
}
/* harmony default export */ const pages = (Pokemon);


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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [966,16,894,579,690,513,470], () => (__webpack_exec__(4220)));
module.exports = __webpack_exports__;

})();