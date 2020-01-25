module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: setRestaurants, selectRestaurant, searchRestaurant, sortRestaurants, centerMapWithLocation, toggleListingAwards, toggleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRestaurants", function() { return setRestaurants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRestaurant", function() { return selectRestaurant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRestaurant", function() { return searchRestaurant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRestaurants", function() { return sortRestaurants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerMapWithLocation", function() { return centerMapWithLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleListingAwards", function() { return toggleListingAwards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMap", function() { return toggleMap; });
/* harmony import */ var _constants_restaurants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/restaurants */ "./constants/restaurants.js");

const setRestaurants = () => {
  return {
    type: "SET_RESTAURANTS",
    payload: _constants_restaurants__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
};
const selectRestaurant = restaurant => {
  return {
    type: "SELECT_RESTAURANT",
    payload: restaurant
  };
};
const searchRestaurant = restaurant => {
  return {
    type: "SEARCH_RESTAURANT",
    payload: restaurant
  };
};
const sortRestaurants = restaurants => {
  return {
    type: "SORT_RESTAURANTS",
    payload: restaurants
  };
};
const centerMapWithLocation = location => {
  return {
    type: "CENTER_MAP_WITH_LOCATION",
    payload: location
  };
};
const toggleListingAwards = boolean => {
  return {
    type: "TOGGLE_LISTING_AWARDS",
    payload: boolean
  };
};
const toggleMap = boolean => {
  return {
    type: "TOGGLE_MAP",
    payload: boolean
  };
};

/***/ }),

/***/ "./components/common/badge.jsx":
/*!*************************************!*\
  !*** ./components/common/badge.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/components/common/badge.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Badge = props => {
  const {
    icon,
    description
  } = props;

  const setColor = icon => {
    if (icon === "fas fa-award") {
      // pink
      return "#ff8d73";
    } else if (icon === "fas fa-heart" || icon === "fas fa-medal" || icon === "fas fa-umbrella-beach" || icon === "fab fa-instagram" || icon === "fas fa-crown") {
      // red
      return "#ea4135";
    } else {
      // orange
      return "#ffb832";
    }
  };

  const setSize = icon => {
    if (icon === "fas fa-frog" || icon === "fas fa-leaf") {
      return "13px";
    } else return "15px";
  };

  const iconWrapper = {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    fontSize: setSize(icon),
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "50%"
  };
  const tooltipBadge = {
    position: "absolute",
    backgroundColor: "#fff",
    fontSize: "12px",
    fontFamily: "Montserrat",
    borderRadius: "4px",
    padding: "6px 8px",
    whiteSpace: "nowrap",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
    zIndex: 999,
    color: setColor(icon)
  };
  return __jsx("div", {
    className: "badge-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "icon-wrapper",
    style: iconWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("i", {
    className: icon,
    style: {
      color: setColor(icon)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })), __jsx("div", {
    className: "tooltip-badge",
    style: tooltipBadge,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./components/common/card/card.jsx":
/*!*****************************************!*\
  !*** ./components/common/card/card.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions */ "./actions/index.js");
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../badge */ "./components/common/badge.jsx");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/components/common/card/card.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Card = props => {
  const {
    scrollPosition,
    selectRestaurant,
    selectedRestaurant,
    restaurant,
    listedRestaurants,
    tabIndex,
    showMap
  } = props;

  const handleClick = () => {
    selectRestaurant(restaurant);
  };

  const windowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__["useWindowSize"])();
  return __jsx("div", {
    className: `tab-number-${tabIndex} restaurant ${restaurant === selectedRestaurant ? "selected" : ""}`,
    onClick: handleClick,
    role: "link",
    id: `${restaurant.award ? restaurant.award.scroll : ""}`,
    tabIndex: tabIndex + 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, (!showMap || showMap && windowSize.width < 728) && __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: {
      pathname: `/detail/${restaurant.id}`,
      restaurant,
      listedRestaurants
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, !showMap && __jsx("div", {
    className: "grid-img-overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], {
    alt: "restaurant-overview",
    scrollPosition: scrollPosition,
    src: restaurant.imageUrl,
    threshold: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), restaurant.award && __jsx(_badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: restaurant.award.icon,
    description: restaurant.award.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("div", {
    className: "card-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-header-type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, restaurant.type, " -", ' ', __jsx("span", {
    className: "card-header-budget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, restaurant.price)), __jsx("div", {
    className: "card-header-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), " ", restaurant.rate, " (", restaurant.votes, "+)")), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, restaurant.name), __jsx("div", {
    className: "card-restaurant-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, restaurant.address), showMap && windowSize.width > 728 && __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: {
      pathname: `/detail/${restaurant.id}`,
      restaurant,
      listedRestaurants
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: "card-see-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Voir infos")))));
};

const mapStateToProps = state => {
  return {
    selectedRestaurant: state.selectedrestaurant,
    showMap: state.showMap
  };
};

const mapDispatchToProps = dispatch => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    selectRestaurant: _actions__WEBPACK_IMPORTED_MODULE_5__["selectRestaurant"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["trackWindowScroll"])(Card)));

/***/ }),

/***/ "./components/common/card/index.js":
/*!*****************************************!*\
  !*** ./components/common/card/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./components/common/card/card.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _card__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/home/contact-section/contact-section.jsx":
/*!*************************************************************!*\
  !*** ./components/home/contact-section/contact-section.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_contact_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/contact-icons */ "./constants/contact-icons.js");
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/components/home/contact-section/contact-section.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContactSection = props => {
  const {
    contactIconContainer,
    contactContainer,
    contactTitle,
    history
  } = props;

  const goToContactPage = () => {
    history.push({
      pathname: "/contact"
    });
  };

  return __jsx("div", {
    className: "home-contact",
    ref: contactContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "gradient-stroke",
    ref: contactTitle,
    id: "home-contact-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Un resto \xE0 proposer ?"), __jsx("button", {
    className: "go-to-contact",
    onClick: () => goToContactPage(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("span", {
    className: "btn-first-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Ecrivez-nous !"), __jsx("span", {
    className: "btn-second-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Ecrivez-nous !")), __jsx("div", {
    className: "contact-icon-container",
    ref: contactIconContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, _constants_contact_icons__WEBPACK_IMPORTED_MODULE_1__["CONTACT_ICONS"].map(icon => {
    return __jsx("img", {
      key: icon,
      className: `contact-${icon}`,
      src: `contact-${icon}.svg`,
      alt: `${icon}-animation`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactSection);

/***/ }),

/***/ "./components/home/contact-section/index.js":
/*!**************************************************!*\
  !*** ./components/home/contact-section/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-section */ "./components/home/contact-section/contact-section.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _contact_section__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/home/foodlab-concept/foodlab-concept.jsx":
/*!*************************************************************!*\
  !*** ./components/home/foodlab-concept/foodlab-concept.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_concept_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/concept-steps */ "./constants/concept-steps.js");
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/components/home/foodlab-concept/foodlab-concept.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FoodlabConcept = ({
  conceptContainer
}) => __jsx("div", {
  className: "home-foodlab-concept",
  ref: conceptContainer,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, _constants_concept_steps__WEBPACK_IMPORTED_MODULE_1__["CONCEPT_STEPS"].map(step => {
  return __jsx("div", {
    key: step.nb,
    className: `home-concept-step home-step-${step.nb}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    src: step.src,
    alt: step.nb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: "home-concept-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, step.description)));
}));

/* harmony default export */ __webpack_exports__["default"] = (FoodlabConcept);

/***/ }),

/***/ "./components/home/foodlab-concept/index.js":
/*!**************************************************!*\
  !*** ./components/home/foodlab-concept/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _foodlab_concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodlab-concept */ "./components/home/foodlab-concept/foodlab-concept.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _foodlab_concept__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/home/footer/footer.jsx":
/*!*******************************************!*\
  !*** ./components/home/footer/footer.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/components/home/footer/footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = ({
  hotDogRef,
  isVisible
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  className: "footer-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("img", {
  className: "fried-potatoes",
  src: "/fried-potatoes.svg",
  alt: "fried-potatoes",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("img", {
  className: "fried-chicken",
  src: "/fried-chicken.svg",
  alt: "fried-chicken",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("img", {
  className: "hot-dog",
  src: "/hot-dog.svg",
  alt: "hot-dog",
  ref: hotDogRef,
  style: {
    visibility: isVisible ? "visible" : "hidden",
    animation: isVisible ? "3s translateHotDog" : ""
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("img", {
  className: "cola",
  src: "/cola.svg",
  alt: "cola",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx("div", {
  className: "home-footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("div", {
  className: "home-footer-brand",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("i", {
  className: "fas fa-copyright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), "Foodlab")));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/home/footer/index.js":
/*!*****************************************!*\
  !*** ./components/home/footer/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./components/home/footer/footer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/home/hero-scene/hero-scene.jsx":
/*!***************************************************!*\
  !*** ./components/home/hero-scene/hero-scene.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_filter_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/filter-options */ "./constants/filter-options.js");
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/components/home/hero-scene/hero-scene.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HeroScene = ({
  history
}) => {
  const {
    0: arr,
    1: setArr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Tous les arr.");
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Tous les types");

  const handleArrChange = e => {
    const selectedArr = e.value;
    setArr(selectedArr);
  };

  const handleTypeChange = e => {
    const selectedType = e.value;
    setType(selectedType);
  };

  const goToRestaurantsPage = () => {
    history.push({
      pathname: "/restaurants",
      homeArr: arr,
      homeType: type
    });
  };

  return __jsx("div", {
    className: "home-hero-scene",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: "home-hero-scene-intro-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "home-hero-scene-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "home-catchphrase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Foodlab, la s\xE9lection des meilleurs restos de Paris"), __jsx("div", {
    className: "home-catchphrase-underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("div", {
    className: "home-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "class\xE9s par notes, types de cuisine et arrondissements."))), __jsx("div", {
    className: "home-hero-scene-image-overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("div", {
    className: "home-hero-scene-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: arr,
    options: _constants_filter_options__WEBPACK_IMPORTED_MODULE_2__["INIT_ARR_OPTIONS"],
    onChange: handleArrChange,
    placeholder: arr,
    isSearchable: false,
    className: "filters-react-select filter-arr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: type,
    options: _constants_filter_options__WEBPACK_IMPORTED_MODULE_2__["INIT_TYPE_OPTIONS"],
    onChange: handleTypeChange,
    placeholder: type,
    isSearchable: false,
    className: "filters-react-select filter-type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("button", {
    className: "button-home-go",
    onClick: () => goToRestaurantsPage(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("span", {
    className: "btn-first-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Voir notre s\xE9lection"), __jsx("span", {
    className: "btn-second-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Voir notre s\xE9lection"))), __jsx("div", {
    className: "scroll-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: "mouse-scroll-ball",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroScene);

/***/ }),

/***/ "./components/home/hero-scene/index.js":
/*!*********************************************!*\
  !*** ./components/home/hero-scene/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-scene */ "./components/home/hero-scene/hero-scene.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _hero_scene__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/home/home.jsx":
/*!**********************************!*\
  !*** ./components/home/home.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hero_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-scene */ "./components/home/hero-scene/index.js");
/* harmony import */ var _weekly_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekly-new */ "./components/home/weekly-new/index.js");
/* harmony import */ var _foodlab_concept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foodlab-concept */ "./components/home/foodlab-concept/index.js");
/* harmony import */ var _new_restaurants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-restaurants */ "./components/home/new-restaurants/index.js");
/* harmony import */ var _contact_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-section */ "./components/home/contact-section/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ "./components/home/footer/index.js");
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/components/home/home.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const usePrevious = value => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = value;
  });
  return ref.current;
};

const Home = props => {
  const {
    history
  } = props;
  const {
    0: isVisible,
    1: setIsVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const hotDogRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const contactTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const contactIconContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const conceptContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const weeklyCard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const newRestaurantsContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const contactContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const prevCount = usePrevious(count);

  const triggerHotDog = () => {
    const windowHeight = window.innerHeight;
    const view = window.pageYOffset;
    const hotDogIconDistance = hotDogRef.current.offsetTop;
    const hotDogIconHeight = hotDogRef.current.height;

    if (windowHeight + view - hotDogIconHeight >= hotDogIconDistance) {
      setIsVisible(true);
    }
  };

  const moveContactElements = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;
    contactIconContainer.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * 0.04},${distanceFromMiddleY * 0.08},0,1)`;
    contactTitle.current.style.transform = `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000007},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.02},${distanceFromMiddleY * -0.05},0,1)`;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (count < prevCount) {
      if (prevCount - count < 40) {
        return;
      }

      weeklyCard.current.classList.remove("bg-spin-down");
      weeklyCard.current.classList.add("bg-spin-up");
      conceptContainer.current.classList.remove("bg-spin-down");
      conceptContainer.current.classList.add("bg-spin-up");
      newRestaurantsContainer.current.classList.remove("bg-spin-down");
      newRestaurantsContainer.current.classList.add("bg-spin-up");
    } else if (count > prevCount) {
      if (count - prevCount < 40) {
        return;
      }

      weeklyCard.current.classList.remove("bg-spin-up");
      weeklyCard.current.classList.add("bg-spin-down");
      conceptContainer.current.classList.remove("bg-spin-up");
      conceptContainer.current.classList.add("bg-spin-down");
      newRestaurantsContainer.current.classList.remove("bg-spin-up");
      newRestaurantsContainer.current.classList.add("bg-spin-down");
    }
  }, [count, prevCount]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", () => {
      setCount(window.pageYOffset);
    }, false);
    return () => window.removeEventListener("scroll", () => {
      setCount(null);
    }, false);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", triggerHotDog, false);
    return () => window.removeEventListener("scroll", triggerHotDog, false);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const container = contactContainer.current;
    container.addEventListener("mousemove", moveContactElements, false);
    return () => container.removeEventListener("mousemove", moveContactElements, false);
  }, []);
  return __jsx("div", {
    className: "home-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_hero_scene__WEBPACK_IMPORTED_MODULE_1__["default"], {
    history: history,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }), __jsx(_weekly_new__WEBPACK_IMPORTED_MODULE_2__["default"], {
    history: history,
    weeklyCard: weeklyCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), __jsx(_foodlab_concept__WEBPACK_IMPORTED_MODULE_3__["default"], {
    conceptContainer: conceptContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), __jsx(_new_restaurants__WEBPACK_IMPORTED_MODULE_4__["default"], {
    history: history,
    newRestaurantsContainer: newRestaurantsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }), __jsx(_contact_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    history: history,
    contactContainer: contactContainer,
    contactIconContainer: contactIconContainer,
    contactTitle: contactTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx(_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    hotDogRef: hotDogRef,
    isVisible: isVisible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/home/index.js":
/*!**********************************!*\
  !*** ./components/home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./components/home/home.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _home__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/home/new-restaurants/index.js":
/*!**************************************************!*\
  !*** ./components/home/new-restaurants/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_restaurants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-restaurants */ "./components/home/new-restaurants/new-restaurants.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _new_restaurants__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/home/new-restaurants/new-restaurants.jsx":
/*!*************************************************************!*\
  !*** ./components/home/new-restaurants/new-restaurants.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_new_restaurants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/new-restaurants */ "./constants/new-restaurants.js");
/* harmony import */ var _common_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/card */ "./components/common/card/index.js");
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/components/home/new-restaurants/new-restaurants.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NewRestaurants = ({
  history,
  newRestaurantsContainer
}) => __jsx("div", {
  className: "home-new",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "home-new-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("i", {
  className: "fas fa-rocket",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("span", {
  className: "home-new-title-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Les petits nouveaux"), __jsx("i", {
  className: "fas fa-rocket",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), __jsx("div", {
  className: "new-restaurants-container",
  ref: newRestaurantsContainer,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, _constants_new_restaurants__WEBPACK_IMPORTED_MODULE_1__["NEW_RESTAURANTS"].map((newRest, i) => {
  return __jsx("div", {
    key: newRest.id,
    className: "new-restaurant",
    onClick: () => history.push({
      pathname: `/detail/${newRest.id}`,
      restaurant: newRest,
      listedRestaurants: _constants_new_restaurants__WEBPACK_IMPORTED_MODULE_1__["NEW_RESTAURANTS"]
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_common_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: i,
    listedRestaurants: _constants_new_restaurants__WEBPACK_IMPORTED_MODULE_1__["NEW_RESTAURANTS"],
    restaurant: newRest,
    tabIndex: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }));
})));

/* harmony default export */ __webpack_exports__["default"] = (NewRestaurants);

/***/ }),

/***/ "./components/home/weekly-new/index.js":
/*!*********************************************!*\
  !*** ./components/home/weekly-new/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weekly_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekly-new */ "./components/home/weekly-new/weekly-new.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _weekly_new__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/home/weekly-new/weekly-new.jsx":
/*!***************************************************!*\
  !*** ./components/home/weekly-new/weekly-new.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_weekly_restaurant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/weekly-restaurant */ "./constants/weekly-restaurant.js");
/* harmony import */ var _common_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/card */ "./components/common/card/index.js");
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/components/home/weekly-new/weekly-new.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const WeeklyNew = ({
  history,
  weeklyCard
}) => __jsx("div", {
  className: "home-weekly-new",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "home-weekly-new-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("i", {
  className: "fas fa-award",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("span", {
  className: "home-weekly-title-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Le resto de la semaine"), __jsx("i", {
  className: "fas fa-award",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), __jsx("div", {
  className: "weekly-restaurant",
  ref: weeklyCard,
  onClick: () => history.push({
    pathname: `/detail/${_constants_weekly_restaurant__WEBPACK_IMPORTED_MODULE_1__["WEEKLY_RESTAURANT"].id}`,
    restaurant: _constants_weekly_restaurant__WEBPACK_IMPORTED_MODULE_1__["WEEKLY_RESTAURANT"],
    listedRestaurants: [_constants_weekly_restaurant__WEBPACK_IMPORTED_MODULE_1__["WEEKLY_RESTAURANT"]]
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(_common_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
  tabIndex: 0,
  restaurant: _constants_weekly_restaurant__WEBPACK_IMPORTED_MODULE_1__["WEEKLY_RESTAURANT"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (WeeklyNew);

/***/ }),

/***/ "./constants/concept-steps.js":
/*!************************************!*\
  !*** ./constants/concept-steps.js ***!
  \************************************/
/*! exports provided: CONCEPT_STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCEPT_STEPS", function() { return CONCEPT_STEPS; });
const CONCEPT_STEPS = [{
  nb: "one",
  src: "/search.svg",
  description: "Le classement des meilleurs restos parisiens par notes utilisateurs"
}, {
  nb: "two",
  src: "/map.svg",
  description: "Foodlab est accessible partout où vous êtes, desktop ou mobile"
}, {
  nb: "three",
  src: "/mailbox.svg",
  description: "Les nouveaux restos en avant-première dans votre mailbox"
}];

/***/ }),

/***/ "./constants/contact-icons.js":
/*!************************************!*\
  !*** ./constants/contact-icons.js ***!
  \************************************/
/*! exports provided: CONTACT_ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT_ICONS", function() { return CONTACT_ICONS; });
const CONTACT_ICONS = ["burger", "lobster", "salad", "ice-cream", "pizza", "pasta"];

/***/ }),

/***/ "./constants/filter-options.js":
/*!*************************************!*\
  !*** ./constants/filter-options.js ***!
  \*************************************/
/*! exports provided: INIT_TYPE_OPTIONS, INIT_ARR_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_TYPE_OPTIONS", function() { return INIT_TYPE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_ARR_OPTIONS", function() { return INIT_ARR_OPTIONS; });
const INIT_TYPE_OPTIONS = [{
  label: "Tous les types",
  value: "Tous les types"
}, {
  label: "Algérien",
  value: "Algérien"
}, {
  label: "Allemand",
  value: "Allemand"
}, {
  label: "Américain",
  value: "Américain"
}, {
  label: "Brésilien",
  value: "Brésilien"
}, {
  label: "Brunch",
  value: "Brunch"
}, {
  label: "Burger",
  value: "Burger"
}, {
  label: "Café",
  value: "Café"
}, {
  label: "Cambodgien",
  value: "Cambodgien"
}, {
  label: "Colombien",
  value: "Colombien"
}, {
  label: "Coréen",
  value: "Coréen"
}, {
  label: "Français",
  value: "Français"
}, {
  label: "Inclassable",
  value: "Inclassable"
}, {
  label: "Irlandais",
  value: "Irlandais"
}, {
  label: "Italien",
  value: "Italien"
}, {
  label: "Japonais",
  value: "Japonais"
}, {
  label: "Jeux de société",
  value: "Jeux de société"
}, {
  label: "Méxicain",
  value: "Méxicain"
}, {
  label: "Pâtisserie",
  value: "Pâtisserie"
}, {
  label: "Péruvien",
  value: "Péruvien"
}, {
  label: "Poké",
  value: "Poké"
}, {
  label: "Scandinave",
  value: "Scandinave"
}, {
  label: "Sicilien",
  value: "Sicilien"
}, {
  label: "Thaï",
  value: "Thaï"
}, {
  label: "Vegan",
  value: "Vegan"
}];
const INIT_ARR_OPTIONS = [{
  label: "Tous les arr.",
  value: "Tous les arr."
}, {
  label: "1",
  value: "1"
}, {
  label: "2",
  value: "2"
}, {
  label: "3",
  value: "3"
}, {
  label: "4",
  value: "4"
}, {
  label: "5",
  value: "5"
}, {
  label: "6",
  value: "6"
}, {
  label: "7",
  value: "7"
}, {
  label: "8",
  value: "8"
}, {
  label: "9",
  value: "9"
}, {
  label: "10",
  value: "10"
}, {
  label: "11",
  value: "11"
}, {
  label: "12",
  value: "12"
}, {
  label: "13",
  value: "13"
}, {
  label: "14",
  value: "14"
}, {
  label: "15",
  value: "15"
}, {
  label: "16",
  value: "16"
}, {
  label: "17",
  value: "17"
}, {
  label: "18",
  value: "18"
}, {
  label: "19",
  value: "19"
}, {
  label: "20",
  value: "20"
}];

/***/ }),

/***/ "./constants/new-restaurants.js":
/*!**************************************!*\
  !*** ./constants/new-restaurants.js ***!
  \**************************************/
/*! exports provided: NEW_RESTAURANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_RESTAURANTS", function() { return NEW_RESTAURANTS; });
const NEW_RESTAURANTS = [{
  name: "Le Manko",
  id: 61,
  type: "Péruvien",
  rate: 4.1,
  votes: 1000,
  address: "15 Avenue Montaigne, 75008",
  phone: "01 82 28 00 15",
  arr: "8",
  openingHours: "11h30-14h15 / 19h-2h",
  imageUrl: "https://www.infosbar.com/photo/art/grande/8922651-14145113.jpg?v=1455033802",
  price: "€€€",
  price_digit: 3,
  lat: 48.8655753,
  lng: 2.3030293,
  menuLink: "http://manko-paris.com/wp-content/uploads/2019/12/MENU_MANKO_EXTERIEUR-1.pdf",
  foodlabreview: "Tout en classe, fraîcheur et exotisme. Manko fait honneur au quartier dans lequel il s'est installé. Un accueil des plus chaleureux, une ambiance raffinée, moderne et intimiste qui a pour effet direct de vous mettre très a l'aise. La cuisine ouverte est un bonus qui ne dérange a aucun moment et entendre l'équipe s'exprimer en espagnol rajoute une dose d'authenticité. Les serveurs sont très disponible et à l'écoute sans jamais se montrer envahissants.",
  reviews: [{
    date: "12/2019",
    comment: "Le cadre est magnifique, l'ambiance chaleureuse. Un endroit idéale pour un anniversaire. En semaine plutôt calme, plus intime. Les plats sont délicieux, découverte de nouvelle saveurs ! Le service très satisfaisant."
  }, {
    date: "10/2019",
    comment: "Très bon accueil. De bons conseils pour les plats! Une déco de dingue et une ambiance de folie!!! Super lieu même pour juste un verre!"
  }, {
    date: "07/2019",
    comment: "Chic et de bon goût, ambiance tamisée en dorures contemporaines avec une pointe de prohibition. Bon dans l'assiette et le service est accueillant... Et super musique"
  }]
}, {
  name: "Dai Dai",
  id: 63,
  type: "Italien",
  rate: 4.5,
  votes: 250,
  address: "25 Rue Oberkampf, 75011",
  phone: null,
  arr: "11",
  openingHours: "12h-14h30 / 16h30-23h",
  imageUrl: "https://www.sortiraparis.com/images/80/87701/476333-dai-dai-paris-10-6.jpg",
  imageUrl2: "http://www.ofive.tv/wp-content/uploads/2018/04/313879-dai-dai-25-27-rue-oberkampf-75011-pari-article_diapo-1.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8635571,
  lng: 2.369366,
  menuLink: "http://www.dai-dai.fr/",
  foodlabreview: "Cadre très sympathique avec ce magnifique four qui trône en plein milieu de la salle. Service impeccable - les serveurs sont très sympas - et superbes pizzas. Les produit sélectionnés sont de grande qualité et niveau goût et quantité les salades proposées à la carte ne sont pas en reste.",
  reviews: [{
    date: "12/2019",
    comment: "Pizza excellente. Le service est aussi au top, les serveurs sont très agréables ! Je recommande :)"
  }, {
    date: "10/2019",
    comment: "C'était délicieux, les serveurs (surtout le barbu) sont adorables ! J'ai passé un très bon moment en plus de bien mangé"
  }, {
    date: "07/2019",
    comment: "Très bonnes pizza napolitaines. Les ingrédients sont bien sourcés ça se sent dans l'assiette. Les serveurs sont dynamiques et souriants. La déco est sympa. Je recommande. Petit plus: on peut réserver"
  }],
  award: {
    scroll: "fa-pizza-slice",
    icon: "fas fa-pizza-slice",
    description: "La meilleure pizza"
  }
}, {
  name: "Les Amis des Messina",
  id: 59,
  type: "Sicilien",
  rate: 4.4,
  votes: 1000,
  address: "81 Rue Réaumur, 75002",
  phone: "01 42 61 13 73",
  arr: "2",
  openingHours: "12h-15h30 / 19h-22h30",
  imageUrl: "https://sortir.telerama.fr/sites/tr_master/files/styles/m_plus_640x360/public/assets/images/place/74/25/5/originale.jpg?itok=nNojZ_jK",
  price: "€€",
  price_digit: 2,
  lat: 48.8668704,
  lng: 2.3482997,
  menuLink: "https://www.lesamisdesmessina.com/",
  foodlabreview: "Un petit paradis sicilien ! Cuisine du voyage, hospitalité, repas excellent et pour finir avec ces fameuses glaces pistache bacio, un régal. L'accueil est jovial et l'ambiance familiale, les serveurs d'une grande gentillesse. Une vraie cuisine italienne authentique comme là-bas, pleine de goût et de saveurs. Vous pouvez y aller les yeux fermés ! Goûtez le gâteau courgette, ricotta de la Mama, un délice. Prix très corrects.",
  reviews: [{
    date: "12/2019",
    comment: "Nous étions loin d'imaginer que l'on puisse prendre autant de plaisir dans ce restaurant sicilien. Le cadre est également très beau et reposant et le personnel est adorable."
  }, {
    date: "10/2019",
    comment: "La déco, de brique et de bois sous la verrière, renvoie une chaude atmosphère. Le service est souriant, sympathique, rapide et efficace. Quant à la cuisine, véritable cuisine sicilienne, dont la carte est renouvelée chaque jour, déborde d'imagination."
  }, {
    date: "07/2019",
    comment: "Une adresse dont on ne se lasse pas ! C'est bon, c'est frais, c'est bien servi ! Le lieu est joliment décoré. On est en Italie, chez la Mama, l espace d un déjeuner ! Le personnel est hyper sympa et on aime leur accent chantant ! La carte change assez souvent, pas de lassitude donc et toujours de belles surprises !"
  }]
}];

/***/ }),

/***/ "./constants/restaurants.js":
/*!**********************************!*\
  !*** ./constants/restaurants.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "Siseng",
  type: "Coréen",
  address: "82 Quai de Jemmapes, 75010",
  phone: "09 51 55 15 77",
  arr: "10",
  openingHours: "12h-15h30 / 19h-22h30",
  rate: 4.6,
  votes: 1000,
  id: 1,
  imageUrl: "https://i0.wp.com/rocknfool.net/wp-content/uploads/2016/10/IMG_0219x.jpg?fit=3456%2C2304",
  imageUrl2: "https://i1.wp.com/www.latrentaineparisienne.com/wp-content/uploads/2016/02/Siseng_1.jpg?fit=1200%2C875",
  price: "€",
  price_digit: 1,
  lat: 48.87243227731903,
  lng: 2.365430729836519,
  foodlabreview: "Les baos burgers avec leur pain ultra moelleux sont délicieux. En accompagnement les frites de patate douce et leur sauce au sésame sont au top. Par contre il faut venir entre 19h et 19h30 car l'endroit est vite rempli.",
  reviews: [{
    date: "12/2019",
    comment: "Super restaurant super bon. Concept original que ce soit pour la nourriture mais aussi les boissons ! Personnel super sympathique. Seul petit bémol, il n'y a pas beaucoup de place dans le restaurant qui est souvent complet mais ça ils n'y peuvent rien."
  }, {
    date: "10/2019",
    comment: "Toujours une belle expérience gustative lorsque nous venons chez Siseng. L'accueil est chaleureux, les plats sont originaux et savoureux, le pain est juste parfait et la sauce des frites de patate douce est exquise!"
  }, {
    date: "07/2019",
    comment: "Un restau asiatique pas comme les autres ! Plein de saveurs avec un service tout en simplicité ! Je recommande"
  }]
}, {
  name: "Chez Justine",
  type: "Français",
  address: "96 Rue Oberkampf, 75011",
  phone: "01 43 57 44 03",
  arr: "11",
  openingHours: "9h-2h",
  rate: 4.1,
  votes: 500,
  id: 2,
  imageUrl: "https://3.bp.blogspot.com/-lIRP6p8z9BY/WddzLlwxRLI/AAAAAAAAZBE/9zeKkrX3yV8_xXgDiySBh9qamnYLHNHewCLcBGAs/s1600/Justine%2B-%2BSalle%2B-Roberta%2BValerio%2B1.jpg",
  imageUrl2: "http://www.infrarouge.fr/wp-content/uploads/2014/01/Justine-Table-%C2%A9Roberta-Valerio-3-INSTA.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.86586377731903,
  lng: 2.378128593918682,
  menuLink: "https://www.trinity-group.fr/wp-content/uploads/2019/08/JUSTINE-FOOD.pdf",
  foodlabreview: "Très bonne brasserie qui propose des produits de bonne qualité. Une formule du midi à prix raisonnable pour le quartier (entrée/plat ou plat/dessert café inclus pour 12€). Le soir l'ambiance est plus tamisée et chaleureuse. Mention spéciale pour le filet de canette, la salade césar et leurs pizzas qui sont divines.",
  reviews: [{
    date: "12/2019",
    comment: "Lieu vraiment convivial. Bon service et surtout plats délicieux ! Les pizzas sont excellentes et le côté brasserie est lui aussi parfait ! Le petit bémol c'est qu'il y a souvent du monde, mais c'est normal à ce niveau là ! Je recommande, la semaine comme le week-end !"
  }, {
    date: "10/2019",
    comment: "Restaurant très sympathique. Une équipe de serveurs jeunes et dynamique. Très bonne ambiance. Et surtout des plats délicieux. J'y ai passé un très bon moment."
  }, {
    date: "07/2019",
    comment: "Resto/Bar à la décoration très cosy, l’endroit est très agréable et la nourriture est bonne! Parfait pour un repas entre amis (possibilité de réserver pour un groupe) ou pour un brunch!"
  }],
  award: {
    scroll: "fa-frog",
    icon: "fas fa-frog",
    description: "La meilleure cuisine française"
  }
}, {
  name: "Guilo Guilo",
  type: "Japonais",
  address: "8 Rue Garreau, 75018",
  phone: "09 51 47 11 66",
  arr: "18",
  rate: 4.6,
  votes: 250,
  openingHours: "19h-00h",
  id: 3,
  imageUrl: "https://sortir.telerama.fr/sites/tr_master/files/styles/m_plus_640x360/public/assets/images/place/25/66/originale.jpg?itok=4x1s6Kws",
  imageUrl2: "http://www.foodreporter.fr/upload/original/2/j/g/6/i/1204382.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.88621817731902,
  lng: 2.3373565052628793,
  foodlabreview: "Une véritable adresse de cuisine japonaise. Un menu unique en 7 plats, deux services le soir, un à 19h et un deuxième à 21h. Le chef Eiichi Edakuni navigue entre Paris et Kyoto pour notre plus grand plaisir.",
  reviews: [{
    date: "12/2019",
    comment: "Une super soirée pleine de surprises gustatives. Une ambiance très agréable ! J'y retournerai prochainement."
  }, {
    date: "10/2019",
    comment: "Deuxième expérience dans ce restaurant fabuleux. Tout est exceptionnel du début à la fin. Les plats sont originaux, très jolis et délicieux. Le cadre est génial : on mange autour du bar et le chef dresse devant nous. Il faut réserver pour dîner. Je recommande plus que vivement ce restaurant. A tester de toute urgence si vous aimez la cuisine japonaise"
  }, {
    date: "07/2019",
    comment: "Là bas, le terme d'art culinaire prend tout son sens. On y va pour manger, mais aussi pour déguster, voir, sentir, apprendre... Les chefs expliquent parfaitement les enjeux de chaque plat, la composition, l'équilibre. Je ne regrette pas d'y être allée"
  }]
}, {
  name: "Pierre Sang in Oberkampf",
  type: "Français",
  rate: 4.5,
  votes: 1000,
  address: "55 Rue Oberkampf, 75011",
  phone: "09 67 31 96 80",
  arr: "11",
  openingHours: "12h-15h / 19h-23h",
  id: 4,
  imageUrl: "https://pierresang.com/wp-content/uploads/2019/01/Pierre-Sang-in-Oberkampf.jpg",
  imageUrl2: "https://www.yonder.fr/sites/default/files/contenu/news/pierre-sang-gambey-03_0.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.864920777319035,
  lng: 2.372643288763244,
  menuLink: "https://pierresang.com/in-oberkampf/",
  foodlabreview: "Une bien belle adresse où l'on trouve des plats mêlant influences coréennes et classiques de la gastronomie française. Le concept de plat mystère est amusant : une succession de 6 plats surprises plus délicieux les uns que les autres sur lesquels le serveur vient vous interroger entre chaque service !",
  reviews: [{
    date: "12/2019",
    comment: "Concept excellent ! On apprécie vraiment les plats qui y sont proposés. Non seulement grâce aux différentes saveurs présentes mais aussi par l'amabilité des serveurs. Concept : on a un menu en 6 services imposés avec possibilité de signaler ses allergènes. À chaque fin de repas le serveur discute avec vous du plat dégusté. Décor très sobre mais simple et efficace."
  }, {
    date: "10/2019",
    comment: "Une ambiance atypique et un service de qualité. Un restaurant à faire entre amis ou en amoureux ! Vous dites au serveur les ingrédients que vous n'aimez pas où dont vous êtes allergiques. Et on vous sert des plats. A vous de deviner ! Super concept. Petit plus : en sortant du restaurant,nous avons vu Pierre Sang  arriver en trottinette ! La classe"
  }]
}, {
  name: "La Pâtisserie du Meurice par Cédric Grolet",
  id: 5,
  type: "Pâtisserie",
  rate: 4.6,
  votes: 500,
  address: "6 Rue de Castiglione, 75001",
  phone: "01 44 58 69 19",
  arr: "1",
  openingHours: "12h-15h",
  imageUrl: "https://assets.letemps.ch/sites/default/files/styles/share/public/media/2018/05/25/file709hhtc8y0oabuqmgsh.jpg.jpeg?itok=qCTHjPAd",
  imageUrl2: "https://resofrance.eu/wp-content/uploads/2018/12/buche-noel-buche-marrons-cedric-grolet.jpg",
  price: "€€€€",
  price_digit: 4,
  lat: 48.8657239,
  lng: 2.3279848,
  menuLink: "https://www.dorchestercollection.com/wp-content/uploads/paris-le-meurice-patisserie-cedric-grolet-francais.pdf",
  foodlabreview: "Derrière le charme très discret et sobre de la vitrine on retrouve des pâtisseries exceptionnelles de gourmandises qui nous surprennent d'abord par leur esthétique puis, une fois la porte franchie, par leur odeur enivrante. Une adresse à ne manquer sous aucun prétexte pour les fans de pâtisserie.",
  reviews: [{
    date: "12/2019",
    comment: "Vraiment une expérience gustative incroyable. Je n'ai jamais mangé de gâteaux pareil. C'est bon, c'est beau. Le détail est poussé dans les moindres détails. Ils sont mêmes pensées aux toilettes !  Comme un gastro mais pour le goûter."
  }, {
    date: "10/2019",
    comment: "En bref, il s’agit certainement de la pâtisserie la plus connue de Paris, le travail est très impressionnant, les créations sont exposées comme de vrais bijoux"
  }, {
    date: "07/2019",
    comment: "Belle expérience que celle des célèbres pâtisseries Grolet. Les pâtisseries sont merveilleusement belles et délicieuses. Concernant le trompe l’œil, nous avons testé la Fraise, en effet plus beau que bon car il manquait du biscuit à mon goût. Mention spéciale au Paris Brest et tartelette pistache: une tuerie"
  }]
}, {
  name: "Café de l'Industrie",
  type: "Français",
  rate: 4.1,
  votes: 2000,
  address: "16 Rue St Sabin, 75011",
  phone: "01 47 00 13 53",
  arr: "11",
  openingHours: "9h-2h",
  id: 6,
  imageUrl: "https://uniiti.com/images/shops/slides/48034ba83595a0edf6df2670a00a44ac6da345de.jpeg",
  imageUrl2: "https://2.bp.blogspot.com/-XhDq8cI20PI/VyM64kaklbI/AAAAAAAAjaE/h5TXyEY76skThBVR4OVO6QoubUsX2itUQCLcB/s1600/cafe-de-lindustrie-paris-11-1.JPG",
  price: "€",
  price_digit: 1,
  lat: 48.855846977319025,
  lng: 2.372100939169941,
  menuLink: "https://cafedelindustrieparis.fr/fr/services",
  foodlabreview: "La cuisine est bonne, les prix largement acceptables, le service est souriant et chaleureux, et l'ambiance générale est excellent. Avec sa déco ambiance colonialiste le café de l'industrie est une institution dans le quartier.",
  reviews: [{
    date: "12/2019",
    comment: "Vraiment une bonne ambiance à magasin et pour y manger c'est un régal. Je ressors rassasié à chaque fois et l'addition ne s'enflamme pas même si on prend une boisson et un dessert. Les prix sont convenables et les serveurs sont admirable."
  }, {
    date: "10/2019",
    comment: "Super ambiance dans ce bistrot typiquement parisien. Bon choix de carte et bonne qualité des plats. Bémol sur le bruit, difficile de discuter quand la salle est pleine et il faisait très chaud."
  }, {
    date: "07/2019",
    comment: "Lieu chaleureux, convivial, toujours rempli et sans prétentions. Les brunchs sont bons et le personnel sympa. Je recommande !"
  }]
}, {
  name: "Le Loulou",
  type: "Brunch",
  rate: 4.3,
  votes: 1500,
  address: "90 Boulevard Saint-Germain, 75005",
  phone: "01 46 34 86 64",
  arr: "5",
  openingHours: "8h-22h30",
  id: 7,
  imageUrl: "https://static.wixstatic.com/media/19b892_a24e5e6309ec4932a1c6c9ae5052eb4f~mv2_d_2808_1638_s_2.jpg/v1/fit/w_2500,h_1330,al_c/19b892_a24e5e6309ec4932a1c6c9ae5052eb4f~mv2_d_2808_1638_s_2.jpg",
  imageUrl2: "https://www.oubruncher.com/photos1/625_4.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.851373977319035,
  lng: 2.3450795147316774,
  menuLink: "https://www.louloufriendlydiner.com/menu",
  foodlabreview: "Toujours un bonheur d'aller manger là bas ! Tout le monde y trouve son compte: cœliaques, gourmands, végétarien, tout à la fois. Un accueil toujours chaleureux quel que soit le moment de la journée et pourtant le service est en continu et le succès au rendez-vous !",
  reviews: [{
    date: "12/2019",
    comment: "Un décor agréable fait de bric et de broc, un accueil souriant et chaleureux. Une carte originale avec des produits frais. Nous nous sommes régalés et pas étouffés avec la note. Je recommande et il y a un menu enfant qui est bien."
  }, {
    date: "10/2019",
    comment: "Super restaurant, les plats sont exquis. Je me souviens encore de leurs tartines au saumon avec un oeuf poché qui était super bon. La carte change, c'est plutôt pas mal et leur café : super bon ! Je recommande !"
  }, {
    date: "07/2019",
    comment: "Cadre sympa, on y mange très bien et le personnel est très agréable, quoi de mieux pour être ravi ! Les vins sont très bons aussi. Je le recommande vivement."
  }]
}, {
  name: "Benedict",
  type: "Brunch",
  rate: 4.4,
  votes: 1500,
  address: "19 Rue Sainte-Croix de la Bretonnerie, 75004",
  phone: "01 42 76 91 37",
  arr: "4",
  openingHours: "12h-15h / 19h-23h",
  id: 8,
  imageUrl: "http://benedict-paris.com/img/lightbox/plats/B-17.jpg",
  imageUrl2: "http://benedict-paris.com/img/lightbox/plats/B-44.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8581643,
  lng: 2.356082,
  menuLink: "http://benedict-paris.com/menus/jpg/menu-2018-2-fr.png",
  foodlabreview: "Très bonne ambiance, personnel sympathique, souriant et professionnel au coeur du Marais. Large choix d'oeufs, burger, salades et viandes, tous aussi beaux que bons. Restaurant bien tenu et serveurs souriants. Les salles étaient pleines, ce qui indique un restaurant apprécié.",
  reviews: [{
    date: "12/2019",
    comment: "Superbe endroit avec de très bons plats. Si vous aimez les œufs bénédictes c’est un must-try, le service est très sympathique et le prix plutôt abordable. En plus ils font une formule le midi qui est très intéressante en terme de rapport qualité/prix."
  }, {
    date: "10/2019",
    comment: "Superbe «benedict burger» à l’escalope de foie gras poêlé !"
  }, {
    date: "07/2019",
    comment: "Super endroit !! Plats magnifiques et délicieux à un prix raisonnable, snacking haut de gamme, présentations soignées. Un peu de monde en week-end parfois de l’attente mais cela vaut le détour!"
  }],
  award: {
    scroll: "fa-bacon",
    icon: "fas fa-bacon",
    description: "Le meilleur brunch"
  }
}, {
  name: "Maison Sauvage",
  id: 9,
  type: "Brunch",
  rate: 3.8,
  votes: 1000,
  address: "5 Rue de Buci, 75006",
  phone: "01 46 34 26 26",
  arr: "6",
  openingHours: "7h-2h",
  imageUrl: "http://www.maison-sauvage.fr/images/03.jpg",
  imageUrl2: "http://www.maison-sauvage.fr/images/01.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8536424,
  lng: 2.3380628,
  menuLink: "http://www.maison-sauvage.fr/#carte",
  foodlabreview: "Bar atypique de la magnifique rue de Buci. Cocktails excellents, personnel polyglotte agréable et souriant. Une excellente halte pour une promenade rive gauche.",
  reviews: [{
    date: "12/2019",
    comment: "Endroit très sympa, décoration top. Salle du bas un peu étriquée salle à l'étage plus conviviale, nous avons eu de la chance car peu de monde et du coup plus intimiste pour un dîner à deux. Hamburger copieux et aubergine rôtie un délice ! Serveur très rapide pour prendre notre commande, pas de longue attente pour être servis top."
  }, {
    date: "10/2019",
    comment: "Super brunch, délicieux et très bien présenté ! Petit bémol : c'est archi plein. Faut arriver tôt pour avoir une place agréable et déguster tranquillement son plat.."
  }, {
    date: "07/2019",
    comment: "Très bonne surprise. Très jolie ambiance, notre réservation nous a permis de profiter d'une table donnant sur la terrasse. Les plats étaient très bons et originaux et le service agréable. Seul point négatif : assez bruyant."
  }]
}, {
  name: "Le Bombardier",
  type: "Irlandais",
  rate: 4.4,
  votes: 1000,
  address: "2 Place du Panthéon, 75005",
  phone: "01 43 54 79 22",
  arr: "5",
  openingHours: "12h-2h",
  id: 10,
  imageUrl: "https://www.schlouk-map.com/img/background.jpg",
  imageUrl2: "https://i.f1g.fr/media/figaro/orig/2015/05/11/XVMa7941c0e-f4c3-11e4-8948-7bd2a5a8f385.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.846881,
  lng: 2.3453893,
  menuLink: "http://www.bombardierpub.fr/assets/bombardier-main-menu-dec-18-web.pdf",
  foodlabreview: "L'ambiance conviviale auprès du prestigieux et glacial Panthéon de Paris s'anime particulièrement le lundi soir avec l'invitation à jouer de groupe, voire de duo jouant les splendeurs de la pop anglaise et américaine. La qualité musicale s'allie à la qualité humaine du lieu. Ils retransmettent également pas mal d’événements sportifs, à vérifier sur leur page facebook.",
  reviews: [{
    date: "12/2019",
    comment: "Bon accueil. Large choix de bières pression, et cidre pression. Terrasse. Assez bruyant. Édit : Revenus le lendemain pour goûter d'autres bières, le patron s'est démené pour nous trouver une table et nous avons mangé un excellent Fish'n chips."
  }, {
    date: "10/2019",
    comment: "Il y a toujours une bonne ambiance au Bombardier :) le cadre est typique d’un bistrot anglais et ils proposent un bon choix de bières et de cocktails. Service au top ! Ils servent un petit-déjeuner anglais le week-end, très copieux."
  }, {
    date: "07/2019",
    comment: "Le cidre et le poiré sont à tomber par terre ! Ne pensez pas boire en illimité, vous perdrez à tous les coups ! Joli décor extérieur avec le Panthéon. Endroit sympa comme les serveurs."
  }]
}, {
  name: "Galway Irish Pub",
  type: "Irlandais",
  rate: 4.3,
  votes: 750,
  address: "13 Quai des Grands Augustins, 75006",
  phone: "01 43 29 64 50",
  arr: "6",
  openingHours: "12h-5h",
  id: 11,
  imageUrl: "http://www.galwayirishpub.com/assets/images/content/galway/slide1b.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.85414577731903,
  lng: 2.343872129874713,
  menuLink: "http://www.galwayirishpub.com/",
  foodlabreview: "Toujours une bonne ambiance. La retransmission des matches de football gaélique est un plus ! Un bon choix de bière et l'éternel cidre Magners. Parfois le son est un peu trop fort mais on arrive toujours à se comprendre. On peut y manger aussi ou simplement grignoter. L'accueil est multilingue et c'est clairement un endroit cosmopolite. On s'y sent bien.",
  reviews: [{
    date: "12/2019",
    comment: "Bar sympa, idéalement placé. De bonnes bières, de la bonne musique. Top pour boire un coup après une longue ballade."
  }, {
    date: "10/2019",
    comment: "Serveuses souriantes, un endroit idéal pour se voir en groupe ou même à deux. Les prix sont corrects avec un large choix de boissons. La terrasse est petite mais offre une belle vue. Un grand coup de cœur pour les chaises décorées en tissu coloré."
  }, {
    date: "07/2019",
    comment: "Petit pub irlandais fort sympathique et authentique dans ce quartier par ailleurs inondé de touristes. Cela fait plusieurs années que ce pub tient et fait référence dans le quartier. C'est sympa pour les matchs de rugby. Une vraie guiness bien sympa. N'hésitez pas."
  }]
}, {
  name: "La Felicita",
  type: "Italien",
  rate: 4.2,
  votes: 6000,
  address: "5 Parvis Alan Turing, 75013",
  phone: null,
  arr: "13",
  openingHours: "12h-22h",
  id: 12,
  imageUrl: "https://media.vogue.fr/photos/5c2f45f062d3e16f22a5920e/master/pass/la_felicit____le_nouveau_restaurant_big_mamma_a__enfin__ouvert_ses_portes____paris_2303.png",
  imageUrl2: "https://www.sortiraparis.com/images/80/78261/357177-felicita-le-restaurant-xxl-de-station-f-by-big-mamma-les-photos-2.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.832321877319025,
  lng: 2.373285810707961,
  menuLink: "https://www.lafelicita.fr/wp-content/uploads/2019/12/191211-Menu-Felicita.pdf",
  foodlabreview: "Concept très original, avec différents stands présents (charcuterie, bières, cocktails, pizzas, pâtes) au sein de cette ancienne gare joliment décorée et méconnaissable. La nourriture y est de qualité, et les prix sont corrects. Attention cependant à ne pas confondre avec un restaurant où vous mettez les pieds sous la table et où l'on vient vous servir.",
  reviews: [{
    date: "12/2019",
    comment: "Endroit magnifiquement décoré, surtout le bar qui est juste trop beau ! La nourriture est assez simple mais très bonne avec des prix raisonnables. J’y ai été assez tôt donc pas trop de temps d’attente mais quand je suis sortie de là, la file pour y rentrer était interminable..."
  }, {
    date: "10/2019",
    comment: "Un lieu unique où la nourriture est juste merveilleuse. J'ai passé un merveilleux déjeuner avec ma famille. Ce fût tellement bon que nous sommes retournés prendre le goûter et nous avons pris des pizzas à emporter."
  }, {
    date: "07/2019",
    comment: "J'adore cet endroit ! Très mignon et différent, tous les plats proposés nous ont plu ! Et l'accueil et le service sont très chaleureux."
  }],
  award: {
    scroll: "fa-medal",
    icon: "fas fa-medal",
    description: "Le plus populaire"
  }
}, {
  name: "Le Pavillon des Canaux",
  type: "Café",
  rate: 4.3,
  votes: 2000,
  address: "39 Quai de la Loire, 75019",
  phone: "01 73 71 82 90",
  arr: "19",
  openingHours: "10h-1h",
  id: 13,
  imageUrl: "http://www.lespetitscuistots.fr/wp-content/uploads/2019/03/1.jpg",
  imageUrl2: "https://www.familiscope.fr/assets/fiches/39000/39435-le-pavillon-by-my-little-paris.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.887603577319034,
  lng: 2.3789627128459516,
  foodlabreview: "Très agréable. Une cohabitation parfaite entre les différents usages / ambiances. Selon l'heure et le coin où l'on se pose on peut travailler tranquillement, discuter avec des copains ou encore manger à un très bon prix. La déco atypique est la cerise sur le gâteau d'un lieu déjà très bien pensé. Le personnel également est très serviable et compétent.",
  reviews: [{
    date: "12/2019",
    comment: "Endroit très original. Situé sur les quais. Le pavillon se compose de 2 étages. Au Premier une grande pièce avec un bar et table. Au second plusieurs petites pièces aménagées pour manger. La cuisine ont été également été aménagée. Sans oublier la grande terrasse en bas. Le personnel est accueillant et réactif aux demandes des visiteurs."
  }, {
    date: "10/2019",
    comment: "Invité à un brunch, très sympa la déco, le service simple et efficace, la cuisine aussi, la chef accueillante et pleine d'humour... Bref un pavillon charmant, pour petits et grands, j'ai adoré la table pour enfants installé dans une baignoire dans une salle de bain... Ne changez rien, tout est bien..."
  }, {
    date: "07/2019",
    comment: "On a manger dans la salle de bain dans la baignoire 🛁. Super expérience, très bon et copieux. Brunch top"
  }]
}, {
  name: "46 & 3rd (Forty Six and Third)",
  type: "Brunch",
  rate: 4.4,
  votes: 100,
  address: "46 Rue de Turbigo, 75003",
  phone: "07 71 35 28 77",
  arr: "3",
  openingHours: "10h-14h / 19h-23h30",
  id: 14,
  imageUrl: "https://www.oubruncher.com/photos1/x9946_4.jpg.pagespeed.ic.w8kvhCNfHT.jpg",
  imageUrl2: "https://www.parisselectbook.com/wp-content/uploads/2019/07/46-3rd.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8650928,
  lng: 2.3551431,
  menuLink: "https://www.fortysixandthird.com/menus-carte/",
  foodlabreview: "Dans le top 3 des meilleurs oeufs bénédicte de Paris. Au bacon ou au saumon, ils sont excellents et très généreux. Les pancakes sont d'un moelleux monstrueux. Attention, pour le week-end il est indispensable de réserver.",
  reviews: [{
    date: "12/2019",
    comment: "Ce restaurant est génial! Le service était impeccable, les ingrédients de très bonne facture. Des options végétariennes très intéressantes et tout était succulent. Les pancakes sont une tuerie. Recommandé à 100%."
  }, {
    date: "10/2019",
    comment: "Un service irréprochable : sourire, écoute et efficacité. Une carte gourmande : plats bien proportionnés, bien présentés et le goût y est ! Mention spéciale pour les assiettes protéinés et les pancakes, la spécialité de la maison."
  }, {
    date: "07/2019",
    comment: "Petit restaurant de quartier super sympa et burger au poulet très bon !! Endroit plutôt calme et jeune. Ne pas hésitez à y aller et surtout choix dans les Gin pour l'apéro !"
  }]
}, {
  name: "Po Boy Café",
  type: "Américain",
  rate: 4.2,
  votes: 100,
  address: "72 Quai de Jemmapes, 75010",
  phone: "01 53 16 17 88",
  arr: "10",
  openingHours: "10h-22h",
  id: 15,
  imageUrl: "https://sortir.telerama.fr/sites/tr_master/files/styles/m_plus_640x360/public/assets/images/place/81/94/7/originale.jpg?itok=t1QZiH8K",
  imageUrl2: "http://parisianavores.paris/wp-content/uploads/2017/12/La-traversee-restaurant-paris-18-rue-ramey-7.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8714372,
  lng: 2.3658227,
  menuLink: "https://deliveroo.fr/fr/menu/paris/paris-10eme-gare-de-lest/poboy-cafe",
  foodlabreview: "Le repère de la cuisine cajun à Paris. Un sympathique café dédié à la savoureuse cuisine de la Louisiane dans sa version sandwich surtout. Et on y trouve les boissons américaines qui vont avec pour un bon moment au bord du canal.",
  reviews: [{
    date: "12/2019",
    comment: "Comme à la Nouvelle Orléans, très bon, cadre sympathique, bref allez y les yeux fermés."
  }, {
    date: "10/2019",
    comment: "Adresse sympa pour y boire un café ! Ambiance américaine au rendez-vous avec la musique très sympa, les livres de recette à disposition et l'accent du personnel 😊 A l'étage très jolie vue sur le Canal Saint Martin !"
  }, {
    date: "07/2019",
    comment: "Le restaurant est sympathique, avec une belle décoration style nouvelle Orléans et de l'espace entre les tables pour un peu d'intimité. Le service est impeccable, rien à redire et on voit les cuisines donc que les plats sont préparés à la minute."
  }]
}, {
  name: "La Marine",
  type: "Français",
  rate: 4.2,
  votes: 1000,
  address: "55Bis Quai de Valmy, 75010",
  phone: "01 42 39 69 81",
  arr: "10",
  openingHours: "7h30-2h",
  id: 16,
  imageUrl: "https://restaurantmarius.fr/media/cache/jadro_no_resize/5ca219ae1c366/ym-restomarius-plat6.jpg",
  imageUrl2: "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/salade-de-tomates-fruits-fleurs-et-burrata-au-basilic-pourpre-2975923/55810395-3-fre-FR/Salade-de-tomates-fruits-fleurs-et-burrata-au-basilic-pourpre.jpeg",
  price: "€€",
  price_digit: 2,
  lat: 48.8706029,
  lng: 2.3653337,
  menuLink: "http://www.lamarinecanalsaintmartin.com/wp-content/uploads/2019/04/MENU-LAMARINE-2019_Page_1.png",
  foodlabreview: "Excellent, plats comme dessert. Service rapide et chaleureux. Les poissons sont toujours réussis et c'est l'adresse parfaite pour manger un bon plat en terrasse au bord du canal.",
  reviews: [{
    date: "12/2019",
    comment: "Restaurants très agréable, le service est rapide. Grand choix à la carte et les plats sont maison. Les serveurs sont agréables et disponibles. Les prix sont raisonnables. La salle est belle est les toilettes sont propres. L'ambiance est chaleureuse."
  }, {
    date: "10/2019",
    comment: "J'y ai mangé par hasard ce midi, les produits étaient frais. Avec pour entrée les œufs mimosa au thon et pour plat un filet de colin, le repas était juste très bon. C'est assez rare que le poisson soit bien cuisiné et pour le coup, je leurs tire mon chapeau. Je recommande vivement le lieu, et y retournerai chose sûre. Niveau prix, c'est pour ma part très abordable pour le lieux où il se situe."
  }, {
    date: "07/2019",
    comment: "Tres bien bon rapport qualité prix avec vue sur le canal. Ambiance chaleureuse."
  }]
}, {
  name: "Mamagoto",
  type: "Français",
  address: "5 Rue des Petits Hôtels, 75010",
  phone: "01 44 79 03 98",
  rate: 4.3,
  votes: 250,
  arr: "10",
  openingHours: "12h-14h30 / 19h30-23h",
  id: 17,
  imageUrl: "https://img.over-blog-kiwi.com/2/55/12/01/20181103/ob_d5e8ca_20181102-123251.jpg",
  imageUrl2: "https://www.lebey.com/sites/default/files/styles/resto/public/mordant_restaurant_paris_.jpg?itok=82UApdkX",
  price: "€€€",
  price_digit: 3,
  lat: 48.8772256,
  lng: 2.3545001,
  foodlabreview: "Une perle proche de gare du Nord, restaurant élégant mais sans chichis. Sélection de vins au verre simple mais efficace. Plats copieux et goûteux inspiré d'extrême Orient mais pas seulement. Service attentionné pour un dîner au calme et pas sur les genoux du voisin, rare dans le coin !",
  reviews: [{
    date: "12/2019",
    comment: "Très belle expérience, plats originaux fusion Japon / Sud-Ouest (de la France), qualité des produits, service précis et bienveillant, salle spacieuse, vins naturels. Seul bémol, situé dans un quartier peu animé. Mais pas grave, puisque ce lieu vaut bien le déplacement !"
  }, {
    date: "10/2019",
    comment: "Petite adresse très sympathique près de la gare de l'est. Très beau choix de vins naturels, personnel avenant et de bon conseil."
  }, {
    date: "07/2019",
    comment: "Une belle expérience, les plats sont originaux et savoureux. Un service aux petits soins. Des vins biens accordés. Je recommande !"
  }]
}, {
  name: "Maythai",
  id: 18,
  type: "Thaï",
  rate: 4.3,
  votes: 100,
  address: "32 Avenue de la République, 75011",
  phone: "01 47 00 19 65",
  arr: "11",
  openingHours: "12h-15h / 19h-23h",
  imageUrl: "https://neogarden-mursvegetaux.com/wp-content/uploads/2019/05/IMG_5699.jpg",
  imageUrl2: "https://duyt4h9nfnj50.cloudfront.net/resized/1542731897914-w2880-c4.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8657335,
  lng: 2.3710563,
  menuLink: "http://maythai.fr/",
  foodlabreview: "Le meilleur thai de Paris est avenue de la République. Tout, que ce soit le canard tamarin, le poulet au curry rouge, le saumon ou l’agneau est succulent. La décoration avec le mur végétal est soignée, tout comme le personnel est à l'écoute et sait se faire discret.",
  reviews: [{
    date: "12/2019",
    comment: "Le cadre est super beau et sobre, sans être kitsch comme on peut parfois trouver dans les autres restaurants. Le personnel était gentil et souriant et la nourriture très bonne, nous avons passé un très bon moment :)"
  }, {
    date: "10/2019",
    comment: "Super restaurant au cœur de République. Le personnel est sympathique et la cuisine delicieuse. Un vrai thaïlandais !"
  }, {
    date: "07/2019",
    comment: "Le repas est délicieux, les cocktails faits maison, les produits sont frais ! Seul bémol : un peu cher, mais mérité pour la qualité ! Le flan thaïlandais est un régal : à tester absolument !"
  }],
  award: {
    scroll: "fa-mortar-pestle",
    icon: "fas fa-mortar-pestle",
    description: "Le meilleur thaïlandais"
  }
}, {
  name: "Miss Ko",
  type: "Japonais",
  rate: 4.2,
  votes: 2000,
  address: "49-51 Avenue George V, 75008",
  phone: "01 53 67 84 60",
  arr: "8",
  openingHours: "12h-3h",
  id: 19,
  imageUrl: "https://magazinediscothequeleblog.files.wordpress.com/2013/04/missko_001_123.jpg",
  imageUrl2: "https://www.miss-ko.com/restaurant-paris/diner-paris.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.870914,
  lng: 2.3005871,
  menuLink: "https://www.miss-ko.com/menus/food-miss-ko-avril-2019-fr.pdf",
  foodlabreview: "A deux pas des Champs-Elysées, Miss Ko propose le temps d'un repas un dépaysement total. Décoration Starck, ceviches, sushis, makis ou tatakis servis sur tables avec écran, le tout dans une lumière tamisée. Tous les ingrédients sont réunis pour vous faire passer une soirée loin de votre quotidien.",
  reviews: [{
    date: "12/2019",
    comment: "Établissement très branché avec une cuisine japonaise de très grande qualité. Le décor est remarquable avec par exemple des tables dans le dessus est constitué d'écrans qui diffusent programme de télévision japonaise. N'hésitez pas à réserver plusieurs fois j'ai pas eu de place disponible aux heures de pointe"
  }, {
    date: "10/2019",
    comment: "Magnifique et agréable lieu. On y mange magnifiquement bien. Saveurs en bouche incroyable ! Je conseille la soupe thaï. Merci pour ce bon moment."
  }, {
    date: "07/2019",
    comment: "J'ai passé un agréable moment à deux reprises. Les barman sont très sympa et prennent le temps de découvrir ce qu'on aime pour proposé un cocktail adapté. La nourriture y est très bonne."
  }]
}, {
  name: "Pedzouille - L'Etable",
  type: "Français",
  rate: 4.5,
  votes: 500,
  address: "66 Rue du Faubourg Poissonnière, 75010",
  phone: "09 86 40 42 42",
  arr: "10",
  openingHours: "12h-14h / 20h-22h30",
  id: 20,
  imageUrl: "https://i.pinimg.com/originals/9b/c4/b3/9bc4b392b545baaf23c59693ef6eefd7.jpg",
  imageUrl2: "http://www.popinpaname.com/wp-content/uploads/2019/05/YouShould-1140x700.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8758535,
  lng: 2.3484925,
  foodlabreview: "Petit restaurant bien franchouillard, super agréable avec un service serviable et très dynamique. La cuisine est simple mais délicieusement maîtrisée. Les viandes françaises sont très savoureuses. Il y a du goût et le prix est raisonnable.",
  reviews: [{
    date: "12/2019",
    comment: "Très bon moment passé entre ami. De l'accueil à la déco en passant par la qualité des plats tout était au top. Mention spéciale pour le Pain Perdu, je pense que c'était le meilleur qu'il m'ait été donné de manger, et je pèse mes mots."
  }, {
    date: "10/2019",
    comment: "Très sympa. L'endroit a vraiment une apparence unique et la nourriture est très bonne."
  }, {
    date: "07/2019",
    comment: "Un cadre simple, de la bonne viande, une bonne ambiance et un service au top. Que demander de plus ? Les produits sont frais et bio, le personnel est de bon conseil, les tarifs sont raisonnables bref on se sent à l’aise."
  }]
}, {
  name: "Breakfast in America",
  type: "Américain",
  rate: 4.2,
  votes: 1500,
  address: "17 Rue des Écoles, 75005",
  phone: "01 43 54 50 28",
  arr: "5",
  openingHours: "8h30-23h",
  id: 21,
  imageUrl: "https://d2ghx89bmumb3r.cloudfront.net/news-upload/2513/2-breakfast-in-america-3-bia-sentier-restaurant-burger-creditphoto-fannyb-parisbouge.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.8478135,
  lng: 2.3511126,
  menuLink: "https://breakfast-in-america.com/menus/",
  foodlabreview: "Un vrai diner américain, tout y est honnête dans le meilleur sens du terme. Tout est préparé sur place. Le personnel est à l'américaine : souriant, friendly et à l'écoute des besoins des clients. Les plats sont excellents. On peut y petit-déjeuner toute la journée, y prendre tous les types d'oeuf imaginables. Les pancakes sont à tomber à la renverse.",
  reviews: [{
    date: "12/2019",
    comment: "Très bon endroit pour faire un brunch à l'américaine le dimanche. Beaucoup de choix et de très bon produit."
  }, {
    date: "10/2019",
    comment: "Un diner 'historique' à Paris. On y vient pour l'accueil toujours souriant, la constance de la qualité d'une nourriture roborative et réconfortante. Le service est rapide, efficace et agréable. Je fréquente les deux adresses depuis leurs ouvertures cela ne nous rajeunit pas."
  }, {
    date: "07/2019",
    comment: "Le lieu est certes resté comme je l’ai connu il y a 13 ans, mais la nourriture est bonne et pas trop chère pour le quartier, bonne quantité dans l’assiette."
  }]
}, {
  name: "The Beast",
  type: "Américain",
  rate: 4.2,
  votes: 1000,
  address: "27 Rue Meslay, 75003",
  phone: null,
  arr: "3",
  openingHours: "12h-14h / 19h-23h",
  id: 22,
  imageUrl: "https://streetbouche.com/wp-content/uploads/2018/10/the-beast-Slice-of-Pie-16-2.jpg",
  imageUrl2: "https://1dc3f33f6d-3.optimicdn.com/gaultmillau.com/photos/b1ed1fb2553adbb03249e0080290471ea3e58422/detail.jpg?1507890314",
  price: "€€",
  price_digit: 2,
  lat: 48.8677008,
  lng: 2.3596784,
  foodlabreview: "N'y emmenez pas votre ami vegan. Les viandes sont très savoureuses : le fumoir vient directement des Etats-Unis et çaa se ressent bien dans le goût.",
  reviews: [{
    date: "12/2019",
    comment: "On a passé une soirée géniale ! Un régal pour les papilles et les zygomatiques. Toute la Team nous a accueilli bras ouverts, on a été servis comme des rois (merci Alex), la viande fumée est littéralement à tomber, les desserts dont la pecan pie un delice et on nous a également initié à de nouveaux cocktails à base de whisky (la spécialité de la maison) (alors qu'on était 2 réfractaires de cet elixir). On reviendra c'est sur ! Et merci également à nos voisins de table qui ont particulièrement égayé la soirée !"
  }, {
    date: "10/2019",
    comment: "Un régal! J'ai déjeuner avec une amie à la fin du service et Alexandre nous accueilli avec un grand sourire et beaucoup de diplomatie. Le tarif Menu midi reste trés abordable; les portions sont bonnes et délicieuses; Le service est Impeccable. Je recommande vivement ce restaurant de viande qui en sublime le gôut! Pour les carnivores, Vous allez adorer! NB: Attention aux résas via Google , automatiquement confirmée; mieux vaut les appeler pour vérifier :)"
  }]
}, {
  name: "Mi Ranchito Paisa",
  id: 23,
  type: "Colombien",
  rate: 4.4,
  votes: 1000,
  address: "35 Rue de Montholon, 75009",
  phone: "01 48 78 45 94",
  arr: "9",
  openingHours: "12h-14h30 / 19h-23h",
  imageUrl: "https://uniiti.com/images/shops/slides/8ab88e2064088026e00a06db2f9af15e3be53c78.jpeg",
  imageUrl2: "https://uniiti.com/images/shops/slides/7759636ca9ef7b01a95dfb43155f03fb52115eba.jpeg",
  price: "€",
  price_digit: 1,
  lat: 48.876457,
  lng: 2.344879,
  menuLink: "https://miranchitopaisa.fr/fr/services",
  foodlabreview: "Énorme coup de cœur pour ce resto au cadre cosy et aux assiettes plus que généreuses. On y retrouve les saveurs et les ingrédients d'Amérique du Sud. Les cocktails sont canons, bons et frais.",
  reviews: [{
    date: "12/2019",
    comment: "Restaurant super sympa l'intérieur est super mignon. A faire entre amis en famille où en amoureux..tout s'y prête. L'endroit est trop joli! Le personnel est adorable serviable et les plats sont délicieux! J'y retournerais avec grand plaisir."
  }, {
    date: "10/2019",
    comment: "Très bon restaurant de cuisine colombienne. Ambiance locale et plat copieux. Leurs jus de fruit valent le détour. Compter une trentaine d'euros par personne, très correct !"
  }, {
    date: "07/2019",
    comment: "Plats goûteux, en effet très généreux (mais c'est l'esprit latin) d'où un prix en conséquence, le cadre est dépaysant et les serveuses sont toujours disponibles et à votre écoute. Ma femme est Équatorienne donc j'ai parfaitement l'habitude de cette cuisine et de cette ambiance."
  }]
}, {
  name: "Maria Luisa",
  id: 24,
  type: "Italien",
  rate: 4.2,
  votes: 500,
  address: "2 Rue Marie et Louise, 75010",
  phone: "01 44 84 04 01",
  arr: "10",
  openingHours: "12h-14h30 / 19h-23h",
  imageUrl2: "https://1dc3f33f6d-3.optimicdn.com/gaultmillau.com/photos/69e9b76ba706f4ffa7b639c5aba95d797261238e/detail.jpg?1507854514",
  imageUrl: "https://media.gqmagazine.fr/photos/5dfa2e86ec64c20008aa3168/master/w_1400,c_limit/a78e5b78cde0f163406b0bd8f6cce013.website_hd.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.871868,
  lng: 2.36756,
  menuLink: "https://deliveroo.fr/fr/menu/paris/paris-10eme-gare-de-lest/maria-luisa?utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=**%5EAcquisition%5ESearch%5EDSA%5EFrance%5EParis%5E%5E%5E%5E%5E%5E%C2%A371700000058841900&utm_loc=9056135&utm_device=c&utm_adposition=1t1&utm_network=g&utm_targetid=aud-686349977914:dsa-430061073504&gclid=CjwKCAiAuqHwBRAQEiwAD-zr3YYQ8qGxjoV_soGe76nzTkAYnZg4mU5uQDcLBthTtxJPwGvXRyXPaxoCFF0QAvD_BwE&gclsrc=aw.ds",
  foodlabreview: "Très bonnes pizzas et très bon rapport qualité prix quantité. Terrasse couverte sympa même en hiver et découverte en été. Si vous avez envie d'une grande et bonne pizza, impossible d'être déçu. Les pâtes, antipasti et autres gratins valent également le détour.",
  reviews: [{
    date: "12/2019",
    comment: "Bon restaurant italien, les pizzas sont bonnes, les antipasti plutôt pas mal très bon poulpe. Mmh la sauce de la lasagne avait l’air industriel donc déception, de même pour le tiramisu, les glaces étaient très bonnes. Sinon contrairement à certain commentaire on a eu droit à un bon service agréable."
  }, {
    date: "10/2019",
    comment: "Rien à dire, chaque fois que l'envie pizza se manifeste, c'est dans ce restaurant que je les dégustes, les serveurs(euses) sont à l'écoute et le service est rapide."
  }, {
    date: "07/2019",
    comment: "Pâte fine bien cuite, produits de bonne qualité et spritz parfaitement dosé."
  }]
}, {
  name: "Ao Izakaya",
  id: 25,
  type: "Japonais",
  rate: 4.4,
  votes: 500,
  address: "12 Rue de Caumartin, 75009",
  phone: "01 42 65 31 53",
  arr: "9",
  openingHours: "12h-14h30 / 19h-22h30",
  imageUrl: "https://aoizakaya.com/wp-content/uploads/2018/11/17.jpg",
  imageUrl2: "https://unemanettealamain.fr/wp-content/uploads/2018/11/ao-izakaya.jpeg",
  price: "€€€",
  price_digit: 3,
  lat: 48.8710109,
  lng: 2.3282,
  menuLink: "https://deliveroo.fr/fr/menu/paris/paris-10eme-gare-de-lest/maria-luisa?utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=**%5EAcquisition%5ESearch%5EDSA%5EFrance%5EParis%5E%5E%5E%5E%5E%5E%C2%A371700000058841900&utm_loc=9056135&utm_device=c&utm_adposition=1t1&utm_network=g&utm_targetid=aud-686349977914:dsa-430061073504&gclid=CjwKCAiAuqHwBRAQEiwAD-zr3YYQ8qGxjoV_soGe76nzTkAYnZg4mU5uQDcLBthTtxJPwGvXRyXPaxoCFF0QAvD_BwE&gclsrc=aw.ds",
  foodlabreview: "Un kaiseki exceptionnel. Si vous y allez pour la première fois prenez le menu dégustation en 7 plats. Le cadre est tout à la fois sobre et chaleureux. Le personnel est accueillant. Les plats du menu carte blanche mélangent avec succès des spécialités et saveurs typiquement japonaises avec des éléments occidentaux comme le foie gras.",
  reviews: [{
    date: "12/2019",
    comment: "Une belle découverte, nous nous sommes régalés. Une mention spéciale pour les serveurs très chaleureux. Nous reviendrons avec plaisir !"
  }, {
    date: "10/2019",
    comment: "Les mets sont tous plus succulents et raffinés les uns des autres. Les incontournables le foie gras poêlé, les mochis glacés... prendre des tapas à partager pour découvrir chaque plat et vivre un feu d'artifice de saveur. Cerise sur le gâteau... le service est impeccable et convivial."
  }, {
    date: "07/2019",
    comment: "Une ambiance calme et soignée, dans une petite rue proche d'Opéra. Les plats sont à tomber, et le service très attentif. Prix relativement élevés, mais normaux pour un restaurant gastronomique."
  }]
}, {
  name: "Pontochoux",
  id: 26,
  type: "Japonais",
  rate: 4.6,
  votes: 250,
  address: "18 Rue du Pont aux Choux, 75003",
  phone: "09 86 70 77 00",
  arr: "3",
  openingHours: "13h30-18h",
  imageUrl2: "https://somanyparis.files.wordpress.com/2018/10/pontochoux-7.jpg",
  imageUrl: "https://somanyparis.files.wordpress.com/2018/10/pontochoux-6.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.8613189,
  lng: 2.3650928,
  menuLink: "https://lacarte.menu/restaurants/paris/pontochoux",
  foodlabreview: "C'est bon, c'est frais, c'est copieux et c'est abordable. Que demander de plus ? En revanche ne comptez pas y rester des heures pour de longs debriefs. On mange (bien) et on part. La queue est là et on nous le dit, mais gentiment bien sûr !",
  reviews: [{
    date: "12/2019",
    comment: "Restaurant microscopique mais j'ai eu la chance de ne pas attendre le jour où j'y ai mangé. L'accueil et le lieu sont chaleureux. Et surtout, les plats sont délicieux ! Moi qui suis habituellement vite écoeurée par le curry japonais, là j'ai vraiment aimé. Il est savoureux, pas trop sucré et les accompagnements sont très bons aussi."
  }, {
    date: "10/2019",
    comment: "Le curry y est absolument délicieux. L'établissement à aussi de quoi manger pour les végétariens ce qui est un bon point."
  }, {
    date: "07/2019",
    comment: "L'accueil est chaleureux et agréable ! Le curry épicé comme il faut et la qualité des produits vous réchauffe l'estomac. Vivement une extension à Marseille. Vous êtes chanceux les parisiens d'avoir cette perle de restauration !"
  }],
  award: {
    scroll: "fa-award",
    icon: "fas fa-award",
    description: "Le restaurant de la semaine"
  }
}, {
  name: "Aki",
  id: 27,
  type: "Japonais",
  rate: 4.4,
  votes: 2500,
  address: "11bis Rue Sainte-Anne, 75001",
  phone: "01 42 97 54 27",
  arr: "1",
  openingHours: "11h30-22h30",
  imageUrl: "https://www.papillesetpupilles.fr/wp-content/uploads/2019/01/Okonomiyaki-%C2%A9-K321-shutterstock.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.866141,
  lng: 2.3352886,
  menuLink: "https://www.akirestaurant.fr/alacarte/",
  foodlabreview: "Le meilleur de Saint-Anne : après 19h, il faut avoir un peu de patience pour pouvoir y dîner et c'est impossible de réserver. Le mieux est d'être dans la salle du bas pour voir les chefs faire les okonomiyakis, spécialité du lieu. Vous y reviendrez pour goûter les sobas, katsudon, shake ikura don, et surtout les currys. Service très rapide.",
  reviews: [{
    date: "12/2019",
    comment: "Délicieux ! Copieux, pas trop cher, personnel agréable. Arriver soit tôt soit tard car sinon il faut faire la queue dehors ! (victime de son succès)."
  }, {
    date: "10/2019",
    comment: "Réelle cuisine japonaise traditionnelle ! Que de plats surprenant pour les yeux et les papilles. De plus non plus, nous pouvons voir les chefs à la tâche rien de plus pour apprécier davantage leur carte !"
  }, {
    date: "07/2019",
    comment: "Véritable cuisine japonaise, et lorsque vous pouvez manger au comptoir les plats sont préparés sous vos yeux. Les mets sont délicieux, un véritable régal, quelque soit votre choix. Et vue la qualité les prix sont plus que corrects."
  }],
  award: {
    scroll: "fa-torii-gate",
    icon: "fas fa-torii-gate",
    description: "Le meilleur japonais"
  }
}, {
  name: "Kintaro",
  id: 28,
  type: "Japonais",
  rate: 4.4,
  votes: 3000,
  address: "24 Rue Saint-Augustin, 75002",
  phone: "01 47 42 13 14",
  arr: "2",
  openingHours: "11h30-22h30",
  imageUrl: "https://lh3.googleusercontent.com/xq-p3O14FX-mMHEEQGJcFrJlWKl6R_skVMF-yMli_3nbQLtlforrB5ZtFp3OMJ4-ouQtueYW=w1080-h608-p-no-v0",
  price: "€",
  price_digit: 1,
  lat: 48.8689453,
  lng: 2.3348371,
  foodlabreview: "Un vrai japonais comme on en voit peu ! Un cuisine réellement traditionnelle et raffinée. Par contre, attention, souvent beaucoup de monde, il faut avoir de la chance pour trouver une place. On recommande particulierement les nouilles typiques : ramen, soba ou udon.",
  reviews: [{
    date: "12/2019",
    comment: "Vraiment super. Un large choix de VRAI cuisine japonaise. Il faut y aller au moins 4 fois pour tout goûter. Copieux. Il ne faut surtout pas hésiter à essayer des choses inconnus difficilement trouvable ailleurs. Très brillant et victime de son succès ce qui veut dire queue à l'entrée énorme !"
  }, {
    date: "10/2019",
    comment: "C'était bon! Beaucoup de monde le midi donc attention a bien choisir son moment... beaucoup de choix pour les plats et c'est copieux pour un prix raisonnable."
  }, {
    date: "07/2019",
    comment: "Très bon restaurant japonais traditionnel ! Excellents repas pour un prix attractif, dans un décor simple et avec des serveurs sympa et très efficace. Une excellente adresse depuis plus de quinze ans que je recommande à tous. Ne changez rien ! Merci !"
  }]
}, {
  name: "Kodawari Ramen",
  id: 29,
  type: "Japonais",
  rate: 4.6,
  votes: 3500,
  address: "29 Rue Mazarine, 75006",
  phone: "09 70 91 12 41",
  arr: "6",
  openingHours: "12h-14h30 / 18h30-22h30",
  imageUrl: "https://www.sortiraparis.com/images/80/68604/289785-kodawari-ramen-le-specialiste-du-ramen-a-paris-18.jpg",
  imageUrl2: "https://www.sortiraparis.com/images/80/68604/289803-kodawari-ramen-le-specialiste-du-ramen-a-paris-9.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.8546132,
  lng: 2.3381383,
  menuLink: "https://www.kodawari-ramen.com/la-carte/",
  foodlabreview: "Dépaysement garanti : la déco est géniale avec à la fois le côté urbain des petites ruelles tokyoites et traditionnel avec les affiches et lanternes des enseignes restauration rapide du Japon. Accueil rapide et à la chaîne qui reste correct. A réserver par contre, le restaurant est très vite rempli.",
  reviews: [{
    date: "12/2019",
    comment: "Un service parfait ! Souriant et à l'écoute ! Des ramens parfaitement travaillés et maîtrisés.. Rarement mangé d'aussi bons et juste au niveau de la gestion des saveurs et textures. Rien à dire.. Allez y les yeux fermés"
  }, {
    date: "10/2019",
    comment: "Vraiment un bon endroit, j'aime y aller souvent et ils servent une nourriture vraiment délicieuse. Le personnel est vraiment gentil et sympathique."
  }, {
    date: "07/2019",
    comment: "Formidable découverte grâce à une amie qui connaît bien cet endroit et le Japon. J'ai adoré le Ramen du chef au citron : des nouilles goûtues, nori, pousse de bambou charnue, œuf mariné, des tranches de poulet tendres, un bouillon épais et en même temps léger avec un goût épatant. Je le recommande vivement, d'ailleurs la file d'attente constante en témoigne !"
  }]
}, {
  name: "Papelli - Fbg Saint Denis",
  id: 30,
  type: "Italien",
  rate: 4.5,
  votes: 500,
  address: "74 Rue du Faubourg Saint-Denis, 75010",
  phone: "01 48 24 98 05",
  arr: "10",
  openingHours: "11h-15h / 18h-00h",
  imageUrl: "https://blog.ninaah.com/wp-content/uploads/2015/03/papelli.jpg",
  imageUrl2: "https://nicolasdiolez.com/wp-content/uploads/2017/09/paris-papelli-pizza-diolez.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.8731098,
  lng: 2.3547136,
  menuLink: "https://papelli.fr/la-carte/",
  foodlabreview: "Lieu où tout est absolument parfait. Le service est d'une qualité rare dans les restaurants parisiens, les propriétaires sont d'une serviabilité rarissime et très proche de leur clientèle. La pâte de la pizza est fine et croustillante, et la garniture de qualité authentique.",
  reviews: [{
    date: "12/2019",
    comment: "Petit restau qui déchire. Équipe super sympa et très patiente. Pâte à pizza faite sur place. Pizza succulentes. Je recommande. Bon appétit"
  }, {
    date: "10/2019",
    comment: "Service très chaleureux. Pizzas délicieuses avec des produits choisis. Allez y les yeux fermés !"
  }, {
    date: "07/2019",
    comment: "Très bonnes pizza bien garnies à pâte fine, on est dans la vraie pizza italienne. Également de bonnes salades et de la panna cotta sans gluten pour les coeliaques. Service jeune et très sympa."
  }]
}, {
  name: "Hank Burger - Archives",
  id: 31,
  type: "Vegan",
  rate: 4.5,
  votes: 3500,
  address: "55 Rue des Archives, 75003",
  phone: "09 72 44 03 99",
  arr: "3",
  openingHours: "12h-22h",
  imageUrl: "https://voyagir.org/img/etb/hank_burger.jpg",
  imageUrl2: "https://voyagir.org/img/etb/hank_burger_2.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.8778864,
  lng: 2.3740273999999997,
  menuLink: "https://www.hankrestaurant.com/burger",
  foodlabreview: "Le burger de l'impossible est excellent, copieux, et peu onéreux en comparaison des autres burgers du 3e. Les produits sont frais et il y a même des options sans gluten. Petit plus le personnel est vraiment engageant et sympa.",
  reviews: [{
    date: "12/2019",
    comment: "Tout simplement excellent ! Burger qui a du goût avec un vrai produit végétal ! Super concept ! Personnel très agréable avec le sourire ! A refaire !"
  }, {
    date: "10/2019",
    comment: "La décoration un peu sommaire enlève un peu du charme de l'établissement mais les burgers sont succulents avec des prix en dessous de la concurrence de l'arrondissement. Manger vegan n'a rarement été aussi succulent. Service aimable, souriant qui prend plaisir à expliquer d'où viennent les bons ingrédients... Hâte d'y retourner."
  }, {
    date: "07/2019",
    comment: "Délicieux! Produits frais et sauces bluffantes! Le staff est souriant et on mange dans la salle du haut bien au chaud."
  }],
  award: {
    scroll: "fa-carrot",
    icon: "fas fa-carrot",
    description: "Le meilleur vegan"
  }
}, {
  name: "B&M - Montmartre",
  id: 32,
  type: "Burger",
  rate: 4.5,
  votes: 500,
  address: "98 Rue des Martyrs, 75018",
  phone: "01 42 58 39 20",
  arr: "18",
  openingHours: "12h-23h30",
  imageUrl: "http://www.magazine-mint.fr/wp-content/uploads/2016/09/IMG_0933.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.88458267731903,
  lng: 2.3401479963116176,
  menuLink: "https://deliveroo.fr/fr/menu/paris/18eme-montmartre/bandm-montmartre",
  foodlabreview: "Petite pépite du 18e arrondissement, accueil top avec un patron sympa, burger sur mesure. Et quel burger ! Un pain génial, des patties parfaits, des sauces savoureuses, un choix d’ingrédients varié... enjoy !",
  reviews: [{
    date: "12/2019",
    comment: "Burger top, sauce maison dingue et service sympathique, bref une excellente adresse !"
  }, {
    date: "10/2019",
    comment: "Excellent en tout point, quelque soit l'équipe en place. Un plaisir de croquer dans un B&M pour y (re)découvrir mélanges de textures et de saveurs. Le patron est super sympa."
  }, {
    date: "07/2019",
    comment: "J'y vais régulièrement! C'est tout proche de chez moi. D'excellents burgers (Je recommande le BCB + extra blue cheese). Le patron est très sympa et bienveillant. Des produits de qualité, ce qui les différencie des autres aux alentours. Je m'y suis encore posé là hier soir avec un pote qui connaissait pas. Top."
  }],
  award: {
    scroll: "fa-hamburger",
    icon: "fas fa-hamburger",
    description: "Le meilleur burger"
  }
}, {
  name: "Bocamexa - Oberkampf",
  id: 33,
  type: "Méxicain",
  rate: 4.4,
  votes: 500,
  address: "95 Rue Oberkampf, 75011",
  phone: "01 77 14 73 24",
  arr: "11",
  openingHours: "11h30-22h",
  imageUrl: "https://d1ralsognjng37.cloudfront.net/907ea84e-4c2f-4b6a-8588-4194d19f8c66.jpeg",
  imageUrl2: "https://www.delices-mag.com/wp-content/uploads/2017/07/delices-mag-bocamexa-restaurant-mexicain-mexique-copyright-maeva-destombes_MG_0703.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.8654426,
  lng: 2.3760905,
  menuLink: "http://www.bocamexa.com/#bocamexa-carte",
  foodlabreview: "Excellent et abordable, personnel accueillant et amical. Bocamexa est une cantine plus qu'un fast-food, bien meilleur que la grande majorité des restaurants mexicains de Paris. La pâte des burritos et des tacos est délicieuse, large choix dans les compositions et dans les sauces, et les pimentées le sont vraiment.",
  reviews: [{
    date: "12/2019",
    comment: "Une très belle découverte des spécialités locales, ambiance chaleureuse et repas copieux. Un très bon rapport qualité prix également."
  }, {
    date: "10/2019",
    comment: "Restaurant très agréable et serveur sympathique. On sent que c'est un vrai restaurant mexicain et pas une adaptation à la française comme d'autre."
  }, {
    date: "07/2019",
    comment: "C'est bon. C'est copieux. Le personnel est très agréable. Et les prix sont abordable. Que demander de plus pour un repas rapide ?"
  }],
  award: {
    scroll: "fa-pepper-hot",
    icon: "fas fa-pepper-hot",
    description: "Le meilleur méxicain"
  }
}, {
  name: "Buddha Bar",
  id: 34,
  type: "Japonais",
  rate: 4.1,
  votes: 2500,
  address: "8-12 Rue Boissy d'Anglas, 75008",
  phone: "01 53 05 90 00",
  arr: "8",
  openingHours: "18-2h",
  imageUrl: "https://www.hotelhorsetopera.com/images/stories/activites/night-life/caveau-de-la-huchette1-700x465.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.8679501,
  lng: 2.3191997,
  menuLink: "https://www.buddhabar.com/wp-content/uploads/2019/10/New-dinner-menu-FR-Octobre-2019.pdf",
  foodlabreview: "Le lieu est vraiment très agréable. La déco, la hauteur sous plafond avec des lustres gigantesques et la statue de Bouddha siégeant dans cet endroit sont sublimes. Les plats sont très bons et sont préparés à la minute afin de conserver une fraîcheur et un goût parfait. Il y a également un atelier pour les enfants qui leur permettra de s'occuper.",
  reviews: [{
    date: "12/2019",
    comment: "Super! L’endroit, le décor, l’ambiance, le brunch du dimanche matin superbe!! Pour le buffet du brunch un large choix de très bonne qualité ! Mention spéciale pour le saumon parfaitement délicieux... Mon coup de cœur parisien... Le personnel est vraiment super top!!! Les prix sont un peu élevé mais vraiment ça les vaut carrément !!!"
  }, {
    date: "10/2019",
    comment: "Excellent moment passé dans ce lieu magnifique ! L'ambiance est folle ! Intimiste et sensuel ! Je recommande fortement !"
  }, {
    date: "07/2019",
    comment: "C'est le buddha bar donc forcément, il faut y aller au moins une fois. Le cadre est merveilleux et le temps s'arrête quand on y est. Je n'ai pas encore testé le restaurant mais les deux fois où j'y suis allée pour boire un verre, c'était très bien ! Demandez leur des créations cocktails, vous ne serez pas déçus!"
  }],
  award: {
    scroll: "fa-heart",
    icon: "fas fa-heart",
    description: "Notre coup de coeur"
  }
}, {
  name: "L'Hôtel Amour",
  id: 35,
  type: "Français",
  rate: 3.9,
  votes: 500,
  address: "8 Rue de Navarin, 75009",
  phone: "01 48 78 31 80",
  arr: "9",
  openingHours: "18-2h",
  imageUrl: "https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/365/2018/02/25100827/Hotel-Amour-v%C3%A9randa-11.jpg",
  imageUrl2: "https://1dc3f33f6d-3.optimicdn.com/gaultmillau.com/photos/e4a92e41c0a502c82d0c23330a05d08ea68c43ba/detail.jpg?1507833393",
  price: "€€€",
  price_digit: 3,
  lat: 48.8796402,
  lng: 2.3372404,
  menuLink: "https://amour.hotelamourparis.fr/hotel-amour/amour-restaurant/",
  foodlabreview: "Lieu magique, chaleureux et romantique. La cuisine est délicieuse, copieuse et à un prix assez abordable. L’accueil se fait tout sourire et est dynamique. Parfait pour une soirée en amoureux.",
  reviews: [{
    date: "12/2019",
    comment: "Super! L’endroit, le décor, l’ambiance, le brunch du dimanche matin superbe!! Pour le buffet du brunch un large choix de très bonne qualité ! Mention spéciale pour le saumon parfaitement délicieux... Mon coup de cœur parisien... Le personnel est vraiment super top!!! Les prix sont un peu élevé mais vraiment ça les vaut carrément !!!"
  }, {
    date: "10/2019",
    comment: "Charmant, étonnant endroit ! Une petite 'Jungle' en plein Paris ! Un nom d'établissement qui... y engage ! Personnel attentionné (et jolies). Prix très abordables, cuisine sans surprise mais, soignée ! Un lieu auquel on s'attache, où l'on revient !"
  }, {
    date: "07/2019",
    comment: "Super repas sur une terrasse isolée au calme. Petit paradis."
  }],
  award: {
    scroll: "fa-umbrella-beach",
    icon: "fas fa-umbrella-beach",
    description: "La meilleure terrasse"
  }
}, {
  name: "La Gare",
  id: 36,
  type: "Inclassable",
  rate: 3.9,
  votes: 1500,
  address: "19 Chaussée de la Muette, 75016",
  phone: "01 42 15 15 31",
  arr: "16",
  openingHours: "12-15h / 19h-23h",
  imageUrl: "http://www.yonder.fr/sites/default/files/yonderpic/restau-paris-ete-2019/06-la-gare-gaston-acurio_%C2%A9_Jules-Prunet.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.8581178,
  lng: 2.2700956,
  menuLink: "http://lagare-paris.com/wp-content/uploads/2019/12/DECEMBRE_LAGARE_NEW_FOOD_BD.pdf",
  foodlabreview: "La Felicita mais haut de gamme et plus cosmopolite : la décoration époustouflante et le lieu gigantesque (l'ancienne station de la Muette remise à neuve). La carte ultra variée mais tout est bon, on se demande combien de cuisinier il y a en cuisine.",
  reviews: [{
    date: "12/2019",
    comment: "C'est un beau restaurant construit dans l'ancienne gare de la Muette. Il a beaucoup de charme et le service y est très agréable. Nous avons essayé le brunch aujourd'hui et c'était vraiment bien avec quatre pôles (Crustacés et sushis / Crudités / Grillades et œufs / Viennoiseries et boissons chaudes) tout à volonté. Il y a aussi un service qui s'occupe des enfants : maquillage, formes en ballons, atelier dessins..."
  }, {
    date: "10/2019",
    comment: "Dans un lieu atypique et original, ce vaste restaurant vous propose des plats exotiques et très savoureux. Le décor très joli est plutôt dépaysant."
  }, {
    date: "07/2019",
    comment: "Un lieu totalement atypique récemment rénové pour adopter une ambiance plus coloré. Plusieurs cuisine vous propose des spécialités des 4 coins du monde. c'est fin et généreux, plusieurs plats et tapas à partager et très bon choix de vins. Mention spéciale pour le personnel qui a fait preuve d'une grande sympathie et de professionnalisme"
  }],
  award: {
    scroll: "fa-instagram",
    icon: "fab fa-instagram",
    description: "Le plus instagrammable"
  }
}, {
  name: "Yann Couvreur - Rue des Rosiers",
  id: 37,
  type: "Pâtisserie",
  rate: 4.4,
  votes: 500,
  address: "23bis Rue des Rosiers, 75004",
  phone: "06 05 97 63 01",
  arr: "4",
  openingHours: "10h-20h",
  imageUrl: "http://untitledmag.fr/wp-content/uploads/2018/04/YANN-COUVREUR-26-BASSE-DEF.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.857506,
  lng: 2.358768,
  menuLink: "https://yanncouvreur.com/28-tous-nos-produits",
  foodlabreview: "Le détour à cette boulangerie-patisserie vaut le coup. Original, succulent, appétissant, diététique, ultra-frais, fait maison,... Que dire de plus ! Les tartelettes, elles sont trop jolies et bonnes! Le pain est un régal, on ne trouve pas ça ailleurs.",
  reviews: [{
    date: "12/2019",
    comment: "Depuis 3 ans, toujours la même qualité sur la tradition. Excellente. Les autres pains au levain naturel sont aussi excellents : la tourte de meule ou le pain d’antan dont se fournissent les restaurateurs du quartier d’ailleurs. Personnel efficace, service rapide toujours courtois."
  }, {
    date: "10/2019",
    comment: "Super boulangerie. Je recommande les viennoiseries, sans doute parmi les meilleurs...Vendeuses toujours souriantes et accueil chaleureux."
  }, {
    date: "07/2019",
    comment: "Beaucoup de monde le week-end, mais c'est logique vu le goût !"
  }]
}, {
  name: "Popelini",
  id: 38,
  type: "Pâtisserie",
  rate: 4.5,
  votes: 250,
  address: "29 Rue Debelleyme, 75003",
  phone: "01 44 61 31 44",
  arr: "3",
  openingHours: "11h-19h30",
  imageUrl: "https://popelini.com/wp-content/uploads/2015/06/landing.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.862451,
  lng: 2.363821,
  foodlabreview: "Considérés par beaucoup comme les meilleurs choux à la crème de Paris, il va sans dire que ceux-ci sont effectivement délicieux. Le choix y est correct et on peut se laisser surprendre par certains parfums de de saison ou des éditions spéciales. Les prix y sont bien évidemment élevés et donnent envie de prendre le temps d'apprécier chaque pièce. Pour les amoureux de la bonne pâtisserie.",
  reviews: [{
    date: "12/2019",
    comment: "Topissime !! des choux de grande qualité  ! allez y les yeux fermés ! et laissez parler vos papilles"
  }, {
    date: "10/2019",
    comment: "Incroyablement bon et l'accueil extrêmement chaleureux, je recommande vivement."
  }, {
    date: "07/2019",
    comment: "Des petits choux à tomber par terre ! Mon préféré celui à la vanille, un classique mais le goût de la vanille est vraiment canon."
  }]
}, {
  name: "Le Nid - Cocon Ludique",
  id: 39,
  type: "Jeux de société",
  rate: 4.5,
  votes: 1000,
  address: "227 Rue Saint-Martin, 75003",
  phone: "07 82 75 23 00",
  arr: "3",
  openingHours: "17h30-1h",
  imageUrl: "https://metoostorage.blob.core.windows.net/static/place/1500px/5b6d124e-cfc3-4024-9b02-d456a404b8e5-635930436657302213/f585d950-4652-4788-ad26-0b0b325da688-636076425440747500.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.8644416,
  lng: 2.3508495,
  menuLink: "http://lenid-coconludique.com/le-brunch-du-dimanche/",
  foodlabreview: "Le lieu est chaleureux et donne envie de s'attabler et de jouer. Le vendeur, passionné de jeux, est de bon conseil. En professionnel averti, il vous guidera dans vos recherches et répondra à vos attentes. De surcroît, il est très sympathique et donc vous passerez un excellent moment en sa compagnie.",
  reviews: [{
    date: "12/2019",
    comment: "Excellent bar a jeux, mais malheureusement victime de son succès. Choix dantesques de jeux, mais vous devrez vous débrouiller seul pour les règles... car il y a vraiment du monde! Belle carte des conso. Blindé le week-end, il vaut donc mieux réserver."
  }, {
    date: "10/2019",
    comment: "Je valide le concept de bar à jeux. Large choix de jeux de société ! Populaire donc il peut y avoir beaucoup de monde. Possibilité de grignoter sur place. Bonnes planches !"
  }, {
    date: "07/2019",
    comment: "Incroyable ! Un bar a jeux de Paris vraiment super ! Pas cher du tout et très bien décoré. Les gens sont très sympas et les la bibliothèque de jeux est hyper complète ! Aller y les yeux fermés !"
  }],
  award: {
    scroll: "fa-chess",
    icon: "fas fa-chess",
    description: "Jeux de société"
  }
}, {
  name: "Canal Poké - Saint-Martin",
  id: 40,
  type: "Poké",
  rate: 4.6,
  votes: 250,
  address: "25 Rue Bichat, 75010",
  phone: "01 40 34 23 18",
  arr: "10",
  openingHours: "11h30-23h",
  imageUrl: "https://canalpoke.com/wp-content/uploads/2019/05/header.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.8707991,
  lng: 2.3662136,
  menuLink: "https://canalpoke.com/wp-content/uploads/2018/12/Canal-Pok%C3%A9-Menu.jpg",
  foodlabreview: "Cadre chaleureux et intimiste, personnel avenant et sympathique prenant le temps d'expliquer. Les produits sont frais et savoureux, healthy et même diététique si on choisis la base salade. Les aliments proposés sont classiques pour des poké mais cela reste bien arrangé et moins cher que la concurrence.",
  reviews: [{
    date: "12/2019",
    comment: "Nous nous y sommes rendu plusieurs fois, le concept est original et top ! C’est super bon et on peut également personnaliser nos bowl.. on a adoré, avec des choix différents à chaque passage. L’accueil est top, rien à dire je reviendrais encore :)"
  }, {
    date: "10/2019",
    comment: "Super restaurant ! A l’arrivée le personnel est très accueillant. Nous avons pris deux poké bowl au saumon c’était un délice ! Tout les ingrédients ont très bien été pensés et se marient très bien ensemble ! Ça vaut le détour !!"
  }, {
    date: "07/2019",
    comment: "Situé dans une petite rue discrète près du Paname Comedy Club, le cadre est sympa, le rapport qualité/prix est non négligeable. Je me suis régalé, je reviendrai."
  }]
}, {
  name: "Wunderbär",
  id: 41,
  type: "Allemand",
  rate: 4.3,
  votes: 250,
  address: "16 Rue Beaurepaire, 75010",
  phone: "09 81 26 88 53",
  arr: "10",
  openingHours: "12h-23h",
  imageUrl: "https://somanyparis.files.wordpress.com/2016/06/wunderbacc88r-8.jpg",
  imageUrl2: "https://mimideas.files.wordpress.com/2019/03/h5a9895-modifier.jpg?w=1200&h=750&crop=1",
  price: "€",
  price_digit: 1,
  lat: 48.8702946,
  lng: 2.3617447,
  menuLink: "https://deliveroo.fr/fr/menu/paris/paris-10eme-gare-de-lest/wunderbar-wurst?utm_medium=affiliate&utm_source=google_maps_link#",
  foodlabreview: "Parfait pour manger un currywurst et boire une bonne bière dans une ambiance chaleureuse. On y trouve également des potatoes parfaitement assaisonnées, le meilleur bretzel de Paris (moelleux à souhait) et des mets plus fins comme le gaspascho de tomate. Tout était parfait, les serveurs sont sympas et soucieux de bien faire.",
  reviews: [{
    date: "12/2019",
    comment: "Petit snack allemand sympathique. Un beau choix de bières et sodas teutons."
  }, {
    date: "10/2019",
    comment: "Très bonne adresse. Cuisine maison avec des légumes frais. On peut y déjeuner, rapidement, sur le pouce ou prendre son temps. Frite maison remarquable ! On n'en trouve plus des comme ça à Paris. "
  }, {
    date: "07/2019",
    comment: "Tres bon et simple! Les bretzels sont particulièrement bon et les jus pétillants changent du bière. Les assiettes sont suffisamment copieux et les saucisses et accompagnements sont fraîches et pas dans le moindre graisseux. Je recommande!"
  }]
}, {
  name: "Le Petit Cambodge",
  id: 42,
  type: "Cambodgien",
  rate: 4.1,
  votes: 1500,
  address: "20 Rue Alibert, 75010",
  phone: "01 42 45 80 88",
  arr: "10",
  openingHours: "11h30-23h",
  imageUrl: "https://d1ralsognjng37.cloudfront.net/f46ccffb-28ba-48ec-97f0-99369588100a.jpeg",
  imageUrl2: "https://www.adeline-cuisine.fr/wp-content/uploads/2018/05/Bo-bun-vietnamien-recette.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8703465,
  lng: 2.3635718,
  menuLink: "https://lepetitcambodge.fr/carte/",
  foodlabreview: "Lieu mythique du 10e quasi jumelé avec le bar du Carillon juste en face. Malgré l'affluence des gens dans ce petit restaurant, souvent complet, les plats sont très bons c'est toujours un plaisir d'y manger. Si vous y passez lorsqu'il est complet, vous pouvez patienter autour d'un verre au Carillon et demander de revenir plus tard afin que le personnel vous garde une table.",
  reviews: [{
    date: "12/2019",
    comment: "Simplement un de mes préféré de Paris. Toujours un plaisir de manger aussi bien ! Je reviendrais déguster un bobun spécial mixte sans me lasser! (Attention à ceux qui aiment le confort, on y mange sur des tabourets hauts et on partage les tables) Convivial donc :)"
  }, {
    date: "10/2019",
    comment: "Lieu mythique qui défend sa réputation. La nourriture y est délicieuse, pas chère et le service fort sympathique"
  }, {
    date: "07/2019",
    comment: "Convivial, plats copieux et excellents. Agencé comme une petite cantine, l'espace est toutefois restreint"
  }]
}, {
  name: "Terrasse de l'Alcazar",
  id: 43,
  type: "Français",
  rate: 4.2,
  votes: 1000,
  address: "62 Rue Mazarine, 75006",
  phone: "01 53 10 19 99",
  arr: "6",
  openingHours: "12h-15h / 19h-2h",
  imageUrl: "https://www.benoe.fr/media/salles/s344/alcazar-be-noe-dejeuner.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.8546237,
  lng: 2.3379059,
  menuLink: "http://www.alcazar.fr/menu-restaurant",
  foodlabreview: "Très belle adresse chic et décontractée, les plats sont beaux, équilibrés et copieux à la fois. La décoration végétale et le mobilier sont sublimes. Possibilité de privatiser tout l'étage. Des options végétarienne sont disponibles.",
  reviews: [{
    date: "12/2019",
    comment: "Venue avec ma société pour un dîner / événement, je me suis laissée très agréablement surprendre par la nourriture qui était en fait renversante. La burrata était excellente, la viande était fondante à point, et le dessert très bon aussi. Le tout avec un service agréable. Je pense revenir, c'est sûr !"
  }, {
    date: "10/2019",
    comment: "Très belle expérience culinaire dans un beau cadre qui ne laisse définitivement pas indifférent... La carte vaut bien le déplacement !"
  }, {
    date: "07/2019",
    comment: "Si vous souhaitez passer un moment magique dans un cadre très agréable avec des serveurs aux petits soins.. n'attendez plus ! Les plats sont aussi excellents ;)"
  }]
}, {
  name: "Paris New York - Marais",
  id: 44,
  type: "Hamburger",
  rate: 4.3,
  votes: 1000,
  address: "1 Rue Perrée, 75003",
  phone: null,
  arr: "3",
  openingHours: "12h-15h / 19h-23h",
  imageUrl: "https://parisboutik.com/wp-content/uploads/2016/05/large-full-paris-new-york-marais-1@2x.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8637941,
  lng: 2.3604523,
  menuLink: "https://pnyburger.com/menu-pnyburger",
  foodlabreview: "Bonne adresse de burgers près du marché des Enfants Rouges, le cadre est agréable, on y mange bien et on s'y sent bien. On vous conseille le bleu et les frites de patate douce qui sont juste excellentes. Attention même pour les férus de nourriture épicée le burger mexicain niveau trois est un challenge !",
  reviews: [{
    date: "12/2019",
    comment: "Restaurant génial ! C'est le meilleur burger que j'ai mangé de ma vie. Le service est super et les serveurs super sympa. Je recommande à 2000%"
  }, {
    date: "10/2019",
    comment: "Bon restaurant avec un cadre agréable, les burgers sont bien servis et vous calent bien même. Petit plus les steak végétariens sont vraiment impressionnants et très bons. Je recommande si vous souhaitez manger un bon burger sur Paris !"
  }, {
    date: "07/2019",
    comment: "Très bons burgers et pas chers. Les burgers sont copieux. Un peu d'attente si vous venez après 20h30 mais ça vaut le coup."
  }]
}, {
  name: "Boteco Lapa",
  id: 45,
  type: "Brésilien",
  rate: 4.3,
  votes: 500,
  address: "48 Rue de l'Échiquier, 75010",
  phone: null,
  arr: "10",
  openingHours: "12h-14h30 / 18h-00h",
  imageUrl: "https://metoostorage.blob.core.windows.net/static/place/1500px/0712d0de-6786-49e8-8711-86b87ee9e327-636507633395316115/a54270e6-d0ac-4026-9ea9-aa398d41c2eb-636516950713062758.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.872055,
  lng: 2.3481171,
  menuLink: "https://www.boteco.paris/copy-of-la-carte-boteco-lapa",
  foodlabreview: "Très joli lieu, serveurs très accueillants et sympathiques. La reine est ici la caïpirinha que l'on peut même demander personnalisée selon ses goûts. Les quantités sont généreuses et les entrées faites maison sont originales.",
  reviews: [{
    date: "12/2019",
    comment: "Lieu chaleureux et équipe super sympa! Tout ce que l'on a mangé et bu était excellent. Je recommande vivement ce bar. Mentions spéciales au cocktail maracujà et aux dés de tapioca... une tuerie!"
  }, {
    date: "10/2019",
    comment: "Je suis venu pour déjeuner et c’etait top ! Ambiance très sympa, plats copieux et délicieux ! Je recommande chaudement"
  }, {
    date: "07/2019",
    comment: "Les cocktails sont excellents et bien chargés, les plats sont aussi délicieux même si ça pourrait être servi un poil plus chaud. Le cadre est très joli et le service plutôt bon."
  }],
  award: {
    scroll: "fa-sun",
    icon: "fas fa-sun",
    description: "Le meilleur brésilien"
  }
}, {
  name: "Uma Nota",
  id: 46,
  type: "Brésilien",
  rate: 4.1,
  votes: 500,
  address: "86 Rue Réaumur, 75002",
  phone: "01 42 33 07 71",
  arr: "2",
  openingHours: "12h-14h30 / 18h30-1h",
  imageUrl: "https://www.sortiraparis.com/images/80/79820/374282-uma-nota-a-paris-cuisine-nippo-bresilienne-et-cocktails-exotiques-8.jpg",
  imageUrl2: "https://s3-eu-west-1.amazonaws.com/privateaser-media/etab_photos/11745/1500x750/98288.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8669091,
  lng: 2.3505013,
  menuLink: "https://www.uma-nota.com/carte",
  foodlabreview: "Le concept est unique à Paris : association de la cuisine asiatique à la cuisine brésilienne est originale et réussie. La déco est sympa, la musique assez forte, l'ambiance est festive.",
  reviews: [{
    date: "12/2019",
    comment: "Super restaurant. Repas plus qu'excellent, déco sympa. Mélange brésilien / japonais original. Ambiance musicale sympa. Dommage un peu fort donc difficile de parler."
  }, {
    date: "10/2019",
    comment: "Super découverte à deux pas de la rue Montorgueil. Des saveurs justes et maîtrisées qui nous ont transportés à l’autre bout du monde le temps d’une soirée. On s’est régalés de A à Z, gros gros plus pour les véritables options végétariennes. Service rapide, souriant et attentif. On reviendra à coup sûr !"
  }, {
    date: "07/2019",
    comment: "J'ai passé un moment très agréable là-bas, les serveurs sont chaleureux et à l'écoute, et les plats originaux et très très bon. Je recommande !"
  }]
}, {
  name: "La Cevicheria",
  id: 47,
  type: "Péruvien",
  rate: 4.1,
  votes: 1000,
  address: "14 Rue Bachaumont, 75002",
  phone: "09 80 88 58 05",
  arr: "2",
  openingHours: "12h-23h30",
  imageUrl: "https://d1ralsognjng37.cloudfront.net/9306ef6f-786b-44d3-a550-b99ce1fa7d40",
  price: "€€",
  price_digit: 2,
  lat: 48.880912099999996,
  lng: 2.3567792,
  menuLink: "https://deliveroo.fr/fr/menu/paris/2eme-bourse/la-cevicheria-bachaumont?day=today&geohash=u09wj21yqeuz&time=ASAP&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=**%5EAcquisition%5ESearch%5EDSA%5EFrance%5EParis%5E%5E%5E%5E%5E%5E%C2%A371700000058841900&utm_loc=9056135&utm_device=c&utm_adposition=1t1&utm_network=g&utm_targetid=aud-310752215248:dsa-430061073504&gclid=CjwKCAiA3abwBRBqEiwAKwICA2Jz9NHA-bMuhzrCfiNiRO5DWpbx8lrjYhN0bdzf4MYitf_OQUu33xoCBpEQAvD_BwE&gclsrc=aw.ds",
  foodlabreview: "Attention repaire péruvien healthy et diététique, les portions pourront paraître petites aux plus grands estomacs. Mais il faut y aller pour la beauté du cadre, de la terrasse, des ceviches et des tiraditos. Les serveurs répondent à la moindre de vos questions. Les plats sont originaux, raffinés, presque des oeuvres d'art.",
  reviews: [{
    date: "12/2019",
    comment: "Ce lieu est parfait pour une sortie entre amis car on peut y réservé une immense table pour une dizaine de convives. J'ai trouvé la cuisine excellente et les cocktails délicieux. La décoration intérieure est très agréable. Un endroit où l'on se sent bien."
  }, {
    date: "10/2019",
    comment: "Un peu cher mais des ceviches frais, raffinés et originaux. Cadre sympathique, tout comme celui rue de la rue Martel, 10e."
  }, {
    date: "07/2019",
    comment: "Cadre agréable et accueillant, à l'image des autres enseignes de la Cevicheria à Paris. Des plats riches en goûts, bien préparés et à prix correct ! Équipe attentive et bien organisée."
  }],
  award: {
    scroll: "fa-fish",
    icon: "fas fa-fish",
    description: "Le meilleur poisson"
  }
}, {
  name: "Presto Fresco",
  id: 48,
  type: "Italien",
  rate: 4.3,
  votes: 2000,
  address: "14 Rue Montmartre, 75001",
  phone: "01 40 26 83 94",
  arr: "1",
  openingHours: "12h-15h / 19h-23h",
  imageUrl: "https://www.relaisdulouvre.com/images/actualites/1-Traiteur.jpg",
  imageUrl2: "https://lecludescotonettes-dd40.kxcdn.com/wp-content/uploads/2018/03/cotonettes_lifestyle_restaurant-italien_Lafourchette_presto-fresco_4.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.863828,
  lng: 2.345823,
  menuLink: "https://www.prestofresco.fr/",
  foodlabreview: "Y entrer c'est mettre les pieds en Italie : la devanture est sublime, les serveurs souriants, le choix de pâtes et de pizza infini et très pointu. Le soir l'ambiance est tamisée, c'est parfait pour un repas en amoureux mais aussi pour un groupe : on oubliera jamais la soirée d'anniversaire où le cuisinier a chanté 3 chansons serviette à l'épaule, galvanisant toute la salle.",
  reviews: [{
    date: "12/2019",
    comment: "Je viens souvent ici, la nourriture est toujours très bonne, le service rapide, le personnel très agréable et globalement à l'écoute. Le restaurant est malheureusement victime de son succès ainsi il m'a été dernièrement difficile d'y trouver une table au calme, c'est tout ce qu'il manque pour un 5/5 !"
  }, {
    date: "10/2019",
    comment: "Très bonne adresse pour manger de la bonne cuisine italienne ! Bonne ambiance, service impeccable."
  }, {
    date: "07/2019",
    comment: "Super restaurant italien dans le coeur de Paris, je m’y suis rendue à plusieurs reprises en couple et/ou entre amis. Les plats sont toujours parfaits et savoureux, le prix est raisonnable vis à vis de la quantité présente dans l’assiette, et en prime, toujours une très bonne ambiance avec le chef cuisinier qui vient parfois pousser la chansonnette !! "
  }],
  award: {
    scroll: "fa-utensils",
    icon: "fas fa-utensils",
    description: "Le meilleur italien"
  }
}, {
  name: "Café du Musée Jacquemart André",
  id: 49,
  type: "Brunch",
  rate: 4.4,
  votes: 100,
  address: "158 Boulevard Haussmann, 75008",
  phone: null,
  arr: "8",
  openingHours: "11h45-17h30",
  imageUrl: "https://www.musee-jacquemart-andre.com/sites/default/files/styles/galerie_node/public/01_-_dl_mja_218_005_s_lloyd_2.jpg?itok=eymBCKKa",
  price: "€€€",
  price_digit: 3,
  lat: 48.8755313,
  lng: 2.3103462,
  menuLink: "https://www.musee-jacquemart-andre.com/sites/default/files/editeur/Preparer/carte_mja_fr_dec-2019.pdf",
  foodlabreview: "Ce restaurant est victime de son succès : on en prend plein les yeux et les papilles. Le lieu est majestueux et raffiné. Les salades et tartes généreuses, le brunch est gargantuesque. Mention spéciale au macaron pistaches framboise. Le personnel de salle est un peu dépassé mais prend le temps d'être attentionné.",
  reviews: [{
    date: "12/2019",
    comment: "J'ai goûté à quelques occasions avec des amis, les desserts accompagnés de thé. C'est succulent. La décoration nous fait plonger dans une période ancienne. C'est un lieu à visiter tout comme la demeure avec leur superbe entrée, ambiance art deco, et les expositions."
  }, {
    date: "10/2019",
    comment: "Tout y est extrêmement raffiné, le décor bien sûr, la qualité des mets et la gentillesse du personnel."
  }, {
    date: "07/2019",
    comment: "Prévoir un temps d'attente avant d'être installé du fait de la forte affluence. Le cadre est tout simplement magnifique. Laissez-vous tenter par la formule brunch, par un repas ou bien juste un goûter. Dans tous les cas ne passez pas à côté des desserts, leurs tartes sont à tomber par terre."
  }],
  award: {
    scroll: "fa-crown",
    icon: "fas fa-crown",
    description: "Le plus chic"
  }
}, {
  name: "Aki Boulangerie",
  id: 50,
  type: "Pâtisserie",
  rate: 4.4,
  votes: 1500,
  address: "16 Rue Sainte-Anne, 75001",
  phone: null,
  arr: "1",
  openingHours: "7h30-20h30",
  imageUrl: "https://www.sortiraparis.com/images/80/77153/379398-aki-boulanger-le-boulangerie-franco-japonaise-super-gourmande.jpg",
  imageUrl2: "http://painrisien.com/wp-content/uploads/2011/06/DSC04550.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8660699,
  lng: 2.3355837,
  menuLink: "https://akiboulanger.com/patisseries/",
  foodlabreview: "Aki Boulangerie est situé juste devant son homologue Aki Restaurant qui ne propose pas de dessert, la suite logique est donc de se rendre à la boulangerie à la fin de son repas, ouverte jusqu'à 20h ceci dit. Il y a la queue jusqu'à l'extérieur à toute heure de la journée : les pâtisseries sont peu sucrées, raffinées et délicieuses. On y trouve également des bentos qui sont les équivalents à emporter du restaurant Aki.",
  reviews: [{
    date: "12/2019",
    comment: "Du thé vert, des beignets torsadés, de la rigueur, de la précision du détail ! Une belle boutique en face du restaurant  du même nom ! Des produits bien finis et surtout extrêmement délicieux ! Une partie traiteur fraîche de la journée. Une partie boulangerie qui n'est pas en reste ! Une belle rencontre franco-nippone !"
  }, {
    date: "10/2019",
    comment: "Une institution qui commence à faire date désormais, avec une offre pratiquement introuvable ailleurs qu’au Japon. Le mieux reste les sandwichs et autres pains aux recettes improbables mais géniales et typiquement nippones. Aussi bien sur la boulangerie, le déjeuner que la pâtisserie, Aki assure et on voudrait l’avoir toujours en bas de chez soi. Parfait également sur le service, aimable et efficace."
  }, {
    date: "07/2019",
    comment: "Un véritable petit bout de Japon dans Paris. On peut y déguster tout un tas de pâtisserie japonaise pratiquement équivalente à celle qu'on retrouve au Japon."
  }]
}, {
  name: "Les Parisiennes",
  id: 51,
  type: "Français",
  rate: 4.2,
  votes: 500,
  address: "17 Avenue de la Motte-Picquet, 75007",
  phone: "01 47 05 07 37",
  arr: "7",
  openingHours: "8h-23h",
  imageUrl: "http://www.lesparisiennescafe.com/themes/les-parisiennes-wedding-en/img/bg-restaurant.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8559104,
  lng: 2.3082717,
  menuLink: "http://www.lesparisiennescafe.com/",
  foodlabreview: "On adore ce resto notamment pour son plat régressif et divin: les coquillettes aux truffes! Le poulet paillard accompagné de ses légumes est également délicieux, tout comme le frozen yogurt pour ceux qui surveillent plus leur ligne. Et les prix restent plutôt raisonnables pour le quartier.",
  reviews: [{
    date: "12/2019",
    comment: "Un peu retiré de la grande circulation, un coin de rue, une grande simplicité. Celle des vrais maîtres gourmands au service d'une clientèle authentique.. des plats du chef, goûteux, un service souriant, des prix raisonnables... Les Parisiennes vont vous enchanter."
  }, {
    date: "10/2019",
    comment: "C'est la 2ème fois que j'y retourne et c'est devenu un de mes restos coup de cœur. Endroit très agréable, belle déco, serveurs souriant et disponibles. Plat très bon (Salade Thaï aux gambas) et dessert délicieux (Frozen Yoghurt). Je recommande Les Parisiennes !"
  }, {
    date: "07/2019",
    comment: "Une belle découverte, tout était parfait! Service professionnel, une cuisine raffinée et un beau cadre. Bon rapport qualité / prix. Si vous êtes dans le coin, je vous recommande cette adresse, vous ne serez pas déçu."
  }]
}, {
  name: "Le Touareg",
  id: 52,
  type: "Algérien",
  rate: 4.5,
  votes: 500,
  address: "228 Rue de Charenton, 75012",
  phone: "01 43 07 68 49",
  arr: "12",
  openingHours: "12h-14h30 / 19h-22h30",
  imageUrl: "https://uniiti.com/images/shops/slides/94a4cba2bac24a277d363db494b1c067c57273c5.jpeg",
  price: "€€",
  price_digit: 2,
  lat: 48.8397485,
  lng: 2.3883892,
  menuLink: "https://restaurant-letouareg.fr/fr/services",
  foodlabreview: "Allez-y autant pour les couscous ou les Tajines. Le cuisinier et l'équipe de salle sont des Kabyles qui ont à cœur de sublimer la gastronomie algérienne. L'accueil est très agréable et les serveurs très sympathiques. Vous y retournerez.",
  reviews: [{
    date: "12/2019",
    comment: "Accueil et service chaleureux. J'y invite toujours les gens de passage chez moi. Plats excellents. Je suis client depuis 15 ans l'équipe est quasiment toujours la même et semble toujours aussi attentive à la qualité des plats. Souvent très fréquenté le midi je vous conseille donc de réserver à l'avance."
  }, {
    date: "10/2019",
    comment: "Très bonne adresse. Excellent accueil, très beau cadre, très bonne cuisine. Rien à dire, sauf du positif. Très bon rapport qualité prix. Je retiens cette adresse."
  }, {
    date: "07/2019",
    comment: "Un ami habitué de ce restaurant me l'a fait découvrir et j'ai été ravie moi qui a été jusqu'à maintenant toujours déçue des couscous. Quand on a été élevée par une mère qui fait le meilleur couscous du monde, on est très exigeante. Je vous recommande le couscous au méchoui d'agneau...un délice !"
  }]
}, {
  name: "Le Jeroboam",
  id: 53,
  type: "Français",
  rate: 4.6,
  votes: 500,
  address: "72 Rue Didot, 75014",
  phone: "01 45 39 39 13",
  arr: "14",
  openingHours: "12h-14h / 19h30-22h",
  imageUrl2: "https://s3-eu-west-1.amazonaws.com/privateaser-media/etab_photos/11980/1500x750/102426.jpg",
  imageUrl: "https://metoostorage.blob.core.windows.net/static/place/1500px/ebc4bfe8-e7cb-4e8d-9ac4-2dd446a5c579-636018725614596852/aee0cde5-9134-4766-9c11-7fa6dc26e597-636031779786483907.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.8290777,
  lng: 2.3169412,
  menuLink: "http://www.lejeroboam.fr/menus-carte/",
  foodlabreview: "Une très bonne adresse de quartier. La cuisine est constituée de plats de brasserie d’excellente facture, rehaussés de touches gastronomiques telles que la truffe sur le veau ultra-fondant. On apprécie également les desserts gourmands, les portions généreuses et le cadre intimiste. Un service impeccable et à la hauteur de la cuisine. L'équipe est passionnée et enthousiaste et saura vous assurer un repas divin. Mention spéciale aux saints jacques et à la brioche façon pain perdu.",
  reviews: [{
    date: "12/2019",
    comment: "On avait réservé samedi soir pour 6 personnes et on a passé un très agréable moment dans ce restaurant grâce à l’accueil mais surtout la qualité des plats servis. Un vrai délice mais surtout un vrai travail de professionnel. Je pense que le prix (50 euros par personne) est justifié tant tous les ingrédients était la pour passer une belle soirée."
  }, {
    date: "10/2019",
    comment: "Un bon petit restaurent de quartier. Les plats sont simples très bons et gourmands. Je n'ai jamais mangé de burger aussi bon dans un restaurant ! Les frites de patate douce sont délicieuses. Il est demandé de 'réserver' son dessert au moment de la prise de commande, mais le serveur repasse juste avant la fin du plat pour vérifier si on a toujours de la place pour le dessert ou pas, si non, alors ils annulent tout simplement le dessert. C'est bien pensé !"
  }]
}, {
  name: "Autour du Saumon",
  id: 54,
  type: "Scandinave",
  rate: 4.6,
  votes: 250,
  address: "116 Rue de la Convention, 75015",
  phone: "01 45 54 31 16",
  arr: "15",
  openingHours: "12h-14h30 / 19h-21h",
  imageUrl: "https://i0.wp.com/silencio.fr/wp-content/uploads/etoiles/Restaurant-Diane-Fouquets-Barriere-Paris-Silencio-saumon-01.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.8406227,
  lng: 2.2886894,
  foodlabreview: "Restaurant confidentiel d'une exceptionnelle qualité. Tout y est, l'accueil (même au téléphone), le service de Pierre, classe, respectueux avec une fine pointe de bonne humeur, professionnel lorsqu'il s'agit de présenter les plats. Et le principal, les plats : une valse de noblesse, caviar, saumons et autres produits de la mer froids ou chauds. Ce lieu est à la fois un traiteur et un restaurant. Mention spéciale pour le fondant remarquable du cœur de saumon.",
  reviews: [{
    date: "12/2019",
    comment: "On avait réservé samedi soir pour 6 personnes et on a passé un très agréable moment dans ce restaurant grâce à l’accueil mais surtout la qualité des plats servis. Un vrai délice mais surtout un vrai travail de professionnel. Je pense que le prix (50 euros par personne) est justifié tant tous les ingrédients était la pour passer une belle soirée."
  }, {
    date: "10/2019",
    comment: "J'aime leur saumon sauvage qui lui n'est pas rose mais pêche. On voit qu'il n'a pas ingurgité de colorants. Des vrais blinis. Je n'ai pas goûté à leurs spécialités style tarama à la truffe. Leur tarama nature est lui aussi sans colorants. Leur aquavit au cumin est une tuerie, dans le bon sens du terme."
  }, {
    date: "07/2019",
    comment: "Etant amatrice de saumon, j'encourage la découverte de ce lieu. Des plats variés, délicieux et originaux toujours autour du saumon, et un service plus que correct."
  }]
}, {
  name: "Dilia",
  id: 55,
  type: "Français",
  rate: 4.6,
  votes: 100,
  address: "1 Rue d'Eupatoria, 75020",
  phone: "09 53 56 24 14",
  arr: "20",
  openingHours: "12h-14h30 / 19h30-22h30",
  imageUrl: "https://admin-blogs.lalibre.be/app/uploads/sites/4/2018/08/Dilia.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.8686439,
  lng: 2.3862279,
  menuLink: "http://www.dilia.fr/?page_id=1798",
  foodlabreview: "Du menu en 4 plats agrémenté de petits amuse-bouches en passant par les vins de Toscane on se régale sincèrement. Les plats sont bien équilibrés avec des accords simples mais riches en bouche et des produits de qualité. Le cadre est agréable, le service naturel et la musique éclectique. On prend l'habitude d'y retourner.",
  reviews: [{
    date: "12/2019",
    comment: "Très bon restaurant italien dans ce quartier qui manque d'adresses de genre. On oublie les pizzas et autre, Dilia propose une cuisine créative et savoureuse."
  }, {
    date: "10/2019",
    comment: "Excellent repas, beaucoup de recherche et de travail pour proposer des associations détonantes. Ça vaut vraiment le détour ! Bravo et merci"
  }, {
    date: "07/2019",
    comment: "Très Bon! Raffiné! Que du fait maison mais ça a un prix. Menu de départ à 49 euros sans le vin mais c'est justifié. Spéciale dédicace à la vaisselle qui est à la fois sobre, authentique et raffiné. Et le service est impeccable."
  }]
}, {
  name: "An Di An Di",
  id: 56,
  type: "Français",
  rate: 4.6,
  votes: 100,
  address: "9 Rue du Liban, 75020",
  phone: "09 81 26 97 10",
  arr: "20",
  openingHours: "19h-22h30",
  imageUrl: "https://static.lexpress.fr/medias_10188/w_1000,c_fill,g_north/plat-signature-an-di-an-di-boeuf-sauce-pho_5216299.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8686776,
  lng: 2.3831888,
  foodlabreview: "Dans ce coin qui manque cruellement d'adresse dans le genre, An Di An Di est toujours le bon plan. Cuisine frenchie avec des supers twists vietnamiens ou plus largement asiatiques, on s'installe dans une petite salle sans prétention mais avec un service attentionné. Côté plats, déments accras de tofu soyeux avec sa mayonnaise (un must !), poulpe grillé et joue de boeuf à la citronnelle.",
  reviews: [{
    date: "12/2019",
    comment: "On est venu à 3 pour un repas d'anniversaire, et on a beaucoup aimé. Nos plats préférés : le porc farci aux aubergines, le boeuf épicé, et tous les desserts !"
  }, {
    date: "10/2019",
    comment: "Je recommande chaudement pour cette cuisine inventive et delicieuse entre la France et l'Asie, le service sympa et la déco délicate. C'est petit, il est donc conseillé de réserver."
  }, {
    date: "07/2019",
    comment: "Ce resto est pour nous une excellente surprise : la petite équipe (familiale) est adorable, les plats sont originaux, délicieux et (vraiment) faits maison, les prix sont totalement abordables pour cette qualité à Paris. On recommande à 100%. Ne manquez pas de tester les desserts, on a adoré le cheesecake (et aussi le sablé mousse au chocolat). Bravo à l’équipe, continuez comme ça !"
  }]
}, {
  name: "Le bistro des oies",
  id: 57,
  type: "Français",
  rate: 4.5,
  votes: 250,
  address: "2 Rue Marie et Louise, 75010",
  phone: "01 42 08 34 86",
  arr: "10",
  openingHours: "12h-14h30 / 19h-23h",
  imageUrl: "https://uniiti.com/images/shops/slides/6fe8b0e55c2485057651e51117ab2271c2d4dddd.jpeg",
  price: "€€",
  price_digit: 2,
  lat: 48.8718848,
  lng: 2.3673579,
  menuLink: "https://lebistrodesoies.fr/fr/services",
  foodlabreview: "Une ambiance conviviale et chaleureuse dûe en grande partie à son patron jovial et de bon conseil. Une belle carte des vins et un choix infini de plats typiquement français goûteux. En entrée : escargots, poulpe frais, foies de volailles rosés à souhait. En plat : confit et magret de canard, boeuf d'aubrac aux cuissons maîtrisées. Il y a aussi des choix végétariens.",
  reviews: [{
    date: "12/2019",
    comment: "Que dire de l’accueil ? Toujours souriant et chaleureux. Que dire de la cuisine ? Des classiques parfois oubliés et toujours préparés avec générosité et saveur. Que dire des vins ? Des découvertes à déguster avec ou sans modération. En conclusion : allez-y les yeux fermés et la fleur à la fourchette."
  }, {
    date: "10/2019",
    comment: "Génial. Cuisine authentique, lieu chaleureux et personnel très sympa. Prix cohérents."
  }, {
    date: "07/2019",
    comment: "Excellent restaurant, tout est bon, fait maison avec des produits de qualité. L'équipe est au petit soin. Je recommande, je viens très souvent et je ne suis jamais déçu."
  }]
}, {
  name: "The Beans on Fire",
  id: 58,
  type: "Café",
  rate: 4.3,
  votes: 250,
  address: "7 Rue du Général Blaise, 75011",
  phone: "01 43 55 94 73",
  arr: "11",
  openingHours: "12h-21h",
  imageUrl: "https://fraeuleinanker.de/wp-content/uploads/2016/08/2-The-beans-on-fire-Sandwiches-b.jpg",
  imageUrl2: "http://4.bp.blogspot.com/-6tW7rUlkgM0/Vgv0QB36TpI/AAAAAAAANUc/AkFfiezIguM/s1600/IMG_20150929_135238.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8615741,
  lng: 2.3782561,
  foodlabreview: "Un bel endroit pour venir prendre un café, que ce soit le matin ou durant la journée. Le cadre est agréable avec le parc à côté, c'est reposant de prendre son café ou son petit-déjeuner en terrasse. Le staff est plutôt cool et les prix corrects. Les cafés sont fait sur place dans un énorme torréfacteur en cuivre, à voir ! Il y a un brunch très beau et bon et peu copieux.",
  reviews: [{
    date: "12/2019",
    comment: "Très bon spot pour venir prendre un café sur place ou à emporter. Très belle petite terrasse idéale quand il fait beau. Vous êtes éloignés des voitures et c’est tant mieux. Et le parc a deux pas est idéal pour envoyer votre progéniture jouer tandis que vous sirotez un café."
  }, {
    date: "10/2019",
    comment: "Très bon café. Endroit qui montre une vraie passion pour le café. À partir de 18h la carte changé et des plats, bières et vins y sont proposés. Je recommande le ceviche de légumes, on retrouve les vrais saveurs du Pérou."
  }, {
    date: "07/2019",
    comment: "Le café est très bon, sur place ou à emporter, la salle et la terrasse sont très agréables, comme l'ambiance musicale, et surtout le service est extrêmement sympathique et efficace. Il y a beaucoup de places assises pour ceux qui souhaitent travailler."
  }],
  award: {
    scroll: "fa-mug-hot",
    icon: "fas fa-mug-hot",
    description: "Le meilleur torréfacteur"
  }
}, {
  name: "Les Amis des Messina",
  id: 59,
  type: "Sicilien",
  rate: 4.4,
  votes: 1000,
  address: "81 Rue Réaumur, 75002",
  phone: "01 42 61 13 73",
  arr: "2",
  openingHours: "12h-15h30 / 19h-22h30",
  imageUrl: "https://sortir.telerama.fr/sites/tr_master/files/styles/m_plus_640x360/public/assets/images/place/74/25/5/originale.jpg?itok=nNojZ_jK",
  price: "€€",
  price_digit: 2,
  lat: 48.8668704,
  lng: 2.3482997,
  menuLink: "https://www.lesamisdesmessina.com/",
  foodlabreview: "Un petit paradis sicilien ! Cuisine du voyage, hospitalité, repas excellent et pour finir avec ces fameuses glaces pistache bacio, un régal. L'accueil est jovial et l'ambiance familiale, les serveurs d'une grande gentillesse. Une vraie cuisine italienne authentique comme là-bas, pleine de goût et de saveurs. Vous pouvez y aller les yeux fermés ! Goûtez le gâteau courgette, ricotta de la Mama, un délice. Prix très corrects.",
  reviews: [{
    date: "12/2019",
    comment: "Nous étions loin d'imaginer que l'on puisse prendre autant de plaisir dans ce restaurant sicilien. Le cadre est également très beau et reposant et le personnel est adorable."
  }, {
    date: "10/2019",
    comment: "La déco, de brique et de bois sous la verrière, renvoie une chaude atmosphère. Le service est souriant, sympathique, rapide et efficace. Quant à la cuisine, véritable cuisine sicilienne, dont la carte est renouvelée chaque jour, déborde d'imagination."
  }, {
    date: "07/2019",
    comment: "Une adresse dont on ne se lasse pas ! C'est bon, c'est frais, c'est bien servi ! Le lieu est joliment décoré. On est en Italie, chez la Mama, l espace d un déjeuner ! Le personnel est hyper sympa et on aime leur accent chantant ! La carte change assez souvent, pas de lassitude donc et toujours de belles surprises !"
  }]
}, {
  name: "Le Clint",
  id: 60,
  type: "Brunch",
  rate: 4,
  votes: 500,
  address: "174 Rue de la Roquette, 75011",
  phone: "01 73 71 51 55",
  arr: "11",
  openingHours: "9h-18h",
  imageUrl: "https://img3.parisbouge.com/RjuPFd8FhhJz9GCwPPvbYHQ7S0wEfzdDK8zOTNOPtLo/rs:fill:1200:800:1/g:ce/wm:1:soea:12:12:0.12/MWI4NDQ0YzAtMDQxMi00YzYyLTk2ZTctYTI1OTRmMGQ1N2M3LmpwZw.jpg",
  imageUrl2: "https://i0.wp.com/aunjourpres.fr/wp-content/uploads/2017/11/PA290070.jpg?resize=1080%2C810",
  price: "€€",
  price_digit: 2,
  lat: 48.8591592,
  lng: 2.3864681,
  menuLink: "http://www.clint-paris.fr/menus-carte/",
  foodlabreview: "Établissement très mignon et cosy. Le brunch est savoureux et les prix ne sont pas excessifs au vu des portions généreuses. Le Chai Latte est très réconfortant. Un bon brunch à base d'avocado toast, oeufs bénédictes au saumon et pancakes. Attention établissement très populaire, il faut souvent faire la queue pour avoir une place.",
  reviews: [{
    date: "12/2019",
    comment: "Restaurant de quartier dont on se ne lasse pas. Super cuisine et le personnel est adorable. On recommande et surtout on y retourne chaque semaine!"
  }, {
    date: "10/2019",
    comment: "Super découverte ! Les plats sont copieux et délicieux, notamment les pancakes que je recommande sincèrement ! Sinon, juste un peu d'attente le dimanche matin mais une fois installée, on oublie cela ! "
  }, {
    date: "07/2019",
    comment: "Superbe café, lieu très bien décoré et services au top. Ils servent à manger et à boire, les café lattés sont excellents!"
  }]
}, {
  name: "Le Manko",
  id: 61,
  type: "Péruvien",
  rate: 4.1,
  votes: 1000,
  address: "15 Avenue Montaigne, 75008",
  phone: "01 82 28 00 15",
  arr: "8",
  openingHours: "11h30-14h15 / 19h-2h",
  imageUrl: "https://www.infosbar.com/photo/art/grande/8922651-14145113.jpg?v=1455033802",
  price: "€€€",
  price_digit: 3,
  lat: 48.8655753,
  lng: 2.3030293,
  menuLink: "http://manko-paris.com/wp-content/uploads/2019/12/MENU_MANKO_EXTERIEUR-1.pdf",
  foodlabreview: "Tout en classe, fraîcheur et exotisme. Manko fait honneur au quartier dans lequel il s'est installé. Un accueil des plus chaleureux, une ambiance raffinée, moderne et intimiste qui a pour effet direct de vous mettre très a l'aise. La cuisine ouverte est un bonus qui ne dérange a aucun moment et entendre l'équipe s'exprimer en espagnol rajoute une dose d'authenticité. Les serveurs sont très disponible et à l'écoute sans jamais se montrer envahissants.",
  reviews: [{
    date: "12/2019",
    comment: "Le cadre est magnifique, l'ambiance chaleureuse. Un endroit idéale pour un anniversaire. En semaine plutôt calme, plus intime. Les plats sont délicieux, découverte de nouvelle saveurs ! Le service très satisfaisant."
  }, {
    date: "10/2019",
    comment: "Très bon accueil. De bons conseils pour les plats! Une déco de dingue et une ambiance de folie!!! Super lieu même pour juste un verre!"
  }, {
    date: "07/2019",
    comment: "Chic et de bon goût, ambiance tamisée en dorures contemporaines avec une pointe de prohibition. Bon dans l'assiette et le service est accueillant... Et super musique"
  }]
}, {
  name: "Le 975",
  id: 62,
  type: "Français",
  rate: 4.7,
  votes: 500,
  address: "25 Rue Guy Môquet, 75017",
  phone: "09 53 75 67 71",
  arr: "17",
  openingHours: "12h-14h30 / 19h30-22h30",
  imageUrl: "https://www.restofolio.fr/media/W1siZiIsIjIwMTYvMDgvMzEvOXExNjYxbWxybF8xNDEwMjgxOV8xMTA0OTcxMzg2MjYyODk1Xzc1NzkzOTczNDkwNjkxNTA4ODRfby5qcGciXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA0MCJdLFsicCIsInRodW1iIiwiMTI0MHgiXV0/14102819_1104971386262895_7579397349069150884_o.jpg?sha=ad543ee646beda37",
  imageUrl2: "https://i1.wp.com/www.le-975.com/wp-content/uploads/2015/11/poisson.jpg?fit=1200%2C800",
  price: "€€",
  price_digit: 2,
  lat: 48.8920597,
  lng: 2.322423,
  menuLink: "http://www.le-975.com/on-mange/",
  foodlabreview: "Une décoration simple mais soignée, une carte courte assurant des produits frais, des assiettes toutes très graphiques et des saveurs justes incroyables. Quant à la cuisson de la volaille, moelleuse et fondante, nous ne l'avions connue à ce niveau que dans les restaurants étoilés. Ajouté à tout ça un service souriant, chaleureux, très sympa et je ne vois pas comment vous convaincre davantage de vite réserver. ",
  reviews: [{
    date: "12/2019",
    comment: "Super accueil, super atmosphère, excellente nourriture pour un bon rapport qualité prix dans un lieu simple manquant peut être de chaleur dans la deco ! Prévoir de venir le midi et pas le soir car toujours blindé.. Vin proposé en osmose avec nos plats"
  }, {
    date: "10/2019",
    comment: "Les coquilles saint-Jacques étaient délicieuses et pour moi qui ne suis d'habitude pas trop dessert, le cheesecake à la mangue à la fin m'a marquée tellement il était bon. Les serveurs sont très sympas, en toute simplicité. Le 975 propose vraiment des produits de qualité, des assiettes joliment présentées pour des prix qui n'explosent pas"
  }, {
    date: "07/2019",
    comment: "Menu découverte à 39€ digne d'un étoilé, l'équipe est vraiment au top aussi, bonne ambiance, bon conseil sur le vin et des assiettes aussi délicieuses que bien dressées."
  }]
}, {
  name: "Dai Dai",
  id: 63,
  type: "Italien",
  rate: 4.5,
  votes: 250,
  address: "25 Rue Oberkampf, 75011",
  phone: null,
  arr: "11",
  openingHours: "12h-14h30 / 16h30-23h",
  imageUrl: "https://www.sortiraparis.com/images/80/87701/476333-dai-dai-paris-10-6.jpg",
  imageUrl2: "http://www.ofive.tv/wp-content/uploads/2018/04/313879-dai-dai-25-27-rue-oberkampf-75011-pari-article_diapo-1.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8635571,
  lng: 2.369366,
  menuLink: "http://www.dai-dai.fr/",
  foodlabreview: "Cadre très sympathique avec ce magnifique four qui trône en plein milieu de la salle. Service impeccable - les serveurs sont très sympas - et superbes pizzas. Les produit sélectionnés sont de grande qualité et niveau goût et quantité les salades proposées à la carte ne sont pas en reste.",
  reviews: [{
    date: "12/2019",
    comment: "Pizza excellente. Le service est aussi au top, les serveurs sont très agréables ! Je recommande :)"
  }, {
    date: "10/2019",
    comment: "C'était délicieux, les serveurs (surtout le barbu) sont adorables ! J'ai passé un très bon moment en plus de bien mangé"
  }, {
    date: "07/2019",
    comment: "Très bonnes pizza napolitaines. Les ingrédients sont bien sourcés ça se sent dans l'assiette. Les serveurs sont dynamiques et souriants. La déco est sympa. Je recommande. Petit plus: on peut réserver"
  }],
  award: {
    scroll: "fa-pizza-slice",
    icon: "fas fa-pizza-slice",
    description: "La meilleure pizza"
  }
}, {
  name: "Café Angelina",
  id: 64,
  type: "Café",
  rate: 4.3,
  votes: 6000,
  address: "226 Rue de Rivoli, 75001",
  phone: "01 42 60 82 00",
  arr: "1",
  openingHours: "8h30-19h30",
  imageUrl: "https://www.angelina-paris.fr/sites/default/files/pictures/ANGE_RIVOLI_CHOCOLAT_CHAUD_VERSION_TABLE-redim_0.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.8650898,
  lng: 2.3284434,
  foodlabreview: "Véritable institution à Rivoli, mythique pour son chocolat chaud dit 'Le Choc Africain' et son Mont Blanc 'Griotte'. Cadre magnifique style belle époque et service au top, malgré la file d’attente parfois très longue en week-end. Le secret est de s'y rendre avant 15h car l'enseigne est victime de son succès !",
  reviews: [{
    date: "12/2019",
    comment: "La nouvelle déclinaison à la pistache de son célèbre Mont Blanc est à déguster en priorité (de couleur verte sur la photo). Si vous préférez une pause gourmande sur place, vous serez plongez dans une cadre luxueux avec les décorations Belle Époque et la jolie vaisselle."
  }, {
    date: "10/2019",
    comment: "Étant allé pour les journées du Mont-blanc, ou certaines pâtisseries sont en édition limitée, j'ai beaucoup apprécié les produits et l'attente n'était pas longue à emporter. Le prix est assez élevé mais la qualité est là. La vendeuse était souriante et agréable, rien à redire."
  }, {
    date: "07/2019",
    comment: "Très bon moment passé dans cet établissement. Le chocolat est somptueux les pâtisseries également. Bémol pour le temps d'attente dehors et le prix un peu excessif même si on s'y attend compte tenu du lieu"
  }]
}, {
  name: "Ice Kube",
  id: 65,
  type: "Français",
  rate: 4.1,
  votes: 500,
  address: "5 Passage Ruelle, 75018",
  phone: "01 42 05 20 00",
  arr: "18",
  openingHours: "18h30-1h",
  imageUrl: "https://www.kubehotel-paris.com/_files/_media/37/Apres%20Restaurant/SHOOTING%20ZENCHEF%202019/Apres-restaurant-Kube-Paris-18eme.jpg",
  imageUrl2: "https://www.kubehotel-paris.com/_files/_media/37/Ice%20Bar/2019%202020/KUB_5833ae.jpg",
  price: "€€€",
  price_digit: 3,
  lat: 48.8865207,
  lng: 2.35881,
  menuLink: "https://www.kubehotel-paris.com/_files/_media/37/Apres%20Restaurant/Menu%20Automne%202019/CARTE_APRES_FR.pdf",
  foodlabreview: "Lieu extraordinaire, très original, coupure assurée hors du tumulte de la vie Parisienne. On a d'abord accès 30mn au bar glacé à -25° à l'étage avec une sélection de plusieurs cocktails, puis ensuite le restaurant 'Après' aussi époustouflant et dépaysant que le bar gelé par sa déco végétale exotique. Toute l'équipe du personnel est merveilleuse disponible. Cuisine raffinée, cet endroit est un vrai ravissement.",
  reviews: [{
    date: "12/2019",
    comment: "On a mangé une fois au restaurant, et plusieurs fois visité le bar de glace, une expérience qu'il est possible de renouveler plusieurs fois car le thème change tout les X temps. Un lieu qui fait toujours plaisirs aux personnes qui ne connaissent pas !"
  }, {
    date: "10/2019",
    comment: "Lieu d'exception où l'on mange bien dans une décoration sublime. Le personnel est très souriant. Le son du DJ est super. Lieu propre avec sa touche d'authenticité dans le bar Ice Kube qui fait de délicieux cocktails"
  }, {
    date: "07/2019",
    comment: "Nous avons été accueillis chaleureusement dans cet igloo et nous nous sommes régalés! Cuisine gourmande et étonnante!"
  }]
}, {
  name: "Abri Soba",
  id: 66,
  type: "Japonais",
  rate: 4.6,
  votes: 500,
  address: "10 Rue Saulnier, 75009",
  phone: "01 45 23 51 68",
  arr: "9",
  openingHours: "12h-14h / 19h-22h30",
  imageUrl: "http://le-polyedre.com/wp-content/uploads/2016/10/abri-soba-restaurant-paris-japon-7-1024x683.jpg",
  imageUrl2: "http://atelier-soba.com/wp-content/uploads/2017/11/cropped-Soba-froides.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8750429,
  lng: 2.3445439,
  foodlabreview: "Un délicieux restaurant, fidèle aux goûts du Japon. Les amoureux de la gastronomie japonaise y retrouveront les saveurs et la délicatesse du pays. Personnel très accueillant et attentif. Allez y en petit groupe pour goûter un maximum de tapas, les saveurs sont riches et les textures variées ! Mention spéciale pour le canard, la cuisson délicate lui donne un goût de foie gras. Gardez une petite place pour le dessert et goûter la crème brûlée au sarrasin, simple mais étonnant.",
  reviews: [{
    date: "12/2019",
    comment: "Le lieu est assez cosy et vous mangerez japonais une nourriture de très grande qualité. Mais soyez les premiers, les places sont « chères ». Pas de réservation possible mais vous ne le regretterez pas !"
  }, {
    date: "10/2019",
    comment: "Les soba sont des pâtes de sarrasin très consommées au Japon. Elles sont ici les stars de ce restaurant toujours blindé et qui ne prend pas de réservation. On mange au comptoir ou sur des tables étroites et serrées des soba mais aussi plusieurs autres spécialités japonaises."
  }, {
    date: "07/2019",
    comment: "C'est un vrai et typique restaurant japonais. Avec l'ambiance unique comme au pays. Les plats sont très bons et très raffinés. Il faut aller tôt, avant 19h si on veut une table car il y a peu de places. Le personnel est gentil, souriant et poli."
  }]
}, {
  name: "Pokawa",
  id: 67,
  type: "Poké",
  rate: 4.1,
  votes: 500,
  address: "36 Rue Poissonnière, 75002",
  phone: "01 40 26 38 85",
  arr: "2",
  openingHours: "12h-16h / 18h30-22h30",
  imageUrl: "https://static.youmiam.com/images/recipe/1500x1000/pokebowl-signature-saumon-mangue-1303407?placeholder=web_recipe&sig=41e3506e5ff69bc43e9d904e4f8f3956d11eef26&v3",
  price: "€€",
  price_digit: 2,
  lat: 48.8657478,
  lng: 2.3439625,
  menuLink: "https://pokawa.com/",
  foodlabreview: "Le meilleur poké de Paris. Les ingrédients sont de bonne qualité et leur succès est amplement mérité. Les bols sont très colorés, healthy et extrêmement apétissants. Le personnel est au petit soin : en livraison, on a toujours le droit à un mot gentil avec notre commande.",
  reviews: [{
    date: "12/2019",
    comment: "C'était excellent !! Amoureux des petit plats healthy colorés et gourmands, ce petit coin chaleureux est fait pour vous. Service au petit soin, à l'écoute, rapide, et l'ambiance est au top ! Leur playlist musicale est très sympa. Ps: je suis un gros mangeur et la tall size du super proteiné est bien rassasiante "
  }, {
    date: "10/2019",
    comment: "J'ai adoré ! D'abord l'équipe est super sympa et la nourriture est trop bonne ! Le pudding au coco et graine de chia une vrai tuerie ! Je vous le recommande sans hésiter et on y retournera bientôt !"
  }, {
    date: "07/2019",
    comment: "Parce que l'équipe est adorable, les produits frais et le pudding coco chia à mourir de bonheur, vous ne serez jamais déçu de ce restaurant ! Un service excellent et un repas excellent... Pour un prix très correct, je recommande !"
  }],
  award: {
    scroll: "fa-leaf",
    icon: "fas fa-leaf",
    description: "Le meilleur poké"
  }
}, {
  name: "Bontemps",
  id: 68,
  type: "Pâtisserie",
  rate: 4.5,
  votes: 250,
  address: "57 Rue de Bretagne, 75003",
  phone: "01 42 74 10 68",
  arr: "3",
  openingHours: "10h-19h30",
  imageUrl: "https://www.oubruncher.com/photos1/9967_1.jpg",
  imageUrl2: "http://glose.fr/wp-content/uploads/2017/07/patisserie-bontemps-11.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8638169,
  lng: 2.3606901,
  foodlabreview: "Agréable moment avec un service à l’écoute dans un lieu raffiné et élégant. Le chocolat chaud est très bon, léger, avec un arrière goût d’épices orientales. Les pâtisseries sont divines et le cadre enchanté. Que demander de mieux pour une pause sucrée. Mis à part le tarif un peu élevé, c'est un lieu hors du temps à recommander",
  reviews: [{
    date: "12/2019",
    comment: "Le lieu est ravissant décoré de fleurs fraîches, des petits fauteuils douillets... Un vrai cocon. J'ai pris un chocolat chaud divin, un Bontemps aux noisettes du piémont très léger et parfumé, un cake au citron de Sicile à se damner et une part de tarte aux figues avec un vrai goût de fruit de qualité."
  }, {
    date: "10/2019",
    comment: "Raffinement, originalité, de la pâtisserie haute couture, des créations que vous ne verrez jamais ailleurs car Fiona a le magnifique don d’allier l’esthétique au bon goût. Elle est entourée de sa sœur et de son mari qui sont aussi adorables!"
  }, {
    date: "07/2019",
    comment: "Gâteaux, tartes et thé délicieux. Dommage sur le cadre ne soit pas un peu plus cosy et les prix un peu mieux ajustés."
  }],
  award: {
    scroll: "fa-birthday-cake",
    icon: "fas fa-birthday-cake",
    description: "La meilleure pâtisserie"
  }
}, {
  name: "Sunny",
  id: 69,
  type: "Brunch",
  rate: 4.2,
  votes: 250,
  address: "84 Avenue Secrétan, 75019",
  phone: "01 42 06 44 21",
  arr: "19",
  openingHours: "8h-20h",
  imageUrl: "https://www.sortiraparis.com/images/80/86956/463756-brunch-du-cafe-52-a-l-hotel-grand-powers-21.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.878961,
  lng: 2.3781294,
  foodlabreview: "Juste en face des Buttes Chaumont, la terrasse du franco-californien Sunny est idéale l'été avant d'aller au parc. Pour bruncher, leurs oeufs bénédictes aux saumon sont une tuerie, les salades sont healthy et copieuses. Le service est correct et les plats sont frais, visuellement beaux et de qualité.",
  reviews: [{
    date: "12/2019",
    comment: "Ambiance et plats chaleureux. Service aux petits soins."
  }, {
    date: "10/2019",
    comment: "Lieu très chaleureux, idéal pour faire un brunch (samedi ou dimanche). Le serveur était très sympa."
  }, {
    date: "07/2019",
    comment: "Café dont le serveur est courtois et aimable très bien situé juste en face des butte chaumont ! Bistrot sympa !"
  }]
}, {
  name: "Les p'tites indécises",
  id: 70,
  type: "Français",
  rate: 4.1,
  votes: 500,
  address: "2 Rue des Trois Bornes, 75011",
  phone: "01 43 57 26 00",
  arr: "11",
  openingHours: "9h-2h",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/58/P1250194_Paris_XI_place_de_la_Fontaine-Timbaud_cafe_rwk.jpg",
  imageUrl2: "https://conceptualisthic.files.wordpress.com/2012/09/dsc_0206.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8664356,
  lng: 2.3721585,
  foodlabreview: "Aux P'tits Indécises l'ambiance est chaleureuse : le lieu est très lumineux, les serveurs sont sympathiques. C'est un petit havre de paix place Jean-Pierre Timbaud où il fait bon de venir bruncher le week-end ou pour boire un verre le soir.",
  reviews: [{
    date: "12/2019",
    comment: "Une cuisine exceptionnelle. Typiquement française tellement bonne que vous voudriez gouter tous les plats"
  }, {
    date: "10/2019",
    comment: "Lieu cosy, idéal pour un verre l'été en terrasse ou bien au chaud à l'intérieur lorsqu'il fait froid ! le boissons sont bonnes, les prix un peu élevés mais c'est habituel pour le quartier !"
  }, {
    date: "07/2019",
    comment: "Un restaurant très agréable, dans un endroit assez bucolique. Les plats sont justes délicieux et le service est très bien. On reviendra !"
  }]
}, {
  name: "L'Osteria Dell'Anima",
  id: 71,
  type: "Italien",
  rate: 4.5,
  votes: 250,
  address: "37 Rue Oberkampf, 75011",
  phone: "01 43 38 40 03",
  arr: "11",
  openingHours: "12h-14h30 / 19h30-23h15",
  imageUrl: "https://dxbowaj7shf9g.cloudfront.net/uploads/user_place/image/2755/large_20141222-pasta-making-vicky-wasik-50.jpg",
  imageUrl2: "https://i2.wp.com/www.milkandcardamom.com/wp-content/uploads/2014/08/Scallion-Pancakes-3.png?fit=1024%2C768&ssl=1",
  price: "€€",
  price_digit: 2,
  lat: 48.8639709,
  lng: 2.3704037,
  menuLink: "http://www.osteriadellanima.com/menu/",
  foodlabreview: "On pourrait presque louper cette petite perle rue Oberkampf tellement la façade est étroite ! Mais derrière se trouve de la cuisine italienne authentique et sans fioritures. Le restaurant ne contient que quelques places seulement, pour manger au calme en toute intimité, dans une ambiance feutrée. Il faut absolument réserver.",
  reviews: [{
    date: "12/2019",
    comment: "Peut-être le meilleur restaurant de pâtes italiennes de Paris ? Toute petite adresse, réservation quasi obligatoire. Accueil agréable et excellents produits. À ne pas manquer."
  }, {
    date: "10/2019",
    comment: "Excellent italien, pâtes fraîches et maison au top, attention mieux vaut réserver, peu de tables !"
  }, {
    date: "07/2019",
    comment: "Superbe carte, produits de très grande qualité.  Cuisine vraiment italienne, pas de pizzas, les pâtes sont faites maison. Attention restaurant très très petit."
  }]
}, {
  name: "Le café des Bains",
  id: 72,
  type: "Italien",
  rate: 4.2,
  votes: 100,
  address: "33 Rue des Blancs Manteaux, 75004",
  phone: "01 49 29 50 50",
  arr: "4",
  openingHours: "12h-14h30 / 18h30-22h30",
  imageUrl: "https://www.oubruncher.com/photos1/8458_6.jpg",
  imageUrl2: "https://www.oubruncher.com/photos1/x8458_4.jpg.pagespeed.ic.GE_tflcUcq.jpg",
  price: "€€",
  price_digit: 2,
  lat: 48.8593617,
  lng: 2.3556314,
  menuLink: "https://www.bainsdumarais.fr/carte-restaurant-paris",
  foodlabreview: "Un cadre très sympa et cosy bien placé : ce petit spa/hamman se trouve rue des blancs manteaux dans le Marais. Le personnel est très pro et explique toutes les recettes de leurs plats. Ces derniers sont étant des classiques mais avec une pointe d’originalité sur le choix des ingrédients. Mention spécial pour le risotto aux cèpes et le grand tortello ricotta épinards tomates et basilic.",
  reviews: [{
    date: "12/2019",
    comment: "Bon brunch entre amis ce midi, nous avions un peu de retard, les serveurs n'en n'ont pas tenu rigueur. Serveuse très aimable, accueillante, toujours à l'écoute. Prix correct 29e, décor très sympa dans beau quartier piéton. L'odeur est très agréable avec le hammam. Je recommande"
  }, {
    date: "10/2019",
    comment: "Diner avec ma moitié pour fêter nos 3 ans de mariage. Bonne première expérience, avec une facture plutôt raisonnable pour un cadre sympa. On a bien mangé même s'il y a avait un petit retard, rien de méchant."
  }, {
    date: "07/2019",
    comment: "Déco sympatique, bonne nourriture italienne. Possibilité d'avoir des réductions avec la Fourchette"
  }]
}]);

/***/ }),

/***/ "./constants/weekly-restaurant.js":
/*!****************************************!*\
  !*** ./constants/weekly-restaurant.js ***!
  \****************************************/
/*! exports provided: WEEKLY_RESTAURANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKLY_RESTAURANT", function() { return WEEKLY_RESTAURANT; });
const WEEKLY_RESTAURANT = {
  name: "Pontochoux",
  id: 26,
  type: "Japonais",
  rate: 4.6,
  votes: 250,
  address: "18 Rue du Pont aux Choux, 75003",
  phone: "09 86 70 77 00",
  arr: "3",
  openingHours: "13h30-18h",
  imageUrl2: "https://somanyparis.files.wordpress.com/2018/10/pontochoux-7.jpg",
  imageUrl: "https://somanyparis.files.wordpress.com/2018/10/pontochoux-6.jpg",
  price: "€",
  price_digit: 1,
  lat: 48.8613189,
  lng: 2.3650928,
  menuLink: "https://lacarte.menu/restaurants/paris/pontochoux",
  foodlabreview: "C'est bon, c'est frais, c'est copieux et c'est abordable. Que demander de plus ? En revanche ne comptez pas y rester des heures pour de longs debriefs. On mange (bien) et on part. La queue est là et on nous le dit, mais gentiment bien sûr !",
  reviews: [{
    date: "12/2019",
    comment: "Restaurant microscopique mais j'ai eu la chance de ne pas attendre le jour où j'y ai mangé. L'accueil et le lieu sont chaleureux. Et surtout, les plats sont délicieux ! Moi qui suis habituellement vite écoeurée par le curry japonais, là j'ai vraiment aimé. Il est savoureux, pas trop sucré et les accompagnements sont très bons aussi."
  }, {
    date: "10/2019",
    comment: "Le curry y est absolument délicieux. L'établissement à aussi de quoi manger pour les végétariens ce qui est un bon point."
  }, {
    date: "07/2019",
    comment: "L'accueil est chaleureux et agréable ! Le curry épicé comme il faut et la qualité des produits vous réchauffe l'estomac. Vivement une extension à Marseille. Vous êtes chanceux les parisiens d'avoir cette perle de restauration !"
  }],
  award: {
    scroll: "fa-award",
    icon: "fas fa-award",
    description: "Le restaurant de la semaine"
  }
};

/***/ }),

/***/ "./hooks/useWindowSize.js":
/*!********************************!*\
  !*** ./hooks/useWindowSize.js ***!
  \********************************/
/*! exports provided: useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWindowSize = () => {
  const isClient = false;

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  };

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // eslint-disable-next-line
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home */ "./components/home/index.js");
var _jsxFileName = "/Users/estellegresillon/Code/airbnb-redux/src/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
//import "../public/static/css/index.scss";
//import Header from "../components/common/header";
//import Home from "../components/home";
// import Restaurants from "../components/restaurants";
// import Detail from "../components/detail";
// import Awards from "../components/awards";
// import Contact from "../components/contact";
//const HomeContainer = () => {
//return (
// <>
//   <Header />
//   <Home />
{
  /* <Route exact path="/awards" component={Awards} />
  <Route exact path="/restaurants" component={Restaurants} />
  <Route exact path="/detail/:id" component={Detail} />
  <Route exact path="/contact" component={Contact} /> */
}
{}
/* </> */
//);
//};
//export default HomeContainer;
// ReactDOM.render(
//   <Provider >
//     <App />
//   </Provider>,
//   document.getElementById("app")
// );






const Page = () => __jsx(_components_home__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default()(_store_configureStore__WEBPACK_IMPORTED_MODULE_2__["store"])(Page));

/***/ }),

/***/ "./reducers/center-map-with-location.js":
/*!**********************************************!*\
  !*** ./reducers/center-map-with-location.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  if (state === undefined) {
    return null;
  }

  ;

  switch (action.type) {
    case "CENTER_MAP_WITH_LOCATION":
      return action.payload;

    default:
      return state;
  }

  ;
});
;

/***/ }),

/***/ "./reducers/restaurants-reducer.js":
/*!*****************************************!*\
  !*** ./reducers/restaurants-reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  if (state === undefined) {
    return [];
  }

  ;

  const sortByRate = restaurants => {
    const sortedByRate = [...restaurants].sort((a, b) => {
      if (a.rate < b.rate) return 1;
      if (a.rate > b.rate) return -1;
      return 0;
    });
    return sortedByRate;
  };

  switch (action.type) {
    case "SET_RESTAURANTS":
      return sortByRate(action.payload);

    default:
      return state;
  }

  ;
});
;

/***/ }),

/***/ "./reducers/search-restaurant-reducer.js":
/*!***********************************************!*\
  !*** ./reducers/search-restaurant-reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  if (state === undefined) {
    return null;
  }

  ;

  switch (action.type) {
    case "SEARCH_RESTAURANT":
      return action.payload;

    default:
      return state;
  }

  ;
});
;

/***/ }),

/***/ "./reducers/selected-restaurant-reducer.js":
/*!*************************************************!*\
  !*** ./reducers/selected-restaurant-reducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  if (state === undefined) {
    return null;
  }

  ;

  switch (action.type) {
    case "SELECT_RESTAURANT":
      return action.payload;

    default:
      return state;
  }

  ;
});
;

/***/ }),

/***/ "./reducers/sort-restaurants-reducer.js":
/*!**********************************************!*\
  !*** ./reducers/sort-restaurants-reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  if (state === undefined) {
    return [];
  }

  ;

  switch (action.type) {
    case "SORT_RESTAURANTS":
      return action.payload;

    default:
      return state;
  }

  ;
});
;

/***/ }),

/***/ "./reducers/toggle-map-reducer.js":
/*!****************************************!*\
  !*** ./reducers/toggle-map-reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  if (state === undefined) {
    return true;
  }

  ;

  switch (action.type) {
    case "TOGGLE_MAP":
      return !action.payload;

    default:
      return state;
  }

  ;
});
;

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_restaurants_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/restaurants-reducer */ "./reducers/restaurants-reducer.js");
/* harmony import */ var _reducers_selected_restaurant_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/selected-restaurant-reducer */ "./reducers/selected-restaurant-reducer.js");
/* harmony import */ var _reducers_search_restaurant_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/search-restaurant-reducer */ "./reducers/search-restaurant-reducer.js");
/* harmony import */ var _reducers_sort_restaurants_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/sort-restaurants-reducer */ "./reducers/sort-restaurants-reducer.js");
/* harmony import */ var _reducers_center_map_with_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/center-map-with-location */ "./reducers/center-map-with-location.js");
/* harmony import */ var _reducers_toggle_map_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/toggle-map-reducer */ "./reducers/toggle-map-reducer.js");







const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  restaurants: _reducers_restaurants_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectedRestaurant: _reducers_selected_restaurant_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  searchedRestaurant: _reducers_search_restaurant_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  sortedRestaurants: _reducers_sort_restaurants_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  showMap: _reducers_toggle_map_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  selectedLocation: _reducers_center_map_with_location__WEBPACK_IMPORTED_MODULE_5__["default"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/estellegresillon/Code/airbnb-redux/src/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map