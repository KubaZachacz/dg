(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(37);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(39);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(18);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(17);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(12);

var _helpers = __webpack_require__(40);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(12);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(38)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


var _templateObject;


var Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 16px;\n"])));

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(9);

// CONCATENATED MODULE: D:/Frontend/dgprawo_react/src/components/Router.js

// CONCATENATED MODULE: D:/Frontend/dgprawo_react/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: D:/Frontend/dgprawo_react/src/app.css
var app = __webpack_require__(47);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(2);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: D:/Frontend/dgprawo_react/src/components/ui.js
var ui = __webpack_require__(8);

// EXTERNAL MODULE: D:/Frontend/dgprawo_react/src/assets/logo.png
var logo = __webpack_require__(26);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: D:/Frontend/dgprawo_react/src/components/Navbar.js


var _templateObject, _templateObject2, _templateObject3, _templateObject4;






var Flex = styled_default.a.div(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var Nav = styled_default.a.nav(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  display: flex;\n  align-items: center;\n  padding: 16px;\n"])));
var NavLink = styled_default()(router_["Link"])(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  padding: 8px;\n  font-variant: small-caps;\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n  color: white;\n\n  @media (max-width: 991px) {\n    font-size: 16px;\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Logo = styled_default.a.img(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n  height: 50px;\n"])));

var Navbar_Navbar = function Navbar() {
  return /*#__PURE__*/external_react_default.a.createElement(ui["a" /* Container */], null, /*#__PURE__*/external_react_default.a.createElement(Flex, null, /*#__PURE__*/external_react_default.a.createElement(Logo, {
    src: logo_default.a,
    alt: "logo"
  }), /*#__PURE__*/external_react_default.a.createElement(Nav, null, /*#__PURE__*/external_react_default.a.createElement(NavLink, {
    to: "/"
  }, "O nas"), /*#__PURE__*/external_react_default.a.createElement(NavLink, {
    to: "/"
  }, "Specjalizacje"), /*#__PURE__*/external_react_default.a.createElement(NavLink, {
    to: "/"
  }, "Zesp\xF3\u0142"), /*#__PURE__*/external_react_default.a.createElement(NavLink, {
    to: "/"
  }, "Wynagrodzenie"), /*#__PURE__*/external_react_default.a.createElement(NavLink, {
    to: "/"
  }, "Kontakt"))));
};

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: D:/Frontend/dgprawo_react/src/App.js

 //




 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "Kancelaria Radcy Prawnego Dawid Gawrysiak"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: "Kancelaria Radcy Prawnego Dawid Gawrysiak. Dbanie o interes naszych klient\xF3w i \u015Bwiadczenie na ich rzecz obs\u0142ugi prawnej odpowiadaj\u0105cej ich potrzebom jest dla nas nadrz\u0119dn\u0105 warto\u015Bci\u0105 nieustannie powoduj\u0105c\u0105 konieczno\u015B\u0107 poszerzania posiadanych kompetencji."
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700",
    rel: "stylesheet"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto+Slab:400,700",
    rel: "stylesheet"
  })), /*#__PURE__*/external_react_default.a.createElement(components_Navbar, null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "\u0141adowanie...")
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(7);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("D:\\Frontend\\dgprawo_react\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(2);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: D:/Frontend/dgprawo_react/src/components/ui.js
var ui = __webpack_require__(8);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(13);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// CONCATENATED MODULE: D:/Frontend/dgprawo_react/src/components/HomeImage.js



function HomeImage(props) {
  return /*#__PURE__*/external_react_default.a.createElement("svg", extends_default()({
    id: "prefix__Warstwa_5",
    "data-name": "Warstwa 5",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1128.98 847.366"
  }, props), /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25",
    x1: 387.181,
    y1: 360.643,
    x2: 398.184,
    y2: 360.643,
    gradientTransform: "rotate(-2.776 -1367.098 161.686)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: 0,
    stopColor: "#88d392"
  }), /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: 0.376,
    stopColor: "#66bd8f"
  }), /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: 1,
    stopColor: "#66ab86"
  })), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-2",
    x1: 326.546,
    y1: 422.047,
    x2: 399.751,
    y2: 422.047,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-3",
    x1: 283.437,
    y1: 392.13,
    x2: 377.461,
    y2: 392.13,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-4",
    x1: 257.084,
    y1: 358.908,
    x2: 351.021,
    y2: 358.908,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-5",
    x1: 235.455,
    y1: 333.208,
    x2: 335.129,
    y2: 333.208,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-6",
    x1: 229.44,
    y1: 308.656,
    x2: 321.318,
    y2: 308.656,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-7",
    x1: 195.799,
    y1: 274.536,
    x2: 297.482,
    y2: 274.536,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-8",
    x1: 207.811,
    y1: 244.311,
    x2: 288.257,
    y2: 244.311,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-9",
    x1: 208.436,
    y1: 207.628,
    x2: 273.436,
    y2: 207.628,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-10",
    x1: 224.353,
    y1: 165.682,
    x2: 260.292,
    y2: 165.682,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-11",
    x1: 365.141,
    y1: 346.92,
    x2: 377.337,
    y2: 346.92,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-12",
    x1: 354.521,
    y1: 326.31,
    x2: 362.945,
    y2: 326.31,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-13",
    x1: 337.787,
    y1: 314.775,
    x2: 346.275,
    y2: 314.775,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-14",
    x1: 325.86,
    y1: 287.605,
    x2: 333.955,
    y2: 287.605,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-15",
    x1: 312.062,
    y1: 269.733,
    x2: 320.157,
    y2: 269.733,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-16",
    x1: 295.04,
    y1: 241.462,
    x2: 303.135,
    y2: 241.462,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-17",
    x1: 276.038,
    y1: 207.458,
    x2: 286.01,
    y2: 207.458,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-18",
    x1: 262.388,
    y1: 178.985,
    x2: 271.405,
    y2: 178.985,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-19",
    x1: 259.302,
    y1: 321.533,
    x2: 420.858,
    y2: 321.533,
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-20",
    x1: -1730.373,
    y1: 303.978,
    x2: -1719.37,
    y2: 303.978,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-21",
    x1: -1791.008,
    y1: 365.382,
    x2: -1717.802,
    y2: 365.382,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-22",
    x1: -1834.116,
    y1: 335.465,
    x2: -1740.093,
    y2: 335.465,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-23",
    x1: -1860.47,
    y1: 302.242,
    x2: -1766.532,
    y2: 302.242,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-24",
    x1: -1882.099,
    y1: 276.543,
    x2: -1782.425,
    y2: 276.543,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-25",
    x1: -1888.114,
    y1: 251.991,
    x2: -1796.236,
    y2: 251.991,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-26",
    x1: -1921.754,
    y1: 217.871,
    x2: -1820.072,
    y2: 217.871,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-27",
    x1: -1909.743,
    y1: 187.646,
    x2: -1829.297,
    y2: 187.646,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-28",
    x1: -1909.117,
    y1: 150.963,
    x2: -1844.118,
    y2: 150.963,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-29",
    x1: -1893.201,
    y1: 109.017,
    x2: -1857.261,
    y2: 109.017,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-30",
    x1: -1752.413,
    y1: 290.255,
    x2: -1740.217,
    y2: 290.255,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-31",
    x1: -1763.033,
    y1: 269.645,
    x2: -1754.608,
    y2: 269.645,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-32",
    x1: -1779.767,
    y1: 258.11,
    x2: -1771.279,
    y2: 258.11,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-33",
    x1: -1791.694,
    y1: 230.939,
    x2: -1783.598,
    y2: 230.939,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-34",
    x1: -1805.492,
    y1: 213.068,
    x2: -1797.397,
    y2: 213.068,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-35",
    x1: -1822.514,
    y1: 184.797,
    x2: -1814.419,
    y2: 184.797,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-36",
    x1: -1841.516,
    y1: 150.792,
    x2: -1831.543,
    y2: 150.792,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-37",
    x1: -1855.166,
    y1: 122.319,
    x2: -1846.148,
    y2: 122.319,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__Gradient_bez_nazwy_25-38",
    x1: -1858.251,
    y1: 264.868,
    x2: -1696.695,
    y2: 264.868,
    gradientTransform: "scale(-1 1) rotate(-2.775 -860.388 -20759.798)",
    xlinkHref: "#prefix__Gradient_bez_nazwy_25"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient",
    x1: -507.778,
    y1: 1599.128,
    x2: -479.193,
    y2: 1613.615,
    gradientTransform: "rotate(-52.913 -1318.61 227.493)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: 0.376,
    stopColor: "#00a651"
  }), /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: 0.778,
    stopColor: "#005826"
  })), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-2",
    x1: -552.286,
    y1: 1612.316,
    x2: -488.434,
    y2: 1644.676,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-3",
    x1: -598.018,
    y1: 1634.089,
    x2: -494.04,
    y2: 1686.785,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-4",
    x1: -630.325,
    y1: 1669.412,
    x2: -516.105,
    y2: 1727.297,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-5",
    x1: -653.67,
    y1: 1715.711,
    x2: -528.634,
    y2: 1779.079,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-6",
    x1: -648.378,
    y1: 1770.785,
    x2: -536.291,
    y2: 1827.591,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-7",
    x1: -437.994,
    y1: 1602.747,
    x2: -538.454,
    y2: 1620.499,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-8",
    x1: -412.65,
    y1: 1630.271,
    x2: -562.197,
    y2: 1656.697,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-9",
    x1: -394.754,
    y1: 1664.943,
    x2: -596.502,
    y2: 1700.593,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-10",
    x1: -421.801,
    y1: 1714.171,
    x2: -602.133,
    y2: 1746.037,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-11",
    x1: -348.135,
    y1: 1749.016,
    x2: -597.796,
    y2: 1793.132,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-12",
    x1: -487.956,
    y1: 1798.48,
    x2: -553.685,
    y2: 1836.786,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-13",
    x1: -444.28,
    y1: 1740.316,
    x2: -570.104,
    y2: 1762.55,
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-14",
    x1: -2342.675,
    y1: -663.445,
    x2: -2322.036,
    y2: -652.985,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-15",
    x1: -2374.81,
    y1: -653.923,
    x2: -2328.709,
    y2: -630.559,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-16",
    x1: -2407.829,
    y1: -638.203,
    x2: -2332.756,
    y2: -600.157,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-17",
    x1: -2431.155,
    y1: -612.7,
    x2: -2348.688,
    y2: -570.906,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-18",
    x1: -2448.01,
    y1: -579.271,
    x2: -2357.734,
    y2: -533.52,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-19",
    x1: -2444.189,
    y1: -539.507,
    x2: -2363.262,
    y2: -498.494,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-20",
    x1: -2292.291,
    y1: -660.832,
    x2: -2364.824,
    y2: -648.015,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-21",
    x1: -2273.992,
    y1: -640.96,
    x2: -2381.966,
    y2: -621.88,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-22",
    x1: -2261.071,
    y1: -615.926,
    x2: -2406.735,
    y2: -590.187,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-23",
    x1: -2280.6,
    y1: -580.383,
    x2: -2410.8,
    y2: -557.376,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-24",
    x1: -2227.412,
    y1: -555.225,
    x2: -2407.668,
    y2: -523.373,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-25",
    x1: -2328.364,
    y1: -519.511,
    x2: -2375.82,
    y2: -491.855,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "prefix__linear-gradient-26",
    x1: -2296.829,
    y1: -561.507,
    x2: -2387.675,
    y2: -545.454,
    gradientTransform: "matrix(-.52461 -.82932 -.83873 .53056 -905.294 -1109.647)",
    xlinkHref: "#prefix__linear-gradient"
  }), /*#__PURE__*/external_react_default.a.createElement("style", null, ".prefix__cls-73{fill:#d4eeff}.prefix__cls-3{fill:#88d392}.prefix__cls-41{opacity:.6}.prefix__cls-68{fill:#ef9849}.prefix__cls-69{fill:#e7f1fd}.prefix__cls-71{fill:#e68639}.prefix__cls-72{fill:#e6e6e6}.prefix__cls-74{fill:#ffaf7b}.prefix__cls-75{fill:#2a4f96}.prefix__cls-78{fill:#1b406d}.prefix__cls-79{fill:#213c73}.prefix__cls-81{fill:#ee985f}.prefix__cls-82{fill:#2b468b}.prefix__cls-83{fill:#23395e}.prefix__cls-84{fill:#253765}")), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M100.807 526.55S35.803 286.455 307.91 140.746 869.68 17.858 989.057 79.302s-3.511 236.997 18.433 280.885 134.735 135.678 5.71 246.271c-99.231 85.055-557.021 119.45-787.8 37.247-69.292-24.681-109.987-73.062-124.593-117.154z",
    stroke: "#d4eeff",
    strokeMiterlimit: 10,
    strokeWidth: 0.878,
    fill: "#d4eeff",
    id: "prefix__background"
  }), /*#__PURE__*/external_react_default.a.createElement("g", {
    id: "prefix__leafs"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M403.598 326.255s-12.032-51.59-10.234-101.948c0 0 21.577 69.137 10.234 101.948z",
    fill: "url(#prefix__Gradient_bez_nazwy_25)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M403.598 326.255s-21.915-18.432-10.234-101.948c0 0 6.823 71.89 10.234 101.948z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M410.198 334.365a245.333 245.333 0 00-73.092 4.12s43.997 10.681 73.092-4.12z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-2)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M410.198 334.365s-5.58-17.727-73.092 4.12c0 0 51.691-3.268 73.092-4.12z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M387.141 319.099s-46.777-16.92-95.095-19.825c0 0 61.616 28.156 95.095 19.825z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-3)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M387.141 319.099s-13.255-23.751-95.095-19.825c0 0 67.134 13.584 95.095 19.825z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M359.353 291.92s-47.643-20.89-95.43-28.517c0 0 63.33 33.137 95.43 28.517z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-4)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M359.353 291.92s-15.355-24.07-95.43-28.517c0 0 67.33 19.738 95.43 28.517z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M342.418 270.803s-51.114-24.629-101.519-35.638c0 0 68.293 38.253 101.52 35.638z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-5)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M342.418 270.803s-17.597-25.75-101.519-35.638c0 0 71.602 24.752 101.52 35.638z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M327.818 254.85s-46.51-32.677-94.498-51.802c0 0 61.285 48.936 94.498 51.803z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-6)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M327.818 254.85s-13.25-28.29-94.498-51.802c0 0 66.711 36.158 94.498 51.803z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M302.277 220.268s-50.52-31.65-104.13-48.013c0 0 65.974 48.268 104.13 48.013z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-7)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M302.277 220.268s-12.463-30.213-104.13-48.013c0 0 73.553 33.434 104.13 48.013z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M292.309 205.156s-38.36-45.932-84.337-78.304c0 0 47.968 66.574 84.337 78.304z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-8)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M292.309 205.156s-2.603-32.624-84.337-78.304c0 0 59.719 54.855 84.337 78.304z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M275.768 170.059s-32.304-46.32-68.988-80.702c0 0 41.216 66.435 68.988 80.702z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-9)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M275.768 170.059s-4.84-30.64-68.988-80.702c0 0 48.798 56.593 68.988 80.702z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M261.004 136.948s-16.457-54.183-40.752-98.408c0 0 18.74 76.1 40.752 98.408z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-10)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M261.004 136.948s4.826-30.63-40.752-98.408c0 0 28.976 69.142 40.752 98.408z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M383.608 310.798s-13.105-49.093-13.694-96.406c0 0 22.478 66.035 13.694 96.406z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-11)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M383.608 310.798s-20.558-18.331-13.694-96.406c0 0 9.302 67.964 13.694 96.406z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M365.375 291.262s-8.358-50.14-4.426-97.284c0 0 16.07 67.918 4.426 97.284z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-12)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M365.375 291.262s-18.713-20.255-4.426-97.284c0 0 2.77 68.548 4.426 97.284z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M350.265 277.695s-9.635-47.495-8.41-91.588c0 0 17.193 64.562 8.41 91.588z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-13)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M350.265 277.695s-17.27-19.92-8.41-91.588c0 0 5.621 64.518 8.41 91.588z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M332.695 254.916s-4.915-52.276.895-99.182c0 0 10.858 71.714-.895 99.182z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-14)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M332.695 254.916s-15.554-24.038.895-99.182c0 0-.94 69.82-.895 99.182z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M318.048 237.734s-4.915-52.276.895-99.183c0 0 10.858 71.715-.895 99.183z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-15)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M318.048 237.734s-15.555-24.038.895-99.183c0 0-.94 69.82-.895 99.183z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M299.677 210.32s-4.915-52.276.895-99.183c0 0 10.858 71.715-.895 99.183z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-16)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M299.677 210.32s-15.555-24.038.895-99.183c0 0-.94 69.82-.895 99.183z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M278.568 173.813s-3.082-48.493 4.566-92.39c0 0 8.42 66.37-4.566 92.39z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-17)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M278.568 173.813s-14.962-21.797 4.566-92.39c0 0-3.53 65.05-4.566 92.39z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M263.342 141.647s-2.79-43.865 4.125-83.573c0 0 7.62 60.037-4.125 83.573z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-18)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M263.342 141.647s-13.534-19.718 4.125-83.573c0 0-3.189 58.842-4.125 83.573z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M259.706 130.603s12.109 46.577 44.818 93.435 92.39 115.54 125.594 122.803c0 0 4.68-4.797-1.756-6.998s-32.076-16.704-54.716-40.731-46.76-46.968-67.802-81.558-46.138-86.951-46.138-86.951z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-19)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M700.602 372.195s12.032-51.59 10.235-101.948c0 0-21.578 69.137-10.235 101.948z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-20)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M700.602 372.195s21.915-18.432 10.235-101.948c0 0-6.824 71.89-10.235 101.948z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M694.002 380.305a245.333 245.333 0 0173.092 4.12s-43.997 10.68-73.092-4.12z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-21)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M694.002 380.305s5.58-17.727 73.092 4.12c0 0-51.691-3.268-73.092-4.12z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M717.06 365.039s46.776-16.92 95.094-19.825c0 0-61.616 28.156-95.095 19.825z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-22)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M717.06 365.039s13.254-23.751 95.094-19.825c0 0-67.134 13.584-95.095 19.825z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M744.847 337.86s47.643-20.89 95.43-28.517c0 0-63.33 33.137-95.43 28.517z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-23)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M744.847 337.86s15.355-24.07 95.43-28.517c0 0-67.33 19.738-95.43 28.517z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M761.782 316.743s51.114-24.629 101.52-35.638c0 0-68.294 38.253-101.52 35.638z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-24)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M761.782 316.743s17.597-25.75 101.52-35.638c0 0-71.603 24.752-101.52 35.638z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M776.382 300.79s46.51-32.677 94.498-51.802c0 0-61.285 48.936-94.498 51.803z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-25)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M776.382 300.79s13.25-28.29 94.498-51.802c0 0-66.711 36.158-94.498 51.803z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M801.923 266.208s50.52-31.65 104.13-48.013c0 0-65.974 48.268-104.13 48.013z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-26)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M801.923 266.208s12.463-30.213 104.13-48.013c0 0-73.553 33.434-104.13 48.013z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M811.891 251.096s38.36-45.932 84.338-78.304c0 0-47.969 66.574-84.338 78.304z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-27)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M811.891 251.096s2.603-32.624 84.338-78.304c0 0-59.72 54.855-84.338 78.304z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M828.432 215.999s32.304-46.32 68.988-80.702c0 0-41.216 66.435-68.988 80.702z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-28)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M828.432 215.999s4.84-30.64 68.988-80.702c0 0-48.797 56.593-68.988 80.702z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M843.196 182.888s16.458-54.183 40.752-98.408c0 0-18.74 76.1-40.752 98.408z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-29)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M843.196 182.888s-4.826-30.63 40.752-98.408c0 0-28.976 69.142-40.752 98.408z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M720.592 356.738s13.105-49.093 13.694-96.406c0 0-22.478 66.035-13.694 96.406z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-30)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M720.592 356.738s20.558-18.331 13.694-96.406c0 0-9.302 67.964-13.694 96.406z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M738.825 337.202s8.358-50.14 4.426-97.284c0 0-16.07 67.918-4.426 97.284z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-31)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M738.825 337.202s18.713-20.255 4.426-97.284c0 0-2.77 68.548-4.426 97.284z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M753.935 323.635s9.635-47.495 8.41-91.588c0 0-17.193 64.562-8.41 91.588z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-32)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M753.935 323.635s17.27-19.92 8.41-91.588c0 0-5.621 64.518-8.41 91.588z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M771.505 300.856s4.915-52.276-.895-99.182c0 0-10.858 71.714.895 99.182z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-33)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M771.505 300.856s15.554-24.038-.895-99.182c0 0 .94 69.82.895 99.182z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M786.153 283.674s4.914-52.276-.895-99.183c0 0-10.859 71.715.895 99.183z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-34)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M786.153 283.674s15.554-24.038-.895-99.183c0 0 .939 69.82.895 99.183z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M804.523 256.26s4.915-52.276-.895-99.183c0 0-10.858 71.715.895 99.183z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-35)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M804.523 256.26s15.555-24.038-.895-99.183c0 0 .94 69.82.895 99.183z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M825.632 219.753s3.082-48.493-4.566-92.39c0 0-8.42 66.37 4.566 92.39z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-36)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M825.632 219.753s14.962-21.797-4.566-92.39c0 0 3.53 65.05 4.566 92.39z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M840.858 187.587s2.79-43.865-4.125-83.573c0 0-7.62 60.037 4.125 83.573z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-37)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-3",
    d: "M840.858 187.587s13.534-19.718-4.125-83.573c0 0 3.19 58.842 4.125 83.573z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M844.494 176.543s-12.109 46.576-44.818 93.435-92.39 115.54-125.593 122.803c0 0-4.68-4.797 1.756-6.998s32.075-16.704 54.715-40.731 46.76-46.968 67.802-81.558 46.138-86.951 46.138-86.951z",
    fill: "url(#prefix__Gradient_bez_nazwy_25-38)"
  }), /*#__PURE__*/external_react_default.a.createElement("g", {
    className: "prefix__cls-41"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M267.895 368.83s-5.19 12.84-9.932 20.959 32.469 35.73 32.469 35.73l14.582-.163z",
    fill: "url(#prefix__linear-gradient)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M291.298 414.988s-4.716 4.074-14.82-6.02-18.515-19.18-18.515-19.18-10.97 11.625-1.556 20.105 25.395 18.379 21.411 24.37-14.666 7.132-22.92-6.853-10.732-15.038-10.732-15.038l-2.772 7.999s-5.423 23.776 17.893 36.603 59.998 16.275 59.998 16.275l1.51-19.322z",
    fill: "url(#prefix__linear-gradient-2)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M317.577 464.319s-18.005.36-41.81-8.934-34.461-23.349-34.373-35.014c0 0-15.867 28.93 5.84 44.247s48.105 9.991 56.056 13.91 18.523 14.836 7.26 18.91-25.585 3.888-50.773-11.878-25.471-21.165-25.153-13.285 1.085 21.017 3.157 25.781 15.314 16.556 40.342 16.65 54.947.612 69.147 7.799 7.98-19.235 7.98-19.235z",
    fill: "url(#prefix__linear-gradient-3)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M351.55 512.673l19.484 28.775-41.752 16.024-35.338 9.573-46.325-20.286s-12.46-20.331-.71-19.634 26.834 6.37 39.825 12.644 48.794-7.041 32.219-17.116-26.606-5.106-42.582-4.906-32.92-2.65-38.59-19.69c0 0 12.544 12.279 27.69 12.815s67.732-7.675 86.08 1.801z",
    fill: "url(#prefix__linear-gradient-4)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M371.704 539.611s15.038 15.463 19.752 18.986-18.162 43.877-33.468 51.132-31.079 11.156-44.807 4.052-46.433-37.828-39.87-35.322 34.578 7.313 55.784 5.609 40.358-24.877 26.216-26.019-24.228 6.786-40.619 12.949-50.332 3.422-67.073-24.239c0 0 34.066 15.93 53.446 13.392s48.59-26.02 70.639-20.54z",
    fill: "url(#prefix__linear-gradient-5)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M419.712 578.244s-10.373-6.129-28.256-19.647c0 0-11.664 29.145-33.52 41.816a105.831 105.831 0 01-44.755 13.368s34 22.155 51.113 8.9 16.647-27.796 18.358-19.954.667 19.33 9.969 11.355 17.038-33.728 27.09-35.838z",
    fill: "url(#prefix__linear-gradient-6)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M267.895 368.83s23.724 57.404 30.513 65.265 12.342-25.23 12.489-25.664-3.71-31.906-3.998-32.488-9.568-17.419-19.62-14.468c0 0-3.39-1.29 2.764 5.727s10.273 30.139 3.232 23.725-2.6-6.514-6.517-14.567-18.293-12.373-18.863-7.53z",
    fill: "url(#prefix__linear-gradient-7)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M298.408 434.095s21.805 38.808 30.553 48.991.087-24.557 4.461-30.344 14.535-52.673 14.535-52.673-9.849-27.635-10.108-28.013-7.434-6.529-12.365-6.983-8.178-1.453-9.488-.442 17.385 14.779 9.838 30.537-10.948-5.73-11.287-15.627-11.305-18.73-16.73-19.013a41.817 41.817 0 00-10.538.947s16.824 1.805 17.8 20.004 4.69 41.196-6.67 52.616z",
    fill: "url(#prefix__linear-gradient-8)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M356.012 518.382s-23.162-29.513-29.395-38.59 4.29-26.85 10.02-46.942 11.094-41.865 2.285-53.071-13.438-14.706-13.438-14.706 20.457.368 30.164 19.528 5.419 40.474-6.128 55.027-7.147 32.794 5.922 29.941 23.277-31.514 13.23-60.571-15.938-36.422-15.938-36.422l12.745 5.997 26.043 19.687s1.533 54.998-1.323 58.295-34.187 61.827-34.187 61.827z",
    fill: "url(#prefix__linear-gradient-9)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M353.44 515.529s13.945 26.547 28.478 35.714 41.25-64.673 41.25-64.673 23.347-27.277 9.518-53.737-23.918-28.994-23.918-28.994S417 413.882 416 440.228s-38.122 81.952-39.2 60.038 21.297-37.558 25.067-52.17 4.563-40.203-3.003-49.924-33.386-19.599-33.386-19.599 23.466 18.284 24.502 43.622-21.064 52.649-32.393 71.004-4.148 22.33-4.148 22.33z",
    fill: "url(#prefix__linear-gradient-10)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M381.918 551.243s14.52 12.795 19.412 15.948 10.878-14.15 20.56-19.017 25.263-22.465 25.263-22.465a15.109 15.109 0 013.414-6.013c2.398-2.314 9.76-5.513 13.275-9.711s7.159-25.817-.053-44.91-15.288-24.289-15.288-24.289 6.099 14.069 3.927 28.25-7.524 24.871-13.477 26.01-1.536-8.074-.069-12.421 10.254-40.995-4.249-58.142-25.865-20.644-25.865-20.644 25.102 15.156 21.05 50.835-41.058 90.646-47.9 96.57z",
    fill: "url(#prefix__linear-gradient-11)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M419.712 578.244s-12.598-9.682-.272-11.55 22.225-6.664 33.165-21.858 10.193-18.486 3.256-17.455-9.843.199-8.708-1.672-38.254 19.92-45.823 41.482c0 0 12.207 12.003 18.382 11.053z",
    fill: "url(#prefix__linear-gradient-12)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M267.895 368.83c1.021 3.642 2.23 7.227 3.525 10.778l.968 2.664 1.027 2.643a155.949 155.949 0 002.108 5.262c1.416 3.504 2.965 6.952 4.501 10.404.763 1.728 1.605 3.42 2.403 5.133.823 1.7 1.586 3.43 2.459 5.106a425.5 425.5 0 0022.322 39.419c2.066 3.161 4.1 6.342 6.19 9.485l6.446 9.313c1.054 1.566 2.197 3.07 3.313 4.592l3.358 4.559q3.342 4.563 6.764 9.1c9.121 12.083 17.888 24.446 26.536 36.85 4.336 6.194 8.662 12.385 13.326 18.247a91.604 91.604 0 0015.674 15.808l2.231 1.669c.75.548 1.466 1.137 2.264 1.626l4.677 3.06c3.235 1.88 6.42 3.83 9.775 5.533 1.664.87 3.303 1.779 4.988 2.614l5.064 2.497 10.195 5.004c13.604 6.73 26.914 14.035 40.004 21.714 13.08 7.73 25.907 15.768 38.411 24.563l-3.084 4.216c-12.115-8.786-24.823-17.014-37.674-24.857-12.89-7.813-26.01-15.262-39.425-22.14l-10.1-5.14-5.074-2.592c-1.69-.868-3.346-1.818-5.02-2.723-3.367-1.773-6.61-3.817-9.883-5.786l-4.77-3.22c-.81-.513-1.55-1.136-2.317-1.714l-2.286-1.763a94.729 94.729 0 01-15.957-16.55c-4.667-6.043-8.92-12.325-13.168-18.581-8.472-12.534-17.03-24.977-25.962-37.17q-3.338-4.572-6.638-9.205l-3.304-4.622c-1.097-1.544-2.221-3.068-3.257-4.655l-6.33-9.435c-2.053-3.183-4.047-6.404-6.073-9.603a426.488 426.488 0 01-21.803-39.828c-.85-1.691-1.59-3.435-2.39-5.15-.774-1.726-1.593-3.432-2.332-5.175-1.489-3.479-2.99-6.952-4.357-10.481a156.162 156.162 0 01-2.034-5.297l-.99-2.66-.93-2.68c-1.245-3.571-2.403-7.176-3.371-10.831z",
    fill: "url(#prefix__linear-gradient-13)"
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    className: "prefix__cls-41"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M880.206 453.365a141.42 141.42 0 005.745 15.403c2.862 6.016-25.352 23.519-25.352 23.519l-10.366-.925z",
    fill: "url(#prefix__linear-gradient-14)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M860.645 484.776s3.1 3.148 10.924-3.444 14.382-12.564 14.382-12.564 7.072 8.846-.16 14.334-19.226 11.614-16.77 16.082 9.986 5.867 16.74-3.585 8.583-10.062 8.583-10.062l1.469 5.822a24.531 24.531 0 01-15.038 24.947c-17.397 7.796-43.713 8.204-43.713 8.204l.144-13.776z",
    fill: "url(#prefix__linear-gradient-15)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M838.84 518.276s12.788 1.254 30.31-4.01 25.99-14.635 26.663-22.907c0 0 9.466 21.383-6.943 31.033s-34.856 4.41-40.76 6.746-14.114 9.486-6.357 12.998 17.958 4.175 36.872-5.6 19.456-13.585 18.733-8.018-2.096 14.833-3.87 18.094-11.94 10.883-29.753 9.561-39.132-2.616-49.688 1.69-4.465-14.075-4.465-14.075z",
    fill: "url(#prefix__linear-gradient-16)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M811.621 550.658l-15.676 19.31 28.696 13.672 24.54 8.745 34.238-11.805s10.146-13.717 1.742-13.875-19.493 3.025-29.132 6.75-34.272-7.697-21.844-13.916 19.251-2.143 30.605-1.114 23.59-.051 28.698-11.813c0 0-9.7 8.006-20.51 7.546s-47.706-9.198-61.357-3.5z",
    fill: "url(#prefix__linear-gradient-17)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M795.584 568.63s-11.673 10.123-15.25 12.358 10.158 32.1 20.59 38.091 21.41 9.63 31.624 5.359 35.42-24.231 30.593-22.82-25.063 3.264-40.042.88-27.147-19.869-17.013-19.893 16.81 6.153 28.083 11.43 35.596 5.218 49.25-13.455c0 0-25.242 9.399-38.87 6.524s-32.932-21.135-48.965-18.475z",
    fill: "url(#prefix__linear-gradient-18)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M758.993 593.343a245.135 245.135 0 0021.342-12.355s6.462 21.3 21.213 31.493a75.108 75.108 0 0031 11.957s-25.586 13.813-36.927 3.47-10.092-20.621-11.803-15.16-1.693 13.662-7.809 7.495-9.996-24.847-17.016-26.9z",
    fill: "url(#prefix__linear-gradient-19)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M880.206 453.365s-20.497 39.363-25.823 44.557-7.191-18.564-7.268-18.88 4.65-22.405 4.891-22.801 7.906-11.813 14.872-9.164c0 0 2.493-.726-2.328 3.905s-9.209 20.788-3.795 16.633 2.261-4.471 5.555-9.96 13.795-7.754 13.896-4.29z",
    fill: "url(#prefix__linear-gradient-20)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M854.383 497.922s-17.96 26.292-24.825 33.022 1.486-17.407-1.262-21.751-7.022-38.134-7.022-38.134 8.749-19.037 8.957-19.29 5.7-4.214 9.238-4.262 5.91-.576 6.778.213-13.3 9.508-8.924 21.094 8.15-3.453 9.016-10.447 9.223-12.647 13.101-12.546a29.831 29.831 0 017.438 1.256s-12.084.345-13.925 13.188-5.934 28.934 1.43 37.657z",
    fill: "url(#prefix__linear-gradient-21)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M808.087 554.456s18.339-19.63 23.346-25.717-1.36-19.264-4.17-33.82-5.256-30.285 1.718-37.737 10.488-9.675 10.488-9.675-14.579-.875-22.692 12.165a36.254 36.254 0 00.892 39.335c7.298 10.953 3.018 23.636-6.1 20.89s-14.576-23.625-5.597-43.66 13.636-24.925 13.636-24.925l-9.446 3.542-19.77 12.506s-4.557 38.89-2.732 41.385 20.427 45.71 20.427 45.71z",
    fill: "url(#prefix__linear-gradient-22)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M810.096 552.576s-11.594 18.04-22.512 23.73-25.273-48.12-25.273-48.12-14.892-20.626-3.385-38.61 18.844-19.22 18.844-19.22-6.49 6.661-7.44 25.387 21.96 60.19 24.108 44.721-12.786-27.797-14.548-38.36-.713-28.745 5.283-35.214 24.989-12.036 24.989-12.036-17.848 11.655-20.182 29.554 11.67 38.478 18.573 52.114 1.543 16.054 1.543 16.054z",
    fill: "url(#prefix__linear-gradient-23)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M787.584 576.306s-11.137 8.26-14.816 10.223-6.848-10.63-13.43-14.617-16.558-17.321-16.558-17.321a10.597 10.597 0 00-2.05-4.45c-1.56-1.774-6.597-4.45-8.833-7.62s-3.467-18.692 2.867-31.822 12.409-16.364 12.409-16.364-5.226 9.631-4.575 19.802 3.786 18.042 7.95 19.179 1.602-5.636.832-8.798-4.713-29.62 6.687-40.967 19.703-13.194 19.703-13.194-18.815 9.347-18.18 34.856 23.5 66.515 27.994 71.093z",
    fill: "url(#prefix__linear-gradient-24)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M758.993 593.343s9.573-6.163.921-8.17-15.393-5.956-22.219-17.33-6.087-13.666-1.216-12.55 6.99.686 6.3-.702 25.963 16.239 29.989 31.938c0 0-9.442 7.83-13.775 6.814z",
    fill: "url(#prefix__linear-gradient-25)"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M880.206 453.365c-.956 2.523-2.042 4.997-3.187 7.442l-.857 1.834-.897 1.816a112 112 0 01-1.832 3.612c-1.228 2.404-2.548 4.762-3.858 7.123-.652 1.182-1.358 2.335-2.034 3.504-.692 1.16-1.344 2.342-2.07 3.482a306.728 306.728 0 01-18.367 26.696c-1.669 2.125-3.316 4.267-5.002 6.378l-5.173 6.242c-.848 1.051-1.756 2.054-2.646 3.07l-2.677 3.045q-2.665 3.048-5.386 6.074c-7.25 8.055-14.267 16.33-21.202 24.641-3.475 4.149-6.943 8.295-10.631 12.19a66.335 66.335 0 01-12.148 10.333l-1.692 1.06c-.568.346-1.115.724-1.713 1.026l-3.52 1.909c-2.42 1.153-4.81 2.358-7.304 3.38-1.24.523-2.462 1.076-3.714 1.575l-3.76 1.488-7.57 2.98c-10.102 4.014-20.032 8.453-29.83 13.169-9.793 4.751-19.426 9.736-28.877 15.275l1.929 3.159c9.173-5.554 18.734-10.68 28.371-15.525 9.663-4.821 19.467-9.373 29.446-13.502l7.509-3.082 3.774-1.556c1.257-.521 2.495-1.102 3.743-1.65 2.507-1.07 4.944-2.339 7.396-3.553l3.597-2.016c.608-.32 1.174-.72 1.756-1.087l1.738-1.122a68.588 68.588 0 0012.396-10.844c3.702-4.023 7.123-8.238 10.54-12.436 6.818-8.412 13.69-16.755 20.813-24.9q2.664-3.055 5.303-6.155l2.643-3.092c.878-1.033 1.773-2.051 2.61-3.118l5.1-6.335c1.66-2.142 3.282-4.313 4.925-6.468a307.33 307.33 0 0018.022-27.015c.712-1.15 1.348-2.346 2.025-3.516.66-1.18 1.35-2.344 1.985-3.538 1.279-2.383 2.565-4.761 3.76-7.186.62-1.201 1.206-2.419 1.782-3.641l.872-1.83.83-1.847c1.111-2.462 2.162-4.952 3.082-7.489z",
    fill: "url(#prefix__linear-gradient-26)"
  }))), /*#__PURE__*/external_react_default.a.createElement("g", {
    id: "prefix__notepad"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    className: "prefix__cls-68",
    x: 327.93,
    y: 112.803,
    width: 468.072,
    height: 610.664,
    rx: 23.535,
    ry: 23.535
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    className: "prefix__cls-69",
    x: 350.002,
    y: 139.803,
    width: 423.928,
    height: 564,
    rx: 12.551,
    ry: 12.551
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    x: 364.062,
    y: 147.803,
    width: 395.808,
    height: 541,
    rx: 3.053,
    ry: 3.053,
    fill: "#fff"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    className: "prefix__cls-71",
    x: 470.597,
    y: 108.919,
    width: 182.333,
    height: 52.602,
    rx: 7.019,
    ry: 7.019
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-72",
    d: "M610.301 233.803H734.68v37.75H610.301zM610.301 279.053H734.68v7.987H610.301zM499.777 341.816h124.379v7.987H499.777zM543.93 600.316h80.225v7.987H543.93zM655.455 600.316h80.225v7.987h-80.225zM655.455 615.566h80.225v7.987h-80.225zM388.252 374.256H735.68v8.163H388.252zM388.252 391.006H735.68v8.163H388.252zM388.252 407.756H735.68v8.163H388.252zM388.252 424.506H735.68v8.163H388.252zM388.252 441.256H735.68v8.163H388.252zM388.252 458.006H735.68v8.163H388.252zM388.252 474.756H735.68v8.163H388.252zM388.252 491.506H735.68v8.163H388.252zM388.252 508.256H735.68v8.163H388.252zM388.252 525.006H735.68v8.163H388.252zM388.252 541.756H735.68v8.163H388.252z"
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    id: "prefix__person_right"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-73",
    d: "M78.08 761.348a8.765 8.765 0 006.6-4.462c1.027-1.888 1.042-6.5 3.667-9.158 11.588-11.735 132.263-7.609 197.263-6.609s220 18 174 33.5-245.167 21-325.5 18.667-90-12.292-85.808-21.239c3.512-7.495 14.369-8.724 24.83-10.135 1.551-.21 3.287-.349 4.948-.564z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-74",
    d: "M163.323 749.416s-.918 11.02 5.51 12.857 10.101-5.51 10.101-5.51l.919-7.347s-.919-5.51-1.837-16.53a137.37 137.37 0 010-21.12H159.65s6.428 28.467 3.673 37.65zM313.928 755.845s-26.632-33.978-29.387-41.325h-18.366s8.265 14.693 15.611 22.04 22.958 21.121 22.958 21.121z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-75",
    d: "M180.924 715.974H158.35s-27.32-155.885-27.167-191.24 102.852-13.622 102.852-13.622l5.51 7.347s30.763 171.573 48.824 197.515c0 0-23.8 1.99-26.02.842 0 0-36.948-50.416-48.288-90.684-11.25-39.947-27.09-62.446-27.09-62.446s-3.253 148.462-6.046 152.288z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M130.263 377.496s-14.693-23.876-6.428-39.488 24.795-8.264 23.877-33.977 8.264-41.325 14.693-46.835 19.284-1.837 21.121-1.837 12.857-2.755 18.367 5.51 6.243 6.575 9.183 10.102c4.591 5.51.918 22.958.918 25.713s2.755 34.896-6.428 37.651z",
    fill: "#aa453d"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M211.994 296.684c0-.081.004-.177.01-.283a20.903 20.903 0 01-2.418-3.325c-2.418-4.003-19.292 27.72-19.292 27.72v16.088l5.782 2.89 9.49-5.439c9.183-2.755 6.428-34.896 6.428-37.651z",
    fill: "#722d2b"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-78",
    d: "M163.304 748.996s5.127 5.012 10.293 3.864 5.87-3.29 6.256-3.687c0 0 1.337 11.77.639 14.937-.587 2.659-12.254 2.93-16.478 1.023a2.213 2.213 0 01-1.264-1.915c-.17-3.16-.546-12.18.554-14.222zM321.805 764.575a.377.377 0 00.34-.54c-1.05-2.187-5.31-10.391-10.389-10.981-5.864-.682-8.561-1.284-15.965-9.262s-16.328-12.513-17.763-11.48-4.047 4.898-1.1 14.235 5.04 16.807 4.696 18.682h4.324l-.048-18.108a5.596 5.596 0 015.567 2.908c1.42 2.585 5.666 9.473 7.76 12.85a4.01 4.01 0 003.454 1.897z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-79",
    d: "M144.612 536.825c7.002-9.872 15.153-15.382 13.545-21.007-.852-2.984-6.261-6.162-11.786-7.82-9.117 2.989-15.152 8.192-15.19 16.736-.152 35.355 27.168 191.24 27.168 191.24h9.221s-13.277-61.298-16.644-79.358-13.316-89.919-6.314-99.791z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-74",
    d: "M234.034 452.799s21.121 35.814 22.04 38.57 0 6.427 2.755 9.182 1.836 3.674 2.755 4.592 2.755-1.837.918-6.428c0 0 7.346.918 7.346 7.346s2.755 8.265 3.674 8.265 2.755-11.02.918-16.53c-.65-1.948-5.51-7.346-10.102-9.183s-14.693-40.406-14.693-40.406z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-79",
    d: "M262.349 716.816c.974.504 6.11.403 11.565.131s-20.71-32.387-25.072-40.193-23.685-53.76-27.512-73.657-31.95-77.177-31.95-77.177l-2.41 37.766s15.84 22.499 27.09 62.446c11.34 40.268 48.289 90.684 48.289 90.684z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-75",
    d: "M252.247 448.207s-6.658-10.637-7.576-21.198-7.997-70.175-12.589-77.407-24.488-20.318-44.5-20.777c0 0-23.876.536-34.437 5.204s-21.351 10.56-22.422 34.437-2.067 42.549 3.673 65.392c0 0 2.86.51 7.466.916l-.464 1.38-27.205 82.993s66.126 27.55 129.142-2.755l-6.912-61.01c3.215-.676 12.154-2.882 15.824-7.175z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-69",
    d: "M174.185 328.714l1.076.111s2.755 6.428 11.938 6.428 11.02-4.39 11.02-4.39l1.837 3.472s15.611 36.733 15.611 44.08 1.837 96.423 1.837 96.423-31.223 3.674-38.57 2.755c0 0 12.857-82.649 12.857-92.75 0-8.896-15.253-44.608-18.993-53.233-.374-.864.446-2.896 1.387-2.896z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "#a24c4b",
    d: "M199.247 404.342l47.601 17.036 8.234 1.163-6.289-4.78-48.186-17.051-1.36 3.632z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-74",
    d: "M172.334 413.54s37.823-.23 43.333-2.984 9.184-7.347 16.53-4.592 10.102 7.347 11.02 9.183-3.673.919-8.265.919-6.428 2.755-11.02 3.673-2.755-.918-9.183.918-22.04 9.484-43.161 11.32l1.28-4.844a21.41 21.41 0 00.246-9.91zM172.506 295.766v10.101a3.262 3.262 0 001.837 2.755v20.839a7.75 7.75 0 005.436 7.38 28.17 28.17 0 0011.094 1.167c10.101-.918 7.346-6.428 7.346-6.428v-11.938s8.265.918 10.102-7.347a100.04 100.04 0 001.836-18.366 16.77 16.77 0 01-2.755-11.938s-1.836-8.265-6.428-9.183c0 0-9.183 23.876-28.468 22.958z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-81",
    d: "M198.22 327.103s-13.89.861-19.4-12.627c0 0 12.454 7.462 19.4 5.855z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-79",
    d: "M129.73 471.752s22-7.245 35.315-36.746a147.328 147.328 0 01-23.183-.232zM170.746 413.426s-11.785-.421-15.917-3.712c0 0 6.81-25.866 6.81-29.54s10.025 17.029 9.107 33.252z"
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    id: "prefix__person_left"
  }, /*#__PURE__*/external_react_default.a.createElement("ellipse", {
    className: "prefix__cls-73",
    cx: 903.729,
    cy: 765.229,
    rx: 147.869,
    ry: 24.241
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-74",
    d: "M726 366.854s9.667-4 14.25-3.833 8.25 9.053 11.417 11.776a15.696 15.696 0 012.501 1.975c1.52 3.596-3.334 10.332-3.334 10.332l-15.417-2.834z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-82",
    d: "M730.612 257.77a47.25 47.25 0 10-24.003 66.04l32.94 61.784a5 5 0 008.824-4.705l-32.94-61.783a47.254 47.254 0 0015.179-61.337zm-23.7 55.98a38.25 38.25 0 1115.758-51.747 38.25 38.25 0 01-15.758 51.748z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-74",
    d: "M738.917 385.02c-11.75 3.584-14.416-11.583-15.083-13.5s-.667-6.25 5.333-7.25 10.584 6.167 10.584 10.527a8.939 8.939 0 01-2.75 6.64z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-83",
    d: "M858.266 523.01s-23.697 1.055-28.624-2.464c0 0 11.966-137.02 19.474-161.421s26.63-38.068 35.252-42.584 17.538 8.876 17.538 8.876z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-84",
    d: "M839.005 768.387l45.375-.311s3.18-.398 3.339-3.18.556-18.6.556-18.6l-17.885-3.021s-.875 6.12-10.016 11.764c-8.803 5.435-21.661 3.13-22.388 12.251a1.02 1.02 0 001.02 1.097zM963.474 767.837s-.874-4.849 1.829-5.405 9.896-2.464 10.85-8.128.775-24.742.775-24.742l11.805-7.094s6.916 4.65 10.016 8.585 5.425 7.452 3.338 10.97-8.644 10.075-9.519 13.89-4.928 11.845-10.413 11.924-18.68 0-18.68 0z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-83",
    d: "M756.57 393.578s60.225 33.611 68.987 34.646 21.383-13.642 24.818-19 42.211-40.877 35.351-58.017-22.107-16.447-25.116-11.842-31.086 55.63-33.434 56.192-73.622-21.3-73.622-21.3-1.204 11.18-5.775 13.28z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-68",
    d: "M890.66 748.163s-17.647 3.22-23.847-4.889c-5.712-7.468-17.914-217.475-19.811-250.562-.016-.27.021-.57.024-.817a8.832 8.832 0 01.699-3.665l85.781-9.583s4.85 39.269 3.18 48.57 10.254 40.063 22.655 58.187 29.173 75.954 35.533 137.064c0 0-4.89 9.598-19.555 10.194L910.93 615.213s-11.446 106.599-20.27 132.95z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-71",
    d: "M847.461 488.26a41.096 41.096 0 00-.261 8.786 13352.2 13352.2 0 003.89 64.42l56.485 82.859c2.057-17.028 3.355-29.112 3.355-29.112-9.076-10.967-41.738-93.994-54.878-127.913z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-81",
    d: "M880.914 306.786a30.082 30.082 0 0018.729-10.89s-10.133 2.569-19.395 1.79a54.285 54.285 0 01.666 9.1z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-82",
    d: "M1042.859 550.735l-3.163-37.71c-.626-7.465-7.647-12.852-15.617-12.04l-30.39 3.101-1.015-8.34a5.588 5.588 0 00-6.223-4.87l-19.276 2.348a5.588 5.588 0 00-4.871 6.223l.943 7.745-26.42 2.695a13.097 13.097 0 00-11.833 13.968l2.96 35.303a13.097 13.097 0 0013.995 11.803l87.515-5.755c7.994-.525 14.02-7.006 13.395-14.47zm-77.382-50.216a4.54 4.54 0 013.957-5.056l15.361-1.871a4.54 4.54 0 015.056 3.957l.834 6.844-24.432 2.492z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-69",
    d: "M847.002 496.298s22.057 1.959 38.48-.153 28.86-178.236 28.86-178.236-28.468 6.882-34.021 3.129c0 0-22.485 14.893-27.803 53.684s-5.516 121.576-5.516 121.576z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-74",
    d: "M979.42 472.917s1.486 6.335 1.956 7.9 2.972 2.033 2.19 16.11c0 0-1.877 3.441-8.056 2.894 0 0-7.156.313-6.687-8.486s-.176-11.496-.704-12.904zM880.248 300.502c1.907 9.3-.796 22.593-.796 22.593s22.973 4.55 33.386-8.724c0 0-7.87-12.56-8.267-19.794 0 0 4.213-2.782 4.332-16.375s2.902-26.63-10.77-26.789-26.352 1.888-27.624 5.863-2.425 22.834-1.47 29.83 1.172 11.545 4.63 12.26 6.579 1.136 6.579 1.136z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M883.446 260.525a23.163 23.163 0 00-9.688 2.355c-5.515 2.534-10.373 2.504-11.864.745s-5.733-12.927 2.613-19.048 33.864-5.644 41.018-4.451c4.77.795 8.33 2.633 9.221 5.405.358 1.113 2.763 1.3 3.458 2.583 2.822 5.207-.16 30.684-8.625 38.236 0 0-1.749 2.067-4.014-.954s.954-13.514-1.968-14.229-4.292 3.518-7.571 2.564c-1.13-.329-3.816-15.8-12.58-13.206z",
    fill: "#2d3a64"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-82",
    d: "M866.947 526.568s68.51 6.256 78.208-18.144l-6.647-98.62s23.697 50.756 24.322 68.431c0 0 15.798 2.503 19.552-3.44 0 0-1.877-43.406-17.831-78.13s-42.31-83.37-50.366-83.996-34.802 27.686-40.433 44.461c-1.197 3.564-7.23 20.608-8.056 33.669-3.06 48.425 1.251 135.769 1.251 135.769z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    className: "prefix__cls-83",
    d: "M893.822 349.147l18.821-36.302c-9.47 2.367-33.578 28.456-38.892 44.285-1.196 3.564-7.23 20.608-8.055 33.669-.652 10.317-.968 22.403-1.064 35.033.03-.092 17.144-52.18 21.127-62.23a3.947 3.947 0 00.075-2.72l-3.05-9.03 8.66-1.054a3.1 3.1 0 002.378-1.651zM933.983 560.4l-3.124-37.254a13.698 13.698 0 017.916-13.458l-1.947.199a13.097 13.097 0 00-11.834 13.968l2.96 35.303a13.07 13.07 0 0012.81 11.822 13.574 13.574 0 01-6.78-10.58z"
  })));
}

/* harmony default export */ var components_HomeImage = (HomeImage);
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(27);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);

// EXTERNAL MODULE: external "aos/dist/aos.css"
var aos_css_ = __webpack_require__(49);

// EXTERNAL MODULE: D:/Frontend/dgprawo_react/src/assets/icon_1.svg
var icon_1 = __webpack_require__(28);
var icon_1_default = /*#__PURE__*/__webpack_require__.n(icon_1);

// EXTERNAL MODULE: D:/Frontend/dgprawo_react/src/assets/icon_2.svg
var icon_2 = __webpack_require__(29);
var icon_2_default = /*#__PURE__*/__webpack_require__.n(icon_2);

// EXTERNAL MODULE: D:/Frontend/dgprawo_react/src/assets/icon_3.svg
var icon_3 = __webpack_require__(30);
var icon_3_default = /*#__PURE__*/__webpack_require__.n(icon_3);

// CONCATENATED MODULE: D:/Frontend/dgprawo_react/src/pages/index.js


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;










var Header = styled_default.a.header(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  position: relative;\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: -70px;\n    bottom: 70px;\n    left: 48%;\n    right: 0;\n    background: rgb(13,69,121);\n    background: linear-gradient(135deg, rgba(13,69,121,1) 0%, rgba(11,45,77,1) 100%);\n    z-index: -1;\n    border-radius: 0 0 0 60px;\n  }\n"])));
var Flex = styled_default.a.div(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  display: flex;\n"])));
var Box = styled_default.a.div(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  padding-top: 5%;\n  padding-left: 5%;\n\n  @media(max-width: 1410px) {\n    padding-left: unset;\n    padding-right: 5%;\n  }\n\n"])));
var Title = styled_default.a.h1(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n  font-family: 'Roboto Slab', serif;\n  color: white;\n  font-weight: 400;\n  font-size: 40px;\n\n  strong {\n    display: block;\n  }\n\n  @media(max-width: 1410px) {\n    font-size: 32px;\n  }\n"])));
var StyledImage = styled_default()(components_HomeImage)(_templateObject5 || (_templateObject5 = taggedTemplateLiteral_default()(["\n  position: relative;\n  width: 110%;\n  margin-left: -15%;\n  margin-bottom: -5%;\n\n  @media(max-width: 1410px) {\n    width: auto;\n    margin-left: -5%;\n    margin-right: 5%;\n  }\n\n  & #prefix__background {\n    position: relative;\n    animation-name: background;\n    animation-duration: 10s;\n    animation-direction: alternate;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n\n  & #prefix__leafs {\n    position: relative;\n    animation-name: leafs;\n    animation-duration: 7s;\n    animation-direction: alternate;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n\n  & #prefix__person_right,\n  & #prefix__person_left {\n    position: relative;\n    animation-name: people;\n    animation-duration: 6s;\n    animation-direction: alternate;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n\n  @keyframes background {\n    from {\n      transform: translateX(1%);\n    }\n    to {\n      transform: translateX(-3%);\n    }\n  }\n\n  @keyframes leafs {\n    from {\n      transform: translateX(-1%);\n    }\n    to {\n      transform: translateX(1%);\n    }\n  }\n\n  @keyframes people {\n    from {\n      transform: translateX(1%);\n    }\n    to {\n      transform: translateX(-1%);\n    }\n  }\n  \n"])));
var Button = styled_default.a.button(_templateObject6 || (_templateObject6 = taggedTemplateLiteral_default()(["\n  border: none;\n  color: white;\n  background: #EAA636;\n  outline: none;\n  padding: 16px 32px;\n  border-radius: 0.6rem;\n  margin-top: 20%;\n  cursor: pointer;\n  transition: background 0.3s;\n\n  &:hover {\n    background: #C6861C;\n  }\n"])));
var Details = styled_default.a.div(_templateObject7 || (_templateObject7 = taggedTemplateLiteral_default()(["\n  margin-top: 140px;\n"])));
var StyledDetail = styled_default.a.div(_templateObject8 || (_templateObject8 = taggedTemplateLiteral_default()(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 60px;\n  padding: 8px 0;\n  font-size: 18px;\n\n  p {\n    margin-left: 40px;\n  }\n  \n  @media (max-width: 1200px) {\n    margin-bottom: 20px;\n\n    img {\n      width: 64px;\n    }\n\n    p {\n      margin-left: 20px;\n    }\n  }\n"])));

var pages_Detail = function Detail(_ref) {
  var icon = _ref.icon,
      text = _ref.text;
  return /*#__PURE__*/external_react_default.a.createElement(StyledDetail, {
    "data-aos": "fade-in"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: icon,
    alt: ""
  }), /*#__PURE__*/external_react_default.a.createElement("p", null, text));
};

var details = [{
  icon: icon_1_default.a,
  text: 'Dbanie o interes naszych klientów i świadczenie na ich rzecz obsługi prawnej odpowiadającej ich potrzebom jest dla nas nadrzędną wartością nieustannie powodującą konieczność poszerzania posiadanych kompetencji.'
}, {
  icon: icon_2_default.a,
  text: 'Dzięki interdyscyplinarności i współpracy z rzeczoznawcami majątkowymi, kancelariami adwokackimi, komorniczymi oraz notarialnymi zapewniamy kompleksową pomoc prawną i doradztwo uwzględniające w jak najwyższym stopniu złożone sytuacje i potrzeby naszych klientów.'
}, {
  icon: icon_3_default.a,
  text: 'W wyniku indywidualnego podejścia do każdego problemu jesteśmy w stanie zagwarantować Państwu najwyższą jakość wykonywanych usług i proponować najlepiej dopasowane rozwiązania. Naszą Ofertę kierujemy zarówno do osób fizycznych, jak i małych i średnich przedsiębiorstw. Serdecznie zapraszamy do nawiązania współpracy.'
}];
/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  Object(external_react_["useEffect"])(function () {
    external_aos_default.a.init({
      once: true,
      duration: 600
    });
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("main", null, /*#__PURE__*/external_react_default.a.createElement(Header, null, /*#__PURE__*/external_react_default.a.createElement(ui["a" /* Container */], null, /*#__PURE__*/external_react_default.a.createElement(Flex, null, /*#__PURE__*/external_react_default.a.createElement(StyledImage, null), /*#__PURE__*/external_react_default.a.createElement(Box, null, /*#__PURE__*/external_react_default.a.createElement(Title, null, "Kancelaria Radcy Prawnego ", /*#__PURE__*/external_react_default.a.createElement("strong", null, "Dawid Gawrysiak")), /*#__PURE__*/external_react_default.a.createElement(Button, null, "Dowiedz si\u0119 wi\u0119cej"))))), /*#__PURE__*/external_react_default.a.createElement(ui["a" /* Container */], null, /*#__PURE__*/external_react_default.a.createElement(Details, null, details.map(function (_ref2) {
    var icon = _ref2.icon,
        text = _ref2.text;
    return /*#__PURE__*/external_react_default.a.createElement(pages_Detail, {
      icon: icon,
      text: text
    });
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      height: 500,
      background: 'linear-gradient(135deg, rgba(13, 69, 121, 1) 0%, rgba(11, 45, 77, 1) 100%)'
    }
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      height: 1000
    }
  }));
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(5);

var _router = __webpack_require__(9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijk3IiB2aWV3Qm94PSIwIDAgMTAwIDk3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzQuODU0NCAyOS42MTE2TDUyLjU2MzEgNDYuNzM3OUw3My42Njk5IDI1LjMyMDRMNjYuMzMwMSAxOC4yMzNMODQuOTEyNiAxMy4yNjIxQzc2LjIzMyA1LjA0ODU0IDY0LjU0MzcgMCA1MS42NTA1IDBDMjQuOTUxNSAwIDMuMzAwOTggMjEuNjUwNSAzLjMwMDk4IDQ4LjM0OTVDMy4zMDA5OCA1Mi43MTg0IDMuODgzNSA1Ni45NTE0IDQuOTcwODggNjAuOTcwOUwzNC44NTQ0IDI5LjYxMTZaIiBmaWxsPSIjRjJENkE5Ii8+CjxwYXRoIGQ9Ik0xOC4wNTgyIDcwLjczNzhWODMuMTI2MUMxNiA4MS4xMjYxIDE0LjExNjUgNzguOTcwOCAxMi40MjcyIDc2LjY0MDdMMTguMDU4MiA3MC43Mzc4WiIgZmlsbD0iI0VBQTYzNiIvPgo8cGF0aCBkPSJNMzIuNDI3MiA1NS42ODkzVjkyLjcxODRDMjguNTA0OCA5MS4wMDk3IDI0Ljg1NDQgODguODE1NSAyMS41NTM0IDg2LjE3NDdWNjcuMDY3OUwzMi40MjcyIDU1LjY4OTNaIiBmaWxsPSIjRUFBNjM2Ii8+CjxwYXRoIGQ9Ik00Ni43OTYxIDYzLjEyNjNWOTYuNDQ2NkM0My4wMjkxIDk2LjA3NzcgMzkuMzc4NiA5NS4yNjIyIDM1LjkyMjMgOTQuMDc3N1Y1Mi42MjE0TDQ2Ljc5NjEgNjMuMTI2M1oiIGZpbGw9IiNFQUE2MzYiLz4KPHBhdGggZD0iTTYxLjE2NSA2MS4yMDRWOTUuNzQ3N0M1OC4wOTcxIDk2LjM2OSA1NC45MTI2IDk2LjY3OTcgNTEuNjUwNSA5Ni42Nzk3QzUxLjIwMzkgOTYuNjc5NyA1MC43Mzc4IDk2LjY3OTcgNTAuMjkxMiA5Ni42NjAzVjY2LjUwNDlMNTMuMzAxIDY5LjQxNzZMNjEuMTY1IDYxLjIwNFoiIGZpbGw9IiNFQUE2MzYiLz4KPHBhdGggZD0iTTc1LjUzNCA0Ni4yMTM2VjkwLjM4ODNDNzIuMTM1OSA5Mi4zMzAxIDY4LjUwNDggOTMuODQ0NiA2NC42NjAyIDk0LjkxMjZWNTcuNTcyOEw3NS41MzQgNDYuMjEzNloiIGZpbGw9IiNFQUE2MzYiLz4KPHBhdGggZD0iTTg5LjkwMjkgNDEuNTMzOVY3Ny45MjIzQzg2LjgzNDkgODEuODgzNCA4My4xNjUgODUuMzU5MiA3OS4wMjkxIDg4LjE5NDFWNDIuNTYzTDg0Ljc1NzMgMzYuNTgyNUw4OS45MDI5IDQxLjUzMzlaIiBmaWxsPSIjRUFBNjM2Ii8+CjxwYXRoIGQ9Ik0xMDAgNDguMzQ5NUMxMDAgNTcuMjQyNyA5Ny41OTIyIDY1LjU5MjIgOTMuMzk4IDcyLjc1NzNWMzYuMjMzTDk1LjU3MjggMjguMDk3MUM5OC40MDc4IDM0LjI3MTkgMTAwIDQxLjEyNjIgMTAwIDQ4LjM0OTVaIiBmaWxsPSIjRUFBNjM2Ii8+CjxwYXRoIGQ9Ik05NS43MjgxIDEzLjk4MDZMNzMuMjAzOCAyMEw3OC42NDA3IDI1LjI0MjdMNTIuNjIxMyA1MS42NTA1TDM0Ljk1MTQgMzQuNTYzMUwwIDcxLjI2MjFMNi43OTYxMSA3Ny40NzU3TDM1LjUzNCA0Ny4zNzg2TDUzLjIwMzkgNjQuNDY2TDg0LjY2MDIgMzEuNjUwNUw4OS43MDg3IDM2LjUwNDlMOTUuNzI4MSAxMy45ODA2WiIgZmlsbD0iI0VBQTYzNiIvPgo8L3N2Zz4K"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/icon_2.1236d128.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMyIgdmlld0JveD0iMCAwIDEwMCAxMDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05LjQyMzQzIDgwLjEwMDRDOS42MDcyOSA3Ny4zMDU3IDkuNzU0MzggNzQuODA1MSA5LjkzODI1IDcyLjMwNDZDMTAuMDQ4NiA3MS4wMTc1IDkuNjA3MjkgNzAuMDYxNCA4LjUwNDExIDY5LjM2MjdDNi4xODc0MyA2Ny43ODE1IDMuODcwNzUgNjYuMTYzNSAxLjU5MDg0IDY0LjUwODdDLTAuMTM3NDgyIDYzLjI1ODUgLTAuNDMxNjY0IDYyLjExODUgMC41OTc5NzIgNjAuMjQzMUMxLjkyMTc5IDU3Ljc0MjYgMy4zMTkxNSA1NS4zMTU2IDQuNzE2NTIgNTIuODUxOEM1LjM3ODQzIDUxLjcxMTggNS4zNzg0MyA1MC42ODIyIDQuNzE2NTIgNDkuNTc5QzMuMzU1OTMgNDcuMjYyMyAyLjA2ODg4IDQ0LjkwODkgMC43NDUwNjMgNDIuNTE4N0MtMC41MDUyMSA0MC4yNzU1IC0wLjIxMTAyOCAzOS4xNzIzIDEuODQ4MjUgMzcuNzAxNEMzLjk0NDI5IDM2LjIzMDUgNi4wNDAzNCAzNC42ODYxIDguMTczMTYgMzMuMjg4N0M5LjQ5Njk3IDMyLjQwNjIgMTAuMDQ4NiAzMS4zNzY1IDkuOTAxNDcgMjkuNzU4NUM5LjY0NDA2IDI3LjE0NzYgOS40OTY5NyAyNC41IDkuMzg2NjYgMjEuODg5MUM5LjI3NjM0IDE5LjM1MTggMTAuMDExOCAxOC40NjkzIDEyLjUxMjMgMTguMDY0OEMxNS4xNiAxNy42MjM1IDE3Ljg4MTIgMTcuNDAyOSAyMC40OTIgMTYuNzc3N0MyMS40NDgxIDE2LjU1NzEgMjIuNTUxMyAxNS42Mzc4IDIyLjk5MjYgMTQuNzU1MkMyNC4xMzI1IDEyLjQ3NTMgMjQuOTc4MyAxMC4wMTE2IDI1LjkzNDQgNy42MjEzM0MyNy4xMTExIDQuNzUzMDUgMjcuOTkzNyA0LjMxMTc4IDMxLjA0NTggNS4yNjc4N0MzMy4yNTIyIDUuOTY2NTUgMzUuNTMyMSA2LjU1NDkyIDM3LjcwMTcgNy4zMjcxNEMzOS4zOTMyIDcuOTUyMjggNDAuNzUzOCA3LjY1ODEgNDIuMDQwOCA2LjQwNzgzQzQzLjkxNjMgNC41NjkxOSA0NS45MDIgMi44MDQxIDQ3Ljg1MDkgMS4wMzkwMUM0OS40Njg5IC0wLjM1ODM1NyA1MC41NzIxIC0wLjM1ODM1NyA1Mi4xOTAxIDEuMTEyNTVDNTQuMTAyMyAyLjg0MDg3IDU1Ljk3NzcgNC41NjkxOSA1Ny44NTMxIDYuMzM0MjhDNTkuMTQwMiA3LjU0Nzc4IDYwLjUwMDcgNy45MTU1MSA2Mi4yMjkxIDcuMzI3MTRDNjQuNDcyMiA2LjU1NDkyIDY2Ljc4ODkgNS45Mjk3OCA2OS4wNjg4IDUuMjMxMUM3MS45NzM4IDQuMzQ4NTUgNzIuODE5NiA0Ljc1MzA1IDczLjk1OTYgNy42MjEzM0M3NC44Nzg5IDkuOTAxMjQgNzUuNzk4MiAxMi4xNDQ0IDc2LjY4MDcgMTQuNDYxMUM3Ny4yMzIzIDE1LjkzMiA3OC4xMTQ5IDE2Ljc0MSA3OS43Njk3IDE2LjkyNDhDODIuNDU0MSAxNy4yMTkgODUuMTAxNyAxNy42NjAzIDg3Ljc0OTMgMTguMTM4M0M5MC4xMDI4IDE4LjU0MjggOTAuNzY0NyAxOS4zODg2IDkwLjY1NDQgMjEuNzc4OEM5MC41MDczIDI0LjQyNjUgOTAuMzIzNCAyNy4wMzczIDkwLjA2NiAyOS42NDgyQzg5Ljg4MjIgMzEuMjI5NCA5MC4zNjAyIDMyLjMzMjYgOTEuNjg0IDMzLjI1MTlDOTMuOTI3MiAzNC43NTk2IDk2LjEzMzUgMzYuMzA0MSA5OC4zMDMxIDM3Ljg4NTNDMTAwLjEwNSAzOS4xNzIzIDEwMC4zNjIgNDAuMzEyMyA5OS4yOTYgNDIuMjk4Qzk4LjAwODkgNDQuNjUxNSA5Ni42ODUxIDQ3LjAwNDkgOTUuMzYxMyA0OS4zNTg0Qzk0LjYyNTggNTAuNjQ1NCA5NC41ODkxIDUxLjg1ODkgOTUuMzYxMyA1My4xODI3Qzk2LjcyMTkgNTUuNDk5NCA5OC4wNDU3IDU3Ljg1MjkgOTkuMzMyOCA2MC4yNDMxQzEwMC40MzYgNjIuMzAyNCAxMDAuMjE1IDYzLjI5NTIgOTguMzM5OSA2NC42MTkxQzk2LjEzMzUgNjYuMjAwMyA5My45NjM5IDY3Ljc0NDggOTEuNzIwOCA2OS4yNTI0QzkwLjM5NyA3MC4xMzUgODkuODgyMiA3MS4yMzgyIDkwLjA2NiA3Mi44MTk0QzkwLjM2MDIgNzUuNDMwMiA5MC41MDczIDc4LjA3NzkgOTAuNjU0NCA4MC42ODg3QzkwLjc2NDcgODIuOTMxOSA4OS45NTU3IDgzLjk2MTUgODcuNzEyNiA4NC4zNjZDODUuMDY0OSA4NC44MDczIDgyLjM4MDUgODUuMjQ4NiA3OS43MzI5IDg1LjU0MjhDNzguMTg4NCA4NS43MjY2IDc3LjMwNTkgODYuNDk4OCA3Ni43NTQzIDg3Ljg1OTRDNzUuNzk4MiA5MC4zMjMyIDc0LjgwNTMgOTIuNzUwMiA3My44MTI1IDk1LjE3NzJDNzIuODU2NCA5Ny41MzA3IDcxLjgyNjggOTguMDA4NyA2OS4zNjMgOTcuMjczM0M2Ni44MjU3IDk2LjUwMSA2NC4zMjUxIDk1Ljc2NTYgNjEuODI0NiA5NC45MTk4QzYwLjQ2NCA5NC40NDE4IDU5LjMyNCA5NC42OTkyIDU4LjI5NDQgOTUuNjkyQzU2LjMwODcgOTcuNTMwNyA1NC4zMjI5IDk5LjM2OTMgNTIuMzM3MiAxMDEuMTcxQzUwLjUzNTMgMTAyLjc4OSA0OS41MDU3IDEwMi44MjYgNDcuNzQwNiAxMDEuMjA4QzQ1Ljg2NTIgOTkuNTE2NCA0My45ODk4IDk3Ljg2MTYgNDIuMTg3OSA5Ni4wOTY1QzQwLjg2NDEgOTQuODA5NSAzOS40MyA5NC40Nzg1IDM3LjY2NDkgOTUuMDY2OUMzNS4zMTE0IDk1Ljg3NTkgMzIuODg0NCA5Ni41NzQ2IDMwLjQ5NDIgOTcuMzFDMjguMTQwNyA5OC4wMDg3IDI3LjA3NDMgOTcuNDkzOSAyNi4xNTUgOTUuMjUwN0MyNS4xMjU0IDkyLjcxMzQgMjQuMjQyOCA5MC4wNjU4IDIzLjAyOTMgODcuNjAyQzIyLjU4ODEgODYuNzE5NSAyMS40ODQ5IDg1Ljg3MzcgMjAuNTI4OCA4NS42MTYzQzE4LjIxMjEgODUuMDI3OSAxNS44MjE5IDg0LjgwNzMgMTMuNDY4NCA4NC40NzYzQzkuNzkxMTUgODMuOTk4MyA5LjI3NjM0IDgzLjQwOTkgOS40MjM0MyA4MC4xMDA0Wk04My4xODk1IDQ5Ljg3MzJDODIuNjAxMiAzMS4wNDU2IDY1Ljg2OTYgMTYuMjYyOSA0Ni41MjcxIDE4LjI0ODZDMjkuNzIyIDE5Ljk3NyAxNS4xNiAzNS4yNzQ0IDE3LjEwODkgNTQuODAwN0MxOC44MDA1IDcxLjYwNTkgMzQuMTM0NyA4Ni4yMDQ3IDUzLjYyNDIgODQuMjE4OUM3MC41MDI5IDgyLjQ1MzggODMuOTk4NSA2Ny41OTc3IDgzLjE4OTUgNDkuODczMloiIGZpbGw9IiNFQUE2MzYiLz4KPHBhdGggZD0iTTc3LjIzMjMgNTEuMTIzNEM3Ny4zNzk0IDY1Ljk0MjkgNjUuMjQ0NCA3OC4xODgyIDUwLjE2NzYgNzguNDA4OEMzNS4zODUgNzguNjI5NCAyMi44NDU1IDY2LjEyNjcgMjIuODQ1NSA1MS4xOTdDMjIuODQ1NSAzNi4zMDQgMzUuMDkwOCAyNC4wNTg3IDUwLjAyMDUgMjQuMDIxOUM2NC44Mzk5IDIzLjk0ODQgNzcuMDg1MiAzNi4xNTY5IDc3LjIzMjMgNTEuMTIzNFpNNzAuNDI5NCA0Ni4zMDYyQzcwLjQyOTQgNDQuNTA0NCA2OS41ODM2IDQzLjY1ODYgNjcuODkyMSA0My40NzQ3QzY0LjY1NjEgNDMuMTgwNSA2MS40MiA0Mi44NDk2IDU4LjE4NCA0Mi43MDI1QzU2Ljg5NyA0Mi42Mjg5IDU2LjQxOSA0Mi4wNzc0IDU2LjAxNDUgNDEuMDEwOUM1NC45MTEzIDM4LjE0MjcgNTMuODA4MSAzNS4zMTEyIDUyLjQ4NDMgMzIuNTUzMkM1Mi4wNzk4IDMxLjcwNzQgNTEuMDEzNCAzMC44MjQ5IDUwLjEzMDggMzAuNjQxQzQ4Ljg4MDYgMzAuMzQ2OCA0OC4xMDgzIDMxLjM3NjUgNDcuNjMwMyAzMi41OUM0Ni40NTM1IDM1LjUzMTggNDUuMjc2OCAzOC41MTA0IDQzLjk4OTggNDEuNDE1NEM0My43MzI0IDQxLjk2NyA0Mi45MjM0IDQyLjU1NTQgNDIuMzM1IDQyLjYyODlDMzkuMTcyNSA0Mi45NTk5IDM1Ljk3MzMgNDIuOTk2NyAzMi44MTA5IDQzLjQwMTJDMzEuODU0OCA0My41MTE1IDMwLjY3ODEgNDQuMzIwNSAzMC4xMjY1IDQ1LjEyOTVDMjkuNDY0NiA0Ni4xNTkxIDMwLjIzNjggNDcuMTg4OCAzMS4xNTYxIDQ3LjkyNDJDMzMuNDcyOCA0OS44MzY0IDM1LjY3OTEgNTEuODU4OSAzOC4wNjk0IDUzLjY2MDhDMzkuMjgyOSA1NC41ODAxIDM5LjM5MzIgNTUuNDYyNiAzOS4wMjU1IDU2Ljc0OTdDMzguMjUzMiA1OS41ODEyIDM3LjY2NDkgNjIuNDQ5NCAzNi44OTI2IDY1LjI4MDlDMzYuNTI0OSA2Ni41NjggMzYuNTI0OSA2Ny43NDQ3IDM3LjcwMTYgNjguNTUzN0MzOC44NDE2IDY5LjM2MjcgMzkuOTA4IDY4LjkyMTUgNDAuOTM3NiA2OC4yNTk1QzQzLjU4NTMgNjYuNjA0OCA0Ni4yNjk3IDY1LjAyMzUgNDguOTE3MyA2My4zMzJDNDkuNzYzMSA2Mi43ODA0IDUwLjM1MTUgNjIuODE3MiA1MS4xOTcyIDYzLjM2ODhDNTMuODA4MSA2NS4wNjAzIDU2LjQ5MjUgNjYuNjc4MyA1OS4xNDAxIDY4LjMzMzFDNjAuMjgwMSA2OS4wMzE4IDYxLjM4MzMgNjkuNjU2OSA2Mi42NzAzIDY4LjczNzZDNjQuMDMwOSA2Ny43ODE1IDYzLjU4OTYgNjYuNDU3NyA2My4yOTU1IDY1LjIwNzRDNjIuNjMzNSA2Mi40MTI3IDYyLjAwODQgNTkuNjE3OSA2MS4yMzYyIDU2LjgyMzJDNjAuOTA1MiA1NS42MDk3IDYxLjA1MjMgNTQuODc0MyA2Mi4xMTg3IDU0LjAyODVDNjQuNTA5IDUyLjE1MzEgNjYuODI1NiA1MC4xMzA2IDY5LjEwNTUgNDguMDcxM0M2OS43Njc1IDQ3LjU1NjUgNzAuMTM1MiA0Ni43MTA3IDcwLjQyOTQgNDYuMzA2MloiIGZpbGw9IiNGMkQ2QTkiLz4KPHBhdGggZD0iTTcwLjQyOTQgNDYuMzA2MkM3MC40Mjk0IDQ0LjUwNDQgNjkuNTgzNiA0My42NTg2IDY3Ljg5MjEgNDMuNDc0N0M2NC42NTYxIDQzLjE4MDUgNjEuNDIwMSA0Mi44NDk2IDU4LjE4NDEgNDIuNzAyNUM1Ni44OTcgNDIuNjI5IDU2LjQxOSA0Mi4wNzc0IDU2LjAxNDUgNDEuMDExQzU0LjkxMTMgMzguMTQyNyA1My44MDgxIDM1LjMxMTIgNTIuNDg0MyAzMi41NTMyQzUyLjA3OTggMzEuNzA3NSA1MS4wMTM0IDMwLjgyNDkgNTAuMTMwOCAzMC42NDExQzQ4Ljg4MDYgMzAuMzQ2OSA0OC4xMDgzIDMxLjM3NjUgNDcuNjMwMyAzMi41OUM0Ni40NTM2IDM1LjUzMTggNDUuMjc2OCAzOC41MTA0IDQzLjk4OTggNDEuNDE1NUM0My43MzI0IDQxLjk2NyA0Mi45MjM0IDQyLjU1NTQgNDIuMzM1IDQyLjYyOUMzOS4xNzI2IDQyLjk1OTkgMzUuOTczMyA0Mi45OTY3IDMyLjgxMDkgNDMuNDAxMkMzMS44NTQ4IDQzLjUxMTUgMzAuNjc4MSA0NC4zMjA1IDMwLjEyNjUgNDUuMTI5NUMyOS40NjQ2IDQ2LjE1OTEgMzAuMjM2OCA0Ny4xODg4IDMxLjE1NjEgNDcuOTI0MkMzMy40NzI4IDQ5LjgzNjQgMzUuNjc5MiA1MS44NTg5IDM4LjA2OTQgNTMuNjYwOEMzOS4yODI5IDU0LjU4MDEgMzkuMzkzMiA1NS40NjI2IDM5LjAyNTUgNTYuNzQ5N0MzOC4yNTMyIDU5LjU4MTIgMzcuNjY0OSA2Mi40NDk1IDM2Ljg5MjcgNjUuMjgxQzM2LjUyNDkgNjYuNTY4IDM2LjUyNDkgNjcuNzQ0NyAzNy43MDE3IDY4LjU1MzdDMzguODQxNiA2OS4zNjI3IDM5LjkwOCA2OC45MjE1IDQwLjkzNzcgNjguMjU5NUM0My41ODUzIDY2LjYwNDggNDYuMjY5NyA2NS4wMjM1IDQ4LjkxNzMgNjMuMzMyQzQ5Ljc2MzEgNjIuNzgwNCA1MC4zNTE1IDYyLjgxNzIgNTEuMTk3MiA2My4zNjg4QzUzLjgwODEgNjUuMDYwMyA1Ni40OTI1IDY2LjY3ODMgNTkuMTQwMiA2OC4zMzMxQzYwLjI4MDEgNjkuMDMxOCA2MS4zODMzIDY5LjY1NjkgNjIuNjcwMyA2OC43Mzc2QzY0LjAzMDkgNjcuNzgxNSA2My41ODk3IDY2LjQ1NzcgNjMuMjk1NSA2NS4yMDc0QzYyLjYzMzYgNjIuNDEyNyA2Mi4wMDg0IDU5LjYxOCA2MS4yMzYyIDU2LjgyMzJDNjAuOTA1MiA1NS42MDk3IDYxLjA1MjMgNTQuODc0MyA2Mi4xMTg3IDU0LjAyODVDNjQuNTA5IDUyLjE1MzEgNjYuODI1NyA1MC4xMzA2IDY5LjEwNTYgNDguMDcxM0M2OS43Njc1IDQ3LjU1NjUgNzAuMTM1MiA0Ni43MTA3IDcwLjQyOTQgNDYuMzA2MloiIGZpbGw9IiNFQUE2MzYiLz4KPC9zdmc+Cg=="

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(34);
module.exports = __webpack_require__(41);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(33)["default"];

var _require = __webpack_require__(15),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-emotion",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(15),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(35),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);








Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/index.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/about.js': t_1,
  '__react_static_root__/src/pages/index.js': t_2
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 7,
	"./": 7,
	"./index": 7,
	"./index.js": 7
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(17);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(18);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(19);

var _interopRequireWildcard = __webpack_require__(20);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(42);

var _Suspense = _interopRequireDefault(__webpack_require__(43));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(45)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("D:\\Frontend\\dgprawo_react\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(20);

var _interopRequireDefault = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(44));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\nimg {\n  max-width: 100%;\n}\n", ""]);



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("aos/dist/aos.css");

/***/ })
/******/ ]);
});