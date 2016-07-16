/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import cx from 'classnames';

import {
  getFacebookShareCount,
  getGooglePlusShareCount,
  getLinkedinShareCount,
  getPinterestShareCount,
} from './share-count-getters';

class SocialMediaShareCount extends Component {
  static propTypes = {
    children: React.PropTypes.func,
    className: React.PropTypes.string,
    getCount: React.PropTypes.func,
    url: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { count: 0, isLoading: false };

    if (props.getCount) {
      this.state.isLoading = this.loadCounter();
    }
  }

  componentWillUnmount() {
    if (typeof this.state.isLoading === 'function') {
      // cancel request
      this.state.isLoading();
    }
  }

  loadCounter() {
    this.props.getCount(this.props.url, count => {
      this.setState({
        count,
        isLoading: false,
      });
    });
  }

  render() {
    const { count, isLoading } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { children, getCount, url, ...rest } = this.props;
    const className = cx('sm-share-count', this.props.className);

    const render = children || function renderCount(shareCount) {
      return shareCount;
    };

    return (
      <div {...rest} className={className}>
        {!isLoading && render(count || 0)}
      </div>
    );
  }
}

function shareCountFactory(getCount) {
  return function Counter(props) {
    return <SocialMediaShareCount getCount={getCount} {...props} />;
  };
}

export const FacebookShareCount = shareCountFactory(getFacebookShareCount);
export const LinkedinShareCount = shareCountFactory(getLinkedinShareCount);
export const GooglePlusShareCount = shareCountFactory(getGooglePlusShareCount);
export const PinterestShareCount = shareCountFactory(getPinterestShareCount);
export const TwitterShareCount = () => {
  throw new Error('TwitterShareCount was removed in version 1.3.0 because' +
    'the Twitter API was shut down and there is no replacement. Please ' +
    'remove it from your code.');
};
