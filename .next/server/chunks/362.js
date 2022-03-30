"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 9362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_p": () => (/* binding */ addApolloState),
  "in": () => (/* binding */ initializeApollo),
  "Uk": () => (/* binding */ useApollo)
});

// UNUSED EXPORTS: APOLLO_STATE_PROP_NAME

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./src/lib/myPokemonVar.ts
var myPokemonVar = __webpack_require__(8501);
;// CONCATENATED MODULE: ./src/lib/apolloClient.ts


function createApolloClient() {
    return new client_.ApolloClient({
        ssrMode: "undefined" === 'undefined',
        link: new client_.HttpLink({
            uri: 'https://graphql-pokeapi.graphcdn.app/',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            }
        }),
        cache: new client_.InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        pokemons: {
                            keyArgs: false,
                            merge (existing, incoming) {
                                if (!incoming) return existing;
                                if (!existing) return incoming; // existing will be empty the first time
                                const { results , ...rest } = incoming;
                                let res = rest;
                                res.results = [
                                    ...existing.results,
                                    ...results
                                ]; // Merge existing items with the items from incoming
                                return res;
                            }
                        },
                        cartItems: {
                            read () {
                                return (0,myPokemonVar/* default */.Z)();
                            }
                        }
                    }
                }
            }
        })
    });
}

// EXTERNAL MODULE: external "deepmerge"
var external_deepmerge_ = __webpack_require__(6330);
var external_deepmerge_default = /*#__PURE__*/__webpack_require__.n(external_deepmerge_);
// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(113);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);
;// CONCATENATED MODULE: ./src/lib/apollo.ts




const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
let apolloClient;
function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient !== null && apolloClient !== void 0 ? apolloClient : createApolloClient();
    if (initialState) {
        const existingCache = _apolloClient.extract();
        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = external_deepmerge_default()(initialState, existingCache, {
            arrayMerge: (destinationArray, sourceArray)=>[
                    ...sourceArray,
                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!isEqual_default()(d, s)
                        )
                    ), 
                ]
        });
        // Restore the cache with the merged data
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (true) return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}
function addApolloState(client, pageProps) {
    if (pageProps === null || pageProps === void 0 ? void 0 : pageProps.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }
    return pageProps;
}
function useApollo(pageProps) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = (0,external_react_.useMemo)(()=>initializeApollo(state)
    , [
        state
    ]);
    return store;
}


/***/ }),

/***/ 8501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ MYPOKEMON_STORAGE),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const MYPOKEMON_STORAGE = 'mypokemon';
let storage;
if (false) {}
const MyPokemonVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.makeVar)(storage || []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPokemonVar);


/***/ })

};
;