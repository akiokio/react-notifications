'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

require('normalize.css');

var _closeIcon = require('./closeIcon.svg');

var _closeIcon2 = _interopRequireDefault(_closeIcon);

require('./ReactNotification.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    _this.hide = _this.hide.bind(_this);

    _this.state = {
      isShowing: true
    };
    return _this;
  }

  _createClass(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoHide) {
        this.timeout = setTimeout(function () {
          _this2.hide();
        }, this.props.autoHide);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ isShowing: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var content = _props.content;
      var stripColor = _props.stripColor;
      var customClass = _props.customClass;
      var animation = _props.animation;
      var fromTop = _props.fromTop;
      var fromRight = _props.fromRight;
      var fromBottom = _props.fromBottom;
      var fromLeft = _props.fromLeft;

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          transitionName: animation,
          transitionAppear: true,
          transitionAppearTimeout: 500,
          transitionEnter: false,
          transitionLeave: true,
          transitionLeaveTimeout: 500
        },
        this.state.isShowing ? _react2.default.createElement(
          'div',
          { className: 'react-notification ' + customClass, style: {
              top: fromTop,
              right: fromRight,
              bottom: fromBottom,
              left: fromLeft
            } },
          _react2.default.createElement('span', { className: 'strip', style: { background: stripColor } }),
          _react2.default.createElement(
            'a',
            { className: 'close', onClick: this.hide },
            _react2.default.createElement('img', { src: _closeIcon2.default, alt: 'close notification' })
          ),
          _react2.default.createElement(
            'p',
            { className: 'title' },
            title
          ),
          _react2.default.createElement(
            'p',
            { className: 'content' },
            content
          )
        ) : null
      );
    }
  }]);

  return Notification;
}(_react2.default.Component);

Notification.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,
  content: _react2.default.PropTypes.string.isRequired,
  stripColor: _react2.default.PropTypes.string,
  customClass: _react2.default.PropTypes.string,
  animation: _react2.default.PropTypes.string,
  fromTop: _react2.default.PropTypes.string,
  fromRight: _react2.default.PropTypes.string,
  fromBottom: _react2.default.PropTypes.string,
  fromLeft: _react2.default.PropTypes.string,
  autoHide: _react2.default.PropTypes.number
};

Notification.defaultProps = {
  stripColor: '#00bcd4',
  customClass: '',
  animation: 'react-notification-default',
  fromTop: '25px',
  fromRight: '25px',
  fromBottom: 'auto',
  fromLeft: 'auto',
  autoHide: null
};

exports.default = Notification;