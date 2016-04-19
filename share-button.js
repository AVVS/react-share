'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSocialIcons = require('react-social-icons');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _socialMediaShareLinks = require('./social-media-share-links');

var links = _interopRequireWildcard(_socialMediaShareLinks);

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// separate email & networks
var supportedNetworks = (0, _keys2['default'])(links);

var ShareButton = function (_Component) {
  (0, _inherits3['default'])(ShareButton, _Component);

  function ShareButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, ShareButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_Object$getPrototypeO = (0, _getPrototypeOf2['default'])(ShareButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onClick = function (e) {
      e.preventDefault();
      (0, _utils.windowOpen)(_this.link());
      return false;
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(ShareButton, [{
    key: 'link',
    value: function () {
      function link() {
        var _props = this.props;
        var url = _props.url;
        var opts = _props.opts;
        var network = _props.network;

        return links[network](url, opts);
      }

      return link;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var network = _props2.network;
        var url = _props2.url;
        var // eslint-disable-line no-unused-vars
        opts = _props2.opts;
        var rest = (0, _objectWithoutProperties3['default'])(_props2, ['className', 'network', 'url', 'opts']);


        return _react2['default'].createElement(_reactSocialIcons.SocialIcon, (0, _extends3['default'])({}, rest, {
          onClick: this.onClick,
          url: this.link(),
          network: network,
          className: (0, _classnames2['default'])(className, 'sm-share-button')
        }));
      }

      return render;
    }()
  }]);
  return ShareButton;
}(_react.Component);

ShareButton.propTypes = {
  className: _react.PropTypes.string,
  network: _react.PropTypes.oneOf(supportedNetworks),
  url: _react.PropTypes.string.isRequired,
  opts: _react.PropTypes.object
};
exports['default'] = ShareButton;