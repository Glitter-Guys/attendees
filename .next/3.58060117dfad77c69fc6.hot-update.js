webpackHotUpdate(3,{

/***/ "./pages/Attendee.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// import styles from './styles/attendee.css';

var Attendee = function (_React$Component) {
  (0, _inherits3.default)(Attendee, _React$Component);

  function Attendee() {
    (0, _classCallCheck3.default)(this, Attendee);
    return (0, _possibleConstructorReturn3.default)(this, (Attendee.__proto__ || Object.getPrototypeOf(Attendee)).apply(this, arguments));
  }

  (0, _createClass3.default)(Attendee, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "attendee" },
        _react2.default.createElement("img", { className: "attendee_picture", src: this.props.user.photourl }),
        _react2.default.createElement(
          "div",
          { className: "attendee_name" },
          this.props.user.first + ' ' + this.props.user.last
        ),
        _react2.default.createElement(
          "div",
          { className: "attendee_role" },
          "Member"
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Attendee;
}(_react2.default.Component);

;

var _default = Attendee;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Attendee, "Attendee", "C:/Users/Nicholas/Documents/HR/YouDown/service-attendees/pages/Attendee.jsx.js");
  reactHotLoader.register(_default, "default", "C:/Users/Nicholas/Documents/HR/YouDown/service-attendees/pages/Attendee.jsx.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Attendee.jsx")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.58060117dfad77c69fc6.hot-update.js.map