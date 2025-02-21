import React from "react";
import styles from "./SocialShareButtons.module.css";

const SocialShareButtons = ({ url, title }) => {
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <div className={styles.socialButtons}>
      <button onClick={shareOnTwitter}>Share on Twitter</button>
      <button onClick={shareOnFacebook}>Share on Facebook</button>
    </div>
  );
};

export default SocialShareButtons;
