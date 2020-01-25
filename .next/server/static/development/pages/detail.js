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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/weak-map.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es7.weak-map.of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js");
__webpack_require__(/*! ../modules/es7.weak-map.from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").WeakMap;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.weak-map.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.from.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.weak-map.of.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
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
/* harmony import */ var _constants_restaurants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/restaurants */ "./src/constants/restaurants.js");

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

/***/ "./src/components/app-layout.jsx":
/*!***************************************!*\
  !*** ./src/components/app-layout.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/header/header */ "./src/components/common/header/header.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AppLayout = props => {
  return __jsx("div", null, __jsx(_common_header_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./src/components/common/header/header.jsx":
/*!*************************************************!*\
  !*** ./src/components/common/header/header.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/menu-items */ "./src/constants/menu-items.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = () => __jsx("div", {
  className: "header"
}, __jsx("div", {
  className: "header-left"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/"
}, __jsx("div", {
  className: "foodlab-logo"
}, __jsx("i", {
  className: "fas fa-award"
}), "Foodlab"))), __jsx("div", {
  className: "header-right"
}, _constants_menu_items__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"].map(link => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a //activeClassName="selected-menu-item"
  //className="menu-link"
  , {
    href: link.path,
    key: link.name
  }, __jsx("div", null, link.name));
})));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/detail/bottom-section/bottom-section.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/detail/bottom-section/bottom-section.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BottomSection = ({
  similarRestaurants,
  handleNavigation
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, similarRestaurants.length > 0 && __jsx("div", {
  className: "bottom-section"
}, __jsx("div", {
  className: "bottom-section-title"
}, "Restaurants similaires :"), __jsx("div", {
  className: "similar-restaurants-wrapper"
}, similarRestaurants.map(simRest => {
  return __jsx("div", {
    className: "similar-restaurant-card",
    key: simRest.id,
    onClick: () => handleNavigation("next-page", simRest.id)
  }, __jsx("div", {
    className: "similar-restaurant-description"
  }, __jsx("div", {
    className: "similar-restaurant-card-name"
  }, simRest.name), __jsx("div", {
    className: "similar-restaurant-card-rate"
  }, simRest.rate, "/5 (", simRest.votes, "+ votes)"), __jsx("div", {
    className: "similar-restaurant-card-address"
  }, simRest.address)), __jsx("div", {
    className: "similar-restaurant-image"
  }, __jsx("img", {
    src: simRest.imageUrl,
    alt: "similar-restaurant"
  })));
}))));

/* harmony default export */ __webpack_exports__["default"] = (BottomSection);

/***/ }),

/***/ "./src/components/detail/bottom-section/index.js":
/*!*******************************************************!*\
  !*** ./src/components/detail/bottom-section/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bottom_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom-section */ "./src/components/detail/bottom-section/bottom-section.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _bottom_section__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/detail/detail.jsx":
/*!******************************************!*\
  !*** ./src/components/detail/detail.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _pop_in__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pop-in */ "./src/components/detail/pop-in/index.js");
/* harmony import */ var _top_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-section */ "./src/components/detail/top-section/index.js");
/* harmony import */ var _middle_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middle-section */ "./src/components/detail/middle-section/index.js");
/* harmony import */ var _bottom_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bottom-section */ "./src/components/detail/bottom-section/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer */ "./src/components/detail/footer/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Detail = props => {
  const {
    setRestaurants,
    restaurants,
    router
  } = props;
  const {
    0: restaurant,
    1: setRestaurant
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: hasSeenSuggestion,
    1: setHasSeenSuggestion
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: similarRestaurants,
    1: setSimilarRestaurants
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const nextRestaurantRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const previousRestaurantRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const detailPageTop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const listedRestaurants = router.query.listedRestaurants;

  const setNavigation = restaurantList => {
    let previous;
    let next;
    restaurantList.forEach((val, i) => {
      if (val.id.toString() === router.query.id) {
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

  const scrollToTop = () => {
    detailPageTop.current.scrollIntoView();
  }; // if a user arrives on the pageId directly 
  // he doesn't get the restaurantS or listedRestaurantS objects in the props


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!router.query.restaurant) {
      setRestaurants();
    }
  }, [router.query.restaurant, setRestaurants]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (router.query.listedRestaurants) {
      setNavigation(router.query.listedRestaurants);
    } else {
      setNavigation(restaurants);
    }

    ;

    if (router.query.restaurant) {
      setRestaurant(router.query.restaurant);
      const filterByType = [...restaurants].filter(val => {
        if (val.type && val.name !== router.query.restaurant.name) {
          return val.type === router.query.restaurant.type;
        } else return null;
      });
      setSimilarRestaurants(filterByType.slice(0, 9));
    } else {
      const detailRestaurant = [...restaurants].filter(val => {
        if (val.id) {
          return val.id.toString() === router.query.id;
        } else return null;
      });
      setRestaurant(detailRestaurant[0]);
      const filterByType = [...restaurants].filter(val => {
        if (val.type && val.name !== detailRestaurant[0].name) {
          return val.type === detailRestaurant[0].type;
        } else return null;
      });
      setSimilarRestaurants(filterByType.slice(0, 9));
    }

    ; // eslint-disable-next-line
  }, [router.query.restaurant, restaurants, router.query.id]);

  const handleKeyDown = e => {
    // 37 arrow left / 39 arrow right
    if (e.keyCode === 37) {
      if (previousRestaurantRef.current) {
        const id = previousRestaurantRef.current;
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: `/detail/${id}`,
          query: {
            listedRestaurants
          }
        }, `/detail/${id}`);
      }

      ;
    } else if (e.keyCode === 39) {
      if (nextRestaurantRef.current) {
        const id = nextRestaurantRef.current;
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: `/detail/${id}`,
          query: {
            listedRestaurants
          }
        }, `/detail/${id}`);
      }

      ;
    }

    ;
    scrollToTop();
  };

  const handleNavigation = (direction, id) => {
    if (direction === "left") {
      if (previousRestaurantRef.current) {
        const id = previousRestaurantRef.current;
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: `/detail/${id}`,
          query: {
            listedRestaurants
          }
        }, `/detail/${id}`);
      }

      ;
    } else if (direction === "next-page") {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
        pathname: `/detail/${id}`,
        query: {
          listedRestaurants
        }
      });
    } else if (direction === "right") {
      if (nextRestaurantRef.current) {
        const id = nextRestaurantRef.current;
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: `/detail/${id}`,
          query: {
            listedRestaurants
          }
        }, `/detail/${id}`);
      }

      ;
    }

    ;
    scrollToTop();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true); // eslint-disable-next-line
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const disclaimer = localStorage.getItem('has_seen_suggestion');
    disclaimer ? setHasSeenSuggestion(true) : setHasSeenSuggestion(false);
  }, []);
  console.log(router.query);
  return restaurant ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "detail-page-wrapper"
  }, __jsx(_pop_in__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setHasSeenSuggestion: setHasSeenSuggestion,
    hasSeenSuggestion: hasSeenSuggestion
  }), __jsx(_top_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    history: next_router__WEBPACK_IMPORTED_MODULE_3___default.a,
    restaurant: restaurant,
    location: router,
    detailPageTop: detailPageTop
  }), __jsx(_middle_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    location: router,
    restaurant: restaurant
  }), __jsx(_bottom_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    similarRestaurants: similarRestaurants,
    handleNavigation: handleNavigation
  })), __jsx(_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    handleNavigation: handleNavigation,
    previousRestaurantRef: previousRestaurantRef,
    nextRestaurantRef: nextRestaurantRef,
    hasSeenSuggestion: hasSeenSuggestion
  })) : __jsx("div", null, "no restaurant corresponding");
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    setRestaurants: _actions__WEBPACK_IMPORTED_MODULE_4__["setRestaurants"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Detail)));

/***/ }),

/***/ "./src/components/detail/footer/footer.jsx":
/*!*************************************************!*\
  !*** ./src/components/detail/footer/footer.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = props => {
  const {
    previousRestaurantRef,
    nextRestaurantRef,
    handleNavigation,
    hasSeenSuggestion
  } = props;
  return __jsx("div", {
    className: "detail-page-footer"
  }, previousRestaurantRef.current && __jsx("div", {
    className: `footer-button-left ${!hasSeenSuggestion ? "footer-button-shiny" : ""}`,
    onClick: () => handleNavigation("left")
  }, __jsx("i", {
    className: "fas fa-chevron-left"
  })), __jsx("div", {
    className: "footer-text"
  }), nextRestaurantRef.current && __jsx("div", {
    className: `footer-button-right ${!hasSeenSuggestion ? "footer-button-shiny" : ""}`,
    onClick: () => handleNavigation("right")
  }, __jsx("i", {
    className: "fas fa-chevron-right"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/detail/footer/index.js":
/*!***********************************************!*\
  !*** ./src/components/detail/footer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/components/detail/footer/footer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/detail/index.js":
/*!****************************************!*\
  !*** ./src/components/detail/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail */ "./src/components/detail/detail.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _detail__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// import React from "react";
// import { useWindowSize } from "../../hooks/useWindowSize";
// import Detail from "./detail";
// import DetailMobile from "./detail-mobile";
// const DetailView = props => {
//   const windowSize = useWindowSize();
//   return windowSize.width > 728 ? (
//     <Detail {...props} /> 
//   ) : <DetailMobile {...props} />;
// };
// export default DetailView;


/***/ }),

/***/ "./src/components/detail/middle-section/index.js":
/*!*******************************************************!*\
  !*** ./src/components/detail/middle-section/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middle_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middle-section */ "./src/components/detail/middle-section/middle-section.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _middle_section__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/detail/middle-section/middle-section.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/detail/middle-section/middle-section.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MiddleSection = ({
  location,
  restaurant
}) => __jsx("div", {
  key: location.pathname,
  className: "middle-section"
}, __jsx("div", {
  className: "detail-page-reviews"
}, __jsx("div", {
  className: "foodlab-review"
}, __jsx("div", {
  className: "foodlab-review-title"
}, "Avis FoodLab : "), restaurant.foodlabreview ? `« ${restaurant.foodlabreview} »` : "Rédaction en cours"), __jsx("ul", {
  className: "customers-reviews"
}, restaurant.reviews ? restaurant.reviews.map((review, i) => {
  return __jsx("li", {
    key: i
  }, __jsx("div", {
    className: "review-date"
  }, "Review utilisateur ", i + 1, " - le ", review.date, " :"), __jsx("div", {
    className: "review-comment"
  }, "\"", review.comment, "\""));
}) : __jsx("li", null, "Pas de reviews enregistr\xE9es"))), __jsx("div", {
  className: "detail-page-cropped-img",
  style: {
    backgroundImage: `url(${restaurant.imageUrl2 || restaurant.imageUrl})`
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (MiddleSection);

/***/ }),

/***/ "./src/components/detail/pop-in/index.js":
/*!***********************************************!*\
  !*** ./src/components/detail/pop-in/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pop_in__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-in */ "./src/components/detail/pop-in/pop-in.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _pop_in__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/detail/pop-in/pop-in.jsx":
/*!*************************************************!*\
  !*** ./src/components/detail/pop-in/pop-in.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PopIn = ({
  hasSeenSuggestion,
  setHasSeenSuggestion
}) => {
  const handleCloseSuggestion = () => {
    setHasSeenSuggestion(true);
    localStorage.setItem('has_seen_suggestion', true);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !hasSeenSuggestion && __jsx("div", {
    className: "popin-suggestion-navigation",
    onClick: () => handleCloseSuggestion()
  }, __jsx("div", {
    className: "popin-text"
  }, "Utilisez les fl\xE8ches ci-dessous ou celles de votre clavier pour naviguer entre les restaurants."), __jsx("i", {
    className: "fas fa-times"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PopIn);

/***/ }),

/***/ "./src/components/detail/top-section/index.js":
/*!****************************************************!*\
  !*** ./src/components/detail/top-section/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _top_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-section */ "./src/components/detail/top-section/top-section.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _top_section__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/detail/top-section/top-section.jsx":
/*!***********************************************************!*\
  !*** ./src/components/detail/top-section/top-section.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TopSection = ({
  history,
  restaurant,
  detailPageTop,
  location
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  className: "button-go-back",
  onClick: () => history.back()
}, __jsx("i", {
  className: "fas fa-chevron-left"
}), " Retour"), restaurant.award && __jsx("div", {
  className: "detail-page-award"
}, restaurant.award.description), __jsx("div", {
  className: "top-section"
}, __jsx("div", {
  className: "detail-page-big-img",
  ref: detailPageTop,
  style: {
    backgroundImage: `url(${restaurant.imageUrl || restaurant.imageUrl2})`
  }
}), __jsx("div", {
  key: location.pathname,
  className: "detail-page-content"
}, __jsx("div", {
  className: "detail-page-title"
}, restaurant.name), __jsx("ul", {
  className: "detail-page-resume"
}, __jsx("li", null, __jsx("span", {
  className: "bolder"
}, "Type :"), " ", restaurant.type, " (", restaurant.price, ")"), __jsx("li", null, __jsx("span", {
  className: "bolder"
}, "Note : "), __jsx("span", {
  className: "resume-rate"
}, restaurant.rate, "/5 "), "(+ de ", restaurant.votes, " votes Google)"), __jsx("li", null, restaurant.address), __jsx("li", null, __jsx("span", {
  className: "bolder"
}, "Horaires :"), " ", restaurant.openingHours), __jsx("li", null, __jsx("span", {
  className: "bolder"
}, "T\xE9l\xE9phone :"), " ", restaurant.phone || "Non communiqué"), restaurant.menuLink && __jsx("li", null, __jsx("a", {
  href: restaurant.menuLink,
  target: "_blank",
  className: "see-menu",
  rel: "noopener noreferrer"
}, "Voir le menu"))))));

/* harmony default export */ __webpack_exports__["default"] = (TopSection);

/***/ }),

/***/ "./src/constants/menu-items.js":
/*!*************************************!*\
  !*** ./src/constants/menu-items.js ***!
  \*************************************/
/*! exports provided: MENU_ITEMS, MENU_ITEMS_MOBILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS_MOBILE", function() { return MENU_ITEMS_MOBILE; });
const MENU_ITEMS = [{
  name: "Le classement",
  path: "/restaurants"
}, {
  name: "Les primés",
  path: "/awards"
}, {
  name: "Nous écrire",
  path: "/contact"
}];
const MENU_ITEMS_MOBILE = [{
  name: "Home",
  path: "/"
}, {
  name: "Le classement",
  path: "/restaurants"
}, {
  name: "Les primés",
  path: "/awards"
}, {
  name: "Nous écrire",
  path: "/contact"
}];

/***/ }),

/***/ "./src/constants/restaurants.js":
/*!**************************************!*\
  !*** ./src/constants/restaurants.js ***!
  \**************************************/
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

/***/ "./src/pages/detail.jsx":
/*!******************************!*\
  !*** ./src/pages/detail.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_app_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/app-layout */ "./src/components/app-layout.jsx");
/* harmony import */ var _components_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/detail */ "./src/components/detail/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Page = ({
  id
}) => __jsx(_components_app_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_components_detail__WEBPACK_IMPORTED_MODULE_2__["default"], {
  id: id
}));

Page.getInitialProps = async ({
  query
}) => {
  return {
    id: query.id
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./src/pages/detail.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/estellegresillon/Code/airbnb-redux/src/pages/detail.jsx */"./src/pages/detail.jsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map