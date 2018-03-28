module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([3],{

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js").default || __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js"));


/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { src: this.props.user.photourl }),
        _react2.default.createElement(
          'div',
          null,
          this.props.user.first + ' ' + this.props.user.last
        ),
        _react2.default.createElement(
          'div',
          null,
          'Member'
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
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

  reactHotLoader.register(Attendee, 'Attendee', 'C:/Users/Nicholas/Documents/HR/YouDown/service-attendees/pages/Attendee.jsx.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Nicholas/Documents/HR/YouDown/service-attendees/pages/Attendee.jsx.js');
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

/***/ }),

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

  function Attendees() {
    (0, _classCallCheck3.default)(this, Attendees);
    return (0, _possibleConstructorReturn3.default)(this, (Attendees.__proto__ || Object.getPrototypeOf(Attendees)).apply(this, arguments));
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

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _isomorphicUnfetch = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _head = __webpack_require__("./node_modules/next/head.js");

var _head2 = _interopRequireDefault(_head);

var _Attendees = __webpack_require__("./pages/Attendees.jsx");

var _Attendees2 = _interopRequireDefault(_Attendees);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();
// import axios from 'axios';


// import styles from './styles/index.css';

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);
    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',

    // componentDidMount() {
    //   this.getAttendees();
    // }
    // getAttendees() {
    //   const url = window.location.href;
    //   const urlEnd = url.split('/event/')[1];
    //   const eventId = urlEnd.split('/')[0];
    //   axios.get(`/api/${eventId}/attendees`)
    //     .then((res) => {
    //       const data = [];
    //       for (let i = 0; i < res.data.length; i += 1) {
    //         let row = res.data[i].row;
    //         row = row.slice(1, row.length - 1);
    //         row = row.split(',');
    //         data.push({
    //           first: row[0],
    //           last: row[1],
    //           photourl: row[2],
    //         });
    //       }
    //       // const data = res;
    //       this.state.eventUsers = data;
    //       this.state.numberOfAttendees = res.data.length;
    //       this.setState((state) => ({
    //         eventUsers: this.state.eventUsers,
    //         numberOfAttendees: this.state.numberOfAttendees,
    //       }))
    //     })
    //     .catch((err) => {
    //       throw err;
    //   })
    // }
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            ' Attendees ',
            '(' + this.state.numberOfAttendees + ')',
            ' '
          ),
          _react2.default.createElement(
            'div',
            null,
            ' See All '
          )
        ),
        _react2.default.createElement(_Attendees2.default, null)
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var res, data, i, row;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(props);
                _context.next = 3;
                return (0, _isomorphicUnfetch2.default)('http://localhost:3009/api/' + props.query.eid + '/attendees');

              case 3:
                res = _context.sent;

                console.log(res);
                data = [];

                for (i = 0; i < res.data.length; i += 1) {
                  row = res.data[i].row;

                  row = row.slice(1, row.length - 1);
                  row = row.split(',');
                  data.push({
                    first: row[0],
                    last: row[1],
                    photourl: row[2]
                  });
                }
                return _context.abrupt('return', {
                  eventUsers: data,
                  numberOfAttendees: res.data.length
                });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return Index;
}(_react2.default.Component);

var _default = Index;
exports.default = _default;
// window.Attendees = App;

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', 'C:/Users/Nicholas/Documents/HR/YouDown/service-attendees/pages/index.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Nicholas/Documents/HR/YouDown/service-attendees/pages/index.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map