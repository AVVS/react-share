import React from 'react';
import { ShareButton, ShareCounts } from 'react-share';

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
} = ShareCounts;

function Demo() {
  const shareUrl = 'http://github.com';
  const title = 'GitHub';

  return (
    <div className="Demo__container">
      <div className="Demo__some-network">
        <ShareButton
          url={shareUrl}
          opts={{ title }}
          network="facebook"
          className="Demo__some-network__share-button"
        />

        <FacebookShareCount
          url={shareUrl}
          className="Demo__some-network__share-count"
        >
          {count => count}
        </FacebookShareCount>
      </div>

      <div className="Demo__some-network">
        <ShareButton
          url={shareUrl}
          opts={{ text: title }}
          network="twitter"
          className="Demo__some-network__share-button"
        />

        <div className="Demo__some-network__share-count">
          &nbsp;
        </div>
      </div>

      <div className="Demo__some-network">
        <ShareButton
          url={shareUrl}
          network="google"
          className="Demo__some-network__share-button"
        />

        <GooglePlusShareCount
          url={shareUrl}
          className="Demo__some-network__share-count"
        >
          {count => count}
        </GooglePlusShareCount>
      </div>

      <div className="Demo__some-network">
        <ShareButton
          url={shareUrl}
          opts={{ title }}
          network="linkedin"
          className="Demo__some-network__share-button"
        />

        <LinkedinShareCount
          url={shareUrl}
          className="Demo__some-network__share-count"
        >
          {count => count}
        </LinkedinShareCount>
      </div>
    </div>
  );
}

export default Demo;
