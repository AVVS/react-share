import React from 'react';
import { ShareButton, ShareCounts } from 'react-share'; // eslint-disable-line import/no-unresolved
import exampleImage from './react-share-pin-example.png';

const { PinterestShareCount } = ShareCounts;

function Demo() {
  const shareUrl = String(window.location);
  const media = `${shareUrl}/${exampleImage}`;

  return (
    <div className="Demo__container">
      <div className="Demo__some-network">
        <ShareButton
          url={shareUrl}
          opts={{ media }}
          network="pinterest"
          className="Demo__some-network__share-button"
        />

        <PinterestShareCount
          url={shareUrl}
          className="Demo__some-network__share-count"
        />
      </div>
    </div>
  );
}

export default Demo;
