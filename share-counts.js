'use strict';

exports.__esModule = true;
exports.TwitterShareCount = exports.PinterestShareCount = exports.GooglePlusShareCount = exports.LinkedinShareCount = exports.FacebookShareCount = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shareCountGetters = require('./share-count-getters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaShareCount = function (_Component) {
  (0, _inherits3.default)(SocialMediaShareCount, _Component);

  function SocialMediaShareCount(props) {
    (0, _classCallCheck3.default)(this, SocialMediaShareCount);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = { count: 0, isLoading: false };

    if (props.getCount) {
      _this.state.isLoading = _this.loadCounter();
    }
    return _this;
  }

  SocialMediaShareCount.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.state.isLoading === 'function') {
      // cancel request
      this.state.isLoading();
    }
  };

  SocialMediaShareCount.prototype.loadCounter = function loadCounter() {
    var _this2 = this;

    this.props.getCount(this.props.url, function (count) {
      _this2.setState({
        count: count,
        isLoading: false
      });
    });
  };

  SocialMediaShareCount.prototype.render = function render() {
    var _state = this.state;
    var count = _state.count;
    var isLoading = _state.isLoading;
    // eslint-disable-next-line no-unused-vars

    var _props = this.props;
    var children = _props.children;
    var getCount = _props.getCount;
    var url = _props.url;
    var rest = (0, _objectWithoutProperties3.default)(_props, ['children', 'getCount', 'url']);

    var className = (0, _classnames2.default)('sm-share-count', this.props.className);

    var render = children || function renderCount(shareCount) {
      return shareCount;
    };

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, rest, { className: className }),
      !isLoading && render(count || 0)
    );
  };

  return SocialMediaShareCount;
}(_react.Component); /* eslint-disable react/no-multi-comp */


function shareCountFactory(getCount) {
  return function Counter(props) {
    return _react2.default.createElement(SocialMediaShareCount, (0, _extends3.default)({ getCount: getCount }, props));
  };
}

var FacebookShareCount = exports.FacebookShareCount = shareCountFactory(_shareCountGetters.getFacebookShareCount);
var LinkedinShareCount = exports.LinkedinShareCount = shareCountFactory(_shareCountGetters.getLinkedinShareCount);
var GooglePlusShareCount = exports.GooglePlusShareCount = shareCountFactory(_shareCountGetters.getGooglePlusShareCount);
var PinterestShareCount = exports.PinterestShareCount = shareCountFactory(_shareCountGetters.getPinterestShareCount);
var TwitterShareCount = exports.TwitterShareCount = function TwitterShareCount() {
  throw new Error('TwitterShareCount was removed in version 1.3.0 because' + 'the Twitter API was shut down and there is no replacement. Please ' + 'remove it from your code.');
};