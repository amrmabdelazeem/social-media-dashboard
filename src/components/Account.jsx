import React, { useState } from "react";

export default function Account({
  src,
  title,
  followerNum,
  postTitle,
  arrow,
  progress,
  style,
  addBorder,
}) {
  const [isUp, setIsUp] = useState(true);
  function checkState(){
    if(title==="@Nathan F."){
        setIsUp(!isUp);
      }
  }

  return (
    <div className="card" style={style} id={addBorder}>
      <div className="info">
        <img src={src} alt="social-media-icon" />
        <p>{title}</p>
      </div>
      <h2>{followerNum}</h2>
      <p>{postTitle}</p>
      <div className="progress" onLoad={checkState}>
        <img src={arrow} alt="progress-icon" />
        <p
          style={{ color: isUp ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)" }}
        >
          {progress}
        </p>
      </div>
    </div>
  );
}
