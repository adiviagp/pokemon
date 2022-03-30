"use strict";
(() => {
var exports = {};
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 9377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _name_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./components/Loader.tsx
var Loader = __webpack_require__(4506);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/myPokemonVar.ts
var myPokemonVar = __webpack_require__(9627);
// EXTERNAL MODULE: ./components/Typography.tsx
var Typography = __webpack_require__(3585);
;// CONCATENATED MODULE: ./components/pokemon/PokemonCatch.tsx





const SlideContainer = (styled_default()).div`
  position: fixed;
  display: flex;
  bottom: 70px;
  width: 100%;
`;
const Slide = (styled_default()).div`
  max-width: 400px;
  width: 80vw;
  margin: 0 auto;
  background: #fafafa;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
`;
const CatchButton = (styled_default()).button`
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
  display: ${(props)=>props.isCatched ? 'none' : 'block'
}; ;
`;
const CatchForm = (styled_default()).div`
  padding: 20px;
  display: ${(props)=>props.isCatched ? 'block' : 'none'
};
`;
const CatchInput = (styled_default()).input`
  padding: 5px 10px;
  border: none;
  margin-top: 15px;
`;
const CatchSave = (styled_default()).button`
  padding: 5px 10px;
  background: #10b981;
  border: none;
`;
const PokemonCatch = ({ pokemon , handleClick  })=>{
    //   useEffect(() => console.log(pokemon), []);
    const { 0: pokemonName , 1: setPokemonName  } = (0,external_react_.useState)('');
    const { 0: isCatched , 1: setIsCatched  } = (0,external_react_.useState)(false);
    const { 0: isExist , 1: setIsExist  } = (0,external_react_.useState)(false);
    const { 0: isFailed , 1: setIsFailed  } = (0,external_react_.useState)(false);
    const handleSave = (e)=>{
        e.preventDefault();
        const data = {
            id: pokemon === null || pokemon === void 0 ? void 0 : pokemon.id,
            name: pokemon === null || pokemon === void 0 ? void 0 : pokemon.name,
            pokemonName: pokemonName
        };
    };
    const handleCatch = ()=>{
        var number = Math.random();
        if (number < 0.5) {
            setIsCatched(!isCatched);
            setIsFailed(false);
        } else {
            setIsCatched(false);
            setIsFailed(true);
        }
    };
    const handleSimpan = ()=>{
        var ref;
        const data1 = {
            id: pokemon.id,
            name: pokemon.name,
            image: (ref = pokemon.sprites) === null || ref === void 0 ? void 0 : ref.front_default,
            pokemonName: pokemonName
        };
        const checkUniqueName = (0,myPokemonVar/* default */.Z)().some((data)=>data.pokemonName === pokemonName
        );
        if (!checkUniqueName && pokemonName) {
            (0,myPokemonVar/* default */.Z)([
                ...(0,myPokemonVar/* default */.Z)(),
                data1
            ]);
            localStorage.setItem(myPokemonVar/* MYPOKEMON_STORAGE */.W, JSON.stringify((0,myPokemonVar/* default */.Z)()));
            setIsCatched(false);
            setPokemonName('');
            setIsExist(false);
        } else {
            setIsExist(true);
            setPokemonName('');
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SlideContainer, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Slide, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CatchButton, {
                    isCatched: isCatched,
                    onClick: handleCatch,
                    children: [
                        isFailed && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: "Failed! , "
                        }),
                        "Try to catch ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "success probability is 50%"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CatchForm, {
                    isCatched: isCatched,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
                            variant: "h2",
                            children: [
                                "kudos! You got ",
                                pokemon.name
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                            variant: "h3",
                            children: "Fill in the name :"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CatchInput, {
                            type: "text",
                            name: "pokemonName",
                            value: pokemonName,
                            placeholder: "name",
                            onChange: (e)=>setPokemonName(e.target.value)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CatchSave, {
                            onClick: handleSimpan,
                            children: "save"
                        }),
                        isExist && /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                            variant: "h3",
                            color: "#ec407a",
                            children: "Name already exist, try again!"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const pokemon_PokemonCatch = (PokemonCatch);

// EXTERNAL MODULE: ./lib/apollo.ts + 1 modules
var apollo = __webpack_require__(9690);
;// CONCATENATED MODULE: ./lib/queries/getPokemonByName.ts

const GET_POKEMON_BY_NAME = client_.gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
/* harmony default export */ const getPokemonByName = (GET_POKEMON_BY_NAME);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(8992);
// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(8579);
;// CONCATENATED MODULE: ./components/pokemon/PokemonDetail.tsx







const HeaderDetail = (styled_default()).div`
  background-color: #222;
  min-height: 25vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: -20px;
`;
const DetailNav = (styled_default()).div`
  margin-bottom: 1em;
`;
const DetailTitle = (styled_default()).div``;
const DetailImage = (styled_default()).div`
  position: absolute;
  bottom: -50px;
  right: 0;
  z-index: 999;
`;
const InfoDetail = (styled_default()).div`
  background-color: #fff;
  margin-top: -20px;
  border-radius: 20px 20px 0px 0px;
  position: relative;
  padding: 50px 20px 200px;
`;
const LabelWrapper = (styled_default()).div`
  display: flex;
  flex-flow: row wrap;
  gap: 7px;
  margin-bottom: 20px;
`;
const LabelDetail = (styled_default()).span`
  padding: 5px 15px;
  font-size: 0.75em;
  background: gray;
  border-radius: 0.5em;
  color: #fff;
  margin-top: 10px;
`;
const PokemonDetail = ({ pokemon  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        noPadding: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderDetail, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailNav, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    width: "25",
                                    height: "25",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        fill: "#FFFFFF",
                                        d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                                        clipRule: "evenodd"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailTitle, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                            variant: "h1",
                            color: "#ffffff",
                            children: pokemon.name
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DetailImage, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: pokemon.sprites.front_default,
                            width: 200,
                            height: 200,
                            alt: "poke"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InfoDetail, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                        variant: "h2",
                        children: "Types"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LabelWrapper, {
                        children: pokemon && pokemon.types.map((type, index)=>/*#__PURE__*/ jsx_runtime_.jsx(LabelDetail, {
                                children: type.type.name
                            }, index)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography/* default */.Z, {
                        variant: "h2",
                        children: "Moves"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(LabelWrapper, {
                        children: pokemon && pokemon.moves.map((move, index)=>/*#__PURE__*/ jsx_runtime_.jsx(LabelDetail, {
                                children: move.move.name
                            }, index)
                        )
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pokemon_PokemonDetail = (PokemonDetail);

;// CONCATENATED MODULE: ./pages/pokemon/[name].tsx







const MUTATION_ADD_ITEM_TO_CART = client_.gql`
  mutation ($id: String!) {
    addItemToCart(id: $id) @client
  }
`;
const Detail = ({ name  })=>{
    const { loading , error , data  } = (0,client_.useQuery)(getPokemonByName, {
        variables: {
            name: name
        }
    });
    const [addItemToCart] = (0,client_.useMutation)(MUTATION_ADD_ITEM_TO_CART, {
        variables: {
            id: name
        }
    });
    if (loading) return /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {});
    if (error) return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "Error :("
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(pokemon_PokemonDetail, {
                pokemon: data.pokemon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(pokemon_PokemonCatch, {
                pokemon: data.pokemon,
                handleClick: addItemToCart
            })
        ]
    });
};
async function getServerSideProps(context) {
    const { params  } = context;
    const { name  } = params;
    const apolloClient = (0,apollo/* initializeApollo */["in"])();
    await apolloClient.query({
        query: getPokemonByName,
        variables: {
            name: name
        }
    });
    return (0,apollo/* addApolloState */._p)(apolloClient, {
        props: {
            name
        }
    });
}
/* harmony default export */ const _name_ = (Detail);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [966,16,894,579,690,513], () => (__webpack_exec__(9377)));
module.exports = __webpack_exports__;

})();