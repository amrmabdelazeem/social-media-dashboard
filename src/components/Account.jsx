import React from "react";

export default function Account({src, title, followerNum, postTitle,arrow, progress}) {
  return (
    <div className="account-layer">
      <div className="info">
        <img src={src} alt="social-media-icon" />
        <p>{title}</p>
      </div>
      <h2>{followerNum}</h2>
      <p>{postTitle}</p>
      <div className="progress">
        <img src={arrow} alt="progress-icon" />
        <p>{progress}</p>
      </div>
    </div>
  );
}
