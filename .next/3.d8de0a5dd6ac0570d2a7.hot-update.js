webpackHotUpdate(3,{

/***/ "./pages/Attendees.jsx":
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

var _Attendee = __webpack_require__("./pages/Attendee.jsx.js");

var _Attendee2 = _interopRequireDefault(_Attendee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// import styles from './styles/attendees.css';

var Attendees = function (_React$Component) {
  (0, _inherits3.default)(Attendees, _React$Component);

  function Attendees(props) {
    (0, _classCallCheck3.default)(this, Attendees);
    return (0, _possibleConstructorReturn3.default)(this, (Attendees.__proto__ || Object.getPrototypeOf(Attendees)).call(this, props));
  }

  (0, _createClass3.default)(Attendees, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'attendees' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              this.props.eventUsers.map(function (user, index) {
                if (index < 4) {
                  return _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_Attendee2.default, { key: index, user: user })
                  );
                }
              })
            ),
            _react2.default.createElement(
              'tr',
              null,
              this.props.eventUsers.map(function (user, index) {
                if (index >= 4 && index < 8) {
                  return _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_Attendee2.default, { key: 4 + index, user: user })
                  );
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          'style',
          { jsx: true },
          '\n        .attendees {\n          background-color: #F6F7F8;\n          font: "Graphik Meetup";\n        }\n      '
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Attendees;
}(_react2.default.Component);

var _default = Attendees;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Attendees, 'Attendees', 'C:/Users/Nicholas/Documents/HR/YouDown/service-attendees/pages/Attendees.jsx');
  reactHotLoader.register(_default, 'default', 'C:/Users/Nicholas/Documents/HR/YouDown/service-attendees/pages/Attendees.jsx');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Attendees.jsx")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.d8de0a5dd6ac0570d2a7.hot-update.js.map