webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./src/components/detail/detail.jsx":
/*!******************************************!*\
  !*** ./src/components/detail/detail.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _pop_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pop-in */ "./src/components/detail/pop-in/index.js");
/* harmony import */ var _top_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-section */ "./src/components/detail/top-section/index.js");
/* harmony import */ var _middle_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middle-section */ "./src/components/detail/middle-section/index.js");
/* harmony import */ var _bottom_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bottom-section */ "./src/components/detail/bottom-section/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer */ "./src/components/detail/footer/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var Detail = function Detail(props) {
  var setRestaurants = props.setRestaurants,
      restaurants = props.restaurants,
      match = props.match,
      router = props.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      restaurant = _useState[0],
      setRestaurant = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasSeenSuggestion = _useState2[0],
      setHasSeenSuggestion = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      similarRestaurants = _useState3[0],
      setSimilarRestaurants = _useState3[1];

  var nextRestaurantRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var previousRestaurantRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var detailPageTop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var listedRestaurants = router.query.listedRestaurants;

  var setNavigation = function setNavigation(restaurantList) {
    var previous;
    var next;
    restaurantList.forEach(function (val, i) {
      if (val.id.toString() === match.params.id) {
        previous = restaurantList[i - 1];
        next = restaurantList[i + 1];
      }

      ;
    });

    if (previous) {
      previousRestaurantRef.current = previous.id;
    } else previousRestaurantRef.current = null;

    if (next) {
      nextRestaurantRef.current = next.id;
    } else nextRestaurantRef.current = null;
  };

  var scrollToTop = function scrollToTop() {
    detailPageTop.current.scrollIntoView();
  }; // if a user arrives on the pageId directly 
  // he doesn't get the restaurantS or listedRestaurantS objects in the props


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!router.query.restaurant) {
      setRestaurants();
    }
  }, [router.query.restaurant, setRestaurants]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (router.query.listedRestaurants) {
      setNavigation(router.query.listedRestaurants);
    } else {
      setNavigation(restaurants);
    }

    ;

    if (router.query.restaurant) {
      setRestaurant(router.query.restaurant);

      var filterByType = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(restaurants).filter(function (val) {
        if (val.type && val.name !== router.query.restaurant.name) {
          return val.type === router.query.restaurant.type;
        } else return null;
      });

      setSimilarRestaurants(filterByType.slice(0, 9));
    } else {
      var detailRestaurant = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(restaurants).filter(function (val) {
        if (val.id) {
          return val.id.toString() === match.params.id;
        } else return null;
      });

      setRestaurant(detailRestaurant[0]);

      var _filterByType = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(restaurants).filter(function (val) {
        if (val.type && val.name !== detailRestaurant[0].name) {
          return val.type === detailRestaurant[0].type;
        } else return null;
      });

      setSimilarRestaurants(_filterByType.slice(0, 9));
    }

    ; // eslint-disable-next-line
  }, [router.query.restaurant, restaurants, match.params.id]);

  var handleKeyDown = function handleKeyDown(e) {
    // 37 arrow left / 39 arrow right
    if (e.keyCode === 37) {
      if (previousRestaurantRef.current) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
          pathname: "/detail/".concat(previousRestaurantRef.current),
          query: {
            listedRestaurants: listedRestaurants
          }
        });
      }

      ;
    } else if (e.keyCode === 39) {
      if (nextRestaurantRef.current) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
          pathname: "/detail/".concat(nextRestaurantRef.current),
          query: {
            listedRestaurants: listedRestaurants
          }
        });
      }

      ;
    }

    ;
    scrollToTop();
  };

  var handleNavigation = function handleNavigation(direction, id) {
    if (direction === "left") {
      if (previousRestaurantRef.current) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
          pathname: "/detail/".concat(previousRestaurantRef.current),
          query: {
            listedRestaurants: listedRestaurants
          }
        });
      }

      ;
    } else if (direction === "next-page") {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        pathname: "/detail/".concat(id),
        query: {
          listedRestaurants: listedRestaurants
        }
      });
    } else if (direction === "right") {
      if (nextRestaurantRef.current) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
          pathname: "/detail/".concat(nextRestaurantRef.current),
          query: {
            listedRestaurants: listedRestaurants
          }
        });
      }

      ;
    }

    ;
    scrollToTop();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("keydown", handleKeyDown, true);
    return function () {
      return window.removeEventListener("keydown", handleKeyDown, true);
    }; // eslint-disable-next-line
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var disclaimer = localStorage.getItem('has_seen_suggestion');
    disclaimer ? setHasSeenSuggestion(true) : setHasSeenSuggestion(false);
  }, []);
  return restaurant ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "detail-page-wrapper"
  }, __jsx(_pop_in__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setHasSeenSuggestion: setHasSeenSuggestion,
    hasSeenSuggestion: hasSeenSuggestion
  }), __jsx(_top_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    history: next_router__WEBPACK_IMPORTED_MODULE_4___default.a,
    restaurant: restaurant,
    location: router,
    detailPageTop: detailPageTop
  }), __jsx(_middle_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    location: router,
    restaurant: restaurant
  }), __jsx(_bottom_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
    similarRestaurants: similarRestaurants,
    handleNavigation: handleNavigation
  })), __jsx(_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleNavigation: handleNavigation,
    previousRestaurantRef: previousRestaurantRef,
    nextRestaurantRef: nextRestaurantRef,
    hasSeenSuggestion: hasSeenSuggestion
  })) : __jsx("div", null, "no restaurant corresponding");
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    setRestaurants: _actions__WEBPACK_IMPORTED_MODULE_5__["setRestaurants"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Detail)));

/***/ })

})
//# sourceMappingURL=detail.js.464a51efed62b4c42201.hot-update.js.map