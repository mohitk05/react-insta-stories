(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("Stories", ["React"], factory);
	else if(typeof exports === 'object')
		exports["Stories"] = factory(require("react"));
	else
		root["Stories"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/puff.svg":
/*!*****************************!*\
  !*** ./src/assets/puff.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["styles"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: "44",
    height: "44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#fff"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
});

/***/ }),

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

var Stories_1 = __importDefault(__webpack_require__(/*! ./../context/Stories */ "./src/context/Stories.ts"));

var Progress_1 = __importDefault(__webpack_require__(/*! ./../context/Progress */ "./src/context/Progress.ts"));

var Story_1 = __importDefault(__webpack_require__(/*! ./Story */ "./src/components/Story.tsx"));

var ProgressArray_1 = __importDefault(__webpack_require__(/*! ./ProgressArray */ "./src/components/ProgressArray.tsx"));

function default_1() {
  var _react_1$useState = react_1.useState(0),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      currentId = _react_1$useState2[0],
      setCurrentId = _react_1$useState2[1];

  var _react_1$useState3 = react_1.useState(true),
      _react_1$useState4 = _slicedToArray(_react_1$useState3, 2),
      pause = _react_1$useState4[0],
      setPause = _react_1$useState4[1];

  var _react_1$useState5 = react_1.useState(true),
      _react_1$useState6 = _slicedToArray(_react_1$useState5, 2),
      bufferAction = _react_1$useState6[0],
      setBufferAction = _react_1$useState6[1];

  var _react_1$useState7 = react_1.useState(0),
      _react_1$useState8 = _slicedToArray(_react_1$useState7, 2),
      videoDuration = _react_1$useState8[0],
      setVideoDuration = _react_1$useState8[1];

  var mousedownId = react_1.useRef();
  var isMounted = react_1.useRef(true);

  var _react_1$useContext = react_1.useContext(Global_1["default"]),
      width = _react_1$useContext.width,
      height = _react_1$useContext.height,
      loop = _react_1$useContext.loop,
      currentIndex = _react_1$useContext.currentIndex,
      isPaused = _react_1$useContext.isPaused,
      keyboardNavigation = _react_1$useContext.keyboardNavigation,
      preventDefault = _react_1$useContext.preventDefault,
      _react_1$useContext$s = _react_1$useContext.storyContainerStyles,
      storyContainerStyles = _react_1$useContext$s === void 0 ? {} : _react_1$useContext$s;

  var _react_1$useContext2 = react_1.useContext(Stories_1["default"]),
      stories = _react_1$useContext2.stories;

  react_1.useEffect(function () {
    if (typeof currentIndex === 'number') {
      if (currentIndex >= 0 && currentIndex < stories.length) {
        setCurrentIdWrapper(function () {
          return currentIndex;
        });
      } else {
        console.error('Index out of bounds. Current index was set to value more than the length of stories array.', currentIndex);
      }
    }
  }, [currentIndex]);
  react_1.useEffect(function () {
    if (typeof isPaused === 'boolean') {
      setPause(isPaused);
    }
  }, [isPaused]);
  react_1.useEffect(function () {
    var isClient = typeof window !== 'undefined' && window.document;

    if (isClient && typeof keyboardNavigation === 'boolean' && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]); // Cleanup mounted state - for issue #130 (https://github.com/mohitk05/react-insta-stories/issues/130)

  react_1.useEffect(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      previous();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  var toggleState = function toggleState(action, bufferAction) {
    setPause(action === 'pause');
    setBufferAction(!!bufferAction);
  };

  var setCurrentIdWrapper = function setCurrentIdWrapper(callback) {
    setCurrentId(callback);
    toggleState('pause', true);
  };

  var previous = function previous() {
    setCurrentIdWrapper(function (prev) {
      return prev > 0 ? prev - 1 : prev;
    });
  };

  var next = function next() {
    if (isMounted.current) {
      if (loop) {
        updateNextStoryIdForLoop();
      } else {
        updateNextStoryId();
      }
    }
  };

  var updateNextStoryIdForLoop = function updateNextStoryIdForLoop() {
    setCurrentIdWrapper(function (prev) {
      return (prev + 1) % stories.length;
    });
  };

  var updateNextStoryId = function updateNextStoryId() {
    setCurrentIdWrapper(function (prev) {
      if (prev < stories.length - 1) return prev + 1;
      return prev;
    });
  };

  var debouncePause = function debouncePause(e) {
    e.preventDefault();
    mousedownId.current = setTimeout(function () {
      toggleState('pause');
    }, 200);
  };

  var mouseUp = function mouseUp(type) {
    return function (e) {
      e.preventDefault();
      mousedownId.current && clearTimeout(mousedownId.current);

      if (pause) {
        toggleState('play');
      } else {
        type === 'next' ? next() : previous();
      }
    };
  };

  var getVideoDuration = function getVideoDuration(duration) {
    setVideoDuration(duration * 1000);
  };

  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign(Object.assign({}, styles.container), storyContainerStyles), {
      width: width,
      height: height
    })
  }, react_1["default"].createElement(Progress_1["default"].Provider, {
    value: {
      bufferAction: bufferAction,
      videoDuration: videoDuration,
      currentId: currentId,
      pause: pause,
      next: next
    }
  }, react_1["default"].createElement(ProgressArray_1["default"], null)), react_1["default"].createElement(Story_1["default"], {
    action: toggleState,
    bufferAction: bufferAction,
    playState: pause,
    story: stories[currentId],
    getVideoDuration: getVideoDuration
  }), !preventDefault && react_1["default"].createElement("div", {
    style: styles.overlay
  }, react_1["default"].createElement("div", {
    style: {
      width: '50%',
      zIndex: 999
    },
    onTouchStart: debouncePause,
    onTouchEnd: mouseUp('previous'),
    onMouseDown: debouncePause,
    onMouseUp: mouseUp('previous')
  }), react_1["default"].createElement("div", {
    style: {
      width: '50%',
      zIndex: 999
    },
    onTouchStart: debouncePause,
    onTouchEnd: mouseUp('next'),
    onMouseDown: debouncePause,
    onMouseUp: mouseUp('next')
  })));
}

exports["default"] = default_1;
var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#111',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    height: 'inherit',
    width: 'inherit',
    display: 'flex'
  }
};

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var Header = function Header(_ref) {
  var profileImage = _ref.profileImage,
      heading = _ref.heading,
      subheading = _ref.subheading;
  return react_1["default"].createElement("div", {
    style: styles.main
  }, profileImage && react_1["default"].createElement("img", {
    style: styles.img,
    src: profileImage
  }), react_1["default"].createElement("span", {
    style: styles.text
  }, react_1["default"].createElement("p", {
    style: styles.heading
  }, heading), react_1["default"].createElement("p", {
    style: styles.subheading
  }, subheading)));
};

var styles = {
  main: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
  },
  heading: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    marginBottom: 2
  },
  subheading: {
    fontSize: '0.6rem',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0
  }
};
exports["default"] = Header;

/***/ }),

/***/ "./src/components/Progress.tsx":
/*!*************************************!*\
  !*** ./src/components/Progress.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var ProgressWrapper_1 = __importDefault(__webpack_require__(/*! ./ProgressWrapper */ "./src/components/ProgressWrapper.tsx"));

var Progress_1 = __importDefault(__webpack_require__(/*! ./../context/Progress */ "./src/context/Progress.ts"));

exports["default"] = function (props) {
  var _react_1$useContext = react_1.useContext(Progress_1["default"]),
      bufferAction = _react_1$useContext.bufferAction,
      pause = _react_1$useContext.pause;

  var getProgressStyle = function getProgressStyle(_ref) {
    var active = _ref.active;

    switch (active) {
      case 2:
        return {
          width: '100%'
        };

      case 1:
        return {
          transform: "scaleX(".concat(props.count / 100, ")")
        };

      case 0:
        return {
          width: 0
        };

      default:
        return {
          width: 0
        };
    }
  };

  var width = props.width,
      active = props.active;
  return react_1["default"].createElement(ProgressWrapper_1["default"], {
    width: width,
    pause: pause,
    bufferAction: bufferAction
  }, react_1["default"].createElement("div", {
    style: Object.assign(Object.assign({}, getProgressStyle({
      active: active
    })), styles.inner)
  }));
};

var styles = {
  inner: {
    background: '#fff',
    height: '100%',
    maxWidth: '100%',
    borderRadius: 2,
    transformOrigin: 'center left',
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitPerspective: 1000,
    MozPerspective: 1000,
    msPerspective: 1000,
    perspective: 1000
  }
};

/***/ }),

/***/ "./src/components/ProgressArray.tsx":
/*!******************************************!*\
  !*** ./src/components/ProgressArray.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Progress_1 = __importDefault(__webpack_require__(/*! ./Progress */ "./src/components/Progress.tsx"));

var Progress_2 = __importDefault(__webpack_require__(/*! ./../context/Progress */ "./src/context/Progress.ts"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

var Stories_1 = __importDefault(__webpack_require__(/*! ./../context/Stories */ "./src/context/Stories.ts"));

exports["default"] = function () {
  var _react_1$useState = react_1.useState(0),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      count = _react_1$useState2[0],
      setCount = _react_1$useState2[1];

  var _react_1$useContext = react_1.useContext(Progress_2["default"]),
      currentId = _react_1$useContext.currentId,
      next = _react_1$useContext.next,
      videoDuration = _react_1$useContext.videoDuration,
      pause = _react_1$useContext.pause;

  var _react_1$useContext2 = react_1.useContext(Global_1["default"]),
      defaultInterval = _react_1$useContext2.defaultInterval,
      onStoryEnd = _react_1$useContext2.onStoryEnd,
      onStoryStart = _react_1$useContext2.onStoryStart,
      onAllStoriesEnd = _react_1$useContext2.onAllStoriesEnd;

  var _react_1$useContext3 = react_1.useContext(Stories_1["default"]),
      stories = _react_1$useContext3.stories;

  react_1.useEffect(function () {
    setCount(0);
  }, [currentId, stories]);
  react_1.useEffect(function () {
    if (!pause) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    }

    return function () {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [currentId, pause]);
  var animationFrameId = react_1.useRef();
  var countCopy = count;

  var incrementCount = function incrementCount() {
    if (countCopy === 0) storyStartCallback();
    setCount(function (count) {
      var interval = getCurrentInterval();
      countCopy = count + 100 / (interval / 1000 * 60);
      return count + 100 / (interval / 1000 * 60);
    });

    if (countCopy < 100) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    } else {
      storyEndCallback();

      if (currentId === stories.length - 1) {
        allStoriesEndCallback();
      }

      cancelAnimationFrame(animationFrameId.current);
      next();
    }
  };

  var storyStartCallback = function storyStartCallback() {
    onStoryStart && onStoryStart(currentId, stories[currentId]);
  };

  var storyEndCallback = function storyEndCallback() {
    onStoryEnd && onStoryEnd(currentId, stories[currentId]);
  };

  var allStoriesEndCallback = function allStoriesEndCallback() {
    onAllStoriesEnd && onAllStoriesEnd(currentId, stories);
  };

  var getCurrentInterval = function getCurrentInterval() {
    if (stories[currentId].type === 'video') return videoDuration;
    if (typeof stories[currentId].duration === 'number') return stories[currentId].duration;
    return defaultInterval;
  };

  return react_1["default"].createElement("div", {
    style: styles.progressArr
  }, stories.map(function (_, i) {
    return react_1["default"].createElement(Progress_1["default"], {
      key: i,
      count: count,
      width: 1 / stories.length,
      active: i === currentId ? 1 : i < currentId ? 2 : 0
    });
  }));
};

var styles = {
  progressArr: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    flexWrap: 'row',
    position: 'absolute',
    width: '98%',
    padding: 5,
    paddingTop: 7,
    alignSelf: 'center',
    zIndex: 1001,
    filter: 'drop-shadow(0 1px 8px #222)'
  }
};

/***/ }),

/***/ "./src/components/ProgressWrapper.tsx":
/*!********************************************!*\
  !*** ./src/components/ProgressWrapper.tsx ***!
  \********************************************/
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var ProgressWrapper = function ProgressWrapper(props) {
  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign({}, styles.progress), getProgressWrapperStyle(props))
  }, props.children);
};

var getProgressWrapperStyle = function getProgressWrapperStyle(_ref) {
  var width = _ref.width,
      pause = _ref.pause,
      bufferAction = _ref.bufferAction;
  return {
    width: "".concat(width * 100, "%"),
    opacity: pause && !bufferAction ? 0 : 1
  };
};

var styles = {
  progress: {
    height: 2,
    maxWidth: '100%',
    background: '#555',
    margin: 2,
    borderRadius: 2,
    transition: 'opacity 400ms ease-in-out'
  }
};
exports["default"] = ProgressWrapper;

/***/ }),

/***/ "./src/components/SeeMore.tsx":
/*!************************************!*\
  !*** ./src/components/SeeMore.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

function seeMore(props) {
  var SeeMoreContent = props.seeMoreContent;
  var CustomCollapsed = props.customCollapsed;

  var _react_1$useContext = react_1.useContext(Global_1["default"]),
      keyboardNavigation = _react_1$useContext.keyboardNavigation;

  react_1.useEffect(function () {
    var isClient = typeof window !== 'undefined' && window.document;

    if (isClient && typeof keyboardNavigation === 'boolean' && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]);

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      props.toggleMore(true);
    } else if (e.key === 'ArrowDown' || e.key === 'Escape') {
      e.preventDefault();
      props.toggleMore(false);
    }
  };

  return props.showContent ? react_1["default"].createElement("div", {
    style: styles.seeMoreExpanded
  }, react_1["default"].createElement(SeeMoreContent, {
    close: function close() {
      return props.toggleMore(false);
    }
  })) : CustomCollapsed ? react_1["default"].createElement(CustomCollapsed, {
    action: props.action,
    toggleMore: props.toggleMore
  }) : react_1["default"].createElement("div", {
    style: styles.seeMore,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      props.toggleMore(true);
    }
  }, react_1["default"].createElement("span", {
    style: styles.seeMoreIcon
  }, "\u2303"), react_1["default"].createElement("span", {
    style: styles.seeMoreText
  }, "See more"));
}

exports["default"] = seeMore;
var styles = {
  seeMore: {
    height: "10vh",
    background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 0
  },
  seeMoreExpanded: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    zIndex: 99999
  },
  seeMoreText: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.1em",
    marginBottom: "2.2vh",
    textTransform: "capitalize",
    opacity: "1",
    fontSize: "0.8em",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreIcon: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.2em",
    marginBottom: "0.4vh",
    opacity: "1",
    filter: "drop-shadow(0 0 5px black)",
    textTransform: "capitalize",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreClose: {
    position: "absolute",
    filter: "drop-shadow(0 3px 2px #ccc)",
    right: "0.5rem",
    top: "0.5rem",
    fontSize: "1.5rem",
    opacity: "0.7",
    padding: "1rem"
  }
};

/***/ }),

/***/ "./src/components/Spinner.tsx":
/*!************************************!*\
  !*** ./src/components/Spinner.tsx ***!
  \************************************/
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var puff_svg_1 = __importDefault(__webpack_require__(/*! ./../assets/puff.svg */ "./src/assets/puff.svg"));

var Spinner = function Spinner() {
  return react_1["default"].createElement(puff_svg_1["default"], null);
};

exports["default"] = Spinner;

/***/ }),

/***/ "./src/components/Story.tsx":
/*!**********************************!*\
  !*** ./src/components/Story.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

var Story = function Story(props) {
  var globalContext = react_1.useContext(Global_1["default"]);
  var width = globalContext.width,
      height = globalContext.height,
      loader = globalContext.loader,
      header = globalContext.header,
      storyStyles = globalContext.storyStyles;

  var rendererMessageHandler = function rendererMessageHandler(type, data) {
    switch (type) {
      case 'UPDATE_VIDEO_DURATION':
        props.getVideoDuration(data.duration);
        return {
          ack: 'OK'
        };
    }
  };

  var getStoryContent = function getStoryContent() {
    var InnerContent = props.story.content;
    var config = {
      width: width,
      height: height,
      loader: loader,
      header: header,
      storyStyles: storyStyles
    };
    return react_1["default"].createElement(InnerContent, {
      action: props.action,
      isPaused: props.playState,
      story: props.story,
      config: config,
      messageHandler: rendererMessageHandler
    });
  };

  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign({}, styles.story), {
      width: width,
      height: height
    })
  }, getStoryContent());
};

var styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
    alignItems: "center"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};
exports["default"] = Story;

/***/ }),

/***/ "./src/context/Global.ts":
/*!*******************************!*\
  !*** ./src/context/Global.ts ***!
  \*******************************/
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
exports.initialContext = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

exports.initialContext = {
  defaultInterval: 4000,
  width: 360,
  height: 640
};
var GlobalContext = react_1["default"].createContext(exports.initialContext);
exports["default"] = GlobalContext;

/***/ }),

/***/ "./src/context/Progress.ts":
/*!*********************************!*\
  !*** ./src/context/Progress.ts ***!
  \*********************************/
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

exports["default"] = react_1["default"].createContext({
  currentId: 0,
  videoDuration: 0,
  bufferAction: false,
  pause: false,
  next: function next() {}
});

/***/ }),

/***/ "./src/context/Stories.ts":
/*!********************************!*\
  !*** ./src/context/Stories.ts ***!
  \********************************/
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
exports.initialContext = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

exports.initialContext = {
  stories: []
};
var StoriesContext = react_1["default"].createContext(exports.initialContext);
exports["default"] = StoriesContext;

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithSeeMore = exports.WithHeader = void 0;

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Container_1 = __importDefault(__webpack_require__(/*! ./components/Container */ "./src/components/Container.tsx"));

var Global_1 = __importDefault(__webpack_require__(/*! ./context/Global */ "./src/context/Global.ts"));

var Stories_1 = __importDefault(__webpack_require__(/*! ./context/Stories */ "./src/context/Stories.ts"));

var renderers_1 = __webpack_require__(/*! ./util/renderers */ "./src/util/renderers.tsx");

var index_1 = __webpack_require__(/*! ./renderers/index */ "./src/renderers/index.ts");

var withHeader_1 = __importDefault(__webpack_require__(/*! ./renderers/wrappers/withHeader */ "./src/renderers/wrappers/withHeader.tsx"));

var withSeeMore_1 = __importDefault(__webpack_require__(/*! ./renderers/wrappers/withSeeMore */ "./src/renderers/wrappers/withSeeMore.tsx"));

var ReactInstaStories = function ReactInstaStories(props) {
  var renderers = props.renderers ? props.renderers.concat(index_1.renderers) : index_1.renderers;
  var context = {
    width: props.width,
    height: props.height,
    loader: props.loader,
    header: props.header,
    storyContainerStyles: props.storyContainerStyles,
    storyStyles: props.storyStyles,
    loop: props.loop,
    defaultInterval: props.defaultInterval,
    isPaused: props.isPaused,
    currentIndex: props.currentIndex,
    onStoryStart: props.onStoryStart,
    onStoryEnd: props.onStoryEnd,
    onAllStoriesEnd: props.onAllStoriesEnd,
    keyboardNavigation: props.keyboardNavigation,
    preventDefault: props.preventDefault
  };

  var _react_1$useState = react_1.useState({
    stories: generateStories(props.stories, renderers)
  }),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      stories = _react_1$useState2[0],
      setStories = _react_1$useState2[1];

  react_1.useEffect(function () {
    setStories({
      stories: generateStories(props.stories, renderers)
    });
  }, [props.stories, props.renderers]);
  return react_1["default"].createElement(Global_1["default"].Provider, {
    value: context
  }, react_1["default"].createElement(Stories_1["default"].Provider, {
    value: stories
  }, react_1["default"].createElement(Container_1["default"], null)));
};

var generateStories = function generateStories(stories, renderers) {
  return stories.map(function (s) {
    var story = {};

    if (typeof s === 'string') {
      story.url = s;
      story.type = 'image';
    } else if (_typeof(s) === 'object') {
      story = Object.assign(story, s);
    }

    var renderer = renderers_1.getRenderer(story, renderers);
    story.originalContent = story.content;
    story.content = renderer;
    return story;
  });
};

ReactInstaStories.defaultProps = {
  width: 360,
  height: 640,
  defaultInterval: 4000
};
exports.WithHeader = withHeader_1["default"];
exports.WithSeeMore = withSeeMore_1["default"];
exports["default"] = ReactInstaStories;

/***/ }),

/***/ "./src/renderers/AutoPlayContent.tsx":
/*!*******************************************!*\
  !*** ./src/renderers/AutoPlayContent.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

exports.renderer = function (props) {
  React.useEffect(function () {
    props.action('play');
  }, [props.story]);
  var Content = props.story.originalContent;
  return React.createElement(Content, Object.assign({}, props));
};

exports.tester = function (story) {
  return {
    condition: !!story.content,
    priority: 2
  };
};

exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/Default.tsx":
/*!***********************************!*\
  !*** ./src/renderers/Default.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

exports.renderer = function (_ref) {
  var story = _ref.story,
      action = _ref.action;
  React.useEffect(function () {
    action('play');
  }, [story]);
  return React.createElement("div", {
    style: styles.storyContent
  }, React.createElement("p", {
    style: styles.text
  }, "This story could not be loaded."));
};

var styles = {
  storyContent: {
    width: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  text: {
    textAlign: 'center',
    color: 'white',
    width: '90%',
    margin: 'auto'
  }
};

exports.tester = function () {
  return {
    condition: true,
    priority: 1
  };
};

exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/Image.tsx":
/*!*********************************!*\
  !*** ./src/renderers/Image.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

var Spinner_1 = __importDefault(__webpack_require__(/*! ../components/Spinner */ "./src/components/Spinner.tsx"));

var withHeader_1 = __importDefault(__webpack_require__(/*! ./wrappers/withHeader */ "./src/renderers/wrappers/withHeader.tsx"));

var withSeeMore_1 = __importDefault(__webpack_require__(/*! ./wrappers/withSeeMore */ "./src/renderers/wrappers/withSeeMore.tsx"));

exports.renderer = function (_ref) {
  var story = _ref.story,
      action = _ref.action,
      isPaused = _ref.isPaused,
      config = _ref.config;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  var width = config.width,
      height = config.height,
      loader = config.loader,
      storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});

  var imageLoaded = function imageLoaded() {
    setLoaded(true);
    action('play');
  };

  return React.createElement(withHeader_1["default"], {
    story: story,
    globalHeader: config.header
  }, React.createElement(withSeeMore_1["default"], {
    story: story,
    action: action
  }, React.createElement("div", null, React.createElement("img", {
    style: computedStyles,
    src: story.url,
    onLoad: imageLoaded
  }), !loaded && React.createElement("div", {
    style: {
      width: width,
      height: height,
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1["default"], null)))));
};

var styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};

exports.tester = function (story) {
  return {
    condition: !story.content && (!story.type || story.type === 'image'),
    priority: 2
  };
};

exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/Video.tsx":
/*!*********************************!*\
  !*** ./src/renderers/Video.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

var Spinner_1 = __importDefault(__webpack_require__(/*! ../components/Spinner */ "./src/components/Spinner.tsx"));

var withHeader_1 = __importDefault(__webpack_require__(/*! ./wrappers/withHeader */ "./src/renderers/wrappers/withHeader.tsx"));

var withSeeMore_1 = __importDefault(__webpack_require__(/*! ./wrappers/withSeeMore */ "./src/renderers/wrappers/withSeeMore.tsx"));

exports.renderer = function (_ref) {
  var story = _ref.story,
      action = _ref.action,
      isPaused = _ref.isPaused,
      config = _ref.config,
      messageHandler = _ref.messageHandler;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      muted = _React$useState4[0],
      setMuted = _React$useState4[1];

  var width = config.width,
      height = config.height,
      loader = config.loader,
      storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});
  var vid = React.useRef(null);
  React.useEffect(function () {
    if (vid.current) {
      if (isPaused) {
        vid.current.pause();
      } else {
        vid.current.play()["catch"](function () {});
      }
    }
  }, [isPaused]);

  var onWaiting = function onWaiting() {
    action("pause", true);
  };

  var onPlaying = function onPlaying() {
    action("play", true);
  };

  var videoLoaded = function videoLoaded() {
    messageHandler("UPDATE_VIDEO_DURATION", {
      duration: vid.current.duration
    });
    setLoaded(true);
    vid.current.play().then(function () {
      action("play");
    })["catch"](function () {
      setMuted(true);
      vid.current.play()["finally"](function () {
        action("play");
      });
    });
  };

  var mute = function mute() {
    !muted ? setMuted(true) : setMuted(false);
  };

  var muteButtonText = muted ? "Unmute" : "Mute";
  return React.createElement(withHeader_1["default"], {
    story: story,
    globalHeader: config.header
  }, React.createElement(withSeeMore_1["default"], {
    story: story,
    action: action
  }, React.createElement("div", {
    style: styles.videoContainer
  }, React.createElement("div", {
    style: styles.buttonsContainer
  }, React.createElement("button", {
    onClick: mute
  }, muteButtonText), isPaused ? React.createElement("button", {
    onClick: onPlaying
  }, "Play") : React.createElement("button", {
    onClick: onWaiting
  }, "Pause")), React.createElement("video", {
    ref: vid,
    style: computedStyles,
    src: story.url,
    controls: false,
    onLoadedData: videoLoaded,
    playsInline: true,
    onWaiting: onWaiting,
    onPlaying: onPlaying,
    muted: muted,
    autoPlay: true,
    "webkit-playsinline": "true"
  }), !loaded && React.createElement("div", {
    style: {
      width: width,
      height: height,
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1["default"], null)))));
};

var styles = {
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  videoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonsContainer: {
    position: "absolute",
    top: "24px",
    right: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    zIndex: 1000,
    height: "128px"
  }
};

exports.tester = function (story) {
  return {
    condition: story.type === "video",
    priority: 2
  };
};

exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/index.ts":
/*!********************************!*\
  !*** ./src/renderers/index.ts ***!
  \********************************/
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
exports.renderers = void 0;

var Image_1 = __importDefault(__webpack_require__(/*! ./Image */ "./src/renderers/Image.tsx"));

var Video_1 = __importDefault(__webpack_require__(/*! ./Video */ "./src/renderers/Video.tsx"));

var Default_1 = __importDefault(__webpack_require__(/*! ./Default */ "./src/renderers/Default.tsx"));

var AutoPlayContent_1 = __importDefault(__webpack_require__(/*! ./AutoPlayContent */ "./src/renderers/AutoPlayContent.tsx"));

exports.renderers = [Image_1["default"], Video_1["default"], AutoPlayContent_1["default"], Default_1["default"]];

/***/ }),

/***/ "./src/renderers/wrappers/withHeader.tsx":
/*!***********************************************!*\
  !*** ./src/renderers/wrappers/withHeader.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var Header_1 = __importDefault(__webpack_require__(/*! ./../../components/Header */ "./src/components/Header.tsx"));

var withHeader = function withHeader(_ref) {
  var story = _ref.story,
      globalHeader = _ref.globalHeader,
      children = _ref.children;
  return react_1["default"].createElement(react_1["default"].Fragment, null, children, story.header && react_1["default"].createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 20,
      zIndex: 19
    }
  }, _typeof(story) === "object" ? globalHeader ? globalHeader(story.header) : react_1["default"].createElement(Header_1["default"], {
    heading: story.header.heading,
    subheading: story.header.subheading,
    profileImage: story.header.profileImage
  }) : null));
};

exports["default"] = withHeader;

/***/ }),

/***/ "./src/renderers/wrappers/withSeeMore.tsx":
/*!************************************************!*\
  !*** ./src/renderers/wrappers/withSeeMore.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var SeeMore_1 = __importDefault(__webpack_require__(/*! ./../../components/SeeMore */ "./src/components/SeeMore.tsx"));

var withSeeMore = function withSeeMore(_ref) {
  var story = _ref.story,
      action = _ref.action,
      customCollapsed = _ref.customCollapsed,
      children = _ref.children;

  var _react_1$useState = react_1.useState(false),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      showMore = _react_1$useState2[0],
      setShowMore = _react_1$useState2[1];

  var toggleMore = function toggleMore(show) {
    action(show ? 'pause' : 'play');
    setShowMore(show);
  };

  var CollapsedComponent = SeeMore_1["default"];
  return react_1["default"].createElement(react_1["default"].Fragment, null, children, story.seeMore && react_1["default"].createElement("div", {
    style: {
      position: "absolute",
      margin: "auto",
      bottom: showMore ? 'unset' : 0,
      zIndex: 9999,
      width: "100%",
      height: showMore ? '100%' : 'auto'
    }
  }, react_1["default"].createElement(CollapsedComponent, {
    action: action,
    toggleMore: toggleMore,
    showContent: showMore,
    seeMoreContent: story.seeMore,
    customCollapsed: customCollapsed || story.seeMoreCollapsed
  })));
};

exports["default"] = withSeeMore;

/***/ }),

/***/ "./src/util/renderers.tsx":
/*!********************************!*\
  !*** ./src/util/renderers.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRenderer = void 0;

exports.getRenderer = function (story, renderers) {
  var probable = renderers.map(function (r) {
    return Object.assign(Object.assign({}, r), {
      testerResult: r.tester(story)
    });
  }).filter(function (r) {
    return r.testerResult.condition;
  });
  probable.sort(function (a, b) {
    return b.testerResult.priority - a.testerResult.priority;
  });
  return probable[0].renderer;
};

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvYXNzZXRzL3B1ZmYuc3ZnIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQXJyYXkudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc1dyYXBwZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9TZWVNb3JlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1N0b3J5LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvR2xvYmFsLnRzIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29udGV4dC9Qcm9ncmVzcy50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvU3Rvcmllcy50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9BdXRvUGxheUNvbnRlbnQudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL0RlZmF1bHQudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL0ltYWdlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9WaWRlby50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aFNlZU1vcmUudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvdXRpbC9yZW5kZXJlcnMudHN4Iiwid2VicGFjazovL1N0b3JpZXMvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcIlJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJwcm9wcyIsInJlYWN0XzEiLCJjdXJyZW50SWQiLCJzZXRDdXJyZW50SWQiLCJwYXVzZSIsInNldFBhdXNlIiwiYnVmZmVyQWN0aW9uIiwic2V0QnVmZmVyQWN0aW9uIiwidmlkZW9EdXJhdGlvbiIsInNldFZpZGVvRHVyYXRpb24iLCJtb3VzZWRvd25JZCIsImlzTW91bnRlZCIsIkdsb2JhbF8xIiwid2lkdGgiLCJoZWlnaHQiLCJsb29wIiwiY3VycmVudEluZGV4IiwiaXNQYXVzZWQiLCJrZXlib2FyZE5hdmlnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3J5Q29udGFpbmVyU3R5bGVzIiwiU3Rvcmllc18xIiwic3RvcmllcyIsImxlbmd0aCIsInNldEN1cnJlbnRJZFdyYXBwZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJpc0NsaWVudCIsIndpbmRvdyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImUiLCJrZXkiLCJwcmV2aW91cyIsIm5leHQiLCJ0b2dnbGVTdGF0ZSIsImFjdGlvbiIsImNhbGxiYWNrIiwicHJldiIsInVwZGF0ZU5leHRTdG9yeUlkRm9yTG9vcCIsInVwZGF0ZU5leHRTdG9yeUlkIiwiZGVib3VuY2VQYXVzZSIsInNldFRpbWVvdXQiLCJtb3VzZVVwIiwidHlwZSIsImNsZWFyVGltZW91dCIsImdldFZpZGVvRHVyYXRpb24iLCJkdXJhdGlvbiIsInN0eWxlIiwiY29udGFpbmVyIiwiUHJvZ3Jlc3NfMSIsIlByb3ZpZGVyIiwidmFsdWUiLCJQcm9ncmVzc0FycmF5XzEiLCJTdG9yeV8xIiwicGxheVN0YXRlIiwic3RvcnkiLCJvdmVybGF5IiwiekluZGV4Iiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwiZXhwb3J0cyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiSGVhZGVyIiwicHJvZmlsZUltYWdlIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJtYWluIiwiaW1nIiwic3JjIiwidGV4dCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5SaWdodCIsImZpbHRlciIsImJvcmRlciIsImZvbnRTaXplIiwiY29sb3IiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iLCJnZXRQcm9ncmVzc1N0eWxlIiwiYWN0aXZlIiwidHJhbnNmb3JtIiwiY291bnQiLCJQcm9ncmVzc1dyYXBwZXJfMSIsImlubmVyIiwibWF4V2lkdGgiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJXZWJraXRCYWNrZmFjZVZpc2liaWxpdHkiLCJNb3pCYWNrZmFjZVZpc2liaWxpdHkiLCJtc0JhY2tmYWNlVmlzaWJpbGl0eSIsImJhY2tmYWNlVmlzaWJpbGl0eSIsIldlYmtpdFBlcnNwZWN0aXZlIiwiTW96UGVyc3BlY3RpdmUiLCJtc1BlcnNwZWN0aXZlIiwicGVyc3BlY3RpdmUiLCJzZXRDb3VudCIsIlByb2dyZXNzXzIiLCJkZWZhdWx0SW50ZXJ2YWwiLCJvblN0b3J5RW5kIiwib25TdG9yeVN0YXJ0Iiwib25BbGxTdG9yaWVzRW5kIiwiYW5pbWF0aW9uRnJhbWVJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImluY3JlbWVudENvdW50IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjb3VudENvcHkiLCJzdG9yeVN0YXJ0Q2FsbGJhY2siLCJpbnRlcnZhbCIsImdldEN1cnJlbnRJbnRlcnZhbCIsInN0b3J5RW5kQ2FsbGJhY2siLCJhbGxTdG9yaWVzRW5kQ2FsbGJhY2siLCJwcm9ncmVzc0FyciIsIm1hcCIsIl8iLCJpIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiYWxpZ25TZWxmIiwiUHJvZ3Jlc3NXcmFwcGVyIiwicHJvZ3Jlc3MiLCJnZXRQcm9ncmVzc1dyYXBwZXJTdHlsZSIsImNoaWxkcmVuIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJzZWVNb3JlIiwiU2VlTW9yZUNvbnRlbnQiLCJzZWVNb3JlQ29udGVudCIsIkN1c3RvbUNvbGxhcHNlZCIsImN1c3RvbUNvbGxhcHNlZCIsInRvZ2dsZU1vcmUiLCJzaG93Q29udGVudCIsInNlZU1vcmVFeHBhbmRlZCIsImNsb3NlIiwib25DbGljayIsInN0b3BQcm9wYWdhdGlvbiIsInNlZU1vcmVJY29uIiwic2VlTW9yZVRleHQiLCJib3R0b20iLCJ0b3AiLCJsZWZ0IiwiYm94U2l6aW5nIiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsInRleHRUcmFuc2Zvcm0iLCJzZWVNb3JlQ2xvc2UiLCJyaWdodCIsIlNwaW5uZXIiLCJwdWZmX3N2Z18xIiwiU3RvcnkiLCJnbG9iYWxDb250ZXh0IiwibG9hZGVyIiwiaGVhZGVyIiwic3RvcnlTdHlsZXMiLCJyZW5kZXJlck1lc3NhZ2VIYW5kbGVyIiwiZGF0YSIsImFjayIsImdldFN0b3J5Q29udGVudCIsIklubmVyQ29udGVudCIsImNvbnRlbnQiLCJjb25maWciLCJtZXNzYWdlSGFuZGxlciIsIm92ZXJmbG93Iiwic3RvcnlDb250ZW50IiwibWF4SGVpZ2h0IiwiR2xvYmFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJTdG9yaWVzQ29udGV4dCIsIlJlYWN0SW5zdGFTdG9yaWVzIiwicmVuZGVyZXJzIiwiY29uY2F0IiwiaW5kZXhfMSIsImNvbnRleHQiLCJnZW5lcmF0ZVN0b3JpZXMiLCJzZXRTdG9yaWVzIiwiQ29udGFpbmVyXzEiLCJzIiwidXJsIiwiT2JqZWN0IiwiYXNzaWduIiwicmVuZGVyZXIiLCJyZW5kZXJlcnNfMSIsIm9yaWdpbmFsQ29udGVudCIsImRlZmF1bHRQcm9wcyIsIndpdGhIZWFkZXJfMSIsIndpdGhTZWVNb3JlXzEiLCJSZWFjdCIsInVzZUVmZmVjdCIsIkNvbnRlbnQiLCJjb25kaXRpb24iLCJwcmlvcml0eSIsInRlc3RlciIsInVzZVN0YXRlIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiY29tcHV0ZWRTdHlsZXMiLCJpbWFnZUxvYWRlZCIsImdsb2JhbEhlYWRlciIsIm9uTG9hZCIsIlNwaW5uZXJfMSIsIm11dGVkIiwic2V0TXV0ZWQiLCJ2aWQiLCJ1c2VSZWYiLCJwbGF5Iiwib25XYWl0aW5nIiwib25QbGF5aW5nIiwidmlkZW9Mb2FkZWQiLCJ0aGVuIiwibXV0ZSIsIm11dGVCdXR0b25UZXh0IiwidmlkZW9Db250YWluZXIiLCJidXR0b25zQ29udGFpbmVyIiwicmVmIiwiY29udHJvbHMiLCJvbkxvYWRlZERhdGEiLCJwbGF5c0lubGluZSIsImF1dG9QbGF5IiwiSW1hZ2VfMSIsIlZpZGVvXzEiLCJBdXRvUGxheUNvbnRlbnRfMSIsIkRlZmF1bHRfMSIsIndpdGhIZWFkZXIiLCJIZWFkZXJfMSIsIndpdGhTZWVNb3JlIiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsInNob3ciLCJDb2xsYXBzZWRDb21wb25lbnQiLCJTZWVNb3JlXzEiLCJzZWVNb3JlQ29sbGFwc2VkIiwicHJvYmFibGUiLCJyIiwidGVzdGVyUmVzdWx0Iiwic29ydCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxD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Ozs7Ozs7O0FDdENheEssc0JBQWMsVUFBQ1AsS0FBRCxFQUFld0gsU0FBZixFQUFnRjtFQUN2RyxJQUFJOEQsUUFBUSxHQUFHOUQsU0FBUyxDQUFDMUQsR0FBVixDQUFjLFdBQUMsRUFBRztJQUM3Qix1Q0FDT3lILENBRFAsR0FDUTtNQUNKQyxZQUFZLEVBQUVELENBQUMsQ0FBQ3pDLE1BQUYsQ0FBUzlJLEtBQVQ7SUFEVixDQURSO0VBSUgsQ0FMYyxFQUtadUIsTUFMWSxDQUtMLFdBQUM7SUFBQSxPQUFJZ0ssQ0FBQyxDQUFDQyxZQUFGLENBQWU1QyxTQUFuQjtFQUFBLENBTEksQ0FBZjtFQU1BMEMsUUFBUSxDQUFDRyxJQUFULENBQWMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0lBQUEsT0FBVUEsQ0FBQyxDQUFDSCxZQUFGLENBQWUzQyxRQUFmLEdBQTBCNkMsQ0FBQyxDQUFDRixZQUFGLENBQWUzQyxRQUFuRDtFQUFBLENBQWQ7RUFDQSxPQUFPeUMsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZbkQsUUFBbkI7QUFDSCxDQVRZLEM7Ozs7Ozs7Ozs7O0FDRmIsbUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN0b3JpZXNcIiwgW1wiUmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3Rvcmllc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdG9yaWVzXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKCh7XG4gIHN0eWxlcyA9IHt9LFxuICAuLi5wcm9wc1xufSkgPT4gPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNDRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiI2ZmZlwiIHsuLi5wcm9wc30+PGcgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBzdHJva2VXaWR0aD1cIjJcIj48Y2lyY2xlIGN4PVwiMjJcIiBjeT1cIjIyXCIgcj1cIjFcIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIGJlZ2luPVwiMHNcIiBkdXI9XCIxLjhzXCIgdmFsdWVzPVwiMTsgMjBcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsgMVwiIGtleVNwbGluZXM9XCIwLjE2NSwgMC44NCwgMC40NCwgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIC8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInN0cm9rZS1vcGFjaXR5XCIgYmVnaW49XCIwc1wiIGR1cj1cIjEuOHNcIiB2YWx1ZXM9XCIxOyAwXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7IDFcIiBrZXlTcGxpbmVzPVwiMC4zLCAwLjYxLCAwLjM1NSwgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIC8+PC9jaXJjbGU+PGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCIxXCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiBiZWdpbj1cIi0wLjlzXCIgZHVyPVwiMS44c1wiIHZhbHVlcz1cIjE7IDIwXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7IDFcIiBrZXlTcGxpbmVzPVwiMC4xNjUsIDAuODQsIDAuNDQsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJzdHJva2Utb3BhY2l0eVwiIGJlZ2luPVwiLTAuOXNcIiBkdXI9XCIxLjhzXCIgdmFsdWVzPVwiMTsgMFwiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOyAxXCIga2V5U3BsaW5lcz1cIjAuMywgMC42MSwgMC4zNTUsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjwvY2lyY2xlPjwvZz48L3N2Zz4pOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9HbG9iYWwnXG5pbXBvcnQgU3Rvcmllc0NvbnRleHQgZnJvbSAnLi8uLi9jb250ZXh0L1N0b3JpZXMnXG5pbXBvcnQgUHJvZ3Jlc3NDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcbmltcG9ydCBTdG9yeSBmcm9tICcuL1N0b3J5J1xuaW1wb3J0IFByb2dyZXNzQXJyYXkgZnJvbSAnLi9Qcm9ncmVzc0FycmF5J1xuaW1wb3J0IHsgR2xvYmFsQ3R4LCBTdG9yaWVzQ29udGV4dCBhcyBTdG9yaWVzQ29udGV4dEludGVyZmFjZSB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFtjdXJyZW50SWQsIHNldEN1cnJlbnRJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gICAgY29uc3QgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuICAgIGNvbnN0IFtidWZmZXJBY3Rpb24sIHNldEJ1ZmZlckFjdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuICAgIGNvbnN0IFt2aWRlb0R1cmF0aW9uLCBzZXRWaWRlb0R1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcblxuICAgIGxldCBtb3VzZWRvd25JZCA9IHVzZVJlZjxhbnk+KCk7XG4gICAgbGV0IGlzTW91bnRlZCA9IHVzZVJlZjxib29sZWFuPih0cnVlKTtcblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbG9vcCwgY3VycmVudEluZGV4LCBpc1BhdXNlZCwga2V5Ym9hcmROYXZpZ2F0aW9uLCBwcmV2ZW50RGVmYXVsdCwgc3RvcnlDb250YWluZXJTdHlsZXMgPSB7fSB9ID0gdXNlQ29udGV4dDxHbG9iYWxDdHg+KEdsb2JhbENvbnRleHQpO1xuICAgIGNvbnN0IHsgc3RvcmllcyB9ID0gdXNlQ29udGV4dDxTdG9yaWVzQ29udGV4dEludGVyZmFjZT4oU3Rvcmllc0NvbnRleHQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50SW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID49IDAgJiYgY3VycmVudEluZGV4IDwgc3Rvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SWRXcmFwcGVyKCgpID0+IGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5kZXggb3V0IG9mIGJvdW5kcy4gQ3VycmVudCBpbmRleCB3YXMgc2V0IHRvIHZhbHVlIG1vcmUgdGhhbiB0aGUgbGVuZ3RoIG9mIHN0b3JpZXMgYXJyYXkuJywgY3VycmVudEluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRJbmRleF0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGlzUGF1c2VkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHNldFBhdXNlKGlzUGF1c2VkKVxuICAgICAgICB9XG4gICAgfSwgW2lzUGF1c2VkXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2xpZW50ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCk7XG4gICAgICAgIGlmIChpc0NsaWVudCAmJiAodHlwZW9mIGtleWJvYXJkTmF2aWdhdGlvbiA9PT0gJ2Jvb2xlYW4nICYmIGtleWJvYXJkTmF2aWdhdGlvbikpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtrZXlib2FyZE5hdmlnYXRpb25dKTtcblxuICAgIC8vIENsZWFudXAgbW91bnRlZCBzdGF0ZSAtIGZvciBpc3N1ZSAjMTMwIChodHRwczovL2dpdGh1Yi5jb20vbW9oaXRrMDUvcmVhY3QtaW5zdGEtc3Rvcmllcy9pc3N1ZXMvMTMwKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgIHByZXZpb3VzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVN0YXRlID0gKGFjdGlvbjogc3RyaW5nLCBidWZmZXJBY3Rpb24/OiBib29sZWFuKSA9PiB7XG4gICAgICAgIHNldFBhdXNlKGFjdGlvbiA9PT0gJ3BhdXNlJylcbiAgICAgICAgc2V0QnVmZmVyQWN0aW9uKCEhYnVmZmVyQWN0aW9uKVxuICAgIH1cblxuICAgIGNvbnN0IHNldEN1cnJlbnRJZFdyYXBwZXIgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkKGNhbGxiYWNrKTtcbiAgICAgICAgdG9nZ2xlU3RhdGUoJ3BhdXNlJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRJZFdyYXBwZXIocHJldiA9PiBwcmV2ID4gMCA/IHByZXYgLSAxIDogcHJldilcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dFN0b3J5SWRGb3JMb29wKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dFN0b3J5SWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZU5leHRTdG9yeUlkRm9yTG9vcCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcihwcmV2ID0+IChwcmV2ICsgMSkgJSBzdG9yaWVzLmxlbmd0aClcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVOZXh0U3RvcnlJZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcihwcmV2ID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2IDwgc3Rvcmllcy5sZW5ndGggLSAxKSByZXR1cm4gcHJldiArIDFcbiAgICAgICAgICAgIHJldHVybiBwcmV2XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVib3VuY2VQYXVzZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbW91c2Vkb3duSWQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlU3RhdGUoJ3BhdXNlJylcbiAgICAgICAgfSwgMjAwKVxuICAgIH1cblxuICAgIGNvbnN0IG1vdXNlVXAgPSAodHlwZTogc3RyaW5nKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LlRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIG1vdXNlZG93bklkLmN1cnJlbnQgJiYgY2xlYXJUaW1lb3V0KG1vdXNlZG93bklkLmN1cnJlbnQpXG4gICAgICAgIGlmIChwYXVzZSkge1xuICAgICAgICAgICAgdG9nZ2xlU3RhdGUoJ3BsYXknKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHlwZSA9PT0gJ25leHQnID8gbmV4dCgpIDogcHJldmlvdXMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmlkZW9EdXJhdGlvbiA9IChkdXJhdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldFZpZGVvRHVyYXRpb24oZHVyYXRpb24gKiAxMDAwKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNvbnRhaW5lciwgLi4uc3RvcnlDb250YWluZXJTdHlsZXMsIC4uLnsgd2lkdGgsIGhlaWdodCB9IH19PlxuICAgICAgICAgICAgPFByb2dyZXNzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIGJ1ZmZlckFjdGlvbjogYnVmZmVyQWN0aW9uLFxuICAgICAgICAgICAgICAgIHZpZGVvRHVyYXRpb246IHZpZGVvRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgY3VycmVudElkLFxuICAgICAgICAgICAgICAgIHBhdXNlLFxuICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc0FycmF5IC8+XG4gICAgICAgICAgICA8L1Byb2dyZXNzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgIDxTdG9yeVxuICAgICAgICAgICAgICAgIGFjdGlvbj17dG9nZ2xlU3RhdGV9XG4gICAgICAgICAgICAgICAgYnVmZmVyQWN0aW9uPXtidWZmZXJBY3Rpb259XG4gICAgICAgICAgICAgICAgcGxheVN0YXRlPXtwYXVzZX1cbiAgICAgICAgICAgICAgICBzdG9yeT17c3Rvcmllc1tjdXJyZW50SWRdfVxuICAgICAgICAgICAgICAgIGdldFZpZGVvRHVyYXRpb249e2dldFZpZGVvRHVyYXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyFwcmV2ZW50RGVmYXVsdCAmJiA8ZGl2IHN0eWxlPXtzdHlsZXMub3ZlcmxheX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCB6SW5kZXg6IDk5OSB9fSBvblRvdWNoU3RhcnQ9e2RlYm91bmNlUGF1c2V9IG9uVG91Y2hFbmQ9e21vdXNlVXAoJ3ByZXZpb3VzJyl9IG9uTW91c2VEb3duPXtkZWJvdW5jZVBhdXNlfSBvbk1vdXNlVXA9e21vdXNlVXAoJ3ByZXZpb3VzJyl9IC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCB6SW5kZXg6IDk5OSB9fSBvblRvdWNoU3RhcnQ9e2RlYm91bmNlUGF1c2V9IG9uVG91Y2hFbmQ9e21vdXNlVXAoJ25leHQnKX0gb25Nb3VzZURvd249e2RlYm91bmNlUGF1c2V9IG9uTW91c2VVcD17bW91c2VVcCgnbmV4dCcpfSAvPlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMxMTEnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRlclByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBIZWFkZXIgPSAoeyBwcm9maWxlSW1hZ2UsIGhlYWRpbmcsIHN1YmhlYWRpbmcgfTogSGVhZGVyUHJvcHMpID0+XG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7cHJvZmlsZUltYWdlICYmIDxpbWcgc3R5bGU9e3N0eWxlcy5pbWd9IHNyYz17cHJvZmlsZUltYWdlfSAvPn1cbiAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuaGVhZGluZ30+e2hlYWRpbmd9PC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5zdWJoZWFkaW5nfT57c3ViaGVhZGluZ308L3A+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIG1haW46IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0MCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgICAgICBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpKScsXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGZpbHRlcjogJ2Ryb3Atc2hhZG93KDAgMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuOSkpJ1xuICAgIH0sXG4gICAgaGVhZGluZzoge1xuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyXG4gICAgfSxcbiAgICBzdWJoZWFkaW5nOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMC42cmVtJyxcbiAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknLFxuICAgICAgICBtYXJnaW46IDBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzc1Byb3BzLCBQcm9ncmVzc0NvbnRleHQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgUHJvZ3Jlc3NXcmFwcGVyIGZyb20gJy4vUHJvZ3Jlc3NXcmFwcGVyJ1xuaW1wb3J0IFByb2dyZXNzQ3R4IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9ncmVzc1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBidWZmZXJBY3Rpb24sIHBhdXNlIH0gPSB1c2VDb250ZXh0PFByb2dyZXNzQ29udGV4dD4oUHJvZ3Jlc3NDdHgpXG5cbiAgICBjb25zdCBnZXRQcm9ncmVzc1N0eWxlID0gKHsgYWN0aXZlIH0pID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogJzEwMCUnIH1cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0cmFuc2Zvcm06IGBzY2FsZVgoJHtwcm9wcy5jb3VudCAvIDEwMH0pYCB9XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IDAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogMCB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHdpZHRoLCBhY3RpdmUgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb2dyZXNzV3JhcHBlciB3aWR0aD17d2lkdGh9IHBhdXNlPXtwYXVzZX0gYnVmZmVyQWN0aW9uPXtidWZmZXJBY3Rpb259PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLmdldFByb2dyZXNzU3R5bGUoeyBhY3RpdmUgfSksIC4uLnN0eWxlcy5pbm5lciB9fSAvPlxuICAgICAgICA8L1Byb2dyZXNzV3JhcHBlcj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlczogYW55ID0ge1xuICAgIGlubmVyOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGxlZnQnLFxuXG4gICAgICAgIFdlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIE1vekJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIG1zQmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcblxuICAgICAgICBXZWJraXRQZXJzcGVjdGl2ZTogMTAwMCxcbiAgICAgICAgTW96UGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIG1zUGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL1Byb2dyZXNzJ1xuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0LCBHbG9iYWxDdHgsIFN0b3JpZXNDb250ZXh0IGFzIFN0b3JpZXNDb250ZXh0SW50ZXJmYWNlIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFByb2dyZXNzQ3R4IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9HbG9iYWwnXG5pbXBvcnQgU3Rvcmllc0NvbnRleHQgZnJvbSAnLi8uLi9jb250ZXh0L1N0b3JpZXMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgICBjb25zdCB7IGN1cnJlbnRJZCwgbmV4dCwgdmlkZW9EdXJhdGlvbiwgcGF1c2UgfSA9IHVzZUNvbnRleHQ8UHJvZ3Jlc3NDb250ZXh0PihQcm9ncmVzc0N0eClcbiAgICBjb25zdCB7IGRlZmF1bHRJbnRlcnZhbCwgb25TdG9yeUVuZCwgb25TdG9yeVN0YXJ0LCBvbkFsbFN0b3JpZXNFbmQgfSA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4PihHbG9iYWxDb250ZXh0KTtcbiAgICBjb25zdCB7IHN0b3JpZXMgfSA9IHVzZUNvbnRleHQ8U3Rvcmllc0NvbnRleHRJbnRlcmZhY2U+KFN0b3JpZXNDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENvdW50KDApXG4gICAgfSwgW2N1cnJlbnRJZCwgc3Rvcmllc10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXBhdXNlKSB7XG4gICAgICAgICAgICBhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaW5jcmVtZW50Q291bnQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQuY3VycmVudClcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50SWQsIHBhdXNlXSlcblxuICAgIGxldCBhbmltYXRpb25GcmFtZUlkID0gdXNlUmVmPG51bWJlcj4oKVxuXG4gICAgbGV0IGNvdW50Q29weSA9IGNvdW50O1xuICAgIGNvbnN0IGluY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgICAgICBpZiAoY291bnRDb3B5ID09PSAwKSBzdG9yeVN0YXJ0Q2FsbGJhY2soKVxuICAgICAgICBzZXRDb3VudCgoY291bnQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBnZXRDdXJyZW50SW50ZXJ2YWwoKVxuICAgICAgICAgICAgY291bnRDb3B5ID0gY291bnQgKyAoMTAwIC8gKChpbnRlcnZhbCAvIDEwMDApICogNjApKVxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ICsgKDEwMCAvICgoaW50ZXJ2YWwgLyAxMDAwKSAqIDYwKSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGNvdW50Q29weSA8IDEwMCkge1xuICAgICAgICAgICAgYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGluY3JlbWVudENvdW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcnlFbmRDYWxsYmFjaygpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJZCA9PT0gc3Rvcmllcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYWxsU3Rvcmllc0VuZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQpO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcnlTdGFydENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBvblN0b3J5U3RhcnQgJiYgb25TdG9yeVN0YXJ0KGN1cnJlbnRJZCwgc3Rvcmllc1tjdXJyZW50SWRdKVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3J5RW5kQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG9uU3RvcnlFbmQgJiYgb25TdG9yeUVuZChjdXJyZW50SWQsIHN0b3JpZXNbY3VycmVudElkXSlcbiAgICB9XG5cbiAgICBjb25zdCBhbGxTdG9yaWVzRW5kQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG9uQWxsU3Rvcmllc0VuZCAmJiBvbkFsbFN0b3JpZXNFbmQoY3VycmVudElkLCBzdG9yaWVzKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEN1cnJlbnRJbnRlcnZhbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN0b3JpZXNbY3VycmVudElkXS50eXBlID09PSAndmlkZW8nKSByZXR1cm4gdmlkZW9EdXJhdGlvblxuICAgICAgICBpZiAodHlwZW9mIHN0b3JpZXNbY3VycmVudElkXS5kdXJhdGlvbiA9PT0gJ251bWJlcicpIHJldHVybiBzdG9yaWVzW2N1cnJlbnRJZF0uZHVyYXRpb25cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRJbnRlcnZhbFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wcm9ncmVzc0Fycn0+XG4gICAgICAgICAgICB7c3Rvcmllcy5tYXAoKF8sIGkpID0+XG4gICAgICAgICAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgY291bnQ9e2NvdW50fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MSAvIHN0b3JpZXMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2kgPT09IGN1cnJlbnRJZCA/IDEgOiAoaSA8IGN1cnJlbnRJZCA/IDIgOiAwKX1cbiAgICAgICAgICAgICAgICAvPil9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHByb2dyZXNzQXJyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBmbGV4V3JhcDogJ3JvdycsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJzk4JScsXG4gICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgIHBhZGRpbmdUb3A6IDcsXG4gICAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICAgIHpJbmRleDogMTAwMSxcbiAgICAgICAgZmlsdGVyOiAnZHJvcC1zaGFkb3coMCAxcHggOHB4ICMyMjIpJ1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzV3JhcHBlclByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBQcm9ncmVzc1dyYXBwZXIgPSAocHJvcHM6IFByb2dyZXNzV3JhcHBlclByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMucHJvZ3Jlc3MsIC4uLmdldFByb2dyZXNzV3JhcHBlclN0eWxlKHByb3BzKSB9fT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCBnZXRQcm9ncmVzc1dyYXBwZXJTdHlsZSA9ICh7IHdpZHRoLCBwYXVzZSwgYnVmZmVyQWN0aW9uIH0pID0+ICh7XG4gICAgd2lkdGg6IGAke3dpZHRoICogMTAwfSVgLFxuICAgIG9wYWNpdHk6IHBhdXNlICYmICFidWZmZXJBY3Rpb24gPyAwIDogMVxufSlcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHByb2dyZXNzOiB7XG4gICAgICAgIGhlaWdodDogMixcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyM1NTUnLFxuICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgNDAwbXMgZWFzZS1pbi1vdXQnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc1dyYXBwZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvR2xvYmFsJ1xuaW1wb3J0IHsgR2xvYmFsQ3R4IH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgU2VlTW9yZVByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWVNb3JlKHByb3BzOiBTZWVNb3JlUHJvcHMpIHtcbiAgICBjb25zdCBTZWVNb3JlQ29udGVudCA9IHByb3BzLnNlZU1vcmVDb250ZW50O1xuICAgIGNvbnN0IEN1c3RvbUNvbGxhcHNlZCA9IHByb3BzLmN1c3RvbUNvbGxhcHNlZDtcblxuICAgIGNvbnN0IHsga2V5Ym9hcmROYXZpZ2F0aW9uIH0gPSB1c2VDb250ZXh0PEdsb2JhbEN0eD4oR2xvYmFsQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NsaWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICBpZiAoaXNDbGllbnQgJiYgKHR5cGVvZiBrZXlib2FyZE5hdmlnYXRpb24gPT09ICdib29sZWFuJyAmJiBrZXlib2FyZE5hdmlnYXRpb24pKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBba2V5Ym9hcmROYXZpZ2F0aW9uXSlcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgcHJvcHMuc2hvd0NvbnRlbnRcbiAgICAgICAgICAgID8gPGRpdiBzdHlsZT17c3R5bGVzLnNlZU1vcmVFeHBhbmRlZH0+XG4gICAgICAgICAgICAgICAgPFNlZU1vcmVDb250ZW50IGNsb3NlPXsoKSA9PiBwcm9wcy50b2dnbGVNb3JlKGZhbHNlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgKEN1c3RvbUNvbGxhcHNlZCA/IDxDdXN0b21Db2xsYXBzZWQgYWN0aW9uPXtwcm9wcy5hY3Rpb259IHRvZ2dsZU1vcmU9e3Byb3BzLnRvZ2dsZU1vcmV9IC8+IDogPGRpdiBzdHlsZT17c3R5bGVzLnNlZU1vcmV9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcHJvcHMudG9nZ2xlTW9yZSh0cnVlKVxuICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuc2VlTW9yZUljb259PuKMgzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnNlZU1vcmVUZXh0fT5TZWUgbW9yZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzOiBhbnkgPSB7XG4gICAgc2VlTW9yZToge1xuICAgICAgICBoZWlnaHQ6IFwiMTB2aFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMikpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgIGJvdHRvbTogMFxuICAgIH0sXG4gICAgc2VlTW9yZUV4cGFuZGVkOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgekluZGV4OiA5OTk5OVxuICAgIH0sXG4gICAgc2VlTW9yZVRleHQ6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMWVtXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIyLjJ2aFwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICAgICAgb3BhY2l0eTogXCIxXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOGVtXCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dFwiXG4gICAgfSxcbiAgICBzZWVNb3JlSWNvbjoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4yZW1cIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjAuNHZoXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMCAwIDVweCBibGFjaylcIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dFwiXG4gICAgfSxcbiAgICBzZWVNb3JlQ2xvc2U6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgZmlsdGVyOiBcImRyb3Atc2hhZG93KDAgM3B4IDJweCAjY2NjKVwiLFxuICAgICAgICByaWdodDogXCIwLjVyZW1cIixcbiAgICAgICAgdG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcbiAgICAgICAgb3BhY2l0eTogXCIwLjdcIixcbiAgICAgICAgcGFkZGluZzogXCIxcmVtXCJcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyU1ZHIGZyb20gJy4vLi4vYXNzZXRzL3B1ZmYuc3ZnJztcblxuY29uc3QgU3Bpbm5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gPFNwaW5uZXJTVkcgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RvcnlQcm9wcywgR2xvYmFsQ3R4IH0gZnJvbSBcIi4vLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4vLi4vY29udGV4dC9HbG9iYWxcIjtcblxuY29uc3QgU3RvcnkgPSAocHJvcHM6IFN0b3J5UHJvcHMpID0+IHtcblx0Y29uc3QgZ2xvYmFsQ29udGV4dCA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4Pihcblx0XHRHbG9iYWxDb250ZXh0XG5cdCk7XG5cblx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsb2FkZXIsIGhlYWRlciwgc3RvcnlTdHlsZXMgfSA9IGdsb2JhbENvbnRleHQ7XG5cblx0Y29uc3QgcmVuZGVyZXJNZXNzYWdlSGFuZGxlciA9ICh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4ge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnVVBEQVRFX1ZJREVPX0RVUkFUSU9OJzpcblx0XHRcdFx0cHJvcHMuZ2V0VmlkZW9EdXJhdGlvbihkYXRhLmR1cmF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHsgYWNrOiAnT0snIGFzICdPSycgfVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGdldFN0b3J5Q29udGVudCA9ICgpID0+IHtcblx0XHRsZXQgSW5uZXJDb250ZW50ID0gcHJvcHMuc3RvcnkuY29udGVudDtcblx0XHRsZXQgY29uZmlnID0geyB3aWR0aCwgaGVpZ2h0LCBsb2FkZXIsIGhlYWRlciwgc3RvcnlTdHlsZXMgfTtcblx0XHRyZXR1cm4gPElubmVyQ29udGVudFxuXHRcdFx0YWN0aW9uPXtwcm9wcy5hY3Rpb259XG5cdFx0XHRpc1BhdXNlZD17cHJvcHMucGxheVN0YXRlfVxuXHRcdFx0c3Rvcnk9e3Byb3BzLnN0b3J5fVxuXHRcdFx0Y29uZmlnPXtjb25maWd9XG5cdFx0XHRtZXNzYWdlSGFuZGxlcj17cmVuZGVyZXJNZXNzYWdlSGFuZGxlcn1cblx0XHQvPlxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0c3R5bGU9e3sgLi4uc3R5bGVzLnN0b3J5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH19XG5cdFx0PlxuXHRcdFx0e2dldFN0b3J5Q29udGVudCgpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRzdG9yeToge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIlxuXHR9LFxuXHRzdG9yeUNvbnRlbnQ6IHtcblx0XHR3aWR0aDogXCJhdXRvXCIsXG5cdFx0bWF4V2lkdGg6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIlxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbG9iYWxDdHggfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxDb250ZXh0ID0ge1xuXHRkZWZhdWx0SW50ZXJ2YWw6IDQwMDAsXG5cdHdpZHRoOiAzNjAsXG5cdGhlaWdodDogNjQwLFxufTtcblxuY29uc3QgR2xvYmFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8R2xvYmFsQ3R4Pihpbml0aWFsQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbENvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQ8UHJvZ3Jlc3NDb250ZXh0Pih7XG4gICAgY3VycmVudElkOiAwLFxuICAgIHZpZGVvRHVyYXRpb246IDAsXG4gICAgYnVmZmVyQWN0aW9uOiBmYWxzZSxcbiAgICBwYXVzZTogZmFsc2UsXG4gICAgbmV4dDogKCkgPT4geyB9XG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRTdG9yaWVzQ29udGV4dCBhcyBTdG9yaWVzQ29udGV4dEludGVyZmFjZSxcblx0U3RvcnksXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbnRleHQ6IHsgc3RvcmllczogU3RvcnlbXSB9ID0ge1xuXHRzdG9yaWVzOiBbXSxcbn07XG5cbmNvbnN0IFN0b3JpZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTdG9yaWVzQ29udGV4dEludGVyZmFjZT4oXG5cdGluaXRpYWxDb250ZXh0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWFjdEluc3RhU3Rvcmllc1Byb3BzLCBHbG9iYWxDdHgsIFN0b3J5LCBUZXN0ZXIsIFJlbmRlcmVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSAnLi9jb250ZXh0L0dsb2JhbCdcbmltcG9ydCBTdG9yaWVzQ29udGV4dCBmcm9tICcuL2NvbnRleHQvU3Rvcmllcyc7XG5pbXBvcnQgeyBnZXRSZW5kZXJlciB9IGZyb20gJy4vdXRpbC9yZW5kZXJlcnMnXG5pbXBvcnQgeyByZW5kZXJlcnMgYXMgZGVmYXVsdFJlbmRlcmVycyB9IGZyb20gJy4vcmVuZGVyZXJzL2luZGV4JztcbmltcG9ydCB3aXRoSGVhZGVyIGZyb20gJy4vcmVuZGVyZXJzL3dyYXBwZXJzL3dpdGhIZWFkZXInXG5pbXBvcnQgd2l0aFNlZU1vcmUgZnJvbSAnLi9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aFNlZU1vcmUnXG5cbmNvbnN0IFJlYWN0SW5zdGFTdG9yaWVzID0gZnVuY3Rpb24gKHByb3BzOiBSZWFjdEluc3RhU3Rvcmllc1Byb3BzKSB7XG4gICAgbGV0IHJlbmRlcmVycyA9IHByb3BzLnJlbmRlcmVycyA/IHByb3BzLnJlbmRlcmVycy5jb25jYXQoZGVmYXVsdFJlbmRlcmVycykgOiBkZWZhdWx0UmVuZGVyZXJzO1xuICAgIGxldCBjb250ZXh0OiBHbG9iYWxDdHggPSB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIGxvYWRlcjogcHJvcHMubG9hZGVyLFxuICAgICAgICBoZWFkZXI6IHByb3BzLmhlYWRlcixcbiAgICAgICAgc3RvcnlDb250YWluZXJTdHlsZXM6IHByb3BzLnN0b3J5Q29udGFpbmVyU3R5bGVzLFxuICAgICAgICBzdG9yeVN0eWxlczogcHJvcHMuc3RvcnlTdHlsZXMsXG4gICAgICAgIGxvb3A6IHByb3BzLmxvb3AsXG4gICAgICAgIGRlZmF1bHRJbnRlcnZhbDogcHJvcHMuZGVmYXVsdEludGVydmFsLFxuICAgICAgICBpc1BhdXNlZDogcHJvcHMuaXNQYXVzZWQsXG4gICAgICAgIGN1cnJlbnRJbmRleDogcHJvcHMuY3VycmVudEluZGV4LFxuICAgICAgICBvblN0b3J5U3RhcnQ6IHByb3BzLm9uU3RvcnlTdGFydCxcbiAgICAgICAgb25TdG9yeUVuZDogcHJvcHMub25TdG9yeUVuZCxcbiAgICAgICAgb25BbGxTdG9yaWVzRW5kOiBwcm9wcy5vbkFsbFN0b3JpZXNFbmQsXG4gICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbjogcHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdDogcHJvcHMucHJldmVudERlZmF1bHRcbiAgICB9XG4gICAgY29uc3QgW3N0b3JpZXMsIHNldFN0b3JpZXNdID0gdXNlU3RhdGU8eyBzdG9yaWVzOiBTdG9yeVtdIH0+KHsgc3RvcmllczogZ2VuZXJhdGVTdG9yaWVzKHByb3BzLnN0b3JpZXMsIHJlbmRlcmVycykgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0U3Rvcmllcyh7IHN0b3JpZXM6IGdlbmVyYXRlU3Rvcmllcyhwcm9wcy5zdG9yaWVzLCByZW5kZXJlcnMpIH0pO1xuICAgIH0sIFtwcm9wcy5zdG9yaWVzLCBwcm9wcy5yZW5kZXJlcnNdKTtcblxuICAgIHJldHVybiA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICAgIDxTdG9yaWVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3Rvcmllc30+XG4gICAgICAgICAgICA8Q29udGFpbmVyIC8+XG4gICAgICAgIDwvU3Rvcmllc0NvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5jb25zdCBnZW5lcmF0ZVN0b3JpZXMgPSAoc3RvcmllczogU3RvcnlbXSwgcmVuZGVyZXJzOiB7IHJlbmRlcmVyOiBSZW5kZXJlciwgdGVzdGVyOiBUZXN0ZXIgfVtdKSA9PiB7XG4gICAgcmV0dXJuIHN0b3JpZXMubWFwKHMgPT4ge1xuICAgICAgICBsZXQgc3Rvcnk6IFN0b3J5ID0ge307XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc3RvcnkudXJsID0gcztcbiAgICAgICAgICAgIHN0b3J5LnR5cGUgPSAnaW1hZ2UnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc3RvcnkgPSBPYmplY3QuYXNzaWduKHN0b3J5LCBzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZW5kZXJlciA9IGdldFJlbmRlcmVyKHN0b3J5LCByZW5kZXJlcnMpO1xuICAgICAgICBzdG9yeS5vcmlnaW5hbENvbnRlbnQgPSBzdG9yeS5jb250ZW50O1xuICAgICAgICBzdG9yeS5jb250ZW50ID0gcmVuZGVyZXI7XG4gICAgICAgIHJldHVybiBzdG9yeVxuICAgIH0pXG59O1xuXG5SZWFjdEluc3RhU3Rvcmllcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDM2MCxcbiAgICBoZWlnaHQ6IDY0MCxcbiAgICBkZWZhdWx0SW50ZXJ2YWw6IDQwMDBcbn1cblxuZXhwb3J0IGNvbnN0IFdpdGhIZWFkZXIgPSB3aXRoSGVhZGVyO1xuZXhwb3J0IGNvbnN0IFdpdGhTZWVNb3JlID0gd2l0aFNlZU1vcmU7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0SW5zdGFTdG9yaWVzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVuZGVyZXIsIFRlc3RlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIgPSAocHJvcHMpID0+IHtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwcm9wcy5hY3Rpb24oJ3BsYXknKTtcbiAgICB9LCBbcHJvcHMuc3RvcnldKVxuICAgIGNvbnN0IENvbnRlbnQgPSBwcm9wcy5zdG9yeS5vcmlnaW5hbENvbnRlbnQ7XG4gICAgcmV0dXJuIDxDb250ZW50IHsuLi5wcm9wc30gLz5cbn1cblxuZXhwb3J0IGNvbnN0IHRlc3RlcjogVGVzdGVyID0gKHN0b3J5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uZGl0aW9uOiAhIXN0b3J5LmNvbnRlbnQsXG4gICAgICAgIHByaW9yaXR5OiAyXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyZXIsXG4gICAgdGVzdGVyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVuZGVyZXIsIFRlc3RlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIgPSAoeyBzdG9yeSwgYWN0aW9uIH0pID0+IHtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhY3Rpb24oJ3BsYXknKTtcbiAgICB9LCBbc3RvcnldKVxuXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlcy5zdG9yeUNvbnRlbnR9PlxuICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnRleHR9PlRoaXMgc3RvcnkgY291bGQgbm90IGJlIGxvYWRlZC48L3A+XG4gICAgPC9kaXY+XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBzdG9yeUNvbnRlbnQ6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICB3aWR0aDogJzkwJScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RlcjogVGVzdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmRpdGlvbjogdHJ1ZSxcbiAgICAgICAgcHJpb3JpdHk6IDFcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyZXIsXG4gICAgdGVzdGVyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IFdpdGhIZWFkZXIgZnJvbSAnLi93cmFwcGVycy93aXRoSGVhZGVyJztcbmltcG9ydCBXaXRoU2VlTW9yZSBmcm9tICcuL3dyYXBwZXJzL3dpdGhTZWVNb3JlJztcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyOiBSZW5kZXJlciA9ICh7IHN0b3J5LCBhY3Rpb24sIGlzUGF1c2VkLCBjb25maWcgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsb2FkZXIsIHN0b3J5U3R5bGVzIH0gPSBjb25maWc7XG4gICAgbGV0IGNvbXB1dGVkU3R5bGVzID0ge1xuICAgICAgICAuLi5zdHlsZXMuc3RvcnlDb250ZW50LFxuICAgICAgICAuLi4oc3RvcnlTdHlsZXMgfHwge30pXG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2VMb2FkZWQgPSAoKSA9PiB7XG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgYWN0aW9uKCdwbGF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxXaXRoSGVhZGVyIHN0b3J5PXtzdG9yeX0gZ2xvYmFsSGVhZGVyPXtjb25maWcuaGVhZGVyfT5cbiAgICAgICAgPFdpdGhTZWVNb3JlIHN0b3J5PXtzdG9yeX0gYWN0aW9uPXthY3Rpb259PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb21wdXRlZFN0eWxlc30gc3JjPXtzdG9yeS51cmx9IG9uTG9hZD17aW1hZ2VMb2FkZWR9IC8+XG4gICAgICAgICAgICAgICAgeyFsb2FkZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVyIHx8IDxTcGlubmVyIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV2l0aFNlZU1vcmU+XG4gICAgPC9XaXRoSGVhZGVyPlxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgc3Rvcnk6IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgfSxcbiAgICBzdG9yeUNvbnRlbnQ6IHtcbiAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCJcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdGVyOiBUZXN0ZXIgPSAoc3RvcnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25kaXRpb246ICFzdG9yeS5jb250ZW50ICYmICghc3RvcnkudHlwZSB8fCBzdG9yeS50eXBlID09PSAnaW1hZ2UnKSxcbiAgICAgICAgcHJpb3JpdHk6IDJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJlcixcbiAgICB0ZXN0ZXJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tIFwiLi8uLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgV2l0aEhlYWRlciBmcm9tIFwiLi93cmFwcGVycy93aXRoSGVhZGVyXCI7XG5pbXBvcnQgV2l0aFNlZU1vcmUgZnJvbSBcIi4vd3JhcHBlcnMvd2l0aFNlZU1vcmVcIjtcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyOiBSZW5kZXJlciA9ICh7XG4gIHN0b3J5LFxuICBhY3Rpb24sXG4gIGlzUGF1c2VkLFxuICBjb25maWcsXG4gIG1lc3NhZ2VIYW5kbGVyLFxufSkgPT4ge1xuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbXV0ZWQsIHNldE11dGVkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGxvYWRlciwgc3RvcnlTdHlsZXMgfSA9IGNvbmZpZztcblxuICBsZXQgY29tcHV0ZWRTdHlsZXMgPSB7XG4gICAgLi4uc3R5bGVzLnN0b3J5Q29udGVudCxcbiAgICAuLi4oc3RvcnlTdHlsZXMgfHwge30pLFxuICB9O1xuXG4gIGxldCB2aWQgPSBSZWFjdC51c2VSZWY8SFRNTFZpZGVvRWxlbWVudD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlkLmN1cnJlbnQpIHtcbiAgICAgIGlmIChpc1BhdXNlZCkge1xuICAgICAgICB2aWQuY3VycmVudC5wYXVzZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlkLmN1cnJlbnQucGxheSgpLmNhdGNoKCgpID0+IHt9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc1BhdXNlZF0pO1xuXG4gIGNvbnN0IG9uV2FpdGluZyA9ICgpID0+IHtcbiAgICBhY3Rpb24oXCJwYXVzZVwiLCB0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvblBsYXlpbmcgPSAoKSA9PiB7XG4gICAgYWN0aW9uKFwicGxheVwiLCB0cnVlKTtcbiAgfTtcblxuICBjb25zdCB2aWRlb0xvYWRlZCA9ICgpID0+IHtcbiAgICBtZXNzYWdlSGFuZGxlcihcIlVQREFURV9WSURFT19EVVJBVElPTlwiLCB7IGR1cmF0aW9uOiB2aWQuY3VycmVudC5kdXJhdGlvbiB9KTtcbiAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgdmlkLmN1cnJlbnRcbiAgICAgIC5wbGF5KClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgYWN0aW9uKFwicGxheVwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBzZXRNdXRlZCh0cnVlKTtcbiAgICAgICAgdmlkLmN1cnJlbnQucGxheSgpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIGFjdGlvbihcInBsYXlcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbXV0ZSA9ICgpID0+IHtcbiAgICAhbXV0ZWQgPyBzZXRNdXRlZCh0cnVlKSA6IHNldE11dGVkKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBtdXRlQnV0dG9uVGV4dCA9IG11dGVkID8gXCJVbm11dGVcIiA6IFwiTXV0ZVwiO1xuXG4gIHJldHVybiAoXG4gICAgPFdpdGhIZWFkZXIgc3Rvcnk9e3N0b3J5fSBnbG9iYWxIZWFkZXI9e2NvbmZpZy5oZWFkZXJ9PlxuICAgICAgPFdpdGhTZWVNb3JlIHN0b3J5PXtzdG9yeX0gYWN0aW9uPXthY3Rpb259PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudmlkZW9Db250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bXV0ZX0+e211dGVCdXR0b25UZXh0fTwvYnV0dG9uPlxuICAgICAgICAgICAge2lzUGF1c2VkID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUGxheWluZ30+UGxheTwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbldhaXRpbmd9PlBhdXNlPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICByZWY9e3ZpZH1cbiAgICAgICAgICAgIHN0eWxlPXtjb21wdXRlZFN0eWxlc31cbiAgICAgICAgICAgIHNyYz17c3RvcnkudXJsfVxuICAgICAgICAgICAgY29udHJvbHM9e2ZhbHNlfVxuICAgICAgICAgICAgb25Mb2FkZWREYXRhPXt2aWRlb0xvYWRlZH1cbiAgICAgICAgICAgIHBsYXlzSW5saW5lXG4gICAgICAgICAgICBvbldhaXRpbmc9e29uV2FpdGluZ31cbiAgICAgICAgICAgIG9uUGxheWluZz17b25QbGF5aW5nfVxuICAgICAgICAgICAgbXV0ZWQ9e211dGVkfVxuICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgIHdlYmtpdC1wbGF5c2lubGluZT1cInRydWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyFsb2FkZWQgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5LFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2NjY1wiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9hZGVyIHx8IDxTcGlubmVyIC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dpdGhTZWVNb3JlPlxuICAgIDwvV2l0aEhlYWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3RvcnlDb250ZW50OiB7XG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gIH0sXG4gIHZpZGVvQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgYnV0dG9uc0NvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjI0cHhcIixcbiAgICByaWdodDogXCIyNHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgaGVpZ2h0OiBcIjEyOHB4XCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgdGVzdGVyOiBUZXN0ZXIgPSAoc3RvcnkpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb25kaXRpb246IHN0b3J5LnR5cGUgPT09IFwidmlkZW9cIixcbiAgICBwcmlvcml0eTogMixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyZXIsXG4gIHRlc3Rlcixcbn07XG4iLCJpbXBvcnQgaW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5pbXBvcnQgdmlkZW8gZnJvbSAnLi9WaWRlbyc7XG5pbXBvcnQgZGVmYXVsdFJlbmRlcmVyIGZyb20gJy4vRGVmYXVsdCc7XG5pbXBvcnQgYXV0b3BsYXlDb250ZW50IGZyb20gJy4vQXV0b1BsYXlDb250ZW50JztcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVycyA9IFtpbWFnZSwgdmlkZW8sIGF1dG9wbGF5Q29udGVudCwgZGVmYXVsdFJlbmRlcmVyXTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdG9yeSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5jb25zdCB3aXRoSGVhZGVyOiBSZWFjdC5GQzx7IHN0b3J5OiBTdG9yeSwgZ2xvYmFsSGVhZGVyOiBGdW5jdGlvbiB9PiA9ICh7IHN0b3J5LCBnbG9iYWxIZWFkZXIsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gPD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7c3RvcnkuaGVhZGVyICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgbGVmdDogMTIsIHRvcDogMjAsIHpJbmRleDogMTkgfX0+XG4gICAgICAgICAgICAgICAge3R5cGVvZiBzdG9yeSA9PT0gXCJvYmplY3RcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsSGVhZGVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsSGVhZGVyKHN0b3J5LmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e3N0b3J5LmhlYWRlci5oZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJoZWFkaW5nPXtzdG9yeS5oZWFkZXIuc3ViaGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUltYWdlPXtzdG9yeS5oZWFkZXIucHJvZmlsZUltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50VHlwZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY3Rpb24sIFNlZU1vcmVQcm9wcywgU3RvcnkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBTZWVNb3JlIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvU2VlTW9yZVwiO1xuXG5jb25zdCB3aXRoU2VlTW9yZTogUmVhY3QuRkM8e1xuICAgIHN0b3J5OiBTdG9yeSxcbiAgICBhY3Rpb246IEFjdGlvbixcbiAgICBjdXN0b21Db2xsYXBzZWQ/OiBTZWVNb3JlUHJvcHNbXCJjdXN0b21Db2xsYXBzZWRcIl1cbn0+ID0gKHsgc3RvcnksIGFjdGlvbiwgY3VzdG9tQ29sbGFwc2VkLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3Nob3dNb3JlLCBzZXRTaG93TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlTW9yZSA9IChzaG93KSA9PiB7XG4gICAgICAgIGFjdGlvbihzaG93ID8gJ3BhdXNlJyA6ICdwbGF5Jyk7XG4gICAgICAgIHNldFNob3dNb3JlKHNob3cpO1xuICAgIH1cbiAgICBjb25zdCBDb2xsYXBzZWRDb21wb25lbnQgPSBTZWVNb3JlO1xuICAgIHJldHVybiA8PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtzdG9yeS5zZWVNb3JlICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHNob3dNb3JlID8gJ3Vuc2V0JyA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNob3dNb3JlID8gJzEwMCUnIDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29sbGFwc2VkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNb3JlPXt0b2dnbGVNb3JlfVxuICAgICAgICAgICAgICAgICAgICBzaG93Q29udGVudD17c2hvd01vcmV9XG4gICAgICAgICAgICAgICAgICAgIHNlZU1vcmVDb250ZW50PXtzdG9yeS5zZWVNb3JlfVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Db2xsYXBzZWQ9e2N1c3RvbUNvbGxhcHNlZCB8fCBzdG9yeS5zZWVNb3JlQ29sbGFwc2VkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlZU1vcmU7IiwiaW1wb3J0IHsgUmVuZGVyZXIsIFN0b3J5LCBUZXN0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVuZGVyZXIgPSAoc3Rvcnk6IFN0b3J5LCByZW5kZXJlcnM6IHsgcmVuZGVyZXI6IFJlbmRlcmVyLCB0ZXN0ZXI6IFRlc3RlciB9W10pOiBSZW5kZXJlciA9PiB7XG4gICAgbGV0IHByb2JhYmxlID0gcmVuZGVyZXJzLm1hcChyID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICB0ZXN0ZXJSZXN1bHQ6IHIudGVzdGVyKHN0b3J5KVxuICAgICAgICB9XG4gICAgfSkuZmlsdGVyKHIgPT4gci50ZXN0ZXJSZXN1bHQuY29uZGl0aW9uKTtcbiAgICBwcm9iYWJsZS5zb3J0KChhLCBiKSA9PiBiLnRlc3RlclJlc3VsdC5wcmlvcml0eSAtIGEudGVzdGVyUmVzdWx0LnByaW9yaXR5KTtcbiAgICByZXR1cm4gcHJvYmFibGVbMF0ucmVuZGVyZXI7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sInNvdXJjZVJvb3QiOiIifQ==