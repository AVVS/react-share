import React, { Component, PropTypes } from 'react';
import { SocialIcon } from 'react-social-icons';
import cx from 'classnames';
import * as links from './social-media-share-links';
import { windowOpen } from './utils';

// separate email & networks
const supportedNetworks = Object.keys(links);

export default class ShareButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    network: PropTypes.oneOf(supportedNetworks),
    url: PropTypes.string.isRequired,
    opts: PropTypes.object
  };

  get link() {
    const { url, opts, network } = this.props;
    return supportedNetworks[network](url, opts);
  }

  onClick = (e) => {
    e.preventDefault();
    windowOpen(this.link);
    return false;
  }

  render() {
    const {
      className,
      network,
      url, // eslint-disable-line no-unused-vars
      opts, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    return (
      <SocialIcon {...rest}
        onClick={this.onClick}
        url={this.link}
        network={network}
        className={cx(className, 'sm-share-button')}
      />
    );
  }
}

