'use strict';

exports.__esModule = true;
exports.email = email;
exports.twitter = twitter;
exports.facebook = facebook;
exports.google = google;
exports.linkedin = linkedin;
exports.pinterest = pinterest;
exports.vk = vk;

var _utils = require('./utils');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// email link
/* eslint-disable prefer-template */
function email(subject, body) {
  (0, _assert2.default)(subject, 'email.subject');
  (0, _assert2.default)(body, 'email.body');
  return 'mailto:' + (0, _utils.objectToGetParams)({ subject: subject, body: body });
}

// twitter link
function twitter(url, _ref) {
  var text = _ref.text;
  var via = _ref.via;
  var _ref$hashtags = _ref.hashtags;
  var hashtags = _ref$hashtags === undefined ? [] : _ref$hashtags;

  (0, _assert2.default)(url, 'twitter.url');
  (0, _assert2.default)(text, 'twitter.text');
  (0, _assert2.default)(Array.isArray(hashtags), 'twitter.hashtags is not an array');

  return 'https://twitter.com/share' + (0, _utils.objectToGetParams)({
    url: url,
    text: text,
    via: via,
    hashtags: hashtags.join(',')
  });
}

function facebook(url) {
  (0, _assert2.default)(url, 'facebook.url');

  return 'https://facebook.com/sharer.php' + (0, _utils.objectToGetParams)({ u: url });
}

function google(url) {
  (0, _assert2.default)(url, 'google.url');

  return 'https://plus.google.com/share' + (0, _utils.objectToGetParams)({ url: url });
}

function linkedin(url, _ref2) {
  var title = _ref2.title;

  (0, _assert2.default)(url, 'linkedin.url');
  (0, _assert2.default)(title, 'linkedin.title');

  return 'https://linkedin.com/shareArticle' + (0, _utils.objectToGetParams)({ url: url, title: title });
}

function pinterest(url, _ref3) {
  var media = _ref3.media;

  (0, _assert2.default)(url, 'pinterest.url');
  (0, _assert2.default)(media, 'pinterest.media');

  return 'https://pinterest.com/pin/create/button/' + (0, _utils.objectToGetParams)({
    url: url,
    media: media
  });
}

function vk(url) {
  (0, _assert2.default)(url, 'vk.url');

  return 'https://vk.com/share.php' + (0, _utils.objectToGetParams)({ url: url });
}